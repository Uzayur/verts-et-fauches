import { TravelComment } from '~/app/shared/types/items/travel-comment.type';

export const travelComments: TravelComment[] = [
  {
    user: 'Laura Dean',
    date: '25/06/2024',
    grade: '4,5',
    isPremium: true,
    content:
      "Le Musée des Lumières à Lyon, incontournable pour les passionnés d'art et d'histoire, offre une célébration visuelle de l'ingéniosité de la ville à travers les âges.",
  },
  {
    user: 'Sammy Abel',
    date: '16/06/2024',
    isPremium: true,
    grade: '4,3',
    content:
      "Une célébration visuelle inoubliable vous attend au Musée des Lumières de Lyon, offrant un voyage captivant à travers l'histoire lumineuse unique de la ville.",
  },
  {
    user: 'John Smith',
    date: '10/05/2024',
    grade: '4,8',
    isPremium: false,
    content: 'Très bonne activité.',
  },
  {
    user: 'Emma Johnson',
    date: '18/04/2024',
    grade: '3,4',
    isPremium: false,
    content:
      "Je m'attendais à quelque chose de mieux... Mais agréable tout de même.",
  },
];
