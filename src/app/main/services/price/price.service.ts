import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  selectedTrip$: Observable<ItemPriceTrip | null>;
  travelers$: Observable<number>;
  isOpen$: Observable<boolean>;

  private selectedTripSubject = new BehaviorSubject<ItemPriceTrip | null>({
    date: '29 juin 2024',
    transport: PriceTransportFilters.TRAIN,
    carbonImpact: 0.72,
    price: 68,
    departureInfo: {
      country: 'France',
      city: 'Paris',
      station: 'Gare de Paris-Nord',
      time: '09:34',
    },
    arrivalInfo: {
      country: 'Belgique',
      city: 'Bruxelles',
      station: 'Gare de Bruxelles-Midi',
      time: '11:07',
    },
  });
  private traverlersSubject = new BehaviorSubject<number>(1);
  private isOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.selectedTrip$ = this.selectedTripSubject.asObservable();
    this.travelers$ = this.traverlersSubject.asObservable();
    this.isOpen$ = this.isOpenSubject.asObservable();
  }

  public get selectedTrip(): ItemPriceTrip | null {
    return this.selectedTripSubject.value;
  }

  open(item: ItemPriceTrip): void {
    this.selectedTripSubject.next(item);
    this.isOpenSubject.next(true);
  }

  close(): void {
    this.traverlersSubject.next(1);
    this.isOpenSubject.next(false);
  }

  clear(): void {
    this.selectedTripSubject.next(null);
  }

  increaseTravelers(): void {
    this.traverlersSubject.next(this.traverlersSubject.value + 1);
  }

  decreaseTravelers(): void {
    const previousvalue = this.traverlersSubject.value;
    this.traverlersSubject.next(
      previousvalue > 1 ? previousvalue - 1 : previousvalue
    );
  }
}
