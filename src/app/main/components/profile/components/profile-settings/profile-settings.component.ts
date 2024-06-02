import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css',
})
export class ProfileSettingsComponent {
  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['/profile']);
  }

  onClickLogout(): void {
    void this.router.navigate(['home']);
  }

  navigate(url: string): void {
    void this.router.navigate([url]);
  }

  openLonelyPlanetStore(): void {
    window.open('https://www.lonelyplanet.fr/catalogue');
  }
}
