/**
 * Photos de terrain — prises à Madagascar, réutilisées sous licence libre.
 *
 * Toutes viennent de Wikimedia Commons. Les fichiers sont servis tels quels
 * (aucun recadrage, aucune retouche) : c'est la condition qui rend la
 * réutilisation simple, y compris pour les licences CC BY-SA. L'auteur et la
 * licence sont affichés sous chaque image, et repris en bloc sur /sources.
 *
 * Toute nouvelle photo doit arriver avec son auteur, sa licence et sa page
 * source : sans ces trois informations, on ne peut pas la publier.
 */
export interface TerrainPhoto {
  /** Nom du fichier dans public/images/terrain/. */
  file: string;
  /** Module du cours illustré par cette photo. */
  module: string;
  alt: string;
  caption: string;
  /** Dimensions réelles du fichier, pour réserver la place avant chargement. */
  width: number;
  height: number;
  author: string;
  license: string;
  licenseUrl: string;
  /** Page du fichier sur Wikimedia Commons. */
  sourceUrl: string;
}

export const photos: TerrainPhoto[] = [
  {
    file: 'laterite-detrempee.jpg',
    module: 'vitesse-distances',
    alt: 'Route de latérite rouge détrempée dans le sud-ouest de Madagascar.',
    caption:
      "Route de latérite dans le sud-ouest, après la pluie. Sur une chaussée comme celle-ci, l'adhérence s'effondre : la distance d'arrêt calculée dans ce module vaut pour une route sèche.",
    width: 960,
    height: 720,
    author: 'Frank Vassen',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laterite_road,_South-Western_Madagascar_(4463925678).jpg',
  },
  {
    file: 'panneau-indication-bemaha.jpg',
    module: 'signalisation-horizontale',
    alt: 'Panneau de signalisation indiquant Bemaha et le lac Tritriva.',
    caption:
      'Signalisation de direction vers Bemaha et le lac Tritriva. Les formes et les couleurs vues dans ce module sont celles qui sont effectivement posées sur les routes malgaches.',
    width: 960,
    height: 636,
    author: 'HoneyGaLe',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Signalisation_routi%C3%A8re_Bemaha_-_Lac_Tritriva.jpg',
  },
  {
    file: 'panneau-zone-ecole.jpg',
    module: 'panneaux-signalisation',
    alt: "Panneau signalant une zone fréquentée par des enfants à Ambohimanarivo.",
    caption:
      "Zone fréquentée par des enfants, à Ambohimanarivo (Antananarivo). C'est le panneau posé qui abaisse la vitesse, pas la limite générale de la ville.",
    width: 500,
    height: 375,
    author: 'Jaraen6',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Panneau_d%27indication_Ambohimanarivo.jpg',
  },
  {
    file: 'passage-a-niveau-manakara.jpg',
    module: 'passages-a-niveau',
    alt: 'Passage à niveau croisant une route à Manakara.',
    caption:
      "Passage à niveau à Manakara. Ici, aucune barrière ne se referme : c'est le conducteur qui s'arrête, regarde et écoute avant de franchir.",
    width: 500,
    height: 332,
    author: 'chirlula',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rail-run-way-crossing.jpg',
  },
  {
    file: 'pluie-visibilite-tamatave.jpg',
    module: 'eclairage-visibilite',
    alt: 'Rue de Toamasina sous une forte pluie.',
    caption:
      'Toamasina sous la pluie. Visibilité réduite et chaussée mouillée, en plein jour : les feux de croisement sont obligatoires, et la distance de sécurité augmente.',
    width: 960,
    height: 538,
    author: 'Paolo Crosetto',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tamatave_rain_(4990201049).jpg',
  },
  {
    file: 'taxi-brousse.jpg',
    module: 'transport-personnes',
    alt: 'Taxi-brousse transportant des passagers sur une route malgache.',
    caption:
      'Taxi-brousse, colonne vertébrale du transport interurbain. Chargement, surcharge et état des sièges sont exactement ce que contrôle la réglementation sur le transport de personnes.',
    width: 960,
    height: 638,
    author: 'Rakotovaogael',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Big_car_serving_as_a_bush_taxi.jpg',
  },
  {
    file: 'moto-en-ville.jpg',
    module: 'deux-roues',
    alt: 'Scooter garé dans une rue de Madagascar.',
    caption:
      "Un scooter, le moyen de transport le plus courant en ville. Petit gabarit, aucune carrosserie : l'équipement du pilote est sa seule protection, et il reste peu visible dans un rétroviseur.",
    width: 500,
    height: 1111,
    author: 'Mild19',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kymco_Many_Bleu.jpg',
  },
  {
    file: 'sortie-ecole.jpg',
    module: 'partager-la-route',
    alt: "Élèves marchant le long d'une route principale à la sortie de l'école.",
    caption:
      "Sortie d'école : les élèves marchent sur la route principale, faute de trottoir. C'est la raison d'être de la limitation aux abords des écoles — et de la vigilance qui va avec.",
    width: 960,
    height: 432,
    author: 'Adansonia rayanne2',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:L%27heur_de_la_sortie_des_%C3%A9l%C3%A8ves_03.jpg',
  },
  {
    file: 'karenjy-toliara.jpg',
    module: 'vehicule-equipements',
    alt: 'Voiture Karenjy dans une rue de Toliara.',
    caption:
      'Une Karenjy dans les rues de Toliara, voiture assemblée à Madagascar. Feux, pneus, essuie-glaces : ce que le contrôle technique vérifie, on peut le vérifier soi-même chaque semaine.',
    width: 960,
    height: 640,
    author: 'Diorit',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Karenjy_Faoka_02.jpg',
  },
  {
    file: 'camion-bananes.jpg',
    module: 'poids-lourds',
    alt: 'Camion transportant des régimes de bananes sur une route malgache.',
    caption:
      "Camion chargé hors agglomération. Le poids change tout : distances de freinage, comportement en descente, et la vitesse maximale autorisée qui lui est propre.",
    width: 960,
    height: 720,
    author: 'Y Coetsee',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Y_Coetsee_Truck_carrying_Bananas.jpg',
  },
  {
    file: 'route-etroite-rn42.jpg',
    module: 'croisement-depassement',
    alt: 'Route nationale 42 dont il ne reste qu’une bande étroite de bitume.',
    caption:
      'RN 42 entre Fianarantsoa et Isorana : de la chaussée d’origine, il ne reste qu’un étroit ruban. Une route comme celle-ci rappelle que dépasser ne se décide jamais sur la ligne blanche seule, mais sur ce qu’on voit devant.',
    width: 960,
    height: 638,
    author: 'Diorit',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Madagascar_National_Road_42.JPG',
  },
  {
    file: 'borne-kilometrique.jpg',
    module: 'stationnement-documents',
    alt: 'Borne kilométrique de style français au bord d’une route malgache.',
    caption:
      'Borne kilométrique, dans le style hérité du réseau routier français. Le repérage des lieux compte au moment de remplir un constat ou de situer une infraction.',
    width: 960,
    height: 720,
    author: 'Bernard Gagnon',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Borne_routi%C3%A8re_Madagascar.jpg',
  },
  {
    file: 'station-service.jpg',
    module: 'eco-conduite',
    alt: 'Station-service à Antananarivo.',
    caption:
      "Station-service à Antananarivo. C'est ici que commence l'économie de carburant : pression des pneus, bon indice d'octane, et un plein qui ne déborde pas.",
    width: 960,
    height: 638,
    author: 'Spiessens',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Station_d%27essence_Tana.JPG',
  },
];

/** Photos d'un module, dans l'ordre du tableau. */
export function photosForModule(moduleId: string): TerrainPhoto[] {
  return photos.filter((p) => p.module === moduleId);
}
