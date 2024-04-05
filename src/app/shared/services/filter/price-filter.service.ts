import { Injectable } from '@angular/core';
import { PriceSortFilter } from '~/app/shared/types/enum/price/price-sort-filters.enum';
import { PriceTransportFilter } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';

@Injectable({
  providedIn: 'root',
})
export class PriceFilterService {
  constructor() {}

  searchByPriceFilters(
    items: ItemPriceTrip[],
    sortFilter: PriceSortFilter | null,
    transportFilter: TransportEnum | null
  ): ItemPriceTrip[] {
    if (transportFilter)
      items.filter(item => item.transport === transportFilter);

    if (sortFilter === PriceSortFilter.SHORTEST) {
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
