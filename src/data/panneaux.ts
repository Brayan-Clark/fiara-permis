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
];

export function signsByCategory(category: SignCategory) {
  return panneaux.filter((p) => p.category === category);
}
