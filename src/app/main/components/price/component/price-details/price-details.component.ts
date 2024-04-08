import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PriceService } from '~/app/main/services/price/price.service';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.css',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class PriceDetailsComponent {
  isOpen$: Observable<boolean>;
  travelers$: Observable<number>;

  selectedTrip$: Observable<ItemPriceTrip | null>;

  constructor(
    private priceService: PriceService,
    private router: Router
  ) {
    this.isOpen$ = this.priceService.isOpen;
    this.travelers$ = this.priceService.travelers;
    this.selectedTrip$ = this.priceService.selectedTrip;
  }

  goToPayment(): void {
    void this.router.navigate(['price/payment']);
  }

  increaseNumber(): void {
    this.priceService.increaseTravelers();
  }

  decreaseNumber(): void {
    this.priceService.decreaseTravelers();
  }

  closeModal(): void {
    this.priceService.close();
  }
}
