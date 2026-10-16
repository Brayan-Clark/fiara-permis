import type { QuizMg } from './types';
import { panneauxSignalisationMg } from './panneaux-signalisation';
import { prioritesIntersectionsMg } from './priorites-intersections';
import { vitesseDistancesMg } from './vitesse-distances';
import { alcoolSecuriteMg } from './alcool-securite';
import { stationnementDocumentsMg } from './stationnement-documents';
import { permisCategoriesMg } from './permis-categories';
import { infractionsSanctionsMg } from './infractions-sanctions';
import { croisementDepassementMg } from './croisement-depassement';
import { accidentSecoursMg } from './accident-secours';
import { vehiculeEquipementsMg } from './vehicule-equipements';
import { partagerLaRouteMg } from './partager-la-route';
import { deuxRouesMg } from './deux-roues';
import { categoriesProMg } from './categories-pro';
import { panneauxImagesMg } from './panneaux-images';
import { livreCompletMg } from './livre-complet';

export type { QuizMg };

/** Ny fandikana malagasy rehetra, araka ny `id` an'ny fanontaniana. */
export const quizMg: QuizMg = {
  ...panneauxSignalisationMg,
  ...prioritesIntersectionsMg,
  ...vitesseDistancesMg,
  ...alcoolSecuriteMg,
  ...stationnementDocumentsMg,
  ...permisCategoriesMg,
  ...infractionsSanctionsMg,
  ...croisementDepassementMg,
  ...accidentSecoursMg,
  ...vehiculeEquipementsMg,
  ...partagerLaRouteMg,
  ...deuxRouesMg,
  ...categoriesProMg,
  ...panneauxImagesMg,
  ...livreCompletMg,
};

/** Anaran'ny fonosana quiz tsirairay. */
export const quizTitleMg: Record<string, string> = {
  'panneaux-signalisation': 'Ny famantarana eny an-dalana',
  'priorites-intersections': 'Laharam-pahamehana sy sampanan-dalana',
  'vitesse-distances': 'Hafainganam-pandeha sy elanelana fiarovana',
  'alcool-securite': 'Toaka, fehikibo ary fiarovana',
  'stationnement-documents': 'Fijanonana, fiantsonana ary taratasy',
  'permis-categories': "Ireo sokajin'ny permis",
  'infractions-sanctions': 'Fandikan-dalàna sy sazy',
  'croisement-depassement': 'Fifanenana sy fihoarana',
  'accident-secours': 'Lozam-pifamoivoizana : izay tokony hatao',
  'vehicule-equipements': 'Ny fiara sy ny fitaovany',
  'partager-la-route': 'Mizara ny lalana',
  'deux-roues': 'Moto : mitondra moto',
  'poids-lourds': 'Kamiao lehibe : mitondra kamiao',
  'transport-personnes': 'Fitaterana olona',
  remorques: 'Remorque sy semi-remorque',
  'panneaux-images': 'Famantarana an-tsary',
  'civisme': "Fahalalam-pomba sy fitondran-tena tsara",
  'notions-mecaniques': "Fahalalana momba ny milina sy fikarakarana",
  'eclairage-visibilite': "Jiro, fahitana ary feo fampitandremana",
  'passages-a-niveau': "Fiampitana lalamby",
  'signalisation-horizontale': "Ny sary amin'ny tany",
};
