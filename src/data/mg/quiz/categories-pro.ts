import type { QuizMg } from './types';

// Ny fonosana momba ny kamiao lehibe (C), fitaterana olona (D) ary remorque (E).
export const categoriesProMg: QuizMg = {
  // ---- Kamiao lehibe
  'pl-1': {
    question: "Ny permis C dia mitaky :",
    choices: ["Tsy misy zavatra manokana", "Permis B efa herintaona farafahakeliny, ary 19 taona", "21 taona sy fanamarinana ara-pahasalamana", "Permis E aloha"],
    explanation: "Azo alaina manomboka amin'ny 19 taona ny permis C ary mitaky permis B efa herintaona farafahakeliny — mila traikefa alohan'ny hitondrana taonina maromaro.",
  },
  'pl-2': {
    question: "Entana eo ambony tafo mihoatra ny 0,80 m ny haavony dia mitarika :",
    choices: ["Lamandy fotsiny", "Fampijanonana sy fampiatoana ny permis", "Fampitandremana tsotra", "Tsy misy raha voafatotra ny entana"],
    explanation: "Fampijanonana, fampiatoana ny permis ary lamandy sokajy faha-3. Ny entana avo loatra dia manova ny fifandanjan'ny fiara ary mifamikitra amin'izay mihantona eo ambonin'ny lalana.",
  },
  'pl-3': {
    question: "Ny tsy fisian'ny twist-lock amin'ny conteneur dia mitarika :",
    choices: ["Lamandy sokajy voalohany", "Fampidirana ny fiara any amin'ny fourrière", "Fampitandremana", "Adidy hampidina ny entana eo an-toerana"],
    explanation: "Fourrière. Ny twist-lock dia hidy mamatotra ny conteneur amin'ny vatan'ny kamiao : raha tsy misy izy, mety hiala ao amin'ny fiolahana ny conteneur.",
  },
  'pl-4': {
    question: "Rojo na lamba fonosana mitarika amin'ny tany dia mitarika :",
    choices: ["Tsy misy raha mbola mafy orina ny entana", "Fampiatoana ny permis sy fampijanonana", "Lamandy sokajy voalohany", "Visite technique mialoha"],
    explanation: "Fampiatoana ny permis sy fampijanonana. Mifamikitra sy mikapoka izay mitarika, ary izay miala dia tonga eo amin'ny fitaratry ny fiara manaraka.",
  },
  'pl-5': {
    question: "Ny fivezivezen'ny kamiao lehibe ivelan'ny ora voafetra, tsy nahazoan-dalana :",
    choices: ["Ekena amin'ny alina", "Mitarika fampidirana any amin'ny fourrière", "Lamandy sokajy faha-2", "Afovoan-tanàna ihany no voakasika"],
    explanation: "Fourrière. Kaominina maro no mametra ny fidiran'ny kamiao lehibe amin'ny ora sasany : miova arakaraka ny faritra ny ora.",
  },
  'pl-6': {
    question: "Nahoana ny sakan'orana (barrière de pluie) no manakatona lalana ?",
    choices: ["Mba hisorohana ny fitohanana", "Satria tsy hahazaka ny fandalovan'ny fiara mavesatra ny lalana lena", "Mba hanadiovana azy", "Noho ny fahitana"],
    explanation: "Ny tsy fanajana azy dia manimba ny lalana ho an'ny rehetra. Raha miverina, lasa figadrana iray hatramin'ny enim-bolana ny lamandy.",
  },
  'pl-7': {
    question: "Amin'ny fidinana lava amin'ny kamiao feno entana, mitazona :",
    choices: ["Amin'ny frein tsy mitsahatra", "Amin'ny motera", "Amin'ny point mort", "Amin'ny fivilivilihana mba hampiadanana"],
    explanation: "Ny fi-frein-ana tsy mitsahatra dia mampafana ny frein mandra-pahavery ny heriny, amin'ny toerana ratsy indrindra. Ny motera no mitazona.",
  },
  'pl-8': {
    question: "Entana manimba ny lalana dia mitarika :",
    choices: ["Hetra fanampiny", "Fampijanonana ny fiara", "Tsy misy raha kely ny fahasimbana", "Fampahatsiahivana"],
    explanation: "Ny fiara na entana manimba ny lalana na ny fotodrafitrasany dia mitarika fampijanonana.",
  },
  // ---- Fitaterana olona
  'tp-1': {
    question: "Ny permis D dia mitaky :",
    choices: ["18 taona", "21 taona sy fanamarinana ara-pahasalamana", "19 taona sy permis B", "Permis C aloha"],
    explanation: "Azo alaina manomboka amin'ny 21 taona ny permis D ary mitaky fanamarinana ara-pahasalamana. Io no sokajy voafehy indrindra ao amin'ny lalàna.",
  },
  'tp-2': {
    question: "Ny tsy fisian'ny fahazoan-dalana hiasa na licence dia mitarika :",
    choices: ["Lamandy raikitra", "Fampidirana ny fiara any amin'ny fourrière", "Fe-potoana 48 ora hanamboarana", "Fampitandremana"],
    explanation: "Fourrière. Toy ny fitaterana mpandeha miafina : tsy voavaha eo an-toerana ireo fandikan-dalàna ireo, lasa ny fiara.",
  },
  'tp-3': {
    question: "Ny tsy fanajana ny làlan'ny ligne (violation de ligne) :",
    choices: ["Avela amin'ny fanapahan-kevitry ny mpamily", "Mitarika fampidirana any amin'ny fourrière", "Lamandy sokajy voalohany", "Tsy sazina"],
    explanation: "Fourrière. Tsy soso-kevitra ny làlan'ny ligne : misy mpandeha miandry amin'ny toerana voafaritra, ary ho an'io làlana io no nanomezana ny licence.",
  },
  'tp-4': {
    question: "Ny fitondrana mpandeha mihoatra ny isa voafaritry ny carte violette :",
    choices: ["Ekena amin'ny ora be olona", "Mitarika fampijanonana, fampiatoana ny permis ary lamandy sokajy faha-5", "Lamandy sokajy voalohany", "Ho an'ny dia lavitra ihany"],
    explanation: "Tsy tanjona ny isa ao amin'ny carte violette : izy no zakan'ny rafitra, ny frein ary ny varavarana vonjy taitra.",
  },
  'tp-5': {
    question: "Ny tsy fahampian'ny fiarovana ny mpandeha dia sazina :",
    choices: ["Fampitandremana", "Fourrière sy lamandy sokajy faha-5", "Lamandy sokajy faha-2", "Tsy misy raha tsy misy loza"],
    explanation: "Hevitra malalaka natao an-kitsimpo : varavarana tsy mihidy, mpandeha mitsangana na mihantona any ivelany, entana tsy voatazona tsara ao anaty fiara.",
  },
  'tp-6': {
    question: "Rehefa ampidirina any amin'ny fourrière ny taxi-be, inona no atao voalohany ?",
    choices: ["Entina avy hatrany ny fiara", "Apetraka any amin'ny terminus ny mpandeha", "Esorina ny permis-n'ny mpamily", "Antsoina ny tompony"],
    explanation: "Apetraka aloha any amin'ny terminus ny mpandeha, avy eo esorina ny takelaka ligne. Miaro ny mpandeha aloha ny fitsipika vao manasazy ny mpamily.",
  },
  'tp-7': {
    question: "Raha tsy miverina eo amin'ny toerana nanaovana ny fandikan-dalàna ny mpamily taxi-be :",
    choices: ["Vita ny raharaha", "Manao tatitra ny polisy ary ajanona 10 andro ny fiara", "Avo roa heny ny lamandy", "Amidy ny fiara"],
    explanation: "Io no sazy ambony indrindra voalaza : tatitry ny polisy sy fampijanonana ny fiara mandritra ny 10 andro.",
  },
  'tp-8': {
    question: "Ny fiara fitateram-bahoaka dia tsy maintsy manana :",
    choices: ["Rafitra frein iray ihany", "Rafitra frein roa tsy miankina sy varavarana vonjy taitra ara-dalàna", "Extincteur ihany", "Fitaratra mainty mba ho tsara"],
    explanation: "Rafitra frein roa tsy miankina fehezin'ny mpamily, miampy varavarana vonjy taitra ara-dalàna sy fitaratra mifanaraka amin'ny fenitra.",
  },
  // ---- Remorque
  'rm-1': {
    question: "Ny permis E dia mitaky :",
    choices: ["Permis B ihany", "Permis B sy C, traikefa ary fanamarinana ara-pahasalamana, amin'ny 21 taona", "19 taona sy permis B", "Tsy misy zavatra manokana"],
    explanation: "Io no sokajy mitaky fepetra mialoha betsaka indrindra, satria tsy entina toy ny fiara tsy miforitra ny fiara misy tonony.",
  },
  'rm-2': {
    question: "Ao amin'ny fiolahana, ny kodiaran'ny remorque dia mandalo :",
    choices: ["Ivelany kokoa noho ny an'ny tracteur", "Ao anatiny kokoa noho ny an'ny tracteur", "Amin'ny dia mitovy tanteraka", "Miankina amin'ny hafainganana"],
    explanation: "Arakaraky ny halavan'ny fiara no ahabeazan'ny elanelana. Sokafana malalaka ny fiolahana ary jerena ny fitaratra.",
  },
  'rm-3': {
    question: "Inona no mahatonga ny fiforetana (mise en portefeuille) ?",
    choices: ["Fanafainganana miadana loatra", "Manosika ny tracteur ny remorque : frein tampoka, lalana malama, fidinana", "Entana maivana loatra", "Fiolahana malalaka loatra"],
    explanation: "Rehefa nanomboka, sarotra be ny hanarenana azy. Sorohina amin'ny fialohavana, ny fi-frein-ana amin'ny lalana mahitsy alohan'ny fiolahana, ary ny fitazonana amin'ny motera amin'ny fidinana.",
  },
  'rm-4': {
    question: "Manomboka mihozongozona ankavia sy ankavanana ny remorque (fouettement). Inona no ataonao ?",
    choices: ["Mi-frein mafy ianao", "Mampiadana tsikelikely ianao, tsy mi-frein tampoka ary tsy manitsy amin'ny familiana", "Manafaingana ianao mba hampilamina", "Mivily mankany amin'ny lalana mifanohitra ianao"],
    explanation: "Mifanohitra amin'izay eritreretina ny valiny : ampiadano moramora. Ny fi-frein-ana mafy na ny fanitsiana amin'ny familiana dia mampitombo ny fihozongozonana.",
  },
  'rm-5': {
    question: "Entana apetraka any aoriana loatra amin'ny fiara misy tonony :",
    choices: ["Manatsara ny fitondrana", "Manamaivana ny tracteur ka mampihena ny fifikirana sy ny fifehezana ny lalana", "Tsy misy vokany raha voahaja ny lanja manontolo", "Mampavesatra ny frein ihany"],
    explanation: "Amin'ny fiara misy tonony, manan-danja tahaka ny lanja manontolo ny fizarana : any aoriana loatra dia manamaivana ny tracteur, any aloha loatra dia mampavesatra loatra ny sellette.",
  },
  'rm-6': {
    question: "Inona no hamarinina amin'ny fampifandraisana alohan'ny fiaingana tsirairay ?",
    choices: ["Ny hidy ihany", "Hidy, fiarovana fanampiny, tariby elektrika, fantsona frein ary tongotra fanohanana", "Ny rivotra ao anaty kodiarana ihany", "Tsy misy, raha fohy ny dia"],
    explanation: "Io irery no teboka hamarinina izay mahafaty avy hatrany raha simba. Tsy maintsy miasa ny jiro sy clignotant an'ny remorque.",
  },
  'rm-7': {
    question: "Rehefa mihemotra amin'ny fiara misy tonony, ny remorque dia mankany :",
    choices: ["Amin'ny lalana ihodinan'ny familiana", "Amin'ny lalana mifanohitra amin'ny familiana", "Mahitsy foana", "Tsy azo vinavinaina"],
    explanation: "Io no jerena voalohany amin'ny fanadinana sokajy E. Mipetraka malalaka alohan'ny hanombohana, ary midina ijery rehefa tsy ampy ny fahitana.",
  },
  'rm-8': {
    question: "Ny fitsipika momba ny entana ao amin'ny lesona kamiao lehibe (haavo, fatorana, twist-lock) :",
    choices: ["Tsy mihatra amin'ny fiara misy tonony", "Mihatra tanteraka", "Mihatra mihoatra ny lanja iray ihany", "Soloina fitsipika manokana"],
    explanation: "Haavo 0,80 m farafahabetsany, tsy misy zavatra mitarika, twist-lock tsy maintsy misy ho an'ny conteneur : mihatra avokoa amin'ny fiara misy tonony.",
  },
};
