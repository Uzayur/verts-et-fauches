import { PriceEnum } from '~/app/shared/types/enum/price.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

export const trendItemsInfo: ItemInfo[] = [
  {
    country: 'Belgique',
    city: 'Bruxelles',
    price: PriceEnum.MEDIUM,
    picture:
      'https://media.istockphoto.com/id/1310078415/fr/photo/bruxelles-belgique.jpg?s=612x612&w=0&k=20&c=7A0v8oincEVOZONbxYZyJQwtxN_eOOT39XhCPpZeLkc=',
    distance: 338,
    transports: [TransportEnum.TRAIN, TransportEnum.VAN, TransportEnum.BIKE],
    description: [
      {
        title: 'Délices culinaires',
        content:
          "Bruxelles, joyau belge, vous invite à une expérience culinaire incomparable. Flânez dans les ruelles pavées pour découvrir des cafés et brasseries où l'on déguste les délices locaux tels que les moules-frites et les gaufres. Les marchés animés, comme le Marché du Midi, offrent une immersion totale dans les saveurs locales, faisant de Bruxelles un paradis pour les gourmands du monde entier.",
      },
      {
        title: 'Patrimoine architectural',
        content:
          "La Grand-Place, trésor classé par l'UNESCO, est le cœur historique où se mêlent le gothique et le baroque. Découvrez le charme du Manneken Pis et l'élégance du Sablon avec ses boutiques d'antiquités. Bruxelles séduit par son patrimoine architectural riche, créant une toile de fond fascinante pour les visiteurs.",
      },
      {
        title: 'Capitale européenne',
        content:
          "En tant que siège de l'Union Européenne, Bruxelles dévoile un visage moderne et international. Explorez les quartiers européens, tels que le Quartier Léopold, où se prennent les décisions majeures. Immergez-vous dans l'atmosphère dynamique de cette capitale, qui allie harmonieusement histoire, gastronomie et modernité européenne.",
      },
    ],
  },
  {
    country: 'Allemagne',
    city: 'Stuttgart',
    price: PriceEnum.MEDIUM,
    picture:
      'https://pyt-blogs.imgix.net/2020/06/3801987960_eb681a8c56_b.jpg?auto=format&ixlib=php-3.3.0',
    distance: 620,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS],
    description: [
      {
        title: 'Le charme de Stuttgart',
        content:
          "Stuttgart, située au cœur du sud de l'Allemagne, séduit par son charme pittoresque et son ambiance accueillante. Découvrez une ville riche en histoire, où l'ancien se mêle harmonieusement au moderne. Avec ses magnifiques parcs, ses musées de renommée mondiale et sa délicieuse cuisine, Stuttgart promet une expérience inoubliable pour les visiteurs de tous horizons.",
      },
      {
        title: 'Ville culturelle',
        content:
          "Stuttgart offre une expérience culturelle riche avec ses nombreux théâtres, galeries d'art et festivals annuels. Imprégnez-vous de l'atmosphère animée du centre-ville, où se trouvent des boutiques élégantes, des restaurants gastronomiques et des cafés pittoresques. Ne manquez pas de visiter les célèbres musées Mercedes-Benz et Porsche, qui retracent l'histoire de l'industrie automobile allemande.",
      },
      {
        title: 'Nature et détente',
        content:
          'Nichée au cœur de la Forêt Noire, Stuttgart est entourée de magnifiques paysages naturels propices à la randonnée, au vélo et aux activités de plein air. Explorez les vignobles pittoresques de la région, visitez les châteaux médiévaux perchés sur les collines et détendez-vous dans les stations thermales réputées pour leurs eaux curatives.',
      },
    ],
  },
  {
    country: 'Suède',
    city: 'Stockholm',
    price: PriceEnum.MEDIUM,
    picture:
      'https://cdn.kimkim.com/files/a/images/e415627d11e73c4392eb5a0637cac9e2c30663fc/original-d39ebacf1709a8b8f42da4fdf8e4d9fb.jpg',
    distance: 1872,
    transports: [TransportEnum.TRAIN, TransportEnum.VAN],
    description: [
      {
        title: 'La beauté de Stockholm',
        content:
          'Stockholm, la capitale scandinave, est un joyau architectural situé au bord de la mer Baltique. Explorez les ruelles pavées de la vieille ville, où les bâtiments colorés et les églises médiévales côtoient les boutiques branchées et les cafés animés. Avec ses nombreux musées, parcs verdoyants et îles pittoresques, Stockholm offre une expérience unique à chaque coin de rue.',
      },
      {
        title: 'Ville historique et moderne',
        content:
          "Plongez dans l'histoire fascinante de Stockholm en visitant le palais royal, la vieille ville de Gamla Stan et le musée Vasa, qui abrite un navire de guerre du XVIIe siècle parfaitement préservé. Découvrez également le côté moderne de la ville avec ses quartiers animés, ses restaurants étoilés au guide Michelin et ses boutiques de design scandinave de renommée mondiale.",
      },
      {
        title: 'Nature et archipel',
        content:
          "Profitez de la nature spectaculaire de Stockholm en explorant les parcs urbains, les sentiers boisés et les plages paisibles de l'archipel. Faites une excursion en bateau dans les îles environnantes pour découvrir des paysages préservés, des villages de pêcheurs pittoresques et des espaces naturels préservés. Avec son mélange unique de culture urbaine et de beauté naturelle, Stockholm est une destination incontournable pour les voyageurs en quête d'aventure et de détente.",
      },
    ],
  },
];
