import { TransportEnum } from '~/app/shared/types/enum/transport.enum';

export type CarbonFootprintTransportActivity = {
  departureCity: string;
  arrivalCity: string;
  type: string;
  duration: string;
  carbonFootprint: number;
  carbonFootprintSaved: number;
  transport: TransportEnum;
};

export type CarbonFootprintBasicActivity = {
  name: string;
  type: string;
  carbonFootprint: number;
  carbonFootprintSaved: number;
  restaurantType?: string;
};

export type CarbonFootprintDailyProgram = {
  transportActivity: CarbonFootprintTransportActivity;
  basicActivities: CarbonFootprintBasicActivity[];
  carbonFootprint: number;
  carbonFootprintSaved: number;
};

export type CarbonFootprintProgram = {
  city: string[];
  carbonFootprint: number;
  carboonFootprintSaved: number;
  dailyProgram: CarbonFootprintDailyProgram;
};
