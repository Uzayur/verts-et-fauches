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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from '~/app/primeng/primeng.module';

@NgModule({
  declarations: [FooterComponent],
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
  ],
})
export class SharedModule {}
