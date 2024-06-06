import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { TravelInfo } from '~/app/shared/types/items/item-price.type';

export type BasicActivity = {
  name: string;
  price: string;
  transport: TransportEnum;
  description: string;
};

export type TransportActivity = {
  name: string;
  transport: TransportEnum;
  departure: TravelInfo;
  arrival: TravelInfo;
};

export type DailyProgram = {
  transportActivity: TransportActivity;
  basicActivities: BasicActivity[];
  carbonFootprint: number;
};
