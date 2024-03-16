import { FormGroupDirective } from '@angular/forms';
import { FormErrorDirective } from 'src/app/shared/directives/form-error/form-error.directive';

describe('FormErrorDirective', () => {
  it('should create an instance', () => {
    const directive = new FormErrorDirective({} as FormGroupDirective);
    expect(directive).toBeTruthy();
  });
});
