import { PriceEnum } from '~/app/shared/types/enum/price.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';

export type Description = {
  title: string;
  content: string;
};

export type ItemInfo = {
  country: string;
  city: string;
  price: PriceEnum;
  distance: number;
  picture: string;
  transports: TransportEnum[];
  description: Description[];
};
