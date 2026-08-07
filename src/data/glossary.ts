export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  { term: 'Agglomération', definition: "Espace sur lequel sont groupés des immeubles bâtis rapprochés, dont l'entrée et la sortie sont signalées par des panneaux. La vitesse y est généralement limitée à 50 km/h." },
  { term: 'BMH (Bureau Municipal d\'Hygiène)', definition: "Organisme qui délivre le certificat médical exigé pour les extensions de permis vers les catégories C, D et E." },
  { term: 'Carte grise', definition: "Certificat d'immatriculation du véhicule. Document obligatoire à présenter avec le permis et l'attestation d'assurance lors d'un contrôle." },
  { term: 'Cédez le passage', definition: "Panneau triangulaire pointe en bas : oblige à ralentir et à laisser la priorité, sans arrêt total obligatoire si la voie est dégagée — contrairement au STOP." },
  { term: 'CIM (Centre Immatriculateur)', definition: "Service administratif chargé de l'immatriculation des véhicules et de la délivrance des permis de conduire. Le permis s'y retire personnellement, sur rendez-vous, une fois l'examen réussi. Adresse-toi au centre dont dépend ta région — ton auto-école t'indiquera lequel." },
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
  { term: 'Agent verbalisateur', definition: "Agent habilité à constater une infraction au code de la route et à appliquer la sanction correspondante. Il doit informer le conducteur de l'infraction constatée et de la sanction encourue." },
  { term: 'Amende forfaitaire (AF)', definition: "Sanction pécuniaire payable immédiatement à l'agent verbalisateur, classée en quatre catégories, AF1 à AF4, de la moins grave à la plus grave. Les montants sont fixés par décret et révisés." },
  { term: 'Délit de fuite', definition: "Fait de ne pas s'arrêter délibérément, ou de tenter de fuir, après avoir causé un accident. Sanction lourde : suspension ou retrait du permis, immobilisation du véhicule et poursuites pénales." },
  { term: 'Fourrière (mise en)', definition: "Transfert du véhicule vers un lieu désigné par l'autorité administrative. Intervient notamment quand l'infraction ne cesse pas dans les 48 heures, ou quand l'amende n'est pas payée dans ce délai." },
  { term: 'Immobilisation', definition: "Obligation faite au conducteur de maintenir son véhicule sur place, ou à proximité du lieu de constatation. Le véhicule reste sous la garde du conducteur ou du propriétaire, et l'immobilisation est levée dès que l'infraction cesse." },
  { term: 'Procès-verbal (PV)', definition: "Document dressé par l'agent en cas d'infractions multiples ou de refus de payer l'amende. Le contrevenant en reçoit une copie, mais seulement s'il la demande — pense à la réclamer." },
  { term: 'Récidive', definition: "Fait de commettre à nouveau la même infraction. Elle aggrave la sanction : pour plusieurs fautes, une amende à la première fois peut devenir une peine d'emprisonnement à la seconde." },
  { term: 'Retrait du permis', definition: "Fait de retirer le permis à un conducteur ayant commis une infraction, pour une durée déterminée par l'autorité habilitée. Peut être temporaire ou définitif. À distinguer de la suspension." },
  { term: 'Sanction administrative', definition: "Sanction touchant le droit de conduire ou le véhicule : suspension ou retrait du permis, interdiction de solliciter un nouveau permis, immobilisation ou mise en fourrière du véhicule." },
  { term: 'Sanction pénale', definition: "Sanction prononcée par le tribunal quand la faute dépasse la contravention : amende et, selon les cas, peine d'emprisonnement." },
  { term: 'Suspension du permis', definition: "Interdiction provisoire de conduire un véhicule à la suite d'une infraction. Contrairement au retrait, le permis n'est pas repris définitivement." },
];
