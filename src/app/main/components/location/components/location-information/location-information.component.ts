import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { travelComments } from '~/app/shared/const/travel/travel-comments.const';

@Component({
  selector: 'app-location-information',
  templateUrl: './location-information.component.html',
  styleUrl: './location-information.component.css',
})
export class LocationInformationComponent {
  travelComments = travelComments;

  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['/location']);
  }
}
