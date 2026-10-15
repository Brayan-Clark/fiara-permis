export type SignCategory = 'danger' | 'interdiction' | 'obligation' | 'indication' | 'special';

export interface RoadSign {
  id: string;
  name: string;
  category: SignCategory;
  description: string;
  svg: string;
}

const RED = '#c1440e';
const BLUE = '#1e5aa8';
const WHITE = '#ffffff';
const INK = '#1b1b1f';
const GREY = '#4a4a50';
const YELLOW = '#e8a93b';

export const signCategoryLabel: Record<SignCategory, string> = {
  danger: 'Danger',
  interdiction: 'Interdiction',
  obligation: 'Obligation',
  indication: 'Indication',
  special: 'Signal spécial',
};

export const signCategoryHint: Record<SignCategory, string> = {
  danger: 'Triangle blanc, bordure rouge — il prévient, il n’interdit rien.',
  interdiction: 'Cercle à bordure rouge — il retire une possibilité.',
  obligation: 'Cercle bleu — il impose une action précise.',
  indication: 'Rectangle bleu ou vert — il informe sans contraindre la conduite.',
  special: 'Forme unique (octogone, triangle inversé) — règle une intersection à lui seul.',
};

export const panneaux: RoadSign[] = [
  {
    id: 'virage-dangereux',
    name: 'Virage dangereux à droite',
    category: 'danger',
    description: "Annonce un virage serré à droite. On lève le pied avant d'y entrer, pas pendant.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><path d="M35 70 L35 45 Q35 30 55 30 L65 30" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/><polygon points="65,22 65,38 78,30" fill="${INK}"/></svg>`,
  },
  {
    id: 'chaussee-glissante',
    name: 'Chaussée glissante',
    category: 'danger',
    description: "Route glissante par temps de pluie ou latérite détrempée : distances de freinage rallongées.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><path d="M28 55 Q40 45 50 55 Q60 65 72 55" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M32 70 Q44 60 54 70" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'passage-animaux',
    name: 'Passage d’animaux',
    category: 'danger',
    description: "Zone de traversée fréquente de zébus ou d’autres animaux : ralentir et anticiper un arrêt.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><ellipse cx="50" cy="66" rx="20" ry="10" fill="${INK}"/><circle cx="34" cy="55" r="7" fill="${INK}"/><polygon points="27,48 31,58 38,52" fill="${INK}"/><polygon points="41,48 37,58 30,52" fill="${INK}"/></svg>`,
  },
  {
    id: 'ecole',
    name: 'Passage d’enfants / zone scolaire',
    category: 'danger',
    description: "Abords d’école ou de marché : vitesse réduite quasi systématique, vigilance piétons.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><circle cx="38" cy="52" r="7" fill="${INK}"/><rect x="32" y="60" width="12" height="20" rx="4" fill="${INK}"/><circle cx="64" cy="58" r="6" fill="${INK}"/><rect x="59" y="65" width="10" height="16" rx="4" fill="${INK}"/></svg>`,
  },
  {
    id: 'sens-interdit',
    name: 'Sens interdit',
    category: 'interdiction',
    description: "Disque rouge plein : accès totalement interdit dans ce sens, sans exception.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${RED}" stroke="${INK}" stroke-width="2"/><rect x="20" y="43" width="60" height="14" rx="2" fill="${WHITE}"/></svg>`,
  },
  {
    id: 'stationnement-interdit',
    name: 'Stationnement interdit',
    category: 'interdiction',
    description: "Cercle bleu barré de rouge : on peut s’arrêter brièvement, mais pas stationner.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${BLUE}" stroke="${RED}" stroke-width="8"/><line x1="22" y1="78" x2="78" y2="22" stroke="${RED}" stroke-width="8"/></svg>`,
  },
  {
    id: 'limitation-vitesse',
    name: 'Limitation de vitesse (50)',
    category: 'interdiction',
    description: "Vitesse maximale autorisée à cet endroit précis. Prime toujours sur la limite générale de zone.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${WHITE}" stroke="${RED}" stroke-width="8"/><text x="50" y="62" font-family="IBM Plex Mono, monospace" font-size="30" font-weight="700" fill="${INK}" text-anchor="middle">50</text></svg>`,
  },
  {
    id: 'depassement-interdit',
    name: 'Dépassement interdit',
    category: 'interdiction',
    description: "Deux silhouettes de véhicules, bordure rouge : aucun dépassement autorisé sur ce tronçon.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${WHITE}" stroke="${RED}" stroke-width="8"/><rect x="24" y="38" width="22" height="13" rx="2" fill="${RED}"/><rect x="52" y="52" width="22" height="13" rx="2" fill="${INK}"/></svg>`,
  },
  {
    id: 'direction-obligatoire',
    name: 'Direction obligatoire (tout droit)',
    category: 'obligation',
    description: "Fond bleu, flèche blanche : seule cette direction est autorisée à cette intersection.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${BLUE}"/><rect x="44" y="28" width="12" height="34" fill="${WHITE}"/><polygon points="50,20 64,38 36,38" fill="${WHITE}"/></svg>`,
  },
  {
    id: 'piste-cyclable',
    name: 'Piste cyclable obligatoire',
    category: 'obligation',
    description: "Les deux-roues non motorisés doivent emprunter cette voie dédiée.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${BLUE}"/><circle cx="36" cy="64" r="9" fill="none" stroke="${WHITE}" stroke-width="4"/><circle cx="64" cy="64" r="9" fill="none" stroke="${WHITE}" stroke-width="4"/><path d="M36 64 L48 40 L64 64 M44 48 L58 48" stroke="${WHITE}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'stop',
    name: 'STOP',
    category: 'special',
    description: "Arrêt complet obligatoire, même si la voie paraît libre. Le seul panneau à forme octogonale.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="${RED}" stroke="${WHITE}" stroke-width="3"/><text x="50" y="62" font-family="IBM Plex Mono, monospace" font-size="26" font-weight="700" fill="${WHITE}" text-anchor="middle">STOP</text></svg>`,
  },
  {
    id: 'cedez-passage',
    name: 'Cédez le passage',
    category: 'special',
    description: "Triangle inversé : ralentir et laisser passer, arrêt non obligatoire si la voie est libre.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="8,15 92,15 50,92" fill="${WHITE}" stroke="${RED}" stroke-width="8" stroke-linejoin="round"/></svg>`,
  },
  {
    id: 'route-prioritaire',
    name: 'Route prioritaire',
    category: 'special',
    description: "Losange jaune : les voies adjacentes doivent céder le passage, la priorité à droite ne s’applique plus.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="40" fill="${WHITE}" stroke="${INK}" stroke-width="2" transform="rotate(45 50 50)"/><rect x="37" y="37" width="26" height="26" fill="#e8a93b" transform="rotate(45 50 50)"/></svg>`,
  },
  {
    id: 'rond-point',
    name: 'Sens giratoire obligatoire',
    category: 'obligation',
    description: "Trois flèches courbes blanches sur fond bleu : circulation en rond-point, priorité aux véhicules déjà engagés.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${BLUE}"/><path d="M30 40 A22 22 0 1 1 30 62" stroke="${WHITE}" stroke-width="6" fill="none" stroke-linecap="round"/><polygon points="30,62 24,52 38,54" fill="${WHITE}"/></svg>`,
  },
  {
    id: 'parking',
    name: 'Parking autorisé',
    category: 'indication',
    description: "Zone de stationnement aménagée : rectangle bleu, lettre P blanche.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="${BLUE}"/><text x="50" y="68" font-family="IBM Plex Mono, monospace" font-size="46" font-weight="700" fill="${WHITE}" text-anchor="middle">P</text></svg>`,
  },
  {
    id: 'passage-pietons',
    name: 'Passage piéton',
    category: 'indication',
    description: "Rectangle bleu, silhouette marchant sur des bandes blanches : traversée signalée.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="${BLUE}"/><circle cx="46" cy="30" r="6" fill="${WHITE}"/><path d="M46 38 L38 60 L46 55 L52 68 M46 45 L58 50 M46 45 L36 48" stroke="${WHITE}" stroke-width="5" fill="none" stroke-linecap="round"/><line x1="18" y1="80" x2="30" y2="80" stroke="${WHITE}" stroke-width="5"/><line x1="38" y1="80" x2="50" y2="80" stroke="${WHITE}" stroke-width="5"/><line x1="58" y1="80" x2="70" y2="80" stroke="${WHITE}" stroke-width="5"/></svg>`,
  },
  // --- Panneaux « difficiles » et « faux amis » : ceux qu'on confond en
  // examen parce qu'ils se ressemblent plus qu'ils ne se distinguent. ---
  {
    id: 'double-sens',
    name: 'Circulation à double sens',
    category: 'danger',
    description: "Deux flèches opposées : à partir de ce panneau, la circulation se fait des deux côtés. Rien n'était signalé avant, tout change ici.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><path d="M40 78 L40 38" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><polygon points="40,26 32,42 48,42" fill="${INK}"/><path d="M60 34 L60 74" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><polygon points="60,86 52,70 68,70" fill="${INK}"/></svg>`,
  },
  {
    id: 'gravillons',
    name: 'Projection de gravillons',
    category: 'danger',
    description: "Des cailloux sont projetés par les roues : risque de dérapage et d'éclat sur les pare-brise. On ralentit, on ne colle pas.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><rect x="38" y="50" width="28" height="13" rx="3" fill="${INK}"/><circle cx="45" cy="68" r="4" fill="${INK}"/><circle cx="59" cy="68" r="4" fill="${INK}"/><circle cx="31" cy="44" r="3" fill="${INK}"/><circle cx="70" cy="46" r="3" fill="${INK}"/><circle cx="28" cy="72" r="3" fill="${INK}"/><circle cx="74" cy="70" r="3" fill="${INK}"/></svg>`,
  },
  {
    id: 'chutes-de-pierres',
    name: 'Chutes de pierres',
    category: 'danger',
    description: "Falaise ou paroi instable au-dessus de la route. On ne stationne pas dessous, et on ne s'y arrête pas.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><path d="M30 80 L30 38 L44 38 L44 56" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="58" cy="48" r="5" fill="${INK}"/><circle cx="52" cy="64" r="6" fill="${INK}"/><circle cx="68" cy="66" r="4" fill="${INK}"/></svg>`,
  },
  {
    id: 'animaux-domestiques',
    name: 'Passage d’animaux domestiques',
    category: 'danger',
    description: "Ce ne sont pas seulement des zébus : chiens, chèvres et moutons traversent aussi. Le troupeau peut être derrière l'animal qu'on voit.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><rect x="34" y="50" width="28" height="14" rx="6" fill="${INK}"/><circle cx="66" cy="47" r="6" fill="${INK}"/><path d="M64 42 L67 36" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M38 60 Q34 68 40 72" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/><line x1="46" y1="64" x2="46" y2="76" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><line x1="54" y1="64" x2="54" y2="76" stroke="${INK}" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'interdiction-demi-tour',
    name: 'Interdiction de faire demi-tour',
    category: 'interdiction',
    description: "Le demi-tour est interdit, mais tourner à droite ou à gauche reste autorisé : l'interdiction ne vise que le retour en arrière.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${WHITE}" stroke="${RED}" stroke-width="8"/><path d="M36 66 L36 48 A14 14 0 0 1 64 48 L64 60" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/><polygon points="64,70 55,57 73,57" fill="${INK}"/><line x1="21" y1="79" x2="79" y2="21" stroke="${RED}" stroke-width="8"/></svg>`,
  },
  {
    id: 'vitesse-minimum',
    name: 'Vitesse minimum obligatoire',
    category: 'obligation',
    description: "Cercle bleu, chiffre blanc : rouler moins vite que ce chiffre est une infraction. On peut rouler à cette vitesse ou plus.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${BLUE}"/><text x="50" y="62" font-family="IBM Plex Mono, monospace" font-size="34" font-weight="700" fill="${WHITE}" text-anchor="middle">30</text></svg>`,
  },
  {
    id: 'fin-interdiction-vitesse',
    name: 'Fin de limitation de vitesse',
    category: 'indication',
    description: "Même chiffre que la limitation, barré de gris : l'interdiction prend fin, on repasse à la règle générale de la zone.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="${WHITE}" stroke="${RED}" stroke-width="8"/><text x="50" y="62" font-family="IBM Plex Mono, monospace" font-size="30" font-weight="700" fill="${INK}" text-anchor="middle">50</text><g stroke="${GREY}" stroke-width="5" stroke-linecap="round"><line x1="17" y1="46" x2="45" y2="18"/><line x1="36" y1="66" x2="64" y2="38"/><line x1="55" y1="83" x2="83" y2="55"/></g></svg>`,
  },
  {
    id: 'fin-route-prioritaire',
    name: 'Fin de route prioritaire',
    category: 'special',
    description: "Le losange barré de gris annonce la fin de la route prioritaire : à la prochaine intersection, la priorité à droite reprend.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="40" fill="${WHITE}" stroke="${INK}" stroke-width="2" transform="rotate(45 50 50)"/><rect x="37" y="37" width="26" height="26" fill="${YELLOW}" transform="rotate(45 50 50)"/><g stroke="${GREY}" stroke-width="5" stroke-linecap="round"><line x1="28" y1="62" x2="62" y2="28"/><line x1="38" y1="72" x2="72" y2="38"/></g></svg>`,
  },
  {
    id: 'passage-niveau-non-garde',
    name: 'Passage à niveau sans barrières',
    category: 'special',
    description: "Signal avancé : la voie ferrée croise la route plus loin, sans barrière. Il peut n'y avoir qu'un feu rouge clignotant ou un STOP.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><rect x="24" y="70" width="52" height="5" fill="${INK}"/><line x1="30" y1="52" x2="30" y2="70" stroke="${INK}" stroke-width="5"/><line x1="40" y1="52" x2="40" y2="70" stroke="${INK}" stroke-width="5"/><line x1="50" y1="52" x2="50" y2="70" stroke="${INK}" stroke-width="5"/><line x1="60" y1="52" x2="60" y2="70" stroke="${INK}" stroke-width="5"/><line x1="70" y1="52" x2="70" y2="70" stroke="${INK}" stroke-width="5"/></svg>`,
  },
  {
    id: 'passage-niveau-barrieres',
    name: 'Passage à niveau avec barrières',
    category: 'special',
    description: "Ici, une barrière se fermera à l'arrivée du train. Barrière levée mais feu rouge clignotant : c'est un autre train, on ne passe pas.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,88 8,88" fill="${WHITE}" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/><g transform="rotate(-8 50 50)"><rect x="16" y="42" width="68" height="9" fill="${RED}"/><rect x="26" y="42" width="10" height="9" fill="${WHITE}"/><rect x="46" y="42" width="10" height="9" fill="${WHITE}"/><rect x="66" y="42" width="10" height="9" fill="${WHITE}"/></g><rect x="22" y="72" width="56" height="4" fill="${INK}"/><line x1="28" y1="60" x2="28" y2="76" stroke="${INK}" stroke-width="4"/><line x1="40" y1="60" x2="40" y2="76" stroke="${INK}" stroke-width="4"/><line x1="52" y1="60" x2="52" y2="76" stroke="${INK}" stroke-width="4"/><line x1="64" y1="60" x2="64" y2="76" stroke="${INK}" stroke-width="4"/></svg>`,
  },
  {
    id: 'impasse',
    name: 'Impasse (voie sans issue)',
    category: 'indication',
    description: "La rue ne débouche nulle part : on peut y entrer, mais il faudra faire demi-tour. Utile à savoir avant de s'engager avec une remorque.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="80" height="60" rx="6" fill="${WHITE}" stroke="${RED}" stroke-width="7"/><line x1="30" y1="36" x2="30" y2="64" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><line x1="30" y1="36" x2="70" y2="36" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><line x1="70" y1="36" x2="70" y2="64" stroke="${INK}" stroke-width="7" stroke-linecap="round"/></svg>`,
  },
  {
    id: 'autoroute',
    name: 'Autoroute',
    category: 'indication',
    description: "Fond bleu, symbole de chaussée à deux chaussées séparées : on entre sur une route sans intersection, à sens unique et à vitesse élevée.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16" width="84" height="68" rx="5" fill="${BLUE}"/><path d="M20 74 L24 40 L76 40 L80 74" stroke="${WHITE}" stroke-width="5" fill="none" stroke-linejoin="round"/><line x1="20" y1="58" x2="80" y2="58" stroke="${WHITE}" stroke-width="4"/></svg>`,
  },
  {
    id: 'fin-autoroute',
    name: 'Fin d’autoroute',
    category: 'indication',
    description: "Même symbole barré de rouge : les règles de l'autoroute s'arrêtent ici, y compris la vitesse maximale qui y était autorisée.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16" width="84" height="68" rx="5" fill="${BLUE}"/><path d="M20 74 L24 40 L76 40 L80 74" stroke="${WHITE}" stroke-width="5" fill="none" stroke-linejoin="round"/><line x1="20" y1="58" x2="80" y2="58" stroke="${WHITE}" stroke-width="4"/><line x1="16" y1="80" x2="84" y2="20" stroke="${RED}" stroke-width="7"/></svg>`,
  },
  {
    id: 'aire-de-repos',
    name: 'Aire de repos',
    category: 'indication',
    description: "Espace aménagé pour s'arrêter, se détendre et repartir reposé — la seule réponse efficace à la fatigue au volant.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="${BLUE}"/><polygon points="50,30 70,68 30,68" fill="${WHITE}"/><rect x="46" y="66" width="8" height="14" fill="${WHITE}"/><rect x="24" y="84" width="52" height="4" fill="${WHITE}"/></svg>`,
  },
  {
    id: 'poste-appel-urgence',
    name: 'Poste d’appel d’urgence',
    category: 'indication',
    description: "Borne téléphonique reliée aux secours, sur les axes à fort trafic. On s'y arrête complètement en dehors de la chaussée.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="${BLUE}"/><rect x="36" y="30" width="28" height="44" rx="5" fill="${WHITE}"/><rect x="42" y="38" width="16" height="12" rx="2" fill="${BLUE}"/><circle cx="50" cy="60" r="4" fill="${BLUE}"/><circle cx="50" cy="68" r="4" fill="${BLUE}"/></svg>`,
  },
  {
    id: 'voie-reservee-bus',
    name: 'Voie réservée aux autobus',
    category: 'indication',
    description: "Voie affectée aux bus selon les horaires indiqués. Les autres véhicules n'y circulent pas — mais peuvent la traverser pour tourner.",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="${BLUE}"/><rect x="26" y="26" width="48" height="46" rx="7" fill="${WHITE}"/><rect x="32" y="34" width="36" height="18" rx="2" fill="${BLUE}"/><rect x="40" y="30" width="20" height="3" fill="${BLUE}"/><circle cx="37" cy="76" r="6" fill="${WHITE}"/><circle cx="63" cy="76" r="6" fill="${WHITE}"/></svg>`,
  },
];

export function signsByCategory(category: SignCategory) {
  return panneaux.filter((p) => p.category === category);
}
