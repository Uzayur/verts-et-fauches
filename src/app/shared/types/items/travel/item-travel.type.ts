import { TravelTransportFilter } from '~/app/shared/types/enum/travel/travel-transport-filter.enum';

export type ItemTravel = {
  country: string;
  city: string[];
  picture: string;
  price: number;
  duration: number;
  durationType: string;
  carbonFootprint: number;
  carbonFootprintSaved: number;
  transports: string[] | TravelTransportFilter[];
};
