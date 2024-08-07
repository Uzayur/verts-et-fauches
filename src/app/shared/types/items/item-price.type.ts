import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';

export type TravelInfo = {
  country: string;
  city: string;
  station: string;
  time: string;
};

export type ItemPriceTrip = {
  date: string;
  transport: string | PriceTransportFilters;
  carbonFootprint: number;
  price: number;
  departureInfo: TravelInfo;
  arrivalInfo: TravelInfo;
};

export type ItemPrice = {
  date: string;
  items: ItemPriceTrip[];
};
