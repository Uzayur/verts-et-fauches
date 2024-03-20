import { PriceEnum } from '~/app/shared/types/enum/price.enum';
import { TransportEnum } from '~/app/shared/types/enum/transport.enum';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

export const itemsInfo: ItemInfo[] = [
  {
    country: 'France',
    city: 'Nice',
    price: PriceEnum.MEDIUM,
    picture: 'https://www.cia-france.com/media/137/3_1100x700.jpg',
    distance: 932,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS, TransportEnum.VAN],
    description: [
      {
        title: 'La beauté de Nice',
        content:
          "Nice, située sur la Côte d'Azur française, est une destination balnéaire prisée pour son climat ensoleillé, ses plages de galets et son atmosphère méditerranéenne détendue. Flânez le long de la célèbre Promenade des Anglais bordée de palmiers, explorez le quartier historique du Vieux-Nice avec ses ruelles pittoresques et ses marchés colorés, et découvrez l'élégance du quartier du Carré d'Or avec ses boutiques de luxe et ses cafés chics.",
      },
      {
        title: 'Art et culture',
        content:
          "Nice abrite une scène artistique et culturelle dynamique avec ses nombreux musées, galeries d'art et événements culturels. Admirez les chefs-d'œuvre de la peinture européenne au Musée Matisse et au Musée Marc Chagall, ou découvrez l'histoire de la région au Musée d'Art et d'Histoire de Nice. Ne manquez pas les festivals artistiques et musicaux qui animent la ville tout au long de l'année, comme le Carnaval de Nice, l'un des plus grands carnavals du monde.",
      },
      {
        title: 'Gastronomie et savoir-vivre',
        content:
          "Savourez la cuisine niçoise riche en saveurs méditerranéennes dans les restaurants traditionnels, les brasseries animées et les marchés locaux. Goûtez aux spécialités locales telles que la salade niçoise, la socca, une galette de farine de pois chiches, et la pissaladière, une tarte aux oignons et aux anchois. Profitez de l'art de vivre à la niçoise en sirotant un verre de vin rosé en terrasse, en admirant la vue sur la mer et en vous imprégnant de la douceur de vivre méditerranéenne.",
      },
    ],
  },
  {
    country: 'France',
    city: 'Strasbourg',
    price: PriceEnum.MEDIUM,
    picture:
      'https://www.visit.alsace/wp-content/uploads/2019/01/petite-france-pont-saint-martin-bruno-paci-1600x900.jpg',
    distance: 494,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS],
    description: [
      {
        title: "L'Histoire et la culture alsacienne",
        content:
          "Strasbourg, capitale de la région Alsace, est une ville riche en histoire, en culture et en patrimoine architectural. Promenez-vous dans le centre historique, classé au patrimoine mondial de l'UNESCO, pour découvrir les charmantes maisons à colombages, les ruelles pavées et les canaux pittoresques. Visitez la majestueuse cathédrale de Strasbourg, chef-d'œuvre de l'architecture gothique, et explorez les nombreux musées de la ville, comme le Musée Alsacien et le Musée d'Art Moderne et Contemporain.",
      },
      {
        title: 'La cuisine alsacienne',
        content:
          "Découvrez la richesse de la cuisine alsacienne en dégustant des spécialités locales telles que la choucroute, le baeckeoffe, un plat mijoté à base de viande et de pommes de terre, et le fameux kouglof, un gâteau traditionnel. Ne manquez pas les marchés de Noël de Strasbourg, réputés comme les plus beaux d'Europe, où vous pourrez déguster des spécialités de saison telles que le vin chaud, les bredele et les pains d'épices.",
      },
      {
        title: 'Le charme de la petite France',
        content:
          "Flânez dans le quartier pittoresque de la Petite France, célèbre pour ses maisons à colombages colorées, ses canaux romantiques et ses charmantes terrasses de café. Explorez les boutiques d'artisanat local, les galeries d'art et les échoppes de souvenirs, et imprégnez-vous de l'atmosphère authentique de ce quartier emblématique de Strasbourg.",
      },
    ],
  },
  {
    country: 'France',
    city: 'Locronan',
    price: PriceEnum.CHEAP,
    picture:
      'https://media.les-plus-beaux-villages-de-france.org/photos/s1599/locronan-eglise.jpg',
    distance: 573,
    transports: [TransportEnum.BUS, TransportEnum.BIKE, TransportEnum.HIKE],
    description: [
      {
        title: 'Village pittoresque',
        content:
          "Locronan est un charmant village médiéval situé en Bretagne, dans l'ouest de la France. Connue pour ses rues pavées, ses maisons à colombages et son architecture préservée, Locronan offre une atmosphère unique et authentique. Promenez-vous dans les ruelles étroites du village pour découvrir ses églises historiques, ses places pittoresques et ses boutiques artisanales.",
      },
      {
        title: 'Artisanat et tradition',
        content:
          "Le village de Locronan est réputé pour son artisanat traditionnel, en particulier la production de tissus et de textiles. Explorez les ateliers d'artisans locaux pour découvrir les techniques ancestrales de tissage et de broderie. Ne manquez pas de visiter l'église Saint-Ronan, qui abrite des sculptures et des œuvres d'art remarquables datant du Moyen Âge.",
      },
      {
        title: 'Nature et randonnée',
        content:
          'Entouré de paysages naturels préservés, Locronan est le point de départ idéal pour des excursions en pleine nature et des randonnées à travers la campagne bretonne. Explorez les sentiers pittoresques qui serpentent à travers les collines verdoyantes et les forêts denses, offrant des vues magnifiques sur la côte atlantique. Profitez également des plages voisines pour vous détendre et vous ressourcer au bord de la mer.',
      },
    ],
  },
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
    transports: [TransportEnum.TRAIN, TransportEnum.BUS, TransportEnum.VAN],
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
    transports: [TransportEnum.TRAIN, TransportEnum.VAN, TransportEnum.BOAT],
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
  {
    country: 'Royaume-Uni',
    city: 'Londres',
    price: PriceEnum.MEDIUM,
    picture:
      'https://static.eldiario.es/clip/ac5016f6-7afd-43f8-9d87-f38c82e5a9f1_16-9-discover-aspect-ratio_default_0.jpg',
    distance: 344,
    transports: [TransportEnum.TRAIN, TransportEnum.BOAT],
    description: [
      {
        title: 'Une ville vibarnte',
        content:
          'Londres, la capitale du Royaume-Uni, est une ville dynamique et cosmopolite qui allie histoire, culture et modernité. Explorez ses célèbres monuments tels que le Palais de Buckingham, le London Eye et la Tour de Londres, qui témoignent de son riche passé. Promenez-vous le long de la Tamise, découvrez les quartiers animés comme Soho et Covent Garden, et profitez de la scène artistique et culinaire diversifiée de la ville.',
      },
      {
        title: 'Patrimoine historique et culturel',
        content:
          "Imprégnez-vous de l'histoire fascinante de Londres en visitant ses nombreux musées, galeries d'art et sites historiques. Admirez les trésors de la National Gallery, découvrez l'histoire du monde au British Museum, et explorez les vestiges de l'ancienne Londres romaine à travers la ville. Avec ses théâtres emblématiques, ses marchés pittoresques et ses pubs traditionnels, Londres offre une expérience culturelle inoubliable à chaque visiteur.",
      },
      {
        title: 'Vie nocturne animée',
        content:
          "Plongez dans la vie nocturne vibrante de Londres en découvrant ses bars branchés, ses clubs animés et ses spectacles de musique live. Des quartiers animés de Shoreditch et de Camden aux bars élégants de Mayfair et de Kensington, la ville propose une multitude d'options de divertissement pour tous les goûts. Que vous soyez amateur de cocktails, de concerts ou de comédies musicales de Broadway, Londres a quelque chose à offrir à chacun.",
      },
    ],
  },
  {
    country: 'Espagne',
    city: 'Madrid',
    price: PriceEnum.MEDIUM,
    picture:
      'https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/16:9/w_2560%2Cc_limit/madrid-travel-guide.jpg',
    distance: 1058,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS, TransportEnum.VAN],
    description: [
      {
        title: 'La capitale espagnole',
        content:
          "Madrid, la capitale ensoleillée de l'Espagne, est une ville animée réputée pour sa culture, sa gastronomie et sa vie nocturne. Découvrez l'architecture majestueuse de ses places emblématiques comme la Plaza Mayor et la Puerta del Sol, ainsi que les magnifiques parcs et jardins comme le Retiro et le Campo del Moro. Plongez-vous dans l'art et la culture espagnole en visitant les célèbres musées de la ville, notamment le Prado, le Reina Sofía et le Thyssen-Bornemisza.",
      },
      {
        title: 'Gastronomie et tapas',
        content:
          'Explorez la scène culinaire diversifiée de Madrid en dégustant des tapas traditionnelles, des plats espagnols authentiques et des délices internationaux dans les nombreux bars à tapas, restaurants et marchés de la ville. Ne manquez pas de goûter à des spécialités locales comme la paella, le jamón ibérico et les churros avec du chocolat. Avec ses cafés animés, ses bars à vin conviviaux et ses terrasses ensoleillées, Madrid offre une expérience gastronomique incomparable.',
      },
      {
        title: 'Vie nocturne et flamenco',
        content:
          "Plongez dans la vie nocturne électrique de Madrid en découvrant ses bars à cocktails élégants, ses clubs de danse animés et ses spectacles de flamenco passionnants. Des quartiers animés de Malasaña et de Chueca aux bars à tapas traditionnels de La Latina, la ville propose une multitude d'options de divertissement pour les noctambules. Assistez à un spectacle de flamenco en direct pour une expérience authentique de la culture espagnole, et dansez toute la nuit dans les clubs branchés de la ville.",
      },
    ],
  },
  {
    country: 'Espagne',
    city: 'Barcelone',
    price: PriceEnum.EXPENSIVE,
    picture:
      'https://images.ctfassets.net/bth3mlrehms2/2T2y3fo3Z60l0XXMwjtstO/b49fd2cafa39dce2eed8791091e16ec3/Europe_Espagne_Barcelone_Sagrada_Familia.jpg?w=3841&h=2160&fl=progressive&q=50&fm=jpg',
    distance: 1039,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS],
    description: [
      {
        title: 'Capitale culturelle',
        content:
          "Barcelone est une ville dynamique et cosmopolite située sur la côte nord-est de l'Espagne. Connue pour son riche passé historique, son architecture époustouflante et son atmosphère animée, Barcelone offre un mélange unique d'expériences culturelles. Explorez des sites emblématiques tels que la Sagrada Familia et le Parc Güell, promenez-vous dans les rues animées des Ramblas et dégustez une délicieuse cuisine catalane dans les bars à tapas et les restaurants locaux.",
      },
      {
        title: 'Art et architecture',
        content:
          "Avec ses chefs-d'œuvre architecturaux mondialement connus et sa scène artistique dynamique, Barcelone est un paradis pour les amateurs d'art et d'architecture. Visitez le musée Picasso pour admirer les œuvres de l'artiste légendaire, explorez les créations avant-gardistes d'Antoni Gaudí et émerveillez-vous devant les designs modernistes dispersés dans toute la ville. Ne manquez pas l'opportunité de vivre la vie nocturne électrisante de Barcelone, avec ses bars branchés, ses clubs et ses salles de concert.",
      },
      {
        title: 'Plages et nature',
        content:
          "Située le long de la magnifique côte méditerranéenne, Barcelone offre des kilomètres de plages de sable doré et d'eaux cristallines. Passez vos journées à bronzer sur les plages urbaines de la ville, comme Barceloneta et Bogatell, ou aventurez-vous plus loin pour découvrir des criques cachées et des baies isolées. Pour les amateurs de plein air, les montagnes environnantes offrent de nombreuses possibilités de randonnée, de vélo et de sports d'aventure, offrant un équilibre parfait entre ville et nature.",
      },
    ],
  },
  {
    country: 'Espagne',
    city: 'Valence',
    price: PriceEnum.MEDIUM,
    picture:
      'https://media.routard.com/image/73/3/espagne-valence.1487733.142.jpg',
    distance: 1047,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS],
    description: [
      {
        title: 'Ville des arts et des sciences',
        content:
          "Valence est une ville dynamique et moderne située sur la côte est de l'Espagne. Connu pour son architecture futuriste, sa diversité culturelle et sa vie de rue animée, Valence offre une multitude d'attractions à explorer. Admirez l'icône de la Ville des Arts et des Sciences, un complexe futuriste conçu par l'architecte renommé Santiago Calatrava, qui abrite un musée des sciences, un aquarium et un centre des arts du spectacle.",
      },
      {
        title: 'Délices culinaire',
        content:
          "Valence est renommée pour sa délicieuse cuisine, qui reflète le riche patrimoine culinaire de la ville et ses influences méditerranéennes. Goûtez aux plats traditionnels tels que la paella, la fideuà et l'horchata, préparés avec des ingrédients frais et locaux et débordant de saveurs. Explorez le marché central animé pour déguster une variété de produits frais, de viandes et de fruits de mer, ou dînez dans l'un des nombreux bars à tapas et restaurants de Valence pour découvrir les saveurs authentiques de la cuisine espagnole.",
      },
      {
        title: 'Charme historique',
        content:
          "Avec son centre historique, ses quartiers charmants et ses monuments anciens, Valence est une ville imprégnée d'histoire et de culture. Promenez-vous dans les ruelles étroites du Barrio del Carmen pour découvrir des places cachées, des églises médiévales et des ruelles pittoresques. Visitez des sites emblématiques tels que la cathédrale de Valence, la Lonja de la Seda (Bourse de la Soie) et les Torres de Serranos, et plongez-vous dans l'histoire fascinante et le patrimoine architectural de la ville.",
      },
    ],
  },
  {
    country: 'Pays-Bas',
    city: 'Amsterdam',
    price: PriceEnum.EXPENSIVE,
    picture:
      'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1683059749/lpvzuwfifyzn3hfapslx.jpg',
    distance: 507,
    transports: [TransportEnum.TRAIN, TransportEnum.BIKE],
    description: [
      {
        title: 'Venise du nord',
        content:
          "Amsterdam, surnommée la 'Venise du Nord', est une ville pittoresque et animée aux Pays-Bas. Nichée le long de canaux charmants et bordée de maisons traditionnelles à pignons, Amsterdam offre un décor magnifique à explorer à pied ou à vélo. Découvrez une ville riche en culture, en histoire et en art, où chaque coin de rue réserve une nouvelle découverte passionnante.",
      },
      {
        title: 'Art et musées',
        content:
          "Amsterdam est réputée pour sa scène artistique dynamique et ses musées de renommée mondiale. Explorez le Musée Van Gogh pour admirer les chefs-d'œuvre du célèbre peintre néerlandais, promenez-vous le long du Museumplein où se trouvent le Rijksmuseum et le Stedelijk Museum, et visitez la maison d'Anne Frank pour découvrir l'histoire poignante de la Seconde Guerre mondiale.",
      },
      {
        title: 'Vie nocturne vibrante',
        content:
          "Amsterdam est également célèbre pour sa vie nocturne animée et éclectique, avec une multitude de bars, de clubs et de cafés animés où vous pourrez danser jusqu'au bout de la nuit. Découvrez les quartiers branchés de Jordaan et De Pijp, explorez le quartier rouge historique pour une expérience unique, ou détendez-vous dans l'un des nombreux cafés en bord de canal pour une ambiance décontractée.",
      },
    ],
  },
  {
    country: 'Croatie',
    city: 'Zagreb',
    price: PriceEnum.MEDIUM,
    picture:
      'https://smart-tourism-capital.ec.europa.eu/sites/default/files/styles/embed_large/public/2022-09/zagreb_1.jpg?itok=B9Mdfk79',
    distance: 1220,
    transports: [TransportEnum.TRAIN, TransportEnum.BUS, TransportEnum.VAN],
    description: [
      {
        title: 'Vie culturelle vibrante',
        content:
          "Zagreb, capitale de la Croatie, est une ville animée et dynamique offrant une riche vie culturelle. Explorez les nombreux musées, galeries d'art et théâtres de la ville, dont le Musée des Arts et Métiers et le Musée Mimara, qui abritent d'importantes collections artistiques et historiques. Assistez à des concerts, des festivals et des événements culturels tout au long de l'année, et découvrez la riche histoire et la diversité culturelle de Zagreb.",
      },
      {
        title: 'Architecture éclectique',
        content:
          "Zagreb séduit par son mélange d'architecture historique et moderne. Promenez-vous dans la vieille ville pittoresque, où vous découvrirez des églises anciennes, des places charmantes et des ruelles pavées. Admirez les bâtiments néo-gothiques, baroques et Art nouveau, ainsi que les monuments emblématiques tels que la cathédrale de Zagreb et le palais présidentiel.",
      },
      {
        title: 'Gastronomie locale',
        content:
          'Découvrez la délicieuse cuisine croate lors de votre séjour à Zagreb. Savourez des plats traditionnels comme le cevapi, les štrukli et les sarmas dans les nombreux restaurants et tavernes de la ville. Ne manquez pas de goûter les vins locaux et les spécialités culinaires régionales, et explorez les marchés animés pour acheter des produits frais et des produits artisanaux.',
      },
    ],
  },
  {
    country: 'Portugal',
    city: 'Lisbonne',
    price: PriceEnum.MEDIUM,
    picture:
      'https://www.maison-au-portugal.com/wp-content/uploads/2021/01/lisbonne-portugal-1-1.jpg',
    distance: 1509,
    transports: [TransportEnum.TRAIN, TransportEnum.VAN],
    description: [
      {
        title: 'La belle Lisbonne',
        content:
          "Lisbonne, la magnifique capitale du Portugal, est une ville enchanteresse pleine de charme et d'histoire. Parcourez les ruelles sinueuses de l'Alfama, le quartier le plus ancien de la ville, et découvrez ses boutiques pittoresques, ses restaurants traditionnels et ses points de vue panoramiques sur le Tage. Imprégnez-vous de l'atmosphère bohème du quartier de Bairro Alto, connu pour sa vie nocturne animée, ses rues pavées et ses azulejos colorés.",
      },
      {
        title: 'Culture et patrimoine',
        content:
          "Explorez le riche patrimoine culturel de Lisbonne en visitant ses nombreux musées, galeries d'art et monuments historiques. Admirez la majesté de la Tour de Belém et du Monastère des Hiéronymites, classés au patrimoine mondial de l'UNESCO, et découvrez l'histoire maritime du Portugal au Musée de la Marine. Plongez dans la scène artistique florissante de la ville en visitant le quartier créatif de LX Factory et en admirant les œuvres de street art urbain.",
      },
      {
        title: 'Gastronomie et fado',
        content:
          'Dégustez les délices de la cuisine portugaise dans les tavernes traditionnelles, les restaurants modernes et les marchés alimentaires animés de Lisbonne. Ne manquez pas de goûter aux spécialités locales comme les pastéis de nata, les fruits de mer frais et le célèbre bacalhau. Plongez-vous dans la musique mélancolique du fado, une tradition portugaise vieille de plusieurs siècles, en écoutant des concerts intimes dans les bars et les clubs de la ville.',
      },
    ],
  },
];
