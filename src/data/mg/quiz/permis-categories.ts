import type { QuizMg } from './types';

export const permisCategoriesMg: QuizMg = {
  'pc-1': {
    question: "Firy taona farafahakeliny vao afaka mahazo permis sokajy A na A' ?",
    choices: ["14 taona", "16 taona", "18 taona", "21 taona"],
    explanation: "Ny sokajy A sy A' (moto) dia azo alaina manomboka amin'ny 16 taona, miaraka amin'ny fanekena avy amin'ny ray aman-dreny ho an'ny zaza tsy ampy taona.",
  },
  'pc-2': {
    question: "Firy taona farafahakeliny ho an'ny sokajy B (fiara maivana) ?",
    choices: ["16 taona", "18 taona", "19 taona", "21 taona"],
    explanation: "Ny sokajy B, ho an'ny fiara maivana hatramin'ny toerana 9, dia azo alaina manomboka amin'ny 18 taona.",
  },
  'pc-3': {
    question: "Mba hahazoana ny sokajy C (kamiao lehibe), inona no fepetra mialoha ilaina ?",
    choices: ["Tsy misy, azo andramana mivantana", "Manana permis B efa herintaona farafahakeliny", "Feno 30 taona", "Manana ny sokajy A"],
    explanation: "Ny sokajy C dia mitaky permis B efa herintaona farafahakeliny vao azo alaina.",
  },
  'pc-4': {
    question: "Aiza no alaina ny permis rehefa afaka ny fanadinana ?",
    choices: ["Any amin'ny auto-école mivantana", "Any amin'ny Centre Immatriculateur (CIM) misy ny faritra misy anao", "Any amin'ny kaominina misy ny fonenana", "Alefa amin'ny paositra ho azy"],
    explanation: "Alainao manokana, amin'ny fotoana voatendry, ao amin'ny Centre Immatriculateur (CIM). Ny auto-école-nao no hilaza aminao hoe iza no misy ny faritra misy anao.",
  },
  'pc-5': {
    question: "Sokajy inona no mila fanamarinana ara-pahasalamana avy amin'ny Bureau Municipal d'Hygiène ?",
    choices: ["A sy A' ihany", "B ihany", "Ny fanitarana mankany amin'ny C, D, E", "Tsy misy sokajy"],
    explanation: "Ny fanitarana mankany amin'ny sokajy C, D ary E dia mitaky fanamarinana ara-pahasalamana avy amin'ny BMH, miampy ireo taratasin'ny sokajy B.",
  },
  'pc-6': {
    question: "Afaka mahazo permis sokajy A na A' ve ny zaza 16 taona ?",
    choices: ["Tsia, tsy alohan'ny 18 taona mihitsy", "Eny, raha manaiky ny ray aman-dreny na olon-dehibe tompon'andraikitra", "Eny, tsy misy fepetra", "Tsia, manomboka amin'ny 17 taona ihany"],
    explanation: "Amin'ny 16 taona, afaka mahazo permis A na A' ny zaza tsy ampy taona raha manaiky ny ray aman-dreny na olon-dehibe tompon'andraikitra.",
  },
  'pc-7': {
    question: "Firy taona farafahakeliny ho an'ny sokajy D (fitaterana mpandeha) ?",
    choices: ["18 taona", "19 taona", "21 taona, miaraka amin'ny fanamarinana ara-pahasalamana", "25 taona"],
    explanation: "Ny sokajy D (bus, taxi-be) dia mitaky 21 taona feno sy fanamarinana ara-pahasalamana.",
  },
  'pc-8': {
    question: "Sokajin-permis inona no ho an'ny fiara misy remorque na semi-remorque ?",
    choices: ["Sokajy A'", "Sokajy C", "Sokajy D", "Sokajy E"],
    explanation: "Ny sokajy E no ho an'ny fiara misy remorque na semi-remorque, ary mitaky efa manana ny sokajy B sy C.",
  },
  'pc-9': {
    question: "Ny sokajy A' dia mikasika :",
    choices: ["Ny kamiao lehibe", "Ny moto maivana na antenantenany", "Ny fiara fitaterana mpandeha", "Ny fiara misy remorque"],
    explanation: "A' no sokajy antenantenany ho an'ny moto maivana, azo alaina manomboka amin'ny 16 taona toy ny sokajy A.",
  },
  'pc-10': {
    question: "Ny permis sokajy B dia ahafahana mitondra :",
    choices: ["Kamiao hatramin'ny 7,5 taonina", "Fiara maivana hatramin'ny toerana 9", "Bus fitateram-bahoaka an-tanàn-dehibe", "Moto lehibe cylindrée"],
    explanation: "Ny sokajy B dia ho an'ny fiara maivana — fiara sy camionnette — hatramin'ny toerana fipetrahana 9.",
  },
  'pc-11': {
    question: "Ny permis A' (A1) dia ahafahana mitondra :",
    choices: ["Cyclomoteur latsaky ny 50 cm³ ihany", "Vélomoteur 50 hatramin'ny 125 cm³", "Moto mihoatra ny 125 cm³", "Fiara misy toerana 9"],
    explanation: "A' : vélomoteur 50 hatramin'ny 125 cm³, manomboka amin'ny 16 taona. Mihoatra ny 125 cm³, mila ny permis A.",
  },
  'pc-12': {
    question: "Amin'ny permis B, azo sintonina ny remorque tsy mihoatra ny PTAC :",
    choices: ["350 kg", "750 kg", "3 500 kg", "Tsy voafetra"],
    explanation: "Ny permis B dia mamela remorque 750 kg PTAC farafahabetsany, ao aorian'ny fiara 3 500 kg PTAC farafahabetsany.",
  },
  'pc-13': {
    question: "Inona no dikan'ny PTAC ?",
    choices: ["Prix Total d'Achat du Camion (vidin'ny kamiao)", "Poids Total Autorisé en Charge (lanja ambony indrindra rehefa feno entana)", "Permis Temporaire À Conduire (permis vonjimaika)", "Poids Total À Vide (lanja tsy misy entana)"],
    explanation: "PTAC : Poids Total Autorisé en Charge — ny lanja ambony indrindra azon'ny fiara entina rehefa feno entana, voasoratra ao amin'ny carte grise.",
  },
  'pc-14': {
    question: "Mba hitondrana taxi amin'ny permis B, ilaina indrindra :",
    choices: ["Feno 18 taona", "Feno 21 taona, manana certificat de capacité ary permis B efa herintaona farafahakeliny", "Carte grise ihany", "Permis C"],
    explanation: "Taxi : 21 taona farafahakeliny, fanamarinana ara-pahasalamana, certificat de capacité, ary permis B efa herintaona farafahakeliny.",
  },
  'pc-15': {
    question: "Mpamily taxi 45 taona dia tsy maintsy manao fizahana ara-pahasalamana :",
    choices: ["Isan-taona", "Isaky ny 2 taona", "Isaky ny 3 taona", "Isaky ny 5 taona"],
    explanation: "Latsaky ny 40 taona : isaky ny 5 taona ; 40 hatramin'ny 52 taona : isaky ny 3 taona ; 52 hatramin'ny 60 taona : isaky ny 2 taona ; mihoatra ny 60 taona : isan-taona.",
  },
  'pc-16': {
    question: "Ho an'ny fampiasana manokana, ny permis B dia :",
    choices: ["Manan-kery 5 taona", "Maharitra mandrakizay, tsy mila fizahana ara-pahasalamana", "Havaozina isan-taona", "Manan-kery hatramin'ny 60 taona"],
    explanation: "Ny permis B (toy ny A sy A') dia maharitra mandrakizay ho an'ny fampiasana manokana ; ny fampiasana ara-asa sasany ihany no mila fizahana ara-pahasalamana.",
  },
  'pc-17': {
    question: "Firy taona farafahakeliny vao afaka mandeha bisikileta na cyclomoteur eny an-dalana ?",
    choices: ["10 taona", "14 taona", "16 taona", "18 taona"],
    explanation: "Ny taratasy fampianarana dia mametraka ny 14 taona ho taona farafahakeliny ho an'ny bisikileta sy cyclomoteur.",
  },
  'pc-18': {
    question: "Iza no manome ny permis de conduire ?",
    choices: ["Ny kaominina", "Ny centre immatriculateur", "Ny auto-école", "Ny zandary"],
    explanation: "Fahazoan-dalana omen'ny centre immatriculateur ny permis, rehefa nahomby tamin'ny fanadinana teôrika sy fampiharana.",
  },
  'pc-19': {
    question: "Ny fitsipi-pifamoivoizana (code de la route) dia :",
    choices: ["Ny fitsipiky ny auto-école", "Ny fitambaran'ny fitsipika mihatra amin'ny mpampiasa lalana rehetra mba hilamina ny fifamoivoizana ary tsy hisy loza", "Ny lisitry ny takelaka ihany", "Ny fitsipiky ny taxi"],
    explanation: "Mihatra amin'ny mpampiasa lalana rehetra izy — ao anatin'izany ny mpandeha an-tongotra — mba ho voalamina sy hilamina ary tsy hisy fitohanana ny fifamoivoizana.",
  },
  'pc-20': {
    question: "Firy ny toerana fipetrahana farafahabetsany, ao anatin'izany ny mpamily, ho an'ny fiara amin'ny permis B ?",
    choices: ["5", "7", "9", "12"],
    explanation: "Permis B : toerana fipetrahana 9 farafahabetsany, ao anatin'izany ny mpamily, na 3 500 kg PTAC ho an'ny entana.",
  },
  'pc-21': {
    question: "Inona no fitsipika fiarovana mihatra amin'ny moto rehetra misy motera, na antoandro na alina ?",
    choices: ["Jiro + casque", "Akanjo mavo", "Klaxon tsy mitsahatra", "Mandeha eo amin'ny trottoir"],
    explanation: "Jiro mirehitra sy casque, na antoandro na alina.",
  },
  'pc-22': {
    question: "Mba hitondrana fiara mpitondra marary amin'ny permis B, ilaina indrindra :",
    choices: ["Fahazoan-dalana avy amin'ny kaominina sy fanamarinana ara-pahasalamana", "Permis C", "18 taona fotsiny", "Carte violette"],
    explanation: "Ambulance : 21 taona, fanamarinana ara-pahasalamana ary fahazoan-dalana avy amin'ny kaominina.",
  },
  'pc-23': {
    question: "Mba ho mpampianatra (moniteur) any amin'ny auto-école, ilaina :",
    choices: ["Ny CAP de moniteur, 21 taona ary permis B efa herintaona farafahakeliny", "Permis B fotsiny", "Feno 18 taona", "Permis D"],
    explanation: "Auto-école : 21 taona, fanamarinana ara-pahasalamana, CAP de moniteur ary permis B efa herintaona farafahakeliny.",
  },
  'pc-24': {
    question: "Mpamily taxi 63 taona dia manao fizahana ara-pahasalamana :",
    choices: ["Isaky ny 5 taona", "Isaky ny 3 taona", "Isaky ny 2 taona", "Isan-taona"],
    explanation: "Mihoatra ny 60 taona, isan-taona ny fizahana ara-pahasalamana.",
  },
  'pc-25': {
    question: "Iza no manome ny fizahana ara-pahasalamana ho an'ny fampiasana ara-asa ny permis B ?",
    choices: ["Ny CIM", "Dokotera any amin'ny toeram-pitsaboana (dispensaire)", "Ny polisy", "Ny auto-école"],
    explanation: "Dokotera any amin'ny dispensaire no manome azy.",
  },
  'pc-26': {
    question: "Ny fitaterana ankizy amin'ny permis B dia mitaky :",
    choices: ["18 taona, tsy misy hafa", "21 taona sy fanamarinana ara-pahasalamana", "Permis D", "Fahazoan-dalana avy amin'ny ray aman-dreny"],
    explanation: "Fitaterana ankizy : 21 taona farafahakeliny sy fanamarinana ara-pahasalamana.",
  },
};
