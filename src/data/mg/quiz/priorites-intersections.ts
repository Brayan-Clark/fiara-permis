import type { QuizMg } from './types';

export const prioritesIntersectionsMg: QuizMg = {
  'pi-1': {
    question: "Eo amin'ny sampanan-dalana tsy misy takelaka na sary amin'ny tany mihitsy, iza no manan-daharam-pahamehana ?",
    choices: ["Ny fiara haingana indrindra", "Ny fiara avy amin'ny ankavanana", "Ny fiara avy amin'ny ankavia", "Ny fiara lehibe indrindra"],
    explanation: "Io ny priorité à droite : ny fitsipika fototra rehefa tsy misy zavatra hafa mihatra.",
  },
  'pi-2': {
    question: "Ao amin'ny rond-point tsy misy famantarana hafa, iza no manan-daharam-pahamehana ?",
    choices: ["Izay miditra ao amin'ny rond-point", "Izay efa ao anatin'ny rond-point", "Izay avy amin'ny ankavia ihany", "Tsy misy, mijanona avokoa"],
    explanation: "Ny fiara efa ao anatin'ny rond-point no manan-daharam-pahamehana noho ireo te hiditra.",
  },
  'pi-3': {
    question: "Amin'ny lalana voamarika losanjy mavo (route prioritaire), mbola mihatra ve ny priorité à droite ?",
    choices: ["Eny, foana", "Tsia, ny takelaka no manolo ny fitsipika fototra", "Amin'ny alina ihany", "Raha hamafisin'ny mpitandro ihany"],
    explanation: "Ny takelaka route prioritaire dia manafoana ny priorité à droite : tsy maintsy mamela azy handalo ny lalana manodidina, na avy aiza na avy aiza.",
  },
  'pi-4': {
    question: "Rehefa mifanohitra ny baikon'ny mpitandro ny fifamoivoizana sy ny jiro telo loko, iza no arahina ?",
    choices: ["Ny jiro, foana", "Ny mpitandro ny fifamoivoizana", "Izay hita voalohany", "Tsy misy, priorité à droite"],
    explanation: "Ny baikon'ny mpitandro ny fifamoivoizana no ambony foana noho ny jiro sy ny takelaka.",
  },
  'pi-5': {
    question: "Amin'ny ilany aiza no tokony hatao ny fihoarana amin'ny ankapobeny ?",
    choices: ["Amin'ny ankavanana", "Amin'ny ankavia", "Na aiza na aiza", "Rehefa avy mi-klaxon ihany"],
    explanation: "Atao amin'ny ankavia ny fihoarana, afa-tsy raha misy famantarana manokana.",
  },
  'pi-6': {
    question: "Rehefa mifanena amin'ny fiara avy amin'ny lalana mifanohitra, ny mpamily tsirairay dia tsy maintsy :",
    choices: ["Mivily mankavia", "Mihazona ny ankavanany ary mamela elanelana ampy", "Mijanona foana", "Manafaingana mba handalo voalohany"],
    explanation: "Amin'ny fifanenana, samy mihazona ny ankavanany avy misy elanelana ampy eo amin'ny sisiny — izay no manavaka ny fifanenana amin'ny fihoarana.",
  },
  'pi-7': {
    question: "Eo amin'ny takelaka STOP sy ny fitsipika priorité à droite, iza no ambony ?",
    choices: ["Ny priorité à droite, foana", "Ny takelaka STOP", "Miankina amin'ny ora", "Tsy misy, ifampiraharahana eo an-toerana"],
    explanation: "Ny takelaka no ambony foana noho ny priorité à droite, izay fitsipika farany ampiasaina rehefa tsy misy famantarana mihitsy.",
  },
  'pi-8': {
    question: "Rehefa manakaiky takelaka STOP, inona no tokony hataon'ny mpamily ?",
    choices: ["Mampiadana ary mamela handalo raha misy fiara tonga", "Mijanona tanteraka, na toa malalaka aza ny lalana", "Mi-klaxon alohan'ny hidirana", "Mijanona raha misy fiara hafa manakaiky ihany"],
    explanation: "Manery fijanonana tanteraka sy mazava ny STOP, na toa malalaka aza ny lalana — izany no manavaka azy amin'ny cédez-le-passage.",
  },
  'pi-9': {
    question: "Amin'ny lalana tery, misy fiara simba manakana ny ilanao. Misy fiara avy manoloana :",
    choices: ["Ianao no mandalo voalohany satria maika", "Izay misy sakana eo amin'ny ilany no mijanona ary mamela ny iray", "Samy manafaingana handalo", "Ny fiara lehibe indrindra no mandalo voalohany"],
    explanation: "Rehefa tery noho ny sakana ny lalana (fiara simba, asa an-dalana), izay misy sakana eo amin'ny ilany no mamela handalo ilay avy manoloana.",
  },
  'pi-10': {
    question: "Misy fiara mpitondra marary mampiasa sirène sy gyrophare manakaiky ao aorianao :",
    choices: ["Manohy toy ny mahazatra ianao, tsy manan-daharam-pahamehana izy", "Mivily eo amoron-dalana ianao ary mamela azy handalo", "Manafaingana ianao mba hitazona ny laharam-pahamehana", "Mijanona eo afovoan'ny lalana ianao"],
    explanation: "Ny fiara manan-daharam-pahamehana (ambulance, polisy, mpamonjy afo) mampiasa feo sy hazavana dia tsy maintsy afaka mandalo : mivily eo amoron-dalana ny rehetra.",
  },
  'pi-11': {
    question: "Simba tanteraka ny jiro telo loko eo amin'ny sampanan-dalana iray (tsy misy hazavana). Inona no fitsipika mihatra ?",
    choices: ["Tsy misy manan-daharam-pahamehana, samy miandry", "Ny priorité à droite, toy ny rehefa tsy misy famantarana", "Ny fiara lehibe indrindra no mandalo voalohany", "Ny mpandeha an-tongotra no mandamina ny rehetra"],
    explanation: "Raha tsy misy jiro na takelaka, miverina amin'ny fitsipika fototra : ny priorité à droite, am-pitandremana be eo amin'ny sampanan-dalana.",
  },
  'pi-12': {
    question: "Inona no atao hoe sampanan-dalana (intersection) ?",
    choices: ["Toerana azo iantsonana malalaka", "Toerana ifanatonana na ifanapahan'ny lalana roa na maromaro amin'ny haavo iray", "Lalana tokana ny lalan-kalehany", "Tetezana eo ambonin'ny lalana hafa"],
    explanation: "Ny sampanan-dalana dia toerana ifanatonana na ifanapahan'ny lalana roa na maromaro amin'ny haavo iray, endrika X, +, Y, T na kintana.",
  },
  'pi-13': {
    question: "Very ny laharam-pahamehany tanteraka ny lalana be mpampiasa (route à grande circulation) :",
    choices: ["Amin'ny alina", "Rehefa mamakivaky tanàna", "Rehefa avy ny orana", "Tsy very mihitsy"],
    explanation: "Manan-daharam-pahamehana amin'ny lalana faharoa izy ivelan'ny tanàna, fa very izany rehefa mamakivaky tanàna.",
  },
  'pi-14': {
    question: "Eo amin'ny sampanan-dalana misy tsipika fotsy 50 sm (STOP) amin'ny sampana rehetra, iza no mandalo voalohany ?",
    choices: ["Izay avy amin'ny ankavia", "Izay avy amin'ny ankavanana, rehefa avy nijanona", "Ny haingana indrindra", "Izay mi-klaxon"],
    explanation: "Rehefa mitovy ny famantarana rehetra, samy mijanona ary avy eo mampihatra ny priorité à droite.",
  },
  'pi-15': {
    question: "Firy ny sakan'ny tsipika fotsy « cédez le passage » ?",
    choices: ["10 hatramin'ny 15 sm", "25 sm", "50 sm", "1 m"],
    explanation: "Fanampiana hitadidiana : 10–15 sm = fetra fijanonana, 25 sm = cédez le passage, 50 sm = STOP. Ny tsipika 25 sm amin'ny sampana rehetra dia manery ny priorité à gauche.",
  },
  'pi-16': {
    question: "Jiro mavo mipi-maso, tsy misy takelaka mihitsy eo ambaniny, dia manery :",
    choices: ["Fijanonana mandrakizay", "Ny priorité à droite", "Ny priorité à gauche", "Fanafainganana"],
    explanation: "Ny jiro mavo mipi-maso tsy misy takelaka eo ambaniny dia manambara sampanan-dalana mihatra ny priorité à droite.",
  },
  'pi-17': {
    question: "Fiara roa avy amin'ny lalana mifanohitra no tonga eo amin'ny lalana iray : te hivily ankavia ny iray, handeha mahitsy ny iray. Iza no mamela ?",
    choices: ["Izay mandeha mahitsy", "Izay mivily ankavia", "Ny miadana indrindra", "Izay tonga voalohany"],
    explanation: "Fitsipika faha-4 : izay mivily ankavia no mamela handalo izay manohy mahitsy.",
  },
  'pi-18': {
    question: "Ny nosy kely na borne eo afovoan'ny lalana dia odidinina, raha tsy misy famantarana hafa :",
    choices: ["Amin'ny ankavia", "Amin'ny ankavanana", "Amin'ny ilany fohy indrindra", "Dikaina"],
    explanation: "Raha tsy misy famantarana hafa, odidinina amin'ny ankavanana foana ny nosy kely, borne ary rond-point.",
  },
  'pi-19': {
    question: "Manan-daharam-pahamehana ny fiara mpitondra marary :",
    choices: ["Foana, na tsy misy sirène aza", "Rehefa mampiasa ny feo fampitandremany ihany", "Amin'ny alina ihany", "Tsy mihitsy ao an-tanàna"],
    explanation: "Ny fiara manan-daharam-pahamehana (diaben'ny manampahefana, polisy, zandary, ambulance, mpamonjy afo) dia tsy manana izany raha tsy mampiasa ny feo fampitandremany.",
  },
  'pi-20': {
    question: "Ny diaben'ny fanambadiana na fandevenana dia :",
    choices: ["Manan-daharam-pahamehana mitovy amin'ny polisy", "Tsy manan-daharam-pahamehana, fa ekena", "Voarara tsy handeha", "Manan-daharam-pahamehana ao an-tanàna ihany"],
    explanation: "Fanambadiana, fandevenana, fitaterana volan'ny banky ary fiara maika mampandeha ny jiro fampitandremana dia tsy manan-daharam-pahamehana, fa ekena.",
  },
  'pi-21': {
    question: "Ny lalamby, raha oharina amin'ny fiara :",
    choices: ["Mamela handalo ny fiara", "Manan-daharam-pahamehana foana", "Manan-daharam-pahamehana amin'ny antoandro ihany", "Manaraka ny priorité à droite"],
    explanation: "Fitsipika faha-5 : ny lalamby sy ny tramway dia manan-daharam-pahamehana foana amin'ny fiara.",
  },
  'pi-22': {
    question: "Mba hivily ankavia avy amin'ny lalana mihoatra ny 2 lalankely mandroso sy miverina, ianao dia mipetraka :",
    choices: ["Mihazona ny ankavanana", "Eo afovoan'ny lalana", "Eo amin'ny trottoir", "Eo amin'ny lalankely ankavia avy manoloana"],
    explanation: "Amin'ny lalankely mihoatra ny 2, mipetraka eo afovoan'ny lalana, clignotant ankavia, rehefa avy nanamarina fa tsy eo am-pihoarana anao ny hafa.",
  },
  'pi-23': {
    question: "Misy fiara manan-daharam-pahamehana tonga ao aorianao, mandeha ny sirène. Inona no ataonao ?",
    choices: ["Manafaingana mba hialoha azy", "Mampiadana, mihazona ny ankavanana, clignotant ankavanana, ary mijanona raha ilaina", "Mijanona eo afovoan'ny lalana", "Manohy tsy manova na inona na inona"],
    explanation: "Mampiadana, mihazona ny ankavanana, clignotant ankavanana, mijanona haingana araka izay azo atao raha ilaina.",
  },
  'pi-24': {
    question: "Mivoaka lalan-tany ianao mba hiditra amin'ny lalana misy goudron. Iza no manan-daharam-pahamehana ?",
    choices: ["Ianao", "Ny fiara eo amin'ny lalana", "Izay avy amin'ny ankavia ihany", "Ny haingana indrindra"],
    explanation: "Fitsipika faha-2 : rehefa mivoaka lalan-tany na toeram-piantsonana, mamela handalo.",
  },
  'pi-25': {
    question: "Rehefa maitso ny jiro, ianao dia manana :",
    choices: ["Adidy hamela handalo", "Laharam-pahamehana handalo", "Adidy hijanona", "Ny priorité à gauche"],
    explanation: "Fitsipika faha-1 : manome laharam-pahamehana handalo ny jiro maitso — nefa avela hahavita ireo efa ao anatiny.",
  },
  'pi-26': {
    question: "Misy mpitandro filaminana manao fanamiana manao tanana hampijanonana anao. Tsy maintsy :",
    choices: ["Mijanona ianao : tsy maintsy manaraka baiko ny mpamily rehetra", "Manohy raha tsy nanao na inona na inona ianao", "Mi-klaxon", "Mampiadana fa tsy mijanona"],
    explanation: "Tsy maintsy manaraka ny baikon'ny olona manao fanamiana avy amin'ny polisy na zandary ny mpamily rehetra rehefa asaina mijanona.",
  },
  'pi-27': {
    question: "Iza amin'ireto fiara ireto no manan-daharam-pahamehana rehefa mampiasa ny feo fampitandremany ?",
    choices: ["Diaben'ny fanambadiana", "Mpamonjy afo", "Fitaterana volan'ny banky", "Diaben'ny fandevenana"],
    explanation: "Mpamonjy afo, polisy, zandary, ambulance, diaben'ny manampahefana : manan-daharam-pahamehana. Fanambadiana, fandevenana, fitaterana vola : ekena fotsiny.",
  },
  'pi-28': {
    question: "Alohan'ny hanatonana sampanan-dalana, inona no TSY tokony hatao ?",
    choices: ["Mampiadana", "Mihazona ny ankavanana", "Mihoatra fiara", "Maka vaovao"],
    explanation: "Tsy mihoatra fiara rehefa manakaiky sampanan-dalana.",
  },
  'pi-29': {
    question: "Tsipika fotsy 10 hatramin'ny 15 sm voasoratra amin'ny sampana rehetra amin'ny sampanan-dalana dia manery :",
    choices: ["Ny priorité à gauche", "Ny priorité à droite", "STOP", "Tsy misy"],
    explanation: "Famantarana mitovy amin'ny sampana rehetra (fetra fijanonana) : priorité à droite.",
  },
};
