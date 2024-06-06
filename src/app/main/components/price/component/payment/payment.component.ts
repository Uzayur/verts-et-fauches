import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PriceService } from '~/app/main/services/price/price.service';
import { paymentDate } from '~/app/shared/const/regex/payment-date.regex';
import { PaymentMethod } from '~/app/shared/types/enum/price/payment-method.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  selectedTrip$: Observable<ItemPriceTrip | null>;
  travelers$: Observable<number>;

  paymentForm!: FormGroup;

  paymentMethods = PaymentMethod;
  paymentMethod: PaymentMethod = PaymentMethod.VISA;

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

  public get paypal(): FormGroup {
    return this.paymentForm.get('paypal') as FormGroup;
  }

  public get paypalEmail(): FormControl {
    return this.paypal.get('email') as FormControl;
  }

  public get paypalPassword(): FormControl {
    return this.paypal.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.paymentForm = this.formBuilder.group({
      paypal: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      }),
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

  clickPaymentMethod(type: PaymentMethod): void {
    this.paymentMethod = type;
  }

  cancelPayment(): void {
    this.location.back();
    this.priceService.clear();
  }

  confirmPayment(): void {
    void this.router.navigate(['price/confirm-payment']);
  }
}
