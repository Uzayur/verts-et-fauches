import { TravelStatus } from '~/app/shared/types/enum/settings/travel-status.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { TravelInfo } from '~/app/shared/types/items/item-price.type';

export type ProfileBasicActivity = {
  name: string;
  price: string;
  transport: TransportEnum;
  description: string;
  status: TravelStatus;
};

export type ProfileTransportActivity = {
  name: string;
  transport: TransportEnum;
  departure: TravelInfo;
  arrival: TravelInfo;
  status: TravelStatus;
};

export type ProfileDailyProgram = {
  transportActivity: ProfileTransportActivity;
  basicActivities: ProfileBasicActivity[];
  carbonFootprint: number;
};
