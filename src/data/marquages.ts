// La signalisation horizontale : ce qui est peint sur la chaussée. Même
// logique que les panneaux (src/data/panneaux.ts) : des SVG dessinés à la
// main, qui s'impriment nets et restent lisibles en noir et blanc.
// Le point de vue est celui du conducteur : une bande de chaussée vue de
// dessus, avec le marquage à sa place réelle.

const ASPHALT = '#33333a';
const WHITE = '#ffffff';
const YELLOW = '#e8c33b';

export type MarkingOrientation = 'longitudinale' | 'transversale';

export interface RoadMarking {
  id: string;
  name: string;
  orientation: MarkingOrientation;
  description: string;
  svg: string;
}

export const marquages: RoadMarking[] = [
  {
    id: 'ligne-de-rive',
    name: 'Ligne de rive (accotement)',
    orientation: 'longitudinale',
    description:
      "Trait égal au trou : elle longe l'accotement et le sépare de la chaussée. C'est elle qui indique où finit la route et où commence l'espace sur lequel on peut poser une roue.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="66" x2="240" y2="66" stroke="${WHITE}" stroke-width="5" stroke-dasharray="14 14"/><line x1="0" y1="12" x2="240" y2="12" stroke="${WHITE}" stroke-width="5" stroke-dasharray="14 14"/></svg>`,
  },
  {
    id: 'ligne-separation-voies',
    name: 'Ligne de séparation des voies',
    orientation: 'longitudinale',
    description:
      "Traits longs séparés par de grands espaces : elle délimite les voies de circulation d'un même sens. On peut la franchir pour changer de voie — après avoir vérifié derrière et sur le côté.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="40" x2="240" y2="40" stroke="${WHITE}" stroke-width="5" stroke-dasharray="26 30"/></svg>`,
  },
  {
    id: 'bande-arret-urgence',
    name: "Bande d'arrêt d'urgence",
    orientation: 'longitudinale',
    description:
      "Grand trait, petit trou. Voie réservée à une immobilisation (panne, malaise) : on peut y changer une roue, pas y stationner ni s'y arrêter pour lire une carte. Signal de détresse obligatoire.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="26" x2="240" y2="26" stroke="${WHITE}" stroke-width="4" stroke-dasharray="52 14"/><line x1="0" y1="66" x2="240" y2="66" stroke="${WHITE}" stroke-width="5"/></svg>`,
  },
  {
    id: 'voie-reservee',
    name: 'Voie réservée',
    orientation: 'longitudinale',
    description:
      "Gros rectangles très rapprochés : la voie est affectée à une catégorie d'usagers précise — bus, cyclistes, véhicules lents. Les autres peuvent la traverser pour tourner, pas y circuler.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="40" x2="240" y2="40" stroke="${WHITE}" stroke-width="10" stroke-dasharray="30 6"/></svg>`,
  },
  {
    id: 'ligne-effet',
    name: "Ligne d'effet (feux)",
    orientation: 'transversale',
    description:
      "La ligne des feux : l'endroit exact où le véhicule doit s'arrêter quand le feu passe au rouge. S'arrêter dessus, c'est s'arrêter trop tard — et bloquer le passage piéton.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><rect x="150" y="0" width="11" height="80" fill="${WHITE}"/><line x1="0" y1="40" x2="150" y2="40" stroke="${WHITE}" stroke-width="5" stroke-dasharray="26 30"/></svg>`,
  },
  {
    id: 'ligne-cedez-passage',
    name: 'Ligne cédez-le-passage',
    orientation: 'transversale',
    description:
      "Petits carrés alignés en travers de la chaussée. Le conducteur n'est pas tenu de marquer l'arrêt comme devant un STOP. Si cette ligne fait toute la largeur, la rue est à sens unique.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="145" y1="6" x2="145" y2="74" stroke="${WHITE}" stroke-width="9" stroke-dasharray="9 9" stroke-linecap="butt"/><line x1="180" y1="6" x2="180" y2="74" stroke="${WHITE}" stroke-width="9" stroke-dasharray="9 9" stroke-linecap="butt"/></svg>`,
  },
  {
    id: 'ligne-continue',
    name: 'Ligne continue',
    orientation: 'longitudinale',
    description:
      "Elle ne se franchit pas : ni pour dépasser, ni pour stationner dessus. La seule exception, en France comme ailleurs, concerne certains véhicules très lents et les deux-roues, selon le marquage exact.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="40" x2="240" y2="40" stroke="${WHITE}" stroke-width="6"/></svg>`,
  },
  {
    id: 'ligne-dissuasion',
    name: 'Ligne de dissuasion',
    orientation: 'longitudinale',
    description:
      "Ligne continue d'un côté, pointillés très serrés de l'autre : elle « dissuade » de dépasser. Seuls les véhicules très lents — deux-roues, charrettes, tracteurs — restent dépassables du côté des pointillés.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="34" x2="240" y2="34" stroke="${WHITE}" stroke-width="5" stroke-dasharray="5 4"/><line x1="0" y1="46" x2="240" y2="46" stroke="${WHITE}" stroke-width="5"/></svg>`,
  },
  {
    id: 'passage-pietons-marquage',
    name: 'Passage piéton (marquage)',
    orientation: 'transversale',
    description:
      "Bandes blanches parallèles : la traversée réservée aux piétons. On ralentit à l'approche, on laisse passer, et on ne double jamais un véhicule arrêté devant.",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><g fill="${WHITE}"><rect x="120" y="42" width="16" height="38"/><rect x="146" y="42" width="16" height="38"/><rect x="172" y="42" width="16" height="38"/><rect x="198" y="42" width="16" height="38"/></g></svg>`,
  },
  {
    id: 'ligne-jaune',
    name: 'Ligne jaune et stationnement',
    orientation: 'longitudinale',
    description:
      "En jaune, le long du trottoir : continue, elle interdit l'arrêt et le stationnement ; discontinue, elle autorise l'arrêt mais pas le stationnement. Le tout premier usage de la peinture jaune est de dire « ici, on ne se gare pas ».",
    svg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="80" rx="6" fill="${ASPHALT}"/><line x1="0" y1="62" x2="112" y2="62" stroke="${YELLOW}" stroke-width="7"/><line x1="128" y1="62" x2="240" y2="62" stroke="${YELLOW}" stroke-width="7" stroke-dasharray="18 14"/><text x="120" y="30" font-family="IBM Plex Mono, monospace" font-size="17" font-weight="700" fill="${YELLOW}" text-anchor="middle">ARRÊT</text></svg>`,
  },
];
