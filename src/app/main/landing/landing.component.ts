import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  isShow = true;

  constructor(private router: Router) {
    setTimeout(() => {
      this.isShow = false;
      void this.router.navigate(['/home']);
    }, 3000);
  }
}
