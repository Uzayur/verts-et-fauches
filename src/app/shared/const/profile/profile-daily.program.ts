import { TravelStatus } from '~/app/shared/types/enum/settings/travel-status.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { ProfileDailyProgram } from '~/app/shared/types/items/profile/profile-daily-program.type';

export const profileDailyProgram: ProfileDailyProgram[] = [
  {
    transportActivity: {
      status: TravelStatus.NONE,
      name: 'Départ de Paris',
      transport: TransportEnum.TRAIN,
      departure: {
        country: 'France',
        city: 'Paris',
        station: 'Gare de Paris-Est',
        time: '29 janvier 2024 à 07:56',
      },
      arrival: {
        country: 'Italie',
        city: 'Florence',
        station: 'Gare de Florence',
        time: '29 janvier 2024 à 10:18',
      },
    },
    basicActivities: [
      {
        status: TravelStatus.NONE,
        name: 'Musée de Florence',
        price: '€',
        transport: TransportEnum.HIKE,
        description:
          "Commence ta journée en plongeant dans l'histoire de Florence au Musée de Florence. Explore les différentes salles qui retracent la ville à travers les siècles, des moments marquants de son passé aux chefs-d'œuvre artistiques.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Galleria degli Uffizi',
        price: '€',
        transport: TransportEnum.BUS,
        description:
          "Ensuite, dirige-toi vers la Galleria degli Uffizi, l'un des musées d'art les plus célèbres au monde. Admire les œuvres de grands artistes de la Renaissance, tels que Botticelli, Michel-Ange et Léonard de Vinci.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Piazza della Signoria',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Après le musée, promène-toi sur la Piazza della Signoria. Explore la place, entourée de sculptures fascinantes, dont une réplique du David de Michel-Ange. Profitez de l'atmosphère animée et des cafés pittoresques.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Palazzo Vecchio',
        price: '€',
        transport: TransportEnum.HIKE,
        description:
          'Visitez le Palazzo Vecchio, le siège du gouvernement florentin depuis des siècles. Découvrez les salles richement décorées, y compris la célèbre Salone dei Cinquecento.',
      },
      {
        status: TravelStatus.NONE,
        name: 'Osteria del Cinghiale Bianco',
        price: '€€',
        transport: TransportEnum.BUS,
        description:
          "Terminez la première journée avec un dîner à l'Osteria del Cinghiale Bianco, un restaurant traditionnel florentin réputé pour sa cuisine toscane authentique.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Hotel Loggiato dei Serviti',
        price: '€€',
        transport: TransportEnum.BUS,
        description:
          "Réservez une chambre à l'Hotel Loggiato dei Serviti pour ta première nuit à Florence. Situé dans le centre historique, cet hôtel offre un cadre charmant et confortable pour une bonne nuit de repos.",
      },
    ],
    carbonFootprint: 27.2,
  },
  {
    transportActivity: {
      status: TravelStatus.NONE,
      name: 'Départ de Florence',
      transport: TransportEnum.TRAIN,
      departure: {
        country: 'Italie',
        city: 'Florence',
        station: 'Gare de Florence',
        time: '30 janvier 2024 à 08:00',
      },
      arrival: {
        country: 'Italie',
        city: 'Rome',
        station: 'Gare de Rome-Termini',
        time: '30 janvier 2024 à 10:30',
      },
    },
    basicActivities: [
      {
        status: TravelStatus.NONE,
        name: 'Colisée',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Commence ta journée en visitant le Colisée, l'un des monuments les plus emblématiques de Rome. Explore les arènes et imagine les gladiateurs combattant dans ce lieu historique.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Forum Romain',
        price: '€',
        transport: TransportEnum.HIKE,
        description:
          "Ensuite, visite le Forum Romain, le centre de la vie publique dans la Rome antique. Admire les ruines et apprends-en plus sur l'histoire de la ville.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Fontaine de Trevi',
        price: 'Gratuit',
        transport: TransportEnum.HIKE,
        description:
          "Fais un vœu en jetant une pièce dans la célèbre Fontaine de Trevi. Profite de l'architecture baroque et de l'atmosphère romantique.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Musées du Vatican',
        price: '€€',
        transport: TransportEnum.BUS,
        description:
          "Visite les Musées du Vatican et découvre une vaste collection d'art et d'antiquités, y compris la chapelle Sixtine et ses fresques impressionnantes.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Trastevere',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          'Termine ta journée dans le quartier de Trastevere, connu pour ses ruelles pittoresques et ses restaurants traditionnels. Savoure un dîner typiquement romain.',
      },
      {
        status: TravelStatus.NONE,
        name: 'Hotel Quirinale',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Passe la nuit à l'Hotel Quirinale, un hôtel élégant situé à proximité des principales attractions de Rome.",
      },
    ],
    carbonFootprint: 31.6,
  },
  {
    transportActivity: {
      status: TravelStatus.NONE,
      name: 'Départ de Rome',
      transport: TransportEnum.VAN,
      departure: {
        country: 'Italie',
        city: 'Rome',
        station: 'Gare de Rome-Termini',
        time: '31 janvier 2024 à 09:00',
      },
      arrival: {
        country: 'Italie',
        city: 'Naples',
        station: 'Gare de Naples-Centrale',
        time: '31 janvier 2024 à 10:15',
      },
    },
    basicActivities: [
      {
        status: TravelStatus.NONE,
        name: 'Pompei',
        price: '€€',
        transport: TransportEnum.TRAIN,
        description:
          "Commence ta journée par une visite de Pompei, l'ancienne ville romaine ensevelie par l'éruption du Vésuve en 79 après J.-C. Explore les ruines et découvre la vie quotidienne des habitants de l'époque.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Musée Archéologique National de Naples',
        price: '€€',
        transport: TransportEnum.BUS,
        description:
          "Visite le Musée Archéologique National de Naples pour admirer une riche collection d'objets antiques provenant de Pompei et d'autres sites archéologiques.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Spaccanapoli',
        price: 'Gratuit',
        transport: TransportEnum.BIKE,
        description:
          "Promène-toi dans Spaccanapoli, une des rues les plus célèbres de Naples. Profite de l'atmosphère animée et découvre des boutiques, des cafés et des églises historiques.",
      },
      {
        status: TravelStatus.NONE,
        name: "Castel dell'Ovo",
        price: 'Gratuit',
        transport: TransportEnum.HIKE,
        description:
          "Visite le Castel dell'Ovo, le plus ancien château de Naples. Profite de la vue panoramique sur la baie de Naples depuis les remparts.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Pizzeria Da Michele',
        price: '€',
        transport: TransportEnum.HIKE,
        description:
          "Déguste une pizza napolitaine traditionnelle à la Pizzeria Da Michele, réputée pour être l'une des meilleures pizzerias de Naples.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Hotel Palazzo Caracciolo',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Passe la nuit à l'Hotel Palazzo Caracciolo, un hôtel historique offrant un cadre élégant et confortable.",
      },
    ],
    carbonFootprint: 65.3,
  },
  {
    transportActivity: {
      status: TravelStatus.NONE,
      name: 'Départ de Naples',
      transport: TransportEnum.BUS,
      departure: {
        country: 'Italie',
        city: 'Naples',
        station: 'Gare de Naples-Centrale',
        time: '1 février 2024 à 08:30',
      },
      arrival: {
        country: 'Italie',
        city: 'Milan',
        station: 'Gare de Milan-Centrale',
        time: '1 février 2024 à 11:45',
      },
    },
    basicActivities: [
      {
        status: TravelStatus.NONE,
        name: 'Duomo di Milano',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          'Commence ta journée en visitant le Duomo di Milano, la célèbre cathédrale de Milan. Monte sur le toit pour une vue imprenable sur la ville.',
      },
      {
        status: TravelStatus.NONE,
        name: 'Galleria Vittorio Emanuele II',
        price: 'Gratuit',
        transport: TransportEnum.BIKE,
        description:
          "Fais du shopping dans la Galleria Vittorio Emanuele II, l'une des plus anciennes galeries marchandes au monde, abritant des boutiques de luxe et des cafés élégants.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Théâtre de la Scala',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Visite le Théâtre de la Scala, l'un des opéras les plus célèbres au monde. Découvre son musée et son histoire riche.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Château des Sforza',
        price: '€',
        transport: TransportEnum.HIKE,
        description:
          "Explore le Château des Sforza, une forteresse historique abritant plusieurs musées et collections d'art.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Navigli',
        price: '€€',
        transport: TransportEnum.HIKE,
        description:
          "Termine ta journée dans le quartier des Navigli, connu pour ses canaux pittoresques et ses nombreux bars et restaurants. Savoure un dîner au bord de l'eau.",
      },
      {
        status: TravelStatus.NONE,
        name: 'Hotel Spadari al Duomo',
        price: '€€',
        transport: TransportEnum.BUS,
        description:
          "Passe la nuit à l'Hotel Spadari al Duomo, situé à proximité du Duomo di Milano, offrant un cadre moderne et confortable.",
      },
    ],
    carbonFootprint: 19.9,
  },
];
