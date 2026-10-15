// Fandikana malagasy ny fanazavana ny sary (photos), ny kisary (schemas) ary
// ny sary amin'ny tany (marquages). Ny photos dia araka ny anaran'ny rakitra,
// ny hafa araka ny `id`.
export const photosMg: Record<string, { alt: string; caption: string }> = {
  'laterite-detrempee.jpg': {
    alt: "Lalana latérite mena lena any amin'ny atsimo-andrefan'i Madagasikara.",
    caption: "Lalana latérite any atsimo-andrefana, aorian'ny orana. Amin'ny lalana toy izao, very ny fifikirana : ny halavirana fijanonana kajiana ato amin'ity lesona ity dia ho an'ny lalana maina.",
  },
  'panneau-indication-bemaha.jpg': {
    alt: "Takelaka manondro an'i Bemaha sy ny farihin'i Tritriva.",
    caption: "Famantarana lalana mankany Bemaha sy ny farihin'i Tritriva. Ny endrika sy ny loko hita ato amin'ity lesona ity no tena apetraka eny amin'ny lalana malagasy.",
  },
  'panneau-zone-ecole.jpg': {
    alt: "Takelaka manambara faritra be ankizy any Ambohimanarivo.",
    caption: "Faritra be ankizy, any Ambohimanarivo (Antananarivo). Ny takelaka apetraka no mampihena ny hafainganana, fa tsy ny fetra ankapobeny ao an-tanàna.",
  },
  'passage-a-niveau-manakara.jpg': {
    alt: "Fiampitana lalamby mamakivaky lalana any Manakara.",
    caption: "Fiampitana lalamby any Manakara. Eto, tsy misy sakana mihidy : ny mpamily no mijanona, mijery ary mihaino alohan'ny hiampitana.",
  },
  'pluie-visibilite-tamatave.jpg': {
    alt: "Arabe any Toamasina rehefa mivatravatra ny orana.",
    caption: "Toamasina rehefa avy ny orana. Fahitana mihena sy lalana mando, na antoandro aza : tsy maintsy alefa ny jiro ambany, ary ampitomboina ny elanelana fiarovana.",
  },
  'taxi-brousse.jpg': {
    alt: "Taxi-brousse mitondra mpandeha eny amin'ny lalana malagasy.",
    caption: "Taxi-brousse, andry iankinan'ny fitaterana eo anelanelan'ny tanàna. Ny entana, ny mpandeha mihoatra ny isa ary ny toetry ny seza no tena jeren'ny lalàna momba ny fitaterana olona.",
  },
  'moto-en-ville.jpg': {
    alt: "Scooter mijanona eny amin'ny arabe iray eto Madagasikara.",
    caption: "Scooter, fitaterana mahazatra indrindra ao an-tanàna. Kely, tsy misy vatan-tsambo : ny fitaovan'ny mpitondra ihany no miaro azy, ary sarotra hita ao amin'ny fitaratra izy.",
  },
  'sortie-ecole.jpg': {
    alt: "Mpianatra mandeha manaraka lalambe iray rehefa mivoaka ny sekoly.",
    caption: "Fivoahan'ny sekoly : mandeha eo amin'ny lalambe ny mpianatra, satria tsy misy trottoir. Izany no antony ametrahana fetra akaikin'ny sekoly — sy ny fitandremana miaraka aminy.",
  },
  'karenjy-toliara.jpg': {
    alt: "Fiara Karenjy eny amin'ny arabe iray any Toliara.",
    caption: "Karenjy iray eny amin'ny arabe any Toliara, fiara natambatra teto Madagasikara. Jiro, kodiarana, famafana fitaratra : izay jeren'ny visite technique dia azonao hamarinina samirery isan-kerinandro.",
  },
  'camion-bananes.jpg': {
    alt: "Kamiao mitondra akondro eny amin'ny lalana malagasy.",
    caption: "Kamiao feno entana ivelan'ny tanàna. Manova ny zava-drehetra ny lanja : ny halavirana amin'ny frein, ny fitondrana amin'ny fidinana, ary ny hafainganana ambony indrindra manokana ho azy.",
  },
  'route-etroite-rn42.jpg': {
    alt: "Lalam-pirenena faha-42 ka tsipika tery ihany no sisa amin'ny goudron.",
    caption: "RN 42 eo anelanelan'i Fianarantsoa sy Isorana : amin'ny lalana tany am-boalohany, tsipika tery ihany no sisa. Mampahatsiahy ny lalana toy izao fa ny fihoarana dia tsy tapahina amin'ny tsipika fotsy fotsiny, fa amin'izay hita eo aloha.",
  },
  'borne-kilometrique.jpg': {
    alt: "Vato fanondroana kilaometatra (PK) endrika frantsay eo amoron-dalana malagasy.",
    caption: "Vato fanondroana kilaometatra, endrika nolovaina tamin'ny lalana frantsay. Manan-danja ny fahafantarana ny toerana rehefa mameno constat na manondro toerana nisy fandikan-dalàna.",
  },
  'station-service.jpg': {
    alt: "Toeram-pivarotana solika any Antananarivo.",
    caption: "Toeram-pivarotana solika any Antananarivo. Eto no manomboka ny fitsitsiana solika : tsindrin'ny kodiarana, solika mety, ary famenoana tsy mihoatra.",
  },
};

export const schemasMg: Record<string, { name: string; description: string }> = {
  'priorite-a-droite': {
    name: "Sampanan-dalana tsy misy takelaka : priorité à droite",
    description: "Fiara roa tonga miaraka. Ny maitso (1) dia avy amin'ny ankavanan'ilay iray : izy no mandalo voalohany. Ny mavo (2) miandry.",
  },
  'feu-et-fleche': {
    name: "Jiro telo loko sy zana-tsipika fanalalahana",
    description: "Eo ankavia, ny jiro amin'ny endriny mahazatra : mirehitra ny mena, maty ny roa hafa. Eo ankavanana, ny jiro misy zana-tsipika : ny lalana tondroin'ny zana-tsipika ihany no azo aleha, mbola mihidy ny ambiny amin'ny sampanan-dalana.",
  },
  'courbe-alcool': {
    name: "Miakatra alohan'ny fetra ara-dalàna ny loza",
    description: "Arakaraky ny isotroana no ahabetsahan'ny mety hisian'ny loza — ary mitombo ela be alohan'ny fetra nahazoan-dalana izy. Manaraka ny habe navoakan'ny fampielezan-kevitra momba ny fiarovana an-dalana ireo andry, fa tsy refy marina.",
  },
  'chargement-remorque': {
    name: "Aiza no apetraka ny entana amin'ny remorque",
    description: "Apetraka eo ambonin'ny essieu ny entana, mandroso kely : mipetaka amin'ny tany ny remorque ary tsy voatery mitondra ny lanja rehetra ny timon. Ny entana any aoriana loatra dia mampihozongozona ny fiara manontolo.",
  },
  'categories-permis': {
    name: "Ny endriky ny sokajin-permis",
    description: "Manomboka amin'ny moto ka hatramin'ny bus, ny sokajin-permis tsirairay dia mifanaraka amin'ny fiara iray sy ny lanjany. Tsy entina irery ny remorque (E) : manampy sokajy hafa foana izy.",
  },
  'kit-securite': {
    name: "Izay miaro alohan'ny hamonjena akory",
    description: "Apetraka lavitra alohan'ny fiara simba ny telozoro, ary anaovana ny akanjo manazava alohan'ny hivoahana : raha tsy misy izy ireo, ny mpamonjy no ho loza manaraka. Avy eo vao mampandre sy miaro ny niharam-boina.",
  },
  'documents-a-bord': {
    name: "Ireo taratasy tsy maintsy azon'ny mpamily aseho",
    description: "Permis, carte grise, fanamarinana assurance ary visite technique : taratasy efatra, adidy efatra samy hafa. Ny tsy fahafahana maneho ny iray amin'izy ireo dia efa fandikan-dalàna, na tsara toy inona aza ny fitondrana.",
  },
};

export const marquagesMg: Record<string, { name: string; description: string }> = {
  'ligne-de-rive': {
    name: "Tsipika amoron-dalana (ligne de rive)",
    description: "Mitovy ny tsipika sy ny elanelana : manaraka ny sisin-dalana tany izy ary manasaraka azy amin'ny lalana. Izy no manondro hoe aiza no mifarana ny lalana ary aiza no manomboka ny toerana azo ametrahana kodiarana.",
  },
  'ligne-separation-voies': {
    name: "Tsipika manasaraka ny lalankely",
    description: "Tsipika lava misaraka amin'ny elanelana lehibe : mametra ny lalankely mitovy lalan-kalehana. Azo dikaina mba hivadihana lalankely — rehefa avy nanamarina ny ao aoriana sy ny eo amin'ny sisiny.",
  },
  'bande-arret-urgence': {
    name: "Lalankely fijanonana vonjy taitra (bande d'arrêt d'urgence)",
    description: "Tsipika lehibe, elanelana kely. Lalankely natokana ho an'ny fijanonana vonjy taitra (simba, tsy salama) : azo ovana ao ny kodiarana, fa tsy azo iantsonana na ijanonana hamaky sarintany. Tsy maintsy alefa ny jiro fampitandremana.",
  },
  'voie-reservee': {
    name: "Lalankely natokana (voie réservée)",
    description: "Efajoro lehibe mifanakaiky be : natokana ho an'ny mpampiasa lalana voafaritra ilay lalankely — bus, bisikileta, fiara miadana. Afaka mandika azy ny hafa mba hivily, fa tsy mandeha ao.",
  },
  'ligne-effet': {
    name: "Tsipika fijanonana amin'ny jiro (ligne d'effet)",
    description: "Ny tsipiky ny jiro : ny toerana marina tokony hijanonan'ny fiara rehefa lasa mena ny jiro. Ny fijanonana eo amboniny dia efa tara loatra — ary manakana ny fiampitan'ny mpandeha an-tongotra.",
  },
  'ligne-cedez-passage': {
    name: "Tsipika cédez-le-passage",
    description: "Efamira kely milahatra mitsivalana amin'ny lalana. Tsy voatery mijanona tanteraka toy ny manoloana STOP ny mpamily. Raha manarona ny sakany manontolo io tsipika io, dia sens unique ny arabe.",
  },
  'ligne-continue': {
    name: "Tsipika mitohy (ligne continue)",
    description: "Tsy dikaina izy : na hihoarana na hiantsonana eo amboniny. Ny hany afa-tsy, na aiza na aiza, dia ho an'ny fiara miadana be sy ny moto sasany, araka ny sary marina amin'ny tany.",
  },
  'ligne-dissuasion': {
    name: "Tsipika fanakanana (ligne de dissuasion)",
    description: "Tsipika mitohy amin'ny ilany iray, tapatapaka mifanakaiky be amin'ny ilany iray : « manakana » ny fihoarana izy. Ny fiara miadana be ihany — moto, sarety, traktera — no azo ihoarana avy amin'ny ilany tapatapaka.",
  },
  'passage-pietons-marquage': {
    name: "Fiampitan'ny mpandeha an-tongotra (sary amin'ny tany)",
    description: "Tsipika fotsy mifanila : fiampitana natokana ho an'ny mpandeha an-tongotra. Mampiadana rehefa manakaiky, mamela handalo, ary tsy mihoatra mihitsy fiara mijanona eo anoloany.",
  },
  'ligne-jaune': {
    name: "Tsipika mavo sy fiantsonana",
    description: "Mavo, manaraka ny trottoir : raha mitohy, mandrara ny fijanonana sy ny fiantsonana ; raha tapatapaka, mamela ny fijanonana fohy fa tsy ny fiantsonana. Ny ilana voalohany ny loko mavo dia ny milaza hoe « tsy miantsona eto ».",
  },
};
