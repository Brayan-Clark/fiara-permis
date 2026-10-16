import type { QuizMg } from './types';

// Questions tirées du livre complet du support d'auto-école.
export const livreCompletMg: QuizMg = {
  'cv-1': {
    question: "Inona no fitsipika fototra amin'ny fitondran-tena eny an-dalana ?",
    choices: ["Fitandremana, fahalalam-pomba, fahamendrehana", "Hafainganana, hery, haingana", "Klaxon, phare, clignotant", "Laharam-pahamehana, fandalovana, zo"],
    explanation: "Fitandremana — fahalalam-pomba — fahamendrehana : ny fitsipika fototra ampianarina manomboka amin'ny fampianarana voalohany.",
  },
  'cv-2': {
    question: "Misy mpamily manao fihetsika diso eo alohanao. Inona no ataonao ?",
    choices: ["Mi-klaxon ela ianao", "Mitazona ny fahatoniana ianao ary mahalala fomba, tsy maneho tsy faharetana", "Manaraka azy akaiky ianao mba hanehoana azy", "Manao jiro mipi-maso imbetsaka ianao"],
    explanation: "Mitazona ny fahatoniana : mety ho vokatry ny fahasimbana ara-mekanika ny fihetsika diso nataony, izay mety hahazo antsika koa.",
  },
  'cv-3': {
    question: "Misy mpandeha an-tongotra mandroso eo amin'ny fiampitana. Ahoana no andalovanao ?",
    choices: ["Eo alohany, haingana", "Ao aoriany, lavitra tsara", "Mi-klaxon", "Terena hihemotra izy"],
    explanation: "Tsy mandalo eo alohan'ny mpandeha an-tongotra efa miampita mihitsy : mandalo ao aoriany, lavitra tsara — ary matetika, mijanona.",
  },
  'cv-4': {
    question: "Amin'ny toe-javatra inona no very ny fahaizan'ny fahatsapan'ny mpamily ?",
    choices: ["Rehefa avy nisotro toaka", "Rehefa reraka na marary", "Rehefa nihinana fanafody mampatory", "Amin'ireo rehetra ireo"],
    explanation: "Toaka, havizanana, aretina ary fanafody mampatory : samy manimba ny fahitana, ny fihainoana ary ny fihetsika avokoa.",
  },
  'cv-5': {
    question: "Ankoatra ny alina, manoloana inona amin'ireto no voarara ny klaxon ?",
    choices: ["Sekoly, birao, hopitaly", "Tsena", "Toeram-pivarotana solika", "Tetezana"],
    explanation: "Manoloana sekoly, birao, hopitaly — ary amin'izay rehetra misy takelaka mandrara azy.",
  },
  'cv-6': {
    question: "Ao an-tanàna, aiza no matetika misy loza ?",
    choices: ["Amin'ny lalana mahitsy lava", "Eo amin'ny sampanan-dalana, noho ny tsy fanajana ny laharam-pahamehana", "Ao amin'ny parking", "Manoloana ny toeram-pivarotana solika"],
    explanation: "Ny sampanan-dalana no toerana mampidi-doza indrindra ao an-tanàna, noho ny tsy fanajana ny laharam-pahamehana.",
  },
  'cv-7': {
    question: "Inona avy ireo antony mahatonga loza voalazan'ny taratasy fampianarana ?",
    choices: ["Ny toetry ny lalana sy ny toetr'andro", "Ny fahasalamana sy ny fitondran-tenan'ny mpamily", "Ny toetry ny fiara", "Izy rehetra ireo"],
    explanation: "Antony dimy : toetry ny lalana, fahasalamana, fitondran-tenan'ny mpamily, toetry ny fiara ary toetr'andro.",
  },
  'cv-8': {
    question: "Ny fiodinana eo afovoan'ny lalana dia mitarika :",
    choices: ["Fampitandremana tsotra", "Fanesorana ny permis", "Tsy misy raha tsy misy fiara", "Lamandy sokajy voalohany fotsiny"],
    explanation: "Ny fiodinana eo afovoan'ny lalana dia sazina fanesorana ny permis.",
  },
  'cv-9': {
    question: "Manoloana ankizy, zokiolona na olona manana fahasembanana, ny mpamily dia tsy maintsy :",
    choices: ["Mi-klaxon mba hialany", "Mampifanaraka ny fitondran-tenany : mampiadana, miandry, mialoha", "Mitazona ny hafainganany", "Mandalo haingana araka izay azo atao"],
    explanation: "Izy ireo no mpampiasa lalana marefo indrindra : mampiadana, miandry, mialoha ny fihetsiny.",
  },
  'cv-10': {
    question: "Ny fanajana ny tontolo iainana, ho an'ny mpamily, dia :",
    choices: ["Misoroka ny tabataba, ny fandotoana ary ny fanararaotana ny phare", "Manasa ny fiara eny an-dalana", "Mamela ny motera handeha rehefa mijanona", "Mi-klaxon hiarahabana"],
    explanation: "Tsy misy tabataba tsy ilaina, tsy mandoto, tsy manararaotra ny phare : mihatra amin'ny tontolo iainana koa ny fahalalam-pomba.",
  },
  'nm-1': {
    question: "Inona no hamarinina ao amin'ny motera alohan'ny hamelomana ny fiara amin'ny maraina ?",
    choices: ["Menaka, rano, ranon'ny frein, solika ary asidran'ny bateria", "Ny solika ihany", "Ny radio ihany", "Tsy misy, mihamarina ho azy ny motera"],
    explanation: "Ireo niveau dimy : menaka motera, rano, ranon'ny frein (Lockheed), solika ary asidran'ny bateria — miampy ny rivotra ao amin'ny kodiarana sy ny taratasy.",
  },
  'nm-2': {
    question: "Inona no ilana ny rano ao amin'ny radiateur ?",
    choices: ["Mampangatsiaka ny motera", "Mampalama ny motera", "Mampandeha ny frein", "Mameno ny herin'ny bateria"],
    explanation: "Ny rano no mampangatsiaka ny motera ; ny menaka mampalama azy ; ny Lockheed mampandeha ny frein ; ny asidra mitazona ny herin'ny bateria.",
  },
  'nm-3': {
    question: "Ny « Lockheed » dia :",
    choices: ["Ny menaka motera", "Ny ranon'ny frein", "Ny rano ao amin'ny radiateur", "Ny solika"],
    explanation: "Lockheed no anarana fampiasa amin'ny ranon'ny frein : raha tsy misy azy, tsy mi-frein intsony ny pedaly.",
  },
  'nm-4': {
    question: "Misy jiro mena (témoin) mirehitra eo amin'ny tableau de bord. Inona no ataonao ?",
    choices: ["Tsy misy, ho faty ho azy izy", "Mijanona haingana araka izay azo atao aho hanamarina : loza ao amin'ny motera izany", "Manafaingana aho mba ho tonga haingana", "Vonoiko ny radio"],
    explanation: "Ny jiro mena dia manambara loza ao amin'ny motera : mijanona haingana mba hanamarina.",
  },
  'nm-5': {
    question: "Tapaka ny frein-nao amin'ny fidinana. Inona no ataonao ?",
    choices: ["Apetrako amin'ny point mort", "Ampiasaiko ny frein moteur, avy eo sintoniko tsikelikely ny frein à main", "Vonoiko ny motera", "Manafaingana aho"],
    explanation: "Ampidinina ny vitesse mba hi-frein amin'ny motera, avy eo sintonina tsikelikely ny frein à main. Tsy point mort mihitsy amin'ny fidinana.",
  },
  'nm-6': {
    question: "Nahoana no mafana foana ny motera ?",
    choices: ["Tsy ampy rano na mitete ny radiateur, tsy ampy menaka, mihidy ny ventilateur", "Be loatra ny solika", "Be rivotra loatra ny kodiarana", "Mafy loatra ny radio"],
    explanation: "Ireo antony telo mahazatra : tsy ampy rano (na mitete ny radiateur), tsy ampy menaka, mihidy ny ventilateur.",
  },
  'nm-7': {
    question: "Firy ny karazana frein amin'ny fiara ?",
    choices: ["Iray ihany", "Roa", "Telo : frein à main, frein à pied, frein moteur", "Efatra"],
    explanation: "Fitaovana telo : ny frein moteur, ny frein à pied (de service) ary ny frein à main (de stationnement).",
  },
  'nm-8': {
    question: "Mirehitra ny fiaranao. Inona no ataonao ?",
    choices: ["Manohy hatrany amin'ny garazy aho", "Vonoiko ny motera ary ampiasaiko ny extincteur ; raha tsy misy, tany, fasika na lamba", "Arotsako lasantsy", "Sokafako ny capot ary miandry aho"],
    explanation: "Vonoina ny motera, extincteur ; raha tsy misy, saromana tany, fasika na lamba ny afo.",
  },
  'nm-9': {
    question: "Aiza no misy ny embrayage ary inona no ilana azy ?",
    choices: ["Ao amin'ny coffre, ho an'ny kodiarana fanampiny", "Eo anelanelan'ny motera sy ny boîte de vitesses, hanasarahana na hampifandraisana azy ireo", "Ambanin'ny familiana, hi-klaxon", "Ao amin'ny radiateur"],
    explanation: "Eo anelanelan'ny motera sy ny boîte ny embrayage : mamindra ny herin'ny motera izy ary manapaka ny fifandraisana mandritra ny fanovana vitesse.",
  },
  'nm-10': {
    question: "Ny point mort dia rehefa :",
    choices: ["Maty ny motera", "Tsy mifandray amin'ny kodiarana intsony ny motera", "Voatazona ny frein à main", "Lany ny bateria"],
    explanation: "Amin'ny point mort, manasaraka maharitra ny motera sy ny kodiarana ny boîte de vitesses : mihodina ny motera, tsy entin'izy ny fiara.",
  },
  'nm-11': {
    question: "Mba hamelomana motera diesel, tsy maintsy atao aloha :",
    choices: ["Atsindry ny starter", "Apetraka amin'ny préchauffage ny lakile ary andrasana ho faty ny jiro témoin", "Atsindry hatramin'ny farany ny accélérateur tsy misy contact", "Atosika ny fiara"],
    explanation: "Diesel : préchauffage, andrasana ho faty ny jiro témoin, avy eo velomina sady manindry accélérateur.",
  },
  'nm-12': {
    question: "Mba hamelomana motera lasantsy mangatsiaka, ampiasaina :",
    choices: ["Ny starter", "Ny préchauffage", "Ny frein moteur", "Ny mihemotra"],
    explanation: "Rehefa mangatsiaka, sintonina ny starter, velomina, avy eo ampidinina ny starter rehefa nahatratra hafainganana iray ny motera.",
  },
  'nm-13': {
    question: "Ny fiara dia misy :",
    choices: ["Motera, châssis, vatan'ny fiara ary fitaovana elektrika", "Familiana sy pedaly ihany", "Kodiarana sy seza ihany", "Motera sy radio"],
    explanation: "Fitambarana efatra : motera + châssis + vatan'ny fiara (carrosserie) + fitaovana elektrika.",
  },
  'nm-14': {
    question: "Inona no ilana ny bateria ?",
    choices: ["Mitahiry ny hery ilaina hampiaingana ny fiara", "Mampangatsiaka ny motera", "Mi-frein", "Manazava amin'ny alina ihany"],
    explanation: "Mitahiry ny herinaratra ilain'ny démarreur ny bateria.",
  },
  'nm-15': {
    question: "Ahoana no ijerena ny haavon'ny menaka motera ?",
    choices: ["Esorina ny jauge, fafana, averina, esorina indray ary vakiana ny haavony", "Jerena ao ambanin'ny fiara", "Henoina ny motera", "Jerena ny compteur"],
    explanation: "Esorina ny jauge, fafana, averina amin'ny toerany, esorina indray : vakiana eo anelanelan'ny marika roa ny haavony.",
  },
  'ev-1': {
    question: "Firy ny halaviran'ny hazavan'ny phare farafahakeliny ?",
    choices: ["30 m", "50 m", "100 m", "150 m"],
    explanation: "Phare : 100 m farafahakeliny. Code : 30 m farafahabetsany. Veilleuse sy jiro mena ao aoriana : hita amin'ny 150 m.",
  },
  'ev-2': {
    question: "Hatraiza ny halaviran'ny hazavan'ny code (jiro ambany) ?",
    choices: ["30 m farafahabetsany", "100 m farafahakeliny", "150 m", "300 m"],
    explanation: "Eo amin'ny 30 m eo ny hazavan'ny code : mihoatra ny 60 km/h, tsy mahatratra lavitra ampy hijanonana intsony.",
  },
  'ev-3': {
    question: "Tsy maintsy azo vakiana amin'ny alina amin'ny elanelana firy ny plaque ao aoriana ?",
    choices: ["5 m", "20 m", "100 m", "150 m"],
    explanation: "Ny jiron'ny plaque (« feu de police ») dia tsy maintsy mahatonga azy ho azo vakiana amin'ny 20 m.",
  },
  'ev-4': {
    question: "Ireo taratra mena kely ao aorian'ny fiara dia antsoina hoe :",
    choices: ["Veilleuse", "Catadioptre (cataphote)", "Feu stop", "Clignotant"],
    explanation: "Ny catadioptre dia mamerina ny hazavan'ny phare ; hita eo amin'ny 100 m eo izy.",
  },
  'ev-5': {
    question: "Amin'ireto toe-javatra ireto, iza no ampiasana ny phare ?",
    choices: ["Ao an-tanàna", "Rehefa mifanena amin'ny fiara", "Ivelan'ny tanàna, tsy misy fiara manoloana na eo aloha", "Eo amin'ny tampon'ny fiakarana"],
    explanation: "Phare : ivelan'ny tanàna, tsy misy fiara manoloana na arahina, ary tsy misy loza manokana.",
  },
  'ev-6': {
    question: "Hitanao ao amin'ny fitaratra fa hohoarina ianao, amin'ny alina. Ny jironao :",
    choices: ["Mijanona amin'ny phare", "Avadika code", "Vonoina", "Avadika jiro fampitandremana"],
    explanation: "Anisan'ny toe-javatra hampandehanana code ny hohoarina, mba tsy hanajamba ilay mihoatra.",
  },
  'ev-7': {
    question: "Amin'ny alina, inona no ataonao rehefa hiditra fiolahana ?",
    choices: ["Phare, ary manafaingana", "Code, mihazona ny ankavanana, mampiadana", "Maty ny jiro", "Klaxon ela"],
    explanation: "Ao amin'ny fiolahana : code, mihazona ny ankavanana, mampiadana.",
  },
  'ev-8': {
    question: "Amin'ny alina, mahita jiro mena avy lavitra ianao. Io fiara io :",
    choices: ["Manatona anao", "Miala aminao (mandeha amin'ny lalan-kalehanao)", "Mijanona", "Fiaran'ny polisy"],
    explanation: "Jiro fotsy na mavo : manatona anao ny fiara. Jiro mena : ny ao aoriany no hitanao, miala izy.",
  },
  'ev-9': {
    question: "Amin'ny antoandro, jiro inona no ampiasaina amin'ny ankapobeny ?",
    choices: ["Ny phare", "Ny clignotant sy ny feu stop", "Ny veilleuse", "Tsy misy jiro"],
    explanation: "Amin'ny antoandro mazava : clignotant hanondroana ny lalana, feu stop rehefa mi-frein.",
  },
  'ev-10': {
    question: "Inona no ilana ny clignotant ?",
    choices: ["Hiarahabana", "Hanambarana fivilihana", "Hangatahana laharam-pahamehana", "Hanazavana ny lalana"],
    explanation: "Manambara fivilihana ny clignotant ; alefa amin'ny manette izy.",
  },
  'pn-1': {
    question: "Simba eo amin'ny fiampitana lalamby ny fiaranao ary tsy afaka mihetsika intsony. Amin'ny elanelana firy no apetrakao ny saina mena na ny jiro ?",
    choices: ["50 m", "100 m", "500 m amin'ny andaniny roa amin'ny lalamby", "Eo akaikin'ny fiara mihitsy"],
    explanation: "Eo amin'ny lalamby : saina mena amin'ny antoandro, jiro amin'ny alina, 500 m amin'ny andaniny roa — mila izany halavirana izany ny lamasinina vao mijanona.",
  },
  'pn-2': {
    question: "Simba eo ambony tetezana ny fiara ary tsy mihetsika : aiza no anambaranao ny sakana ?",
    choices: ["100 m eo aloha sy ao aoriana, amin'ny saina mena, sampan-kazo na telozoro", "500 m", "Tsy misy", "Amin'ny jiro fampitandremana ihany"],
    explanation: "Ho an'ny tetezana na any an-kafa : 100 m eo aloha sy ao aoriana, hita tsara.",
  },
  'pn-3': {
    question: "Simba eo amin'ny lalamby ny fiaranao nefa afaka mihetsika. Inona no ataonao ?",
    choices: ["Point mort, esorina ny frein à main, ary atosika", "Andrasana ny lamasinina", "Mivoaka ary miala tsy manao na inona na inona", "Apetraka mihemotra ary manafaingana"],
    explanation: "Raha afaka mihetsika : point mort, esorina ny frein à main, ary atosika mba hialana amin'ny lalamby.",
  },
  'pn-4': {
    question: "Irery, tsy misy olona hanosika, ahoana no hanalana fiara simba ?",
    choices: ["Amin'ny 1ʳᵉ na mihemotra, esorina ny frein à main, velomina ny démarreur tsy manindry embrayage", "Mitomany", "Avela eo ny fiara", "Amin'ny point mort, maty ny motera"],
    explanation: "Io ilay « démarrage en vitesse » : ny démarreur no mampandroso tsikelikely ny fiara, ampy hialana.",
  },
  'pn-5': {
    question: "Amin'ny lalana be mpampiasa, ny balise eo amin'ny sampanan-dalana hita amin'ny sisiny dia midika hoe :",
    choices: ["Tsy maintsy mamela ianao", "Ianao no manan-daharam-pahamehana", "Fiampitana lalamby", "Fiafaran'ny lalana"],
    explanation: "Balise hita amin'ny sisiny : eo amin'ny lalana be mpampiasa ianao, manan-daharam-pahamehana. Hita manatrika : eo amin'ny lalana kely ianao, mamela.",
  },
  'pn-6': {
    question: "Misy fiaran'ny manampahefana mampaneno sirène, mbola lavitra 100 m. Azonao atao ve ny mandroso ihany ?",
    choices: ["Eny, mbola lavitra izy", "Tsia : mampiadana, mihazona ny ankavanana ary mamela azy handalo", "Eny, sady mi-klaxon", "Eny, sady manafaingana"],
    explanation: "Raha vao re ny sirènan'ny fiara manan-daharam-pahamehana, miomana hanalalahana ny lalana — na dia mbola 100 m aza izy.",
  },
  'sh-1': {
    question: "Tsipika tapatapaka 3 m feno sy 1,50 m foana dia manambara :",
    choices: ["Fa ho avy ny tsipika mitohy", "Lalankely ao an-tanàna", "Lalankely ivelan'ny tanàna", "Parking"],
    explanation: "Tsipika lava sy elanelana fohy : ho avy ny tsipika mitohy, vitaina ny fihoarana.",
  },
  'sh-2': {
    question: "Tsipika tapatapaka 3 m feno sy 10 m foana dia manasaraka ny lalankely :",
    choices: ["Ao an-tanàna", "Ivelan'ny tanàna", "Eo amin'ny sampanan-dalana", "Ao amin'ny parking"],
    explanation: "3 m / 3 m : ao an-tanàna. 3 m / 10 m : ivelan'ny tanàna. 3 m / 1,50 m : manambara tsipika mitohy.",
  },
  'sh-3': {
    question: "Firy amin'ny ankapobeny ny zana-tsipika fiverenana manambara tsipika mitohy ?",
    choices: ["Iray", "Roa", "Telo", "Dimy"],
    explanation: "Telo amin'ny ankapobeny : raha vao hita ny voalohany, vitaina ny fihoarana ary miverina.",
  },
  'sh-4': {
    question: "Inona no voarara eo amin'ny tsipika mitohy ?",
    choices: ["Mandika azy, mijanona, miantsona na mihoatra", "Miantsona ihany", "Mijanona ihany", "Tsy misy"],
    explanation: "Tsipika mitohy : tsy dikaina, tsy ijanonana, tsy iantsonana, tsy ihoarana.",
  },
  'sh-5': {
    question: "Eo amin'ny tsipika tapatapaka, inona no mbola voarara ?",
    choices: ["Ny fihoarana", "Ny fiantsonana", "Ny fivadihana lalankely", "Tsy misy mihitsy"],
    explanation: "Azo dikaina hihoarana ny tsipika tapatapaka, fa tsy iantsonana.",
  },
  'sh-6': {
    question: "Eo amin'ny fiampitan'ny mpandeha an-tongotra, inona no voarara ?",
    choices: ["Ny fiantsonana sy ny fihoarana", "Mandeha moramora", "Mijanona hamela mpandeha an-tongotra", "Mijery ankavia"],
    explanation: "Eo amin'ny fiampitana : tsy iantsonana, tsy ihoarana. Mampiadana, ary mijanona raha misy mpandeha an-tongotra te hiampita.",
  },
  'sh-7': {
    question: "Ny faritra voatsipitsipika « céram » na zébra dia :",
    choices: ["Parking", "Toerana fialofana ho an'ny mpandeha an-tongotra, voarara ho an'ny fiara sy ny fiantsonana", "Lalankely fihoarana", "Lalankely ho an'ny moto"],
    explanation: "Faritra voatsipika toy ny zébra : fialofana ho an'ny mpandeha an-tongotra, voarara ny fivezivezena sy ny fiantsonana.",
  },
  'sh-8': {
    question: "Ny zana-tsipika manondro lalana amin'ny tany dia manondro :",
    choices: ["Ny lalankely halehana araka ny lalana tiana", "Tsy azo idirana", "Fiampitan'ny mpandeha an-tongotra", "Parking"],
    explanation: "Manondro ny lalankely hampiasaina araka ny lalana halehana izy ; mipetraka amin'ny lalankely marina raha vao hita ny zana-tsipika voalohany.",
  },
  'ac-11': {
    question: "Loza ara-pitaovana tsy misy maratra : inona no atao ?",
    choices: ["Constat à l'amiable mivantana", "Antsoina tsy maintsy ny fitsarana", "Mandositra", "Miandry herinandro"],
    explanation: "Loza ara-pitaovana : constat à l'amiable, mivantana eo amin'ny mpamily.",
  },
  'ac-12': {
    question: "Loza misy maratra ivelan'ny tanàna : iza no antsoina ?",
    choices: ["Ny polisy", "Ny zandary", "Ny kaominina", "Ny auto-école"],
    explanation: "Ao an-tanàna : ny polisy. Ivelan'ny tanàna : ny zandary.",
  },
  'ac-13': {
    question: "Aorian'ny loza misy maratra, alohan'ny hamindrana na inona na inona :",
    choices: ["Soritana ny toerana nisian'ny maratra raha oharina amin'ny fiara", "Sasana ny fiara", "Afindra ny fiara", "Mody any an-trano"],
    explanation: "Soritana ny toerana nisian'ny maratra ary tsy afindra mihitsy ny fiara : ireo no porofon'ny constat.",
  },
  'ac-14': {
    question: "Vaky ny kodiaranao eo ambony tetezana. Inona no ataonao ?",
    choices: ["Mijanona eo ambony tetezana aho hanova ny kodiarana", "Tsy mijanona eo ambony tetezana aho : ampitaiko ary ovaiko any aoriana ny kodiarana", "Miodina aho", "Miantso taxi aho"],
    explanation: "Tsy mijanona eo ambony tetezana mihitsy : ampitaina ary mijanona aoriana hanamboarana.",
  },
  'ac-15': {
    question: "Iza amin'ireto zavatra ireto no anisan'izay entina rehefa hanao dia ?",
    choices: ["Cric, kodiarana fanampiny ary clé de roue", "Fahitalavitra", "Elo", "Tsy misy"],
    explanation: "Fitaovana (cric, clé de roue, kodiarana fanampiny), tahiry (menaka, rano, Lockheed, jiro kely, fusibles) ary fiarovana (extincteur, jiro azo entina, telozoro).",
  },
  'ac-16': {
    question: "Iza amin'ireto fihetsika ireto no voarara eo amin'ny lalam-bahoaka ?",
    choices: ["Manasa ny fiara", "Mandeha amin'ny ankavanana", "Mampandeha clignotant", "Manaja STOP"],
    explanation: "Voarara eo amin'ny lalam-bahoaka : mandao fiara na zavatra, manipy entana (fasika…), manaparitaka akora, manasa fiara.",
  },
  've-11': {
    question: "Ao aoriana, manomboka amin'ny firy ny fivoahan'ny entana no ilana saina manazava ?",
    choices: ["Manomboka amin'ny 10 sm", "Mihoatra ny 1 m", "Mihoatra ny 3 m", "Tsy mihitsy"],
    explanation: "Mihoatra ny 1 m : fitaovana manazava (saina mena), miampy jiro mena amin'ny alina. Ary tsy mihoatra ny 3 m mihitsy.",
  },
  've-12': {
    question: "Firy ny sakany farafahabetsany amin'ny entana ?",
    choices: ["2 m", "2,50 m", "3 m", "4 m"],
    explanation: "Ny sakan'ny entana dia tsy mihoatra ny 2,50 m.",
  },
  've-13': {
    question: "Eo ambony galerie, firy ny haavon'ny entana azo atao ?",
    choices: ["0,80 m, tsy mihoatra ny 4 m ny fitambarany", "2 m", "Tsy voafetra", "0,30 m"],
    explanation: "0,80 m eo ambony galerie, ary tsy mihoatra ny 4 m manomboka amin'ny tany ka hatramin'ny tampon'ny entana ny fitambarany.",
  },
  've-14': {
    question: "Eo aloha, ny entana :",
    choices: ["Azo mivoaka 1 m", "Tsy tokony hihoatra ny sisin'ny fiara mihitsy", "Azo mivoaka amin'ny alina", "Tsy maintsy mivoaka mba ho hita"],
    explanation: "Tsy misy tokony hivoaka eo alohan'ny fiara.",
  },
  'cd-27': {
    question: "Fiara lehibe sy fiara kely mifanena amin'ny lalana tery. Iza no madefitra ?",
    choices: ["Ny kely", "Ny lehibe", "Ny haingana indrindra", "Samy tsy madefitra"],
    explanation: "Araka ny taratasy fampianarana, ny lehibe kokoa no madefitra : mahita tsara kokoa izy ary matetika tsy manana toerana halehany ny kely.",
  },
  'cd-28': {
    question: "Amin'ny lalana tery mideza, iza no tsy maintsy mijanona hamela ny iray handalo ?",
    choices: ["Ilay miakatra", "Ilay midina", "Ny miadana indrindra", "Izay mi-klaxon"],
    explanation: "Ilay midina no mijanona : ilay miakatra no manery ny motera ary sarotra kokoa ny miainga indray amin'ny fiakarana.",
  },
  'cd-29': {
    question: "Firy ny elanelana avela eo amin'ny sisiny rehefa mihoatra posiposy na bisikileta ?",
    choices: ["10 sm", "50 sm", "1 m farafahakeliny", "Tsy misy"],
    explanation: "Ho an'ny posiposy, sarety na bisikileta : 1 m farafahakeliny, rehefa avy nijery ny eo aloha sy ao aoriana.",
  },
  'dr-11': {
    question: "Firy ny karazana moto ?",
    choices: ["Roa", "Telo : cyclomoteur, vélomoteur, motocyclette", "Efatra", "Dimy"],
    explanation: "Cyclomoteur (ambanin'ny 50 cm³), vélomoteur (50 hatramin'ny 125 cm³) ary motocyclette (mihoatra ny 125 cm³).",
  },
  'dr-12': {
    question: "Mila visite technique na visite médicale ve ny moto ?",
    choices: ["Izy roa, isan-taona", "Samy tsy ilaina", "Ny visite technique ihany", "Ny visite médicale ihany"],
    explanation: "Araka ny taratasy fampianarana, tsy mila visite technique na visite médicale ny moto.",
  },
  'dr-13': {
    question: "Inona avy ireo soratra hita eo amin'ny moto ?",
    choices: ["Ny laharana (immatriculation), ny cylindrée ary ny laharan'ny châssis", "Ny anaran'ny tompony", "Ny vidiny", "Tsy misy"],
    explanation: "Laharana (immatriculation), cylindrée ary laharan'ny châssis.",
  },
  'dr-14': {
    question: "Inona avy ireo fiarovana ho an'ny mpitondra moto ?",
    choices: ["Casque, fonon-tanana, fiarovana lohalika, combinaison, baoty", "Solomaso masoandro ihany", "Elo", "Tsy misy"],
    explanation: "Casque, fonon-tanana, fiarovana lohalika, combinaison ary baoty : tsy manana vatan-tsambo ny mpitondra moto.",
  },
  'dr-15': {
    question: "Rehefa manaraka fiara mijanona, nahoana no tazonina 1 m ny elanelana ?",
    choices: ["Mba handeha haingana kokoa", "Satria mety hisokatra tampoka ny varavarana", "Mba ho hitan'ny mpandeha an-tongotra", "Tsy ilaina izany"],
    explanation: "Varavarana misokatra tampoka : 1 m ny elanelana. Ary tandremo koa ny fiara miainga sy ny mpandeha an-tongotra miampita.",
  },
  'dr-16': {
    question: "Azo atao ve ny mitondra moto tsy misy permis ?",
    choices: ["Eny, raha latsaky ny 50 cm³", "Eny, ny moto rehetra", "Tsia, tsy mihitsy", "Eny, amin'ny alina"],
    explanation: "Ny cyclomoteur latsaky ny 50 cm³ ihany no azo entina tsy misy permis (manomboka amin'ny 14 taona).",
  },
  'ps-31': {
    question: "Inona no famantarana manolo ny jiro telo loko ?",
    choices: ["Ny takelaka STOP", "Ny polisy", "Ny tsipika mitohy", "Ny klaxon"],
    explanation: "Ambony noho ny jiro ny polisy ary afaka manolo azy.",
  },
  'ps-32': {
    question: "Inona no sary amin'ny tany manolo ny takelaka loza ?",
    choices: ["Ny tsipika mitohy", "Ny tsipika tapatapaka", "Ny fiampitan'ny mpandeha an-tongotra", "Ny zana-tsipika manondro lalana"],
    explanation: "Ny tsipika mitohy, toy ny takelaka loza, dia milaza fa tsy mahita lavitra ampy.",
  },
  'ps-33': {
    question: "Inona no dikan'ny « RN » eo amin'ny takelaka ?",
    choices: ["Lalam-pirenena (route nationale)", "Lalana vaovao", "Lalana tsy misy goudron", "Arabe avaratra"],
    explanation: "RN : lalam-pirenena. RA : autoroute. RR : lalana ambanivohitra. RD : departemanta. RF : anaty ala. RC : kaominina. RE : eoropeana.",
  },
  'ps-34': {
    question: "Ny takelaka « Betafo 100 km — N 6 » dia midika hoe :",
    choices: ["Voafetra ho 100 km/h ny hafainganana", "100 km sisa hahatongavana any Betafo amin'ny lalam-pirenena faha-6", "6 km no misy an'i Betafo", "Toerana fandoavana ao anatin'ny 100 km"],
    explanation: "Takelaka lalana halehana : toerana halehana, halavirana sisa ary laharan'ny lalana.",
  },
  'ps-35': {
    question: "Ireo zana-tsipika fotsy amin'ny balise fiolahana dia apetraka :",
    choices: ["Ao amin'ny fiolahana mihitsy, hanehoana ny fiolahany", "500 m alohany", "Ao an-tanàna ihany", "Eo amin'ny tetezana ihany"],
    explanation: "Famantarana eo an-toerana ny balise fiolahana : zana-tsipika fotsy ao amin'ny fiolahana. Tetezana na lalana tery : zana-tsipika misy mena eo an-tampony.",
  },
  'ps-36': {
    question: "Manao tanana miakatra midina ny mpitandro ny fifamoivoizana. Angatahany ianao mba :",
    choices: ["Hanafaingana", "Hampiadana", "Hiodina", "Hi-klaxon"],
    explanation: "Tanana miakatra midina : ampiadano. Baiko moana iraisam-pirenena ireo fihetsiny ireo.",
  },
  'sd-31': {
    question: "Hadinonao tany an-trano ny taratasinao mandritra ny fanaraha-maso. Inona no sazy ?",
    choices: ["Tsy misy", "Fampijanonana ny fiara", "Fanesorana amin'ny fifamoivoizana", "Fonja"],
    explanation: "Valin'ny taratasy fampianarana : fampijanonana ny fiara, mandra-pahaseho ny taratasy.",
  },
};
