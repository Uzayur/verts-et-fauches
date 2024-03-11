import { NgForOf, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from '~/app/primeng/primeng.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    ReactiveFormsModule,
    PrimengModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NgOptimizedImage,
    NgForOf,
  ],
  exports: [FormsModule, ReactiveFormsModule, FooterComponent],
})
export class SharedModule {}
