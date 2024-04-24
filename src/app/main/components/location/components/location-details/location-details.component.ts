import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TravelService } from '~/app/main/services/travel/travel.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css',
})
export class LocationDetailsComponent {
  isOpen$: Observable<boolean>;

  constructor(
    private travelService: TravelService,
    private router: Router
  ) {
    this.isOpen$ = this.travelService.isOpen$;
  }

  onClickInformation(): void {
    void this.router.navigate(['/location/info']);
  }

  closeModal(): void {
    this.travelService.close();
  }
}
