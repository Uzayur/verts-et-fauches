import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelService } from '~/app/main/services/travel/travel.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.css',
})
export class TravelDetailsComponent {
  isOpen$: Observable<boolean>;

  constructor(private travelService: TravelService) {
    this.isOpen$ = this.travelService.isOpen$;
  }

  onClickInformation(): void {}

  closeModal(): void {
    this.travelService.close();
  }
}
