import {
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgStyle,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormErrorDirective } from 'src/app/shared/directives/form-error/form-error.directive';
import { FooterComponent } from './components/footer/footer.component';
import { GreenInputComponent } from './components/inputs/green-input/green-input.component';
import { PrimengModule } from '~/app/primeng/primeng.module';

@NgModule({
  declarations: [FooterComponent, GreenInputComponent, FormErrorDirective],
  imports: [
    ReactiveFormsModule,
    ProgressSpinnerModule,
    PrimengModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgStyle,
    NgClass,
    InputGroupModule,
  ],
  exports: [
    ReactiveFormsModule,
    ProgressSpinnerModule,
    PrimengModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NgOptimizedImage,
    FooterComponent,
    GreenInputComponent,
    FormErrorDirective,
  ],
})
export class SharedModule {}
