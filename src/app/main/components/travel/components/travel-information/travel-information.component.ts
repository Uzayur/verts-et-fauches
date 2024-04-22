import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { travelComments } from '~/app/shared/const/travel/travel-comments.const';

@Component({
  selector: 'app-travel-information',
  templateUrl: './travel-information.component.html',
  styleUrl: './travel-information.component.css',
})
export class TravelInformationComponent {
  travelComments = travelComments;

  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['/travel']);
  }
}
