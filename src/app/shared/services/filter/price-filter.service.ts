import { Injectable } from '@angular/core';
import { PriceSortFilters } from '~/app/shared/types/enum/price/price-sort-filters.enum';
import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Injectable({
  providedIn: 'root',
})
export class PriceFilterService {
  constructor() {}

  searchByPriceFilters(
    items: ItemPriceTrip[],
    sortFilter: PriceSortFilters | null,
    transportFilter: PriceTransportFilters | null
  ): ItemPriceTrip[] {
    console.log(transportFilter);
    if (transportFilter)
      items = items.filter(item => item.transport === transportFilter);

    if (sortFilter === PriceSortFilters.SHORTEST) {
      items.sort(
        (a, b) =>
          this.calculateTimeDifference(
            a.departureInfo.time,
            a.arrivalInfo.time
          ) -
          this.calculateTimeDifference(b.departureInfo.time, b.arrivalInfo.time)
      );
    } else {
      items.sort((a, b) => a.price - b.price);
    }
    return items;
  }

  searchByDate(itemDate: string, date: Date): boolean {
    return itemDate.startsWith(('0' + date.getDate()).slice(-2));
  }

  private calculateTimeDifference(
    departureTime: string,
    arrivalTime: string
  ): number {
    const departureDate = new Date(`2000-01-01T${departureTime}:00`);
    const arrivalDate = new Date(`2000-01-01T${arrivalTime}:00`);
    return arrivalDate.getTime() - departureDate.getTime();
  }
}
