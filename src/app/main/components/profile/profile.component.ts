import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { visitedContinents } from '~/app/shared/const/profile/visited-continents.const';
import { visitedCountries } from '~/app/shared/const/profile/visited-countries.const';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  visitedCountries = visitedCountries;
  visitedContinents = visitedContinents;

  constructor(private router: Router) {}

  onClickSettings(): void {
    void this.router.navigateByUrl('/profile/settings');
  }

  onClickMyTravel(): void {
    void this.router.navigateByUrl('/profile/travels');
  }

  getProgressColor(done: number, goal: number): string {
    const percentage = (done / goal) * 100;

    switch (true) {
      case percentage < 33:
        return '#4F5358';
      case percentage < 66:
        return '#00579F';
      default:
        return '#447B5D';
    }
  }

  shareChartMap(): void {
    console.log('shareChartMap');
  }
}
