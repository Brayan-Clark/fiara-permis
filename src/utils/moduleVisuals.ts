import { panneaux, type RoadSign } from '../data/panneaux';

/**
 * Quelles illustrations accompagner chaque module.
 *
 * Ce ne sont pas des décorations : chaque module doit montrer ce dont il
 * parle. La planche complète des panneaux reste sur le module PK 1 et dans
 * le livret ; ailleurs on n'affiche que les panneaux cités dans le texte.
 */
const signIdsByModule: Record<string, string[]> = {
  'vitesse-distances': ['limitation-vitesse', 'fin-limitation-vitesse', 'vitesse-minimale'],
  'stationnement-documents': ['stationnement-interdit', 'parking'],
  'signalisation-horizontale': ['voie-bus', 'demi-tour-interdit', 'sens-interdit'],
  'passages-a-niveau': ['passage-niveau-sans-barriere', 'passage-niveau-barrieres'],
  'eclairage-visibilite': ['appel-urgence'],
};

/** Modules illustrés par le marquage au sol (signalisation horizontale). */
const markingModuleIds = new Set<string>(['signalisation-horizontale']);

export function moduleSigns(moduleId: string): RoadSign[] {
  const ids = signIdsByModule[moduleId];
  if (!ids) return [];
  return ids
    .map((id) => panneaux.find((sign) => sign.id === id))
    .filter((sign): sign is RoadSign => Boolean(sign));
}

export function moduleHasMarkings(moduleId: string): boolean {
  return markingModuleIds.has(moduleId);
}
