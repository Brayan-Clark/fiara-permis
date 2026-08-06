export interface Scenario {
  id: string;
  situation: string;
  question: string;
  answer: boolean;
  explanation: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'sc-1',
    situation: "Tu arrives à une intersection sans aucun panneau. Un véhicule arrive de ta droite au même moment.",
    question: "Dois-tu le laisser passer en premier ?",
    answer: true,
    explanation: "Oui — sans signalisation, c'est la priorité à droite qui s'applique : le véhicule venant de la droite passe en premier.",
  },
  {
    id: 'sc-2',
    situation: "Tu es déjà engagé dans un rond-point. Un véhicule attend pour y entrer sur ta gauche.",
    question: "Dois-tu t'arrêter pour le laisser entrer ?",
    answer: false,
    explanation: "Non — dans un rond-point, les véhicules déjà engagés sont prioritaires sur ceux qui souhaitent y entrer.",
  },
  {
    id: 'sc-3',
    situation: "Tu roules à 50 km/h en agglomération et tu vois un panneau de limitation à 30 km/h devant une école.",
    question: "Peux-tu continuer à 50 km/h puisque c'est la limite générale en ville ?",
    answer: false,
    explanation: "Non — le panneau local (30 km/h) prime toujours sur la limite générale de zone (50 km/h).",
  },
  {
    id: 'sc-4',
    situation: "Il pleut fort et la visibilité est réduite en pleine journée.",
    question: "Es-tu tout de même tenu d'allumer tes feux de croisement ?",
    answer: true,
    explanation: "Oui — les feux de croisement sont obligatoires la nuit ET par mauvais temps, même en journée.",
  },
  {
    id: 'sc-5',
    situation: "Tu veux dépasser un véhicule plus lent sur une route dégagée, sans panneau d'interdiction.",
    question: "Le dépassement doit-il se faire par la droite ?",
    answer: false,
    explanation: "Non — le dépassement se fait par la gauche, sauf exception explicitement signalée.",
  },
  {
    id: 'sc-6',
    situation: "Tu roules avec ton téléphone en main pour répondre rapidement à un appel, sur une route calme.",
    question: "Est-ce autorisé si le trajet restant est court ?",
    answer: false,
    explanation: "Non — le téléphone tenu en main est interdit en conduisant, quelle que soit la durée du trajet restant. Seul le mode mains libres est toléré.",
  },
  {
    id: 'sc-7',
    situation: "Un agent de circulation fait signe d'avancer alors que le feu est rouge.",
    question: "Dois-tu suivre les indications de l'agent plutôt que le feu ?",
    answer: true,
    explanation: "Oui — les instructions d'un agent de circulation priment toujours sur les feux tricolores et les panneaux.",
  },
  {
    id: 'sc-8',
    situation: "Tu te gares le long d'un trottoir marqué d'une ligne jaune continue, pour 5 minutes seulement.",
    question: "Est-ce autorisé parce que c'est bref ?",
    answer: false,
    explanation: "Non — une ligne jaune continue interdit le stationnement, indépendamment de la durée.",
  },
  {
    id: 'sc-9',
    situation: "Tu approches d'une route signalée par un losange jaune (route prioritaire), et un véhicule arrive d'une petite rue sur ta droite.",
    question: "Ce véhicule est-il prioritaire parce qu'il vient de ta droite ?",
    answer: false,
    explanation: "Non — le panneau route prioritaire annule la priorité à droite : c'est toi qui es prioritaire, l'autre véhicule doit céder le passage.",
  },
  {
    id: 'sc-10',
    situation: "Un ami de 16 ans veut passer son permis moto (catégorie A).",
    question: "Peut-il le faire avec le consentement d'un parent ?",
    answer: true,
    explanation: "Oui — dès 16 ans, un mineur peut obtenir un permis A ou A' avec le consentement d'un parent ou d'un adulte responsable.",
  },
  {
    id: 'sc-11',
    situation: "Tu roules à 80 km/h sur une route en latérite, et il commence à pleuvoir fort.",
    question: "Ta distance de freinage reste-t-elle la même que sur route sèche ?",
    answer: false,
    explanation: "Non — sur chaussée mouillée ou latérite détrempée, les distances de freinage augmentent, parfois du double.",
  },
  {
    id: 'sc-12',
    situation: "Tu veux passer directement du permis B à la catégorie C (poids lourd), obtenu le même jour que ton permis B.",
    question: "Est-ce possible immédiatement ?",
    answer: false,
    explanation: "Non — la catégorie C exige de détenir le permis B depuis au moins un an avant de pouvoir l'obtenir.",
  },
  {
    id: 'sc-13',
    situation: "Ta voiture cale au milieu d'une route nationale. Tu allumes les feux de détresse et tu poses le triangle de présignalisation derrière le véhicule.",
    question: "Peux-tu rester assis dans la voiture en attendant de l'aide ?",
    answer: false,
    explanation: "Non — en panne sur la chaussée, mieux vaut se mettre en sécurité hors de la route (derrière la glissière ou le bord de la chaussée) : un véhicule arrêté peut être percuté par les autres usagers.",
  },
  {
    id: 'sc-14',
    situation: "Il fait nuit, ta voiture est en panne sur le bas-côté, feux de détresse allumés.",
    question: "Le triangle de présignalisation est-il alors facultatif ?",
    answer: false,
    explanation: "Non — le triangle reste obligatoire pour signaler la panne aux autres usagers, de jour comme de nuit.",
  },
  {
    id: 'sc-15',
    situation: "Un ami te demande de remorquer sa voiture en panne avec une simple corde, sans signalisation particulière.",
    question: "Est-ce autorisé si tu roules très lentement ?",
    answer: false,
    explanation: "Non — le remorquage est strictement réglementé : signalisation du véhicule remorqué, liaison homologuée de longueur limitée et vitesse réduite. Une corde improvisée est dangereuse.",
  },
  {
    id: 'sc-16',
    situation: "Le feu passe au jaune alors que tu es encore à quelques mètres de la ligne d'arrêt, avec de la place pour t'arrêter en sécurité.",
    question: "Peux-tu accélérer pour passer avant le rouge ?",
    answer: false,
    explanation: "Non — le jaune annonce le rouge : si l'arrêt est possible en sécurité, on freine au lieu d'accélérer.",
  },
  {
    id: 'sc-17',
    situation: "Un troupeau de zébus traverse lentement la route devant toi.",
    question: "Dois-tu t'arrêter et attendre, sans klaxonner pour les faire avancer ?",
    answer: true,
    explanation: "Oui — les animaux sont imprévisibles : on ralentit, on s'arrête si besoin et on attend qu'ils aient quitté la chaussée, sans gestes brusques.",
  },
  {
    id: 'sc-18',
    situation: "Tu roules derrière un taxi-be lent, et la ligne au sol est continue.",
    question: "Peux-tu le dépasser en franchissant la ligne puisque la route semble libre ?",
    answer: false,
    explanation: "Non — une ligne continue ne se franchit jamais pour dépasser, même si la route paraît dégagée : elle signale un danger de la manœuvre.",
  },
  {
    id: 'sc-19',
    situation: "Tu approches d'un passage piéton et un piéton commence à traverser.",
    question: "Dois-tu t'arrêter pour le laisser passer ?",
    answer: true,
    explanation: "Oui — le piéton engagé sur un passage est prioritaire : on s'arrête et on attend qu'il ait fini de traverser.",
  },
  {
    id: 'sc-20',
    situation: "Ton pare-brise est très embué et la visibilité est presque nulle.",
    question: "Peux-tu continuer à rouler lentement en longeant le bord de la route ?",
    answer: false,
    explanation: "Non — sans visibilité, on s'arrête dès que possible (hors de la chaussée) et on désembue avant de repartir.",
  },
];
