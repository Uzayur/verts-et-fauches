import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PriceService } from '~/app/main/services/price/price.service';
import { paymentDate } from '~/app/shared/const/regex/payment-date.regex';
import { PriceSortFilters } from '~/app/shared/types/enum/price/price-sort-filters.enum';
import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  selectedTrip$: Observable<ItemPriceTrip | null>;
  travelers$: Observable<number>;

  priceTransportFilters = PriceTransportFilters;
  priceSortFilters = PriceSortFilters;

  paymentForm!: FormGroup;

  constructor(
    private priceService: PriceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.selectedTrip$ = this.priceService.selectedTrip$;
    this.travelers$ = this.priceService.travelers$;
  }

  public get visa(): FormGroup {
    return this.paymentForm.get('visa') as FormGroup;
  }

  public get visaName(): FormControl {
    return this.paymentForm.get('visa')?.get('name') as FormControl;
  }

  public get visaCardNumber(): FormControl {
    return this.paymentForm.get('visa')?.get('cardNumber') as FormControl;
  }

  public get visaExpirationDate(): FormControl {
    return this.paymentForm.get('visa')?.get('expirationDate') as FormControl;
  }

  public get visaSecurityCode(): FormControl {
    return this.paymentForm.get('visa')?.get('securityCode') as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.paymentForm = this.formBuilder.group({
      paypal: this.formBuilder.group({}),
      visa: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(25),
          ],
        ],
        cardNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
          ],
        ],
        expirationDate: [
          '',
          [Validators.required, Validators.pattern(paymentDate)],
        ],
        securityCode: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(3),
          ],
        ],
      }),
    });
  }

  cancelPayment(): void {
    this.location.back();
    this.priceService.clear();
  }

  confirmPayment(): void {
    void this.router.navigate(['price/confirm-payment']);
  }
}
