export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  { term: 'Agglomération', definition: "Espace sur lequel sont groupés des immeubles bâtis rapprochés, dont l'entrée et la sortie sont signalées par des panneaux. La vitesse y est généralement limitée à 50 km/h." },
  { term: 'BMH (Bureau Municipal d\'Hygiène)', definition: "Organisme qui délivre le certificat médical exigé pour les extensions de permis vers les catégories C, D et E." },
  { term: 'Carte grise', definition: "Certificat d'immatriculation du véhicule. Document obligatoire à présenter avec le permis et l'attestation d'assurance lors d'un contrôle." },
  { term: 'Cédez le passage', definition: "Panneau triangulaire pointe en bas : oblige à ralentir et à laisser la priorité, sans arrêt total obligatoire si la voie est dégagée — contrairement au STOP." },
  { term: "CIM (Centre Immatriculateur d'Ambohidahy)", definition: "Lieu où l'on retire personnellement, sur rendez-vous, son permis de conduire une fois l'examen réussi." },
  { term: 'Croisement', definition: "Manœuvre où deux véhicules circulant en sens inverse se rejoignent en se tenant chacun sur sa droite, en laissant un espace latéral suffisant." },
  { term: 'Dépassement', definition: "Manœuvre consistant à doubler un véhicule plus lent. Se fait par la gauche sauf exception signalée, après vérification qu'aucun véhicule n'arrive en face." },
  { term: 'Distance de freinage', definition: "Distance parcourue entre le moment où le frein est actionné et l'arrêt complet du véhicule. Elle augmente au carré de la vitesse : doubler la vitesse la quadruple." },
  { term: 'Distance de réaction', definition: "Distance parcourue pendant le temps où le conducteur perçoit un danger et déclenche le freinage, avant même que les freins n'agissent — environ 1 seconde en conditions normales." },
  { term: 'Distance de sécurité', definition: "Espace à maintenir avec le véhicule qui précède, pour pouvoir s'arrêter sans le percuter en cas de freinage brusque. Règle pratique : au moins 2 secondes d'écart." },
  { term: "Panneau d'indication", definition: "Rectangle bleu ou vert : informe (parking, direction, passage piéton) sans imposer de contrainte directe sur la conduite." },
  { term: "Panneau d'obligation", definition: "Cercle à fond bleu plein : impose une action précise au conducteur (direction obligatoire, piste cyclable, vitesse minimale)." },
  { term: "Panneau de danger", definition: "Triangle blanc à bordure rouge : prévient d'un risque à venir (virage, chaussée glissante, passage d'animaux) sans rien interdire." },
  { term: "Panneau d'interdiction", definition: "Cercle à bordure rouge, souvent fond blanc : retire une possibilité au conducteur (sens interdit, stationnement interdit, limitation de vitesse)." },
  { term: 'Priorité à droite', definition: "Règle par défaut à une intersection sans signalisation : le véhicule arrivant de la droite passe en premier." },
  { term: 'Route prioritaire', definition: "Route signalée par un losange jaune : les voies adjacentes doivent céder le passage, quelle que soit leur position — la priorité à droite ne s'applique plus." },
  { term: 'STOP', definition: "Seul panneau de forme octogonale du code de la route. Impose un arrêt complet, même si la voie semble libre." },
];
