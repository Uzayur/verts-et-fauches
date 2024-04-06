/* eslint-disable max-lines */
import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemPrice } from '~/app/shared/types/items/item-price.type';

export const itemsPrice: ItemPrice[] = [
  {
    date: '29 juin 2024',
    items: [
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
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
        transport: PriceTransportFilters.BIKE,
        carbonImpact: 0,
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
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
        price: 68,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '09:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '11:07',
        },
      },
      {
        transport: PriceTransportFilters.BUS,
        carbonImpact: 6.43,
        price: 23,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '12:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '17:02',
        },
      },
      {
        transport: 'van',
        carbonImpact: 80.02,
        price: 12,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '16:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '21:56',
        },
      },
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.71,
        price: 76,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '18:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '20:07',
        },
      },

      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
        price: 38,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '07:54',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '06:21',
        },
      },
      {
        transport: PriceTransportFilters.BIKE,
        carbonImpact: 0,
        price: 0,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '21:34',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '06:25',
        },
      },
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
        price: 59,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '11:07',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '09:34',
        },
      },
      {
        transport: PriceTransportFilters.BUS,
        carbonImpact: 6.43,
        price: 26,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '17:02',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '12:34',
        },
      },
      {
        transport: 'van',
        carbonImpact: 75.02,
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
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.76,
        price: 73,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '20:07',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '18:34',
        },
      },
    ],
  },
  {
    date: '30 juin 2024',
    items: [
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
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
        transport: PriceTransportFilters.BIKE,
        carbonImpact: 0,
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
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
        price: 68,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '09:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '11:07',
        },
      },
      {
        transport: PriceTransportFilters.BUS,
        carbonImpact: 6.43,
        price: 23,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '12:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '17:02',
        },
      },
      {
        transport: 'van',
        carbonImpact: 80.02,
        price: 12,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '16:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '21:56',
        },
      },
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.71,
        price: 76,
        departureInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '18:34',
        },
        arrivalInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '20:07',
        },
      },

      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.72,
        price: 38,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '07:54',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '06:21',
        },
      },
      {
        transport: PriceTransportFilters.BIKE,
        carbonImpact: 0,
        price: 0,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '21:34',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '06:25',
        },
      },
      {
        transport: PriceTransportFilters.BUS,
        carbonImpact: 6.43,
        price: 26,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '17:02',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '12:34',
        },
      },
      {
        transport: 'van',
        carbonImpact: 75.02,
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
      {
        transport: PriceTransportFilters.TRAIN,
        carbonImpact: 0.76,
        price: 73,
        arrivalInfo: {
          country: 'France',
          city: 'Paris',
          station: 'Gare de Paris-Nord',
          time: '20:04',
        },
        departureInfo: {
          country: 'Belgique',
          city: 'Bruxelles',
          station: 'Gare de Bruxelles-Midi',
          time: '18:37',
        },
      },
    ],
  },
];
