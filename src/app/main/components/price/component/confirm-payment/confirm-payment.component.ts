import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PriceService } from '~/app/main/services/price/price.service';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrl: './confirm-payment.component.css',
})
export class ConfirmPaymentComponent {
  selectedTrip$: Observable<ItemPriceTrip | null>;
  travelers$: Observable<number | null>;

  constructor(
    private priceService: PriceService,
    private router: Router
  ) {
    this.selectedTrip$ = this.priceService.selectedTrip$;
    this.travelers$ = this.priceService.travelers$;
  }

  goHome(): void {
    void this.router.navigate(['/home']);
  }

  onClickTricount(): void {
    window.open('https://www.tricount.com/fr/');
  }

  onClickGreenTripper(): void {
    window.open('https://greentripper.org/');
  }
}
