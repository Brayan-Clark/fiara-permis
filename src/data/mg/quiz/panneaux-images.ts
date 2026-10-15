import type { QuizMg } from './types';

// Ireo karatra « inona no ataonao manoloana ity famantarana ity ? ». Ireo karatra
// « inona no dikan'ity famantarana ity ? » kosa dia amboarina ho azy ao amin'ny
// ./index.ts avy amin'ny anaran'ny famantarana malagasy.
export const panneauxImagesMg: QuizMg = {
  'pim-c1': {
    question: "Manoloana ity famantarana ity, inona no tokony hataonao ?",
    choices: ["Mampiadana ary mandalo raha malalaka ny lalana", "Mijanona tanteraka eo amin'ny tsipika, avy eo mamela handalo", "Mi-klaxon ary mandalo", "Manafaingana mba hiala amin'ny sampanan-dalana"],
    explanation: "STOP : tsy maintsy mijanona tanteraka eo amin'ny tsipika 50 sm, na toa malalaka aza ny lalana, avy eo mamela handalo.",
  },
  'pim-c2': {
    question: "Manoloana ity famantarana ity, malalaka tanteraka ny lalana ankavanana sy ankavia. Tsy maintsy mijanona ve ianao ?",
    choices: ["Eny, foana", "Tsia : mampiadana ary mamela handalo raha misy olona tonga ihany", "Eny, mandritra ny 3 segondra", "Tsia, ary ianao no manan-daharam-pahamehana"],
    explanation: "Cédez le passage : tsy voatery mijanona raha malalaka ny lalana, mifanohitra amin'ny STOP.",
  },
  'pim-c3': {
    question: "Eo ambanin'ity famantarana ity, afaka mijanona 1 minitra ve ianao mba hampidina mpandeha ?",
    choices: ["Eny, azo atao ny fijanonana fohy", "Tsia, tsy azo ijanonana na iantsonana", "Eny, amin'ny alina ihany", "Tsia, afa-tsy ny taxi"],
    explanation: "Ny fiantsonana ihany no raran'ity famantarana ity. Mbola azo atao ny fijanonana fohy (2 minitra farafahabetsany, vonona hiainga ny mpamily).",
  },
  'pim-c4': {
    question: "Eo ambanin'ity famantarana ity, afaka mijanona 1 minitra ve ianao mba hampidina mpandeha ?",
    choices: ["Eny, azo atao ny fijanonana fohy", "Tsia, tsy azo ijanonana na iantsonana", "Eny, avela mandeha ny motera", "Eny, miaraka amin'ny jiro fampitandremana"],
    explanation: "Faribolana voatsipika miampita : voarara NA ny fijanonana NA ny fiantsonana, na vetivety aza.",
  },
  'pim-c5': {
    question: "Tonga eo amin'ny tetezana tery misy ity famantarana ity ianao. Misy kamiao avy manoloana. Inona no ataonao ?",
    choices: ["Ianao no mandalo voalohany", "Avelanao handalo aloha izy", "Mi-klaxon ianao mba hihemorany", "Manafaingana ianao"],
    explanation: "Manery anao hamela handalo ny fiara avy amin'ny lalana mifanohitra ity famantarana ity.",
  },
  'pim-c6': {
    question: "Tonga eo amin'ny lalana tery misy ity famantarana ity ianao. Iza no mandalo voalohany ?",
    choices: ["Ianao", "Ny fiara avy manoloana", "Ny fiara lehibe indrindra", "Izay mi-klaxon"],
    explanation: "Efamira manga misy zana-tsipika fotsy lehibe kokoa : ianao no manan-daharam-pahamehana amin'ireo avy manoloana, izay tsy maintsy mamela anao.",
  },
  'pim-c7': {
    question: "Manambara sampanan-dalana ho anao ity famantarana ity. Iza no manan-daharam-pahamehana ?",
    choices: ["Ny fiara avy amin'ny ankavanana", "Ianao, eo amin'ny lalanao", "Ireo avy amin'ny ankavia", "Izay tonga voalohany"],
    explanation: "Lakroa « lalana iray malalaka, iray tery » : ianao no manan-daharam-pahamehana, ireo avy amin'ny lalana eo amin'ny sisiny no mamela anao.",
  },
  'pim-c8': {
    question: "Manambara sampanan-dalana ho anao ity famantarana ity. Iza no manan-daharam-pahamehana ?",
    choices: ["Ianao", "Ny fiara avy amin'ny ankavananao", "Ny fiara avy amin'ny ankavianao", "Ny kamiao"],
    explanation: "Lakroa X ao anaty telozoro : priorité à droite eo amin'ny sampanan-dalana manaraka.",
  },
  'pim-c9': {
    question: "Aorian'ity famantarana ity, eo amin'ny sampanan-dalana manaraka tsy misy famantarana :",
    choices: ["Mbola manan-daharam-pahamehana ianao", "Mihatra indray ny priorité à droite", "Tsy maintsy mijanona ianao", "Manana priorité à gauche ianao"],
    explanation: "Losanjy voatsipika : tapitra ny lalana manan-daharam-pahamehana. Miverina amin'ny fitsipika ankapobeny, ao anatin'izany ny priorité à droite.",
  },
  'pim-c10': {
    question: "Ity famantarana ity dia midika hoe :",
    choices: ["Fiafaran'ny lalana", "Fiafaran'ny fandrarana rehetra voalaza teo aloha", "Voarara ny zava-drehetra", "Fiafaran'ny tanàna"],
    explanation: "Faribolana fotsy voatsipika mainty : tapitra avokoa ny fandrarana rehetra teo aloha (hafainganana, fihoarana…).",
  },
  'pim-c11': {
    question: "Ity efamira manga misy isa ity dia manondro :",
    choices: ["Hafainganana ambony indrindra tsy maintsy arahina", "Hafainganana atoro", "Hafainganana farafahakeliny tsy maintsy atao", "Ny halavirana hatrany amin'ny tanàna"],
    explanation: "Efamira manga = fampahafantarana : hafainganana atoro. Ao anaty faribolana mena ny fetra tsy maintsy arahina ; ao anaty faribolana manga ny hafainganana farafahakeliny.",
  },
  'pim-c12': {
    question: "Ity faribolana manga misy isa ity dia manery :",
    choices: ["Hafainganana ambony indrindra", "Hafainganana farafahakeliny", "Elanelana farafahakeliny", "Lanja ambony indrindra"],
    explanation: "Faribolana manga = obligation : mandehana farafahakeliny amin'io hafainganana io (raha mamela izany ny toe-javatra).",
  },
  'pim-c13': {
    question: "Aorian'ity famantarana ity, raha tsy misy fanondroana hafa, firy ny hafainganana ambony indrindra azonao atao ?",
    choices: ["30 km/h", "50 km/h", "80 km/h", "100 km/h"],
    explanation: "Fidirana an-tanàna : mihatra ny fetra ankapobeny 50 km/h, afa-tsy raha misy takelaka hafa.",
  },
  'pim-c14': {
    question: "Manoloana ity famantarana ity, inona no ataonao ?",
    choices: ["Manafaingana ianao mba hiampita haingana", "Mampiadana be ianao, mijery sy mihaino alohan'ny hiampitana", "Mi-klaxon ianao fa tsy mijanona", "Tsy misy zavatra manokana"],
    explanation: "Fiampitana lalamby tsy misy sakana : tsy hisy hampijanona ny lamasinina ho anao. Ny lamasinina no manan-daharam-pahamehana foana.",
  },
  'pim-c15': {
    question: "Misy andian'omby miampita aorian'ity famantarana ity. Inona no ataonao ?",
    choices: ["Mi-klaxon ianao mba hampandehanana azy", "Mampiadana ianao, tsy mi-klaxon, ary miandry", "Mandalo eo anelanelan'ny biby ianao", "Manafaingana ianao"],
    explanation: "Tsy azo vinavinaina ny biby taitra : mampiadana, tsy mi-klaxon ary miandry mandra-pahavitany miampita.",
  },
  'pim-c16': {
    question: "Mandalo eo anoloan'ity famantarana ity ianao nefa tsy mijanona. Inona no mety hiafaranao ?",
    choices: ["Tsy misy", "Fanesorana ny permis sy figadrana hatramin'ny 3 volana noho ny tsy fanarahana baiko", "Fanamarihana tsotra", "Lamandy sokajy voalohany fotsiny"],
    explanation: "Ny tsy fijanonana rehefa asain'ny polisy mijanona dia sazina figadrana 10 andro hatramin'ny 3 volana sy fanesorana ny permis.",
  },
  'pim-c17': {
    question: "Eo ambanin'ity famantarana ity, afaka mi-klaxon ve ianao ?",
    choices: ["Eny, amin'ny antoandro", "Tsia, afa-tsy raha misy loza avy hatrany", "Eny, mba hiarahabana", "Eny, amin'ny alina"],
    explanation: "Voarara ny klaxon (hopitaly, faritra mangina), afa-tsy mba hisorohana loza.",
  },
  'pim-c18': {
    question: "Nahoana no mavo ny ambadik'ity famantarana ity ?",
    choices: ["Satria efa antitra izy", "Satria famantarana vonjimaika izy", "Satria ao an-tanàna izy", "Satria tsy voatery arahina izy"],
    explanation: "Ny ambadika mavo dia manambara famantarana vonjimaika (asa an-dalana, fivilihana). Ambony noho ny famantarana maharitra izy.",
  },
  'pim-c19': {
    question: "Mena ny jiro lehibe, nefa mirehitra mankavanana ity zana-tsipika maitso ity. Inona no azonao atao ?",
    choices: ["Tsy misy, miandry ny maitso ianao", "Mivily ankavanana, nefa mamela handalo ny hafa", "Mandeha mahitsy", "Mivily ankavia"],
    explanation: "Ny jiro faha-4 (zana-tsipika maitso) dia mamela anao hivily mankany amin'ny lalana tondroin'ny zana-tsipika, nefa avela handalo aloha ny mpampiasa lalana hafa.",
  },
  'pim-c20': {
    question: "Lasa mavo tsy mipi-maso ny jiro raha efa akaiky dia akaiky ny tsipika ianao ary misy fiara manaraka akaiky anao. Inona no ataonao ?",
    choices: ["Mi-frein tampoka ianao mba hijanona na inona na inona mitranga", "Mandalo am-pitandremana ianao, satria mampidi-doza ny fijanonana", "Manafaingana mafy ianao", "Mihemotra ianao"],
    explanation: "Ny mavo tsy mipi-maso dia manery fijanonana, afa-tsy raha tsy azo atao soa aman-tsara intsony ny fijanonana : amin'izay, mandalo am-pitandremana.",
  },
  'pim-c21': {
    question: "Amin'ny lalana voamarika amin'ity famantarana ity, iza no TSY afaka mandalo ?",
    choices: ["Ny fiara", "Ny sarety, bisikileta ary mpandeha an-tongotra", "Ny kamiao", "Ny bus"],
    explanation: "Lalana ho an'ny fiara : natokana ho an'ny fiara misy motera ; voarara ny mpandeha an-tongotra, sarety ary bisikileta.",
  },
  'pim-c22': {
    question: "3,8 m ny haavon'ny kamiaonao feno entana. 3,5 m no voasoratra amin'ny famantarana. Inona no ataonao ?",
    choices: ["Mandalo moramora ianao", "Tsy mandalo ianao ary maka lalana hafa", "Ampihenanao ny rivotra ao amin'ny kodiarana", "Mandalo eo afovoany ianao"],
    explanation: "Ny haavo voafetra dia ao anatin'izany ny entana : raha mihoatra, tsy mandalo.",
  },
  'pim-c23': {
    question: "Mipi-maso ity jiro ity eo amin'ny sampanan-dalana, tsy misy takelaka mihitsy eo ambaniny. Iza no mandalo voalohany ?",
    choices: ["Ianao, satria eo amin'ny lalambe ianao", "Ny fiara avy amin'ny ankavananao", "Ny fiara avy amin'ny ankavianao", "Ny haingana indrindra"],
    explanation: "Jiro mavo mipi-maso tsy misy takelaka : fitandremana sy priorité à droite. Raha misy takelaka (STOP, cédez, route prioritaire) eo ambaniny, ny takelaka no mihatra.",
  },
};
