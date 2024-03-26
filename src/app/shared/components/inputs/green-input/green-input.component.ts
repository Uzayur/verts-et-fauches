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
  @Input() inputTitle!: string | null;
  @Input() icon!: string | null;
  @Input({ required: true }) formControlName!: string;
  @Input({ required: true }) formControl!: FormControl;
  @Input() error!: string | null;
  @Input() isSubmitted = false;

  public value!: string;

  onChange: (value: any) => void = () => {
    /*no-op*/
  };
  onTouched: () => void = () => {
    /*no-op*/
  };

  onFocus(): void {
    this.onTouched();
  }
  onBlur(): void {
    this.onTouched();
  }

  /**
   * Writes a new value to the input.
   * @param {string} value  - The new value (string).
   * @returns {void}
   */
  writeValue(value: string): void {
    this.value = value;
  }

  /**
   * Registers a callback for value changes.
   * @param {void} fn - The callback function (value: any) => void.
   * @returns {void}
   */
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback for touch events.
   * @param {void} fn - The callback function () => void.
   * @returns {void}
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onFormError(message: string | null): void {
    this.error = message;
  }
}
