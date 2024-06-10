import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { CarbonFootprintProgram } from '~/app/shared/types/items/profile/carbon-footprint-program.type';

export const carbonFootprintProgram: CarbonFootprintProgram = {
  city: ['Florence', 'Pise'],
  carbonFootprint: 86.26,
  carboonFootprintSaved: 30.93,
  dailyProgram: {
    carbonFootprint: 17.26,
    carbonFootprintSaved: 19.93,
    transportActivity: {
      departureCity: 'Paris',
      arrivalCity: 'Florence',
      type: 'Transport',
      duration: '2h45',
      carbonFootprint: 1.06,
      carbonFootprintSaved: 57.65,
      transport: TransportEnum.TRAIN,
    },
    basicActivities: [
      {
        name: 'Pizza della Signoria',
        restaurantType: 'Pizzeria',
        type: 'Restaurant',
        carbonFootprint: 1.31,
        carbonFootprintSaved: 3.78,
      },
      {
        name: 'Osteria del Cinghiale Bianco',
        restaurantType: 'Cuisine Toscane',
        type: 'Restaurant',
        carbonFootprint: 2.42,
        carbonFootprintSaved: 2.67,
      },
      {
        name: 'Hotel Loggiato dei Serviti',
        type: 'Hôtel',
        carbonFootprint: 11.81,
        carbonFootprintSaved: 1.37,
      },
    ],
  },
};
