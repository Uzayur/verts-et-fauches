import { TransportEnum } from '~/app/shared/types/enum/transport.enum';

export type TravelInfo = {
  country: string;
  city: string;
  station: string;
  time: string;
};

export type ItemPriceTrip = {
  transport: TransportEnum;
  carbonImpact: number;
  price: number;
  departureInfo: TravelInfo;
  arrivalInfo: TravelInfo;
};

export type ItemPrice = {
  date: string;
  items: ItemPriceTrip[];
};
