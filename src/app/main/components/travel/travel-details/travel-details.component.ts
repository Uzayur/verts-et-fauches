import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dailyPrograms } from '~/app/shared/const/travel/daily-program.const';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.css',
})
export class TravelDetailsComponent {
  tabs = [
    { title: 'Jour 1', index: 0 },
    { title: 'Jour 2', index: 1 },
    { title: 'Jour 3', index: 2 },
    { title: 'Jour 4', index: 3 },
  ];

  protected readonly dailyPrograms = dailyPrograms;

  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['travel']);
  }
}
