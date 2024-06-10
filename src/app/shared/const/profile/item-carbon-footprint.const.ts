import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemCarbonFootprint } from '~/app/shared/types/items/profile/item-carbon-footprint.type';

export const itemCarbonFootprint: ItemCarbonFootprint[] = [
  {
    date: '29 juin 2024',
    transport: PriceTransportFilters.TRAIN,
    carbonFootprint: 0.72,
    price: 57,
    departureInfo: {
      country: 'France',
      city: 'Paris',
      station: 'Gare de Paris-Nord',
      time: '06:21',
    },
    arrivalInfo: {
      country: 'Belgique',
      city: 'Bruxelles',
      station: 'Gare de Bruxelles-Midi',
      time: '07:54',
    },
  },
  {
    country: 'Italie',
    city: ['Florence', 'Pise'],
    picture: 'assets/travel/cities/florence.png',
    price: 190,
    duration: 4,
    durationType: 'jour',
    carbonFootprintSaved: 31.6,
    carbonFootprint: 50,
    transports: ['hike', 'bike', 'van'],
  },
  {
    date: '29 juin 2024',
    transport: PriceTransportFilters.BIKE,
    carbonFootprint: 0,
    price: 0,
    departureInfo: {
      country: 'France',
      city: 'Paris',
      station: 'Gare de Paris-Nord',
      time: '06:25',
    },
    arrivalInfo: {
      country: 'Belgique',
      city: 'Bruxelles',
      station: 'Gare de Bruxelles-Midi',
      time: '22:44',
    },
  },
  {
    date: '29 juin 2024',
    transport: 'van',
    carbonFootprint: 75.02,
    price: 12,
    arrivalInfo: {
      country: 'France',
      city: 'Paris',
      station: 'Gare de Paris-Nord',
      time: '21:56',
    },
    departureInfo: {
      country: 'Belgique',
      city: 'Bruxelles',
      station: 'Gare de Bruxelles-Midi',
      time: '16:34',
    },
  },
];
