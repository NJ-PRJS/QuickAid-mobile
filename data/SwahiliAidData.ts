import { AidData, aidStepType } from "../models/AidModal";

const nosebleedStepsSwahili: aidStepType[] = [
    {
        id: 1,
        step: "Hatua 1",
        title: "Keti Juu na Inama Mbele",
        description: "Keti wima na inama mbele kuzuia damu isishuke kooni, kupunguza hatari ya kuganda au kusababisha tumbo kuwa na shida.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Hatua 2",
        title: "Endelea Kuiweka Kichwa Juu",
        description: "Endelea kuweka kichwa juu kuzuia damu zaidi kushuka kooni.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Hatua 3",
        title: "Vuta Pua kwa Upole",
        description: "Safisha kuganda kwa damu kwa kuvuta pua kwa upole.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Hatua 4",
        title: "Kaza Pua",
        description: "Tumia kidole gumba na kidole kimoja kubana sehemu zote mbili za pua. Pumua kwa kutumia mdomo. Endelea kubana kwa dakika 10 hadi 15. Kukaza kunaweka shinikizo kwenye mishipa ya damu na kusaidia kusimamisha mtiririko wa damu.",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Hatua 5",
        title: "Rudia Kukaza Ikiwa Kutokwa na Damu Kunavyoendelea",
        description: "Ikiwa kutokwa na damu hakusimamishi, kaza pua tena kwa hadi dakika 15. Usiache kubana hata kwa angalau dakika tano hata kama ni kuchunguza ikiwa kutokwa na damu kumesimama. Tafuta huduma ya dharura ikiwa kutokwa na damu haisimami baada ya jaribio la pili.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Hatua 6",
        title: "Zuia Kutokwa na Damu Tena",
        description: "Epuka kuchota au kuvuta pua. Pia, usiinamishe kichwa chini ya moyo au kubeba vitu vizito kwa masaa mengi. Paka kwa upole gel ya chumvi (Ayr), mafuta ya kuzuia viini (Neosporin), au jelly ya petrol (Vaseline) ndani ya pua. Jielekeze kwenye septamu, sehemu ya kati ya pua. Mvuke, mashine za unyevu, au pakiti ya barafu kwenye daraja la pua pia zinaweza kusaidia.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Hatua 7",
        title: "Rudia Hatua za Kwanza-Ihudia Ikiwa Kutokwa na Damu Nyingine Kunatokea",
        description: "Ikiwa kutakuwa na kutokwa na damu tena, rudia hatua za kwanza-ihudia. Wakati huu, piga dawa ya kunyunyizia pua yenye oxymetazoline (Afrin) kwenye pande zote za pua baada ya kuvuta pua. Kisha kaza tena pua. Tafuta msaada wa matibabu ikiwa kutokwa na damu haisimami.",
        imagedsc: null,
    },
];

const faintingStepsSwahili: aidStepType[] = [
    {
        id: 1,
        step: "Hatua 1",
        title: "Hakikisha Usalama",
        description: "Angalia mazingira kwa hatari yoyote inayoweza kutokea. Ondoa vitu vyote vinavyoweza kusababisha madhara kwa mtu aliyeanguka.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Hatua 2",
        title: "Angalia Fahamu",
        description: "Gusa kwa upole na ulize kwa sauti kubwa, 'Unaendelea vizuri?' ili kuthibitisha kama kuna majibu. Ikiwa hakuna majibu, huenda wako bila fahamu.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Hatua 3",
        title: "Piga Simu ya Msaada",
        description: "Ikiwa mtu ataendelea kuwa bila fahamu kwa zaidi ya sekunde chache, piga simu kwa huduma ya dharura ya matibabu mara moja.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Hatua 4",
        title: "Mwelekeze Vizuri",
        description: "Laza mtu kwa umakini kwenye mgongo wake. Ikiwa inawezekana, inua miguu yake juu ya kiwango cha moyo ili kuboresha mzunguko wa damu kwenye ubongo. Hii inaweza kusaidia katika hali ya vasovagal syncope (sababu ya kawaida ya kupoteza fahamu).",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Hatua 5",
        title: "Acha Nguo Zilizokaza",
        description: "Achalie nguo zilizokaza, hasa kwenye shingo, ili kuwezesha mzunguko mzuri wa damu.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Hatua 6",
        title: "Fuatialia Upumuaji",
        description: "Angalia kama mtu anapumua. Ikiwa hapana, anza CPR ikiwa umefunzwa. Ikiwa hujui, subiri msaada wa kitaalamu wa matibabu.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Hatua 7",
        title: "Kurejesha na Kurejesha Nguvu",
        description: "Baki na mtu mpaka arudi fahamu. Mara tu anapopata fahamu, msaidie kuketi polepole. Mpatie maji na fuatilia hali yake kwa dalili yoyote ya machafuko au dalili zingine za wasiwasi.",
        imagedsc: null,
    },
    {
        id: 8,
        step: "Hatua 8",
        title: "Tafuta Uchunguzi wa Kitabibu",
        description: "Friza mtu kutafuta uchunguzi wa kitabibu ili kubaini chanzo cha kupoteza fahamu na kutatua matatizo yoyote ya kiafya yanayoweza kuwepo.",
        imagedsc: null,
    },
];

const thermalBurnAidStepsSwahili: aidStepType[] = [
    {
        id: 1,
        step: "Hatua 1",
        title: "Piga Simu ya 911",
        description: "Piga simu ya 911 ikiwa moto unapenya tabaka zote za ngozi, ngozi inaonekana kuwa gumu au imechomwa, na inaonyesha alama nyeupe, kahawia, au nyeusi. Pia, piga simu kama mhusika ni mtoto mchanga au mzee.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Hatua 2",
        title: "Zima Moto Mara Moja",
        description: "Zima moto au zuia mawasiliano ya mtu na maji moto, mvuke, au vifaa vingine vyenye joto. Saidia mtu 'kusimama, kuanguka, na kuruka' ili kuzima moto. Ondoa vifaa vinavyoteketea na nguo zilizochomwa au zenye joto. Ikiwa nguo inashikana na ngozi, kata au rarua karibu nayo.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Hatua 3",
        title: "Ondoa Nguo Inayobana Haraka",
        description: "Vua mapambo, mikanda, na nguo zinazobana. Majeraha yanaweza kuongezeka haraka.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Hatua 4",
        title: "Kwa Majeraha ya Daraja la Kwanza (Yanayogusa Tabaka la Juu la Ngozi): Baridi Moto",
        description: "Baridi moto sehemu iliyoungua chini ya maji baridi (sio baridi) au itie ndani ya maji baridi hadi maumivu yapungue. Tumia vitambaa baridi ikiwa maji hayapatikani. Kinga jeraha kwa kutumia bendeji safi isiyo na dutu adhiri au kitambaa safi. Usitumie siagi, mafuta, losheni, au krimu (haswa zinazo harufu). Tumia marashi ya petroli mara mbili hadi tatu kwa siku.",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Hatua 5",
        title:"Majeraha ya Daraja la Kwanza",
        description: "Muda wa Kumuona Daktari kwa Majeraha ya Daraja la Kwanza: Tafuta msaada wa matibabu ikiwa unaona dalili za maambukizo kama vile maumivu makali, uchungu, uvimbe, homa, au kutoka maji. Mtu anahitaji sindano ya tetanasi au chanjo ya kuimarisha, kulingana na tarehe ya chanjo ya mwisho. Binda la jeraha ni kubwa kuliko inchi mbili au linatoa majimaji.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Hatua 6",
        title: "Muda wa Kumuona Daktari kwa Majeraha ya Daraja la Pili (Yanayogusa Tabaka 2 za Juu za Ngozi):",
        description: "Baridi moto sehemu iliyoungua kwa kuzamisha kwa maji baridi kwa dakika 10 au 15. Tumia vitambaa baridi ikiwa maji hayapatikani. Kinga jeraha kwa kutumia bendeji safi, isiyo na dutu adhiri, na ifunge kwa gaza au kipande cha upande. Zuia mshtuko kwa kumweka mtu sawa, inua miguu karibu sentimita 30, na funika na koti au blanketi. Muone daktari kwa upimaji wa ukali wa jeraha na matibabu.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Hatua 7",
        title: "Kwa Majeraha ya Daraja la Tatu:",
        description: "Muwahishe mgojwa hospitali. Kinga sehemu iliyoungua kwa kutumia bendeji safi, isiyo na dutu adhiri, au kitambaa kingine kilicho huru linti. Pindua vidole na vidole vilivyoungua kwa matibabu ya kavu, vaa mavazi au kitambaa kingine ambacho hakitatoa linti. Usiweke jeraha katika maji au upake siagi au siagi, ambayo inaweza kusababisha maambukizo. Zuia mshtuko kwa kumweka mtu sawa, inua miguu karibu sentimita 30, na funika na koti au blanketi. Kwa majeraha ya njia ya hewa, usiweke mto chini ya kichwa wakati mtu anapokaa. Hii inaweza kufunga njia ya hewa. Mtu mwenye jeraha la uso asimame.",
        imagedsc: null,
    },
    {
        id: 8,
        step: "Hatua 8",
        title: "Muone Daktari:",
        description: "Madaktari watatoa oksijeni na maji, ikihitajika, na kutibu jeraha. Tumia simu ya dharura kufuatilia mshtuko hadi msaada wa dharura unapofika.",
        imagedsc: null,
    },
];


const bruiseAidStepsSwahili: aidStepType[] = [
    {
        id: 1,
        step: "Hatua 1",
        title: "Inua Sehemu Iliyochubuka",
        description: "Inua sehemu iliyojeruhiwa juu ya kiwango cha moyo, ikiwezekana. Hii husaidia kupunguza mtiririko wa damu kwenye eneo lililojeruhiwa na kupunguza uvimbe.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Hatua 2",
        title: "Tumia Pakiti ya Barafu",
        description: "Tumia pakiti ya barafu iliyofungwa kwenye kitambaa nyembamba kwenye sehemu iliyojeruhiwa. Iache kwa dakika 20. Rudia mara kadhaa kwa siku au mbili baada ya jeraha. Hii husaidia kupunguza uvimbe na kupunguza maumivu.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Hatua 3",
        title: "Tumia Bandeji ya Mpira (Ikiwa Kuna Uvimbe)",
        description: "Ikiwa eneo lililojeruhiwa linavimba, piga bandeji ya mpira kuzunguka eneo hilo, lakini sio kubana sana. Bandeji husaidia kubana eneo na kupunguza uvimbe.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Hatua 4",
        title: "Hakuna Haja ya Bandeji (Ikiwa Ngozi Haijapasuka)",
        description: "Ikiwa ngozi haijapasuka, hakuna haja ya kutumia bandeji. Ruhusu jeraha kupata hewa kwa ajili ya kupona asilia. Fikiria kutumia dawa ya kupunguza maumivu inayopatikana bila dawa ikiwa ni lazima.",
        imagedsc: null,
    },
];

const cutAndWoundAidStepsSwahili: aidStepType[] = [
    {
        id: 1,
        step: "Hatua 1",
        title: "Acha Kuvuja Damu",
        description: "Weka shinikizo moja kwa moja kwenye eneo ili kusitisha kutoka kwa damu. Tumia kitambaa safi au gauze iliyosafishwa.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Hatua 2",
        title: "Safisha na Lindika",
        description: "Safisha eneo kwa maji ya vuguvugu na sabuni laini. Tumia mafuta ya kupambana na bakteria ili kupunguza hatari ya maambukizi. Weka bendeji safi kwenye eneo. Ikiwa mafuta ya kupambana na bakteria yanasababisha mwasho, acha kutumia.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Hatua 3",
        title: "Piga Simu kwa Daktari",
        description: "Piga simu kwa daktari ikiwa jeraha ni kubwa au limefanyika kwenye pamoja, ikiwa huwezi kusafisha kuteleza vizuri, ikiwa jeraha ni kama kuchoma kwa kina, au ikiwa mtu hajapata chanjo ya tetanasi hivi karibuni. Tafuta msaada wa matibabu kwa majeraha kutokana na kuumwa na binadamu au wanyama.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Hatua 4",
        title: "Endelea na Matibabu",
        description: "Kwa jeraha dogo au kuteleza, ondoa bendeji baada ya siku kadhaa ili kuchochea uponyaji. Ona daktari ikiwa jeraha haliponi au linaonyesha dalili za maambukizi, ikiwa ni pamoja na kuwa nyekundu, uvimbe, usaha, au maumivu makali.",
        imagedsc: null,
    },
];



export const aidData = [
    new AidData(
        1,
        "Kutokwa na Damu Puani",
        `${require("../assets/noseBleeding.jpg")}`,
        nosebleedStepsSwahili,
        "Kuna sababu mbalimbali zinazoweza kusababisha kutokwa na damu pua. Mara nyingi, chanzo kikuu ni hewa kavu, iwe ni kutokana na joto wakati wa majira ya baridi au kuwa katika mazingira yenye joto na unyevunyevu mdogo. Visababishi vingine ni pamoja na kuchonga pua, kuvuta pua kwa nguvu mara kwa mara, majeraha yanayotokana na kuanguka au kupigwa puani, madhara ya dawa kama vile wazuzu wa damu, mzio, na kuwa katika maeneo yenye mwinuko mkubwa, ambapo hewa ni nyembamba.",
        "Ili kupunguza hatari ya kutokwa na damu pua, hakikisha sehemu ya ndani ya pua inabaki maji. Tumia kitambaa laini kueneza tabaka nyembamba la petrol jam kwenye tundu za pua mara tatu kwa siku, pamoja na kabla ya kwenda kulala. Unaweza pia kutumia bidhaa za pua zenye chumvi. Kutumia kifaa cha kutoa unyevu (humidifier) kunaweza kuwa muhimu ikiwa hewa ndani ya nyumba yako ni kavu. Epuka kuvuta sigara, kwani inaweza kusababisha kutoa damu na kukauka kwa ndani ya pua. Jiepushe na tabia za kuchimba pua au kuvuta pua kwa nguvu sana. Kama ni mtoto anapata kutokwa na damu pua, hakikisha kucha zake ziko fupi na msisitize kutoruhusu kuchimba pua. Tumia dawa za mafua na mzio kwa uangalifu, kwani zinaweza kusababisha kukauka kwa pua. Washauri daktari wako kuhusu athari zozote kwenye kutokwa na damu pua na endelea kuzitumia isipokuwa utakapotakiwa kusitisha."
    ),

    new  AidData(
        2,
        "Kupoteza Fahamu",
        `${require("../assets/6691752.jpg")}`,
        faintingStepsSwahili,
        "" ,
        ""
    ),
    new  AidData(
        3,
        "Mjeraha ya Moto",
        `${require("../assets/6691752.jpg")}`,
        thermalBurnAidStepsSwahili,
        "" ,
        ""
    ),
    new AidData(
        4,
        "Michubuko",
        `${require("../assets/6691752.jpg")}`,
        bruiseAidStepsSwahili,
        "",
        ""
    ),
    new AidData(
        5,
        "Majeraha",
        `${require("../assets/6691752.jpg")}`,
        cutAndWoundAidStepsSwahili,
        "",
        ""
    )
];
