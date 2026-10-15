/**
 * Schémas — les notions qui ne se photographient pas.
 *
 * Une photo montre l'état d'une route ; elle ne montre pas un angle mort, un
 * tour de priorité ou une répartition de charge. Ces dessins-là sont donc
 * faits maison, dans le même vocabulaire graphique que les panneaux et le
 * marquage au sol : mêmes couleurs, mêmes formes, aucun texte en dur dans le
 * dessin (il doit rester lisible si un jour on le traduit).
 */
export interface Schema {
  id: string;
  name: string;
  description: string;
  /** Module du cours concerné. */
  module: string;
  svg: string;
}

const RED = '#c1440e';
const INK = '#1b1b1f';
const GREY = '#d9d5cd';
const DARK = '#4a4a50';
const GREEN = '#2f6b4f';
const BLUE = '#1e5aa8';
const SUN = '#e8a93b';

export const schemas: Schema[] = [
  {
    id: 'priorite-a-droite',
    module: 'priorites-intersections',
    name: 'Intersection sans panneau : priorité à droite',
    description:
      "Deux véhicules arrivent en même temps. Vert (1) vient de la droite de l'autre : c'est lui qui passe le premier. Orange (2) attend.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Intersection sans panneau, priorité au véhicule venant de la droite"><rect x="0" y="30" width="120" height="20" fill="${GREY}"/><rect x="50" y="0" width="20" height="80" fill="${GREY}"/><line x1="0" y1="40" x2="50" y2="40" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="5 4"/><line x1="70" y1="40" x2="120" y2="40" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="5 4"/><line x1="60" y1="0" x2="60" y2="30" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="5 4"/><line x1="60" y1="50" x2="60" y2="80" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="5 4"/><rect x="104" y="32" width="14" height="16" rx="3" fill="${GREEN}"/><path d="M104 40 L78 40" stroke="${GREEN}" stroke-width="4" stroke-linecap="round"/><polygon points="72,40 82,34 82,46" fill="${GREEN}"/><rect x="52" y="62" width="16" height="14" rx="3" fill="${RED}"/><path d="M60 62 L60 52" stroke="${RED}" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 3"/><circle cx="60" cy="46" r="5" fill="none" stroke="${RED}" stroke-width="3"/></svg>`,
  },
  {
    id: 'feu-et-fleche',
    module: 'feux-tricolores',
    name: 'Feu tricolore et flèche de dégagement',
    description:
      "À gauche, le feu dans sa forme ordinaire : rouge allumé, les deux autres éteints. À droite, le feu à flèche : seule la direction fléchée est autorisée, le reste du carrefour est encore fermé.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feu tricolore ordinaire et feu à flèche de dégagement"><rect x="18" y="4" width="28" height="72" rx="6" fill="${DARK}"/><circle cx="32" cy="20" r="9" fill="${RED}"/><circle cx="32" cy="40" r="9" fill="${SUN}" opacity="0.25"/><circle cx="32" cy="60" r="9" fill="${GREEN}" opacity="0.25"/><rect x="74" y="4" width="28" height="72" rx="6" fill="${DARK}"/><circle cx="88" cy="20" r="9" fill="${RED}" opacity="0.25"/><circle cx="88" cy="40" r="9" fill="${SUN}" opacity="0.25"/><circle cx="88" cy="60" r="9" fill="${GREEN}" opacity="0.25"/><path d="M96 60 L84 60" stroke="${GREEN}" stroke-width="5" stroke-linecap="round"/><polygon points="78,60 88,54 88,66" fill="${GREEN}"/></svg>`,
  },
  {
    id: 'courbe-alcool',
    module: 'alcool-securite',
    name: "Le risque grimpe avant le seuil légal",
    description:
      "Plus on boit, plus le risque d'accident augmente — et il augmente bien avant la limite autorisée. Les barres suivent les ordres de grandeur publiés par les campagnes de sécurité routière, pas une échelle exacte.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Risque d'accident en fonction de la quantité d'alcool"><line x1="10" y1="68" x2="114" y2="68" stroke="${INK}" stroke-width="2"/><rect x="18" y="60" width="16" height="8" fill="${GREEN}"/><rect x="44" y="48" width="16" height="20" fill="${GREEN}"/><rect x="70" y="30" width="16" height="38" fill="${SUN}"/><rect x="96" y="12" width="16" height="56" fill="${RED}"/><line x1="44" y1="8" x2="44" y2="70" stroke="${RED}" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
  },
  {
    id: 'chargement-remorque',
    module: 'remorques',
    name: 'Où poser la charge sur une remorque',
    description:
      "La charge se place au-dessus de l'essieu, légèrement en avant : la remorque reste plaquée au sol et le timon n'a pas à supporter tout le poids. Une charge trop en arrière fait tanguer l'ensemble.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Répartition de la charge au-dessus de l'essieu de la remorque"><rect x="8" y="40" width="34" height="16" rx="4" fill="${DARK}"/><rect x="16" y="30" width="18" height="10" rx="3" fill="${DARK}"/><circle cx="18" cy="58" r="6" fill="${INK}"/><circle cx="38" cy="58" r="6" fill="${INK}"/><line x1="42" y1="48" x2="54" y2="48" stroke="${INK}" stroke-width="3"/><circle cx="48" cy="48" r="3" fill="${SUN}"/><rect x="54" y="36" width="56" height="16" rx="3" fill="${GREY}" stroke="${INK}" stroke-width="1.5"/><rect x="62" y="20" width="34" height="16" rx="2" fill="${BLUE}"/><rect x="80" y="52" width="22" height="9" rx="2" fill="${INK}"/><circle cx="72" cy="64" r="6" fill="${INK}"/><circle cx="98" cy="64" r="6" fill="${INK}"/></svg>`,
  },
  {
    id: 'categories-permis',
    module: 'permis-categories',
    name: 'Les silhouettes des catégories',
    description:
      "De la moto au bus, chaque catégorie de permis correspond à un véhicule et à son poids. La remorque (E) ne se conduit pas seule : elle vient toujours s'ajouter à une autre catégorie.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Silhouettes des catégories de permis A, B, C, D et E"><g fill="${INK}"><circle cx="14" cy="46" r="5"/><circle cx="30" cy="46" r="5"/><path d="M14 46 L22 34 L30 46 M18 40 L26 40" stroke="${INK}" stroke-width="2.4" fill="none"/></g><g><path d="M42 50 L42 44 Q42 38 48 38 L58 38 Q64 38 64 44 L64 50 Z" fill="${DARK}"/><circle cx="46" cy="52" r="4" fill="${INK}"/><circle cx="60" cy="52" r="4" fill="${INK}"/></g><g><rect x="70" y="34" width="20" height="14" rx="2" fill="${DARK}"/><rect x="70" y="28" width="10" height="8" rx="2" fill="${DARK}"/><circle cx="74" cy="52" r="4" fill="${INK}"/><circle cx="86" cy="52" r="4" fill="${INK}"/></g><g><rect x="94" y="30" width="22" height="18" rx="3" fill="${DARK}"/><rect x="98" y="36" width="5" height="5" fill="${GREY}"/><rect x="106" y="36" width="5" height="5" fill="${GREY}"/><circle cx="98" cy="52" r="4" fill="${INK}"/><circle cx="112" cy="52" r="4" fill="${INK}"/></g><g fill="none" stroke="${RED}" stroke-width="2.5"><path d="M44 68 L108 68"/><polygon points="112,68 106,64 106,72" fill="${RED}"/></g><g><path d="M4 68 L14 54 L42 54 L52 68" stroke="${BLUE}" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/><circle cx="46" cy="66" r="3" fill="${BLUE}"/></g></svg>`,
  },
  {
    id: 'kit-securite',
    module: 'accident-secours',
    name: 'Ce qui protège avant même de secourir',
    description:
      "Le triangle se pose bien avant le véhicule en panne, et le gilet se met avant de sortir : sans eux, le sauveteur devient le prochain accident. Ensuite seulement, on alerte et on protège la victime.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle de présignalisation et gilet de haute visibilité"><path d="M6 74 L20 66 L34 74 Z" fill="${RED}" opacity="0.5"/><path d="M4 66 L20 6 L36 66 Z" fill="${RED}"/><path d="M9 62 L20 17 L31 62 Z" fill="#ffffff"/><path d="M14 34 L20 22 L26 34" stroke="${RED}" stroke-width="2.6" fill="none"/><path d="M58 30 L74 12 L90 30 L90 62 L58 62 Z" fill="${SUN}"/><path d="M67 30 L74 21 L81 30" fill="none" stroke="${SUN}" stroke-width="6" stroke-linecap="round"/><rect x="61" y="34" width="7" height="28" fill="#ffffff" opacity="0.85"/><rect x="80" y="34" width="7" height="28" fill="#ffffff" opacity="0.85"/><line x1="74" y1="46" x2="74" y2="62" stroke="#ffffff" stroke-width="2"/><path d="M100 62 L100 40 Q108 40 108 50 L108 62" fill="none" stroke="${BLUE}" stroke-width="3" stroke-linecap="round"/><circle cx="104" cy="30" r="6" fill="none" stroke="${BLUE}" stroke-width="3"/></svg>`,
  },
  {
    id: 'documents-a-bord',
    module: 'infractions-sanctions',
    name: 'Les documents que le conducteur doit pouvoir montrer',
    description:
      "Permis, carte grise, attestation d'assurance et visite technique : quatre documents, quatre obligations distinctes. Ne pas pouvoir en présenter un est en soi une infraction, indépendamment de l'état de conduite.",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quatre documents du conducteur"><g stroke="${INK}" stroke-width="1.5"><rect x="8" y="10" width="46" height="28" rx="3" fill="#ffffff"/><rect x="66" y="10" width="46" height="28" rx="3" fill="#ffffff"/><rect x="8" y="44" width="46" height="28" rx="3" fill="#ffffff"/><rect x="66" y="44" width="46" height="28" rx="3" fill="#ffffff"/></g><rect x="14" y="16" width="14" height="16" rx="2" fill="${GREY}"/><line x1="33" y1="19" x2="48" y2="19" stroke="${DARK}" stroke-width="2"/><line x1="33" y1="25" x2="48" y2="25" stroke="${DARK}" stroke-width="2"/><line x1="14" y1="34" x2="48" y2="34" stroke="${DARK}" stroke-width="2"/><rect x="72" y="16" width="34" height="6" fill="${BLUE}" opacity="0.25"/><line x1="72" y1="28" x2="106" y2="28" stroke="${DARK}" stroke-width="2"/><line x1="72" y1="34" x2="94" y2="34" stroke="${DARK}" stroke-width="2"/><circle cx="26" cy="56" r="7" fill="none" stroke="${GREEN}" stroke-width="2.5"/><line x1="18" y1="68" x2="44" y2="68" stroke="${DARK}" stroke-width="2"/><line x1="72" y1="52" x2="106" y2="52" stroke="${DARK}" stroke-width="2"/><line x1="72" y1="58" x2="106" y2="58" stroke="${DARK}" stroke-width="2"/><line x1="72" y1="64" x2="92" y2="64" stroke="${DARK}" stroke-width="2"/><path d="M92 64 L104 64 L104 52" stroke="${RED}" stroke-width="2.5" fill="none"/></svg>`,
  },
];

/** Schémas attachés à un module. */
export function schemasForModule(moduleId: string): Schema[] {
  return schemas.filter((s) => s.module === moduleId);
}
