import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appFormError]',
})
export class FormErrorDirective implements OnInit, OnChanges {
  @Input('appFormError') formControlName!: string;
  @Input() isSubmitted = false;

  @Output() formError: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();

  private control!: AbstractControl | null;
  private statusChangeSubscription!: Subscription;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.control = this.formGroupDirective.form.get(this.formControlName);
    if (this.control) {
      this.statusChangeSubscription = this.control.statusChanges.subscribe(
        () => {
          this.emitError();
        }
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSubmitted'].currentValue === true) {
      this.emitError();
    }
  }

  private emitError(): void {
    if (this.control) {
      if (this.isSubmitted || (this.control.touched && this.control.dirty)) {
        this.formError.emit(this.getErrorMessage(this.control));
      } else {
        this.formError.emit(null);
      }
    }
  }

  private getErrorMessage(control: AbstractControl): string | null {
    if (control.errors) {
      if (control.hasError('required')) {
        return 'Ce champ est requis.';
      }
      if (control.hasError('minlength')) {
        const requiredLength = control.getError('minlength').requiredLength;
        return `Doit contenir au moins ${requiredLength} caractères.`;
      }
      if (control.hasError('maxlength')) {
        const requiredLength = control.getError('maxlength').requiredLength;
        return `Ne peut pas contenir plus de ${requiredLength} caractères.`;
      }
      if (control.hasError('email')) {
        return 'Veuillez entrez une adresse mail valide.';
      }
      if (control.hasError('pattern')) {
        return 'Le format de ce champ est incorrect.';
      }
    }
    return null;
  }
}
