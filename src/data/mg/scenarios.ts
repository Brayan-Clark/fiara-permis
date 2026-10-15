// Fandikana malagasy ny tranga marina/diso ao amin'ny ../scenarios.ts,
// araka ny `id` an'ny tranga tsirairay.
export const scenariosMg: Record<string, { situation: string; question: string; explanation: string }> = {
  'sc-1': {
    situation: "Tonga eo amin'ny sampanan-dalana tsy misy takelaka mihitsy ianao. Misy fiara avy amin'ny ankavananao tonga miaraka aminao.",
    question: "Tokony havelanao handalo aloha ve izy ?",
    explanation: "Eny — raha tsy misy famantarana, ny priorité à droite no mihatra : ny fiara avy amin'ny ankavanana no mandalo voalohany.",
  },
  'sc-2': {
    situation: "Efa ao anatin'ny rond-point ianao. Misy fiara miandry hiditra eo ankavianao.",
    question: "Tokony hijanona ve ianao hamela azy hiditra ?",
    explanation: "Tsia — ao amin'ny rond-point, ny fiara efa ao anatiny no manan-daharam-pahamehana noho ireo te hiditra.",
  },
  'sc-3': {
    situation: "Mandeha 50 km/h ao an-tanàna ianao ary mahita takelaka fetra 30 km/h eo anoloan'ny sekoly.",
    question: "Afaka manohy amin'ny 50 km/h ve ianao satria io no fetra ankapobeny ao an-tanàna ?",
    explanation: "Tsia — ny takelaka eo an-toerana (30 km/h) no ambony foana noho ny fetra ankapobeny (50 km/h).",
  },
  'sc-4': {
    situation: "Mivatravatra ny orana ary tsy dia mahita lavitra ianao, nefa antoandro.",
    question: "Tsy maintsy alefanao ihany ve ny jiro ambany (feux de croisement) ?",
    explanation: "Eny — tsy maintsy alefa amin'ny alina SY rehefa ratsy ny andro ny jiro ambany, na antoandro aza.",
  },
  'sc-5': {
    situation: "Te hihoatra fiara miadana ianao amin'ny lalana malalaka, tsy misy takelaka mandrara.",
    question: "Tokony atao amin'ny ankavanana ve ny fihoarana ?",
    explanation: "Tsia — atao amin'ny ankavia ny fihoarana, afa-tsy raha misy famantarana manokana.",
  },
  'sc-6': {
    situation: "Mitondra fiara ianao mitana telefaonina amin'ny tanana mba hamaly antso haingana, amin'ny lalana tsy dia be fiara.",
    question: "Azo atao ve izany raha fohy sisa ny dia ?",
    explanation: "Tsia — voarara ny telefaonina tanana mandritra ny fitondrana, na fohy toy inona aza ny dia sisa. Ny mains libres ihany no ekena.",
  },
  'sc-7': {
    situation: "Manao tanana mampandroso anao ny mpitandro ny fifamoivoizana nefa mena ny jiro.",
    question: "Tokony harahinao ve ny baikon'ny mpitandro fa tsy ny jiro ?",
    explanation: "Eny — ny baikon'ny mpitandro ny fifamoivoizana no ambony foana noho ny jiro sy ny takelaka.",
  },
  'sc-8': {
    situation: "Miantsona eo amoron'ny trottoir misy tsipika mavo mitohy ianao, 5 minitra monja.",
    question: "Azo atao ve izany satria fohy ?",
    explanation: "Tsia — ny tsipika mavo mitohy dia mandrara ny fiantsonana, na firy minitra na firy minitra.",
  },
  'sc-9': {
    situation: "Manakaiky lalana voamarika losanjy mavo (route prioritaire) ianao, ary misy fiara avy amin'ny lalana kely eo ankavananao.",
    question: "Manan-daharam-pahamehana ve io fiara io satria avy amin'ny ankavananao ?",
    explanation: "Tsia — ny takelaka route prioritaire dia manafoana ny priorité à droite : ianao no manan-daharam-pahamehana, tsy maintsy mamela anao handalo ilay fiara.",
  },
  'sc-10': {
    situation: "Namanao 16 taona te haka permis moto (sokajy A).",
    question: "Afaka manao izany ve izy raha manaiky ny ray aman-dreniny ?",
    explanation: "Eny — manomboka amin'ny 16 taona, afaka mahazo permis A na A' ny zaza tsy ampy taona raha manaiky ny ray aman-dreny na olon-dehibe tompon'andraikitra.",
  },
  'sc-11': {
    situation: "Mandeha 80 km/h amin'ny lalana latérite ianao, ary manomboka mivatravatra ny orana.",
    question: "Mitovy amin'ny amin'ny lalana maina ve ny halavirana amin'ny frein ?",
    explanation: "Tsia — amin'ny lalana mando na latérite lena, mitombo ny halavirana amin'ny frein, indraindray avo roa heny.",
  },
  'sc-12': {
    situation: "Te hiakatra avy hatrany amin'ny sokajy C (kamiao lehibe) ianao, nahazo permis B androany ihany.",
    question: "Azo atao avy hatrany ve izany ?",
    explanation: "Tsia — ny sokajy C dia mitaky permis B efa herintaona farafahakeliny vao azo alaina.",
  },
  'sc-13': {
    situation: "Maty motera eo afovoan'ny lalam-pirenena ny fiaranao. Nalefanao ny jiro fampitandremana ary napetrakao tao aoriana ny telozoro (triangle).",
    question: "Afaka mijanona mipetraka ao anaty fiara ve ianao miandry fanampiana ?",
    explanation: "Tsia — raha simba eo amin'ny lalana, tsara kokoa ny mialoka ivelan'ny lalana (ao ambadiky ny fefy na amoron-dalana) : mety hodonin'ny fiara hafa ny fiara mijanona.",
  },
  'sc-14': {
    situation: "Alina, simba eo amoron-dalana ny fiaranao, mirehitra ny jiro fampitandremana.",
    question: "Tsy voatery ve amin'izay ny telozoro (triangle) ?",
    explanation: "Tsia — mbola tsy maintsy apetraka ny telozoro hampahafantarana ny mpampiasa lalana hafa fa misy fiara simba, na antoandro na alina.",
  },
  'sc-15': {
    situation: "Mangataka anao hisintona ny fiarany simba amin'ny tady tsotra ny namanao, tsy misy famantarana manokana.",
    question: "Azo atao ve izany raha miadana be ianao ?",
    explanation: "Tsia — voafehy hentitra ny fisintomana fiara : famantarana ny fiara sintonina, fampifandraisana ara-dalàna voafetra halavany ary hafainganana ambany. Mampidi-doza ny tady natao tsy nahy.",
  },
  'sc-16': {
    situation: "Lasa mavo ny jiro ary mbola metatra vitsivitsy alohan'ny tsipika fijanonana ianao, misy toerana ampy hijanonana soa aman-tsara.",
    question: "Afaka manafaingana ve ianao mba handalo alohan'ny mena ?",
    explanation: "Tsia — ny mavo dia manambara ny mena : raha azo atao soa aman-tsara ny mijanona, dia mi-frein fa tsy manafaingana.",
  },
  'sc-17': {
    situation: "Misy andian'omby miampita moramora ny lalana eo alohanao.",
    question: "Tokony hijanona sy hiandry ve ianao, tsy mi-klaxon hampandehanana azy ?",
    explanation: "Eny — tsy azo vinavinaina ny biby : mampiadana, mijanona raha ilaina ary miandry mandra-pialany amin'ny lalana, tsy misy fihetsika tampoka.",
  },
  'sc-18': {
    situation: "Manaraka taxi-be miadana ianao, ary mitohy ny tsipika amin'ny tany.",
    question: "Afaka mihoatra azy ve ianao amin'ny fandikana ny tsipika satria toa malalaka ny lalana ?",
    explanation: "Tsia — tsy dikaina mihitsy ny tsipika mitohy mba hihoarana, na toa malalaka aza ny lalana : manambara fa mampidi-doza ny fihetsika izy.",
  },
  'sc-19': {
    situation: "Manakaiky fiampitan'ny mpandeha an-tongotra ianao ary manomboka miampita ny olona iray.",
    question: "Tokony hijanona ve ianao hamela azy handalo ?",
    explanation: "Eny — ny mpandeha an-tongotra efa miampita amin'ny fiampitana no manan-daharam-pahamehana : mijanona ary miandry mandra-pahavitany miampita.",
  },
  'sc-20': {
    situation: "Feno zavona be ny fitaratra anoloana ary saika tsy mahita na inona na inona ianao.",
    question: "Afaka manohy mandeha moramora ve ianao manaraka ny amoron-dalana ?",
    explanation: "Tsia — raha tsy mahita, mijanona haingana araka izay azo atao (ivelan'ny lalana) ary esorina ny zavona alohan'ny hiaingana indray.",
  },
  'sc-21': {
    situation: "Mandeha 60 km/h amin'ny lalana maina ianao. Nisy zaza nipoitra tampoka 30 m eo alohanao.",
    question: "Afaka mijanona alohan'ny hahatrarana azy ve ianao ?",
    explanation: "Tsia — amin'ny 60 km/h, eo amin'ny 6 × 6 = 36 m eo ho eo ny halavirana fijanonana amin'ny lalana maina. Amin'ny 30 m, tsy azo ialana ny fifandonana : izany no tsy maintsy hampiadanana raha vao mety hisy loza.",
  },
  'sc-22': {
    situation: "Mijanona 1 minitra eo amoron-dalana ianao mba hampidina mpandeha, mbola eo amin'ny familiana.",
    question: "Fiantsonana (stationnement) ve izany ?",
    explanation: "Tsia — fijanonana fohy (arrêt) izany : fampijanonana vetivety (2 minitra farafahabetsany), vonona hiainga indray ny mpamily. Ny fiantsonana kosa dia fampijanonana maharitra.",
  },
  'sc-23': {
    situation: "Misy fiara mpitondra marary (ambulance) mandeha ao aorianao, tsy misy sirène na gyrophare, amin'ny hafainganana mahazatra.",
    question: "Manan-daharam-pahamehana ve izy ?",
    explanation: "Tsia — ny fiara manan-daharam-pahamehana dia tsy manana izany raha tsy mampiasa ny feo fampitandremany.",
  },
  'sc-24': {
    situation: "Manaraka kamiao misy takelaka « D » ao aoriany ianao, amin'ny lalana mahitsy lava sy malalaka.",
    question: "Afaka mihoatra azy malalaka ve ianao ?",
    explanation: "Tsia — D dia midika hoe mihoatra ny habe mahazatra (hors gabarit) : tsy ihoarana raha tsy omen'ny mpanaraka azy na ny diaben'ny fiara alalana.",
  },
  'sc-25': {
    situation: "Ivelan'ny tanàna, tonga eo amin'ny lalana be mpampiasa (route à grande circulation) avy amin'ny lalana faharoa tsy misy takelaka ianao.",
    question: "Tokony hamela handalo ny fiara eo amin'ny lalana be mpampiasa ve ianao, na dia avy amin'ny ankavianao aza izy ireo ?",
    explanation: "Eny — ivelan'ny tanàna, ny lalana be mpampiasa dia manana laharam-pahamehana tanteraka amin'ny lalana faharoa. Ao an-tanàna, very izany laharam-pahamehana izany.",
  },
  'sc-26': {
    situation: "Mivily ankavia eo amin'ny sampanan-dalana ianao. Misy fiara avy manoloana mandeha mahitsy.",
    question: "Afaka mandalo alohany ve ianao ?",
    explanation: "Tsia — izay mivily ankavia no mamela handalo ilay mandeha mahitsy avy amin'ny lalana mifanohitra.",
  },
  'sc-27': {
    situation: "Efa 15 segondra izay ny fihoaranao satria saika mitovy hafainganana aminao ilay fiara hohoarina.",
    question: "Fihoarana ara-dalàna ve izany ?",
    explanation: "Tsia — tsy tokony hihoatra ny 8 hatramin'ny 12 segondra ny fihoarana. Raha ela kokoa, dia ajanony ary miverena soa aman-tsara.",
  },
  'sc-28': {
    situation: "Amin'ny 11 ora alina, mangina ny arabe ary te hiarahaba namana amin'ny klaxon ianao.",
    question: "Azo atao ve izany ?",
    explanation: "Tsia — ampiasaina amin'ny antoandro ny klaxon ; amin'ny alina, raha misy loza ihany.",
  },
};
