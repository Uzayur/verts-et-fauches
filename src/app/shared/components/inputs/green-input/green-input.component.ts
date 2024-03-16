import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'green-input',
  templateUrl: './green-input.component.html',
  styleUrl: './green-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GreenInputComponent),
      multi: true,
    },
  ],
})
export class GreenInputComponent {
  @Input() placeholder!: string | null;
  @Input() icon!: string | null;
  @Input({ required: true }) formControlName!: string;
  @Input({ required: true }) formControl!: FormControl;
  @Input() error!: string | null;
  @Input() isSubmitted = false;

  public value!: string;

  onFormError(message: string | null): void {
    this.error = message;
  }
}
