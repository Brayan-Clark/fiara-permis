import { getCollection } from 'astro:content';

/**
 * Nombre de modules du parcours, dérivé du contenu réel. Source unique de
 * vérité : ajouter un fichier dans src/content/cours suffit, plus besoin de
 * corriger un « 6 » écrit en dur dans les pages, le SVG du ravinala et l'i18n.
 */
export async function getModuleCount(): Promise<number> {
  return (await getCollection('cours')).length;
}

/**
 * Versions malgaches des modules, indexées par identifiant de leçon. Une
 * leçon absente de la map n'a pas encore de traduction relue.
 */
export async function getMgModules() {
  return new Map((await getCollection('coursMg')).map((m) => [m.id, m]));
}
