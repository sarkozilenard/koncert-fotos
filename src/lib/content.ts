export const site = {
  name: "Koncert Fotós",
  photographer: "Varga Zénó",
  fullName: "Varga Zénó",
  role: "Koncert- és eseményfotós",
  city: "Szeged",
  area: "Szeged és környéke",
  email: "zenovarga02@gmail.com",
  instagram: "@varga.visuals",
  instagramUrl: "https://instagram.com/varga.visuals",
  headline: "Felejthetetlen pillanatok, örök koncertemlékek",
  lead: "Szegedi koncert- és eseményfotósként segítek megőrizni fellépéseid és rendezvényeid legintenzívebb pillanatait profi, hangulatos képeken, hogy újra és újra átélhessétek az élményt.",
};

export const portrait = {
  src: "/photos/zeno.jpg",
  alt: "Varga Zénó fekete-fehér portréja, a laptopja mellett.",
  width: 1013,
  height: 1800,
};

export const nav = [
  { href: "/", label: "Kezdőlap" },
  { href: "/rolam", label: "Rólam" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/munkaim", label: "Munkáim" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;

export type CategoryId = "koncert" | "fesztival" | "klub" | "esemeny";

export const categories: { id: "osszes" | CategoryId; label: string }[] = [
  { id: "osszes", label: "Összes" },
  { id: "koncert", label: "Koncert" },
  { id: "fesztival", label: "Fesztivál" },
  { id: "klub", label: "Klub" },
  { id: "esemeny", label: "Esemény" },
];

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: CategoryId;
  title: string;
  caption: string;
};

export const photos: Photo[] = [
  {
    src: "/photos/feher-feny.jpg",
    alt: "Énekes a színpadon, fehér fénycsóvák előtt, mikrofonnal a kezében.",
    width: 1192,
    height: 1319,
    category: "koncert",
    title: "Fehér fény",
    caption: "Élő fellépés, színpadi fények",
  },
  {
    src: "/photos/szinpad.jpg",
    alt: "Énekes a színpad szélén, fehér és vörös fénycsóvák alatt.",
    width: 1089,
    height: 1444,
    category: "koncert",
    title: "A színpad szélén",
    caption: "Teljes alak, élő koncert",
  },
  {
    src: "/photos/zold-fenyek.jpg",
    alt: "Énekesnő zöld színpadi fényben, mikrofonnal, a dobos a háttérben.",
    width: 1089,
    height: 1445,
    category: "koncert",
    title: "Zöld fények",
    caption: "A pillanat energiája a színpadon",
  },
  {
    src: "/photos/duett-hatulrol.jpg",
    alt: "Két előadó együtt énekel vörös színpadi fényben, hátulról.",
    width: 1279,
    height: 1800,
    category: "koncert",
    title: "Duett",
    caption: "Közös jelenet a vörös fényben",
  },
  {
    src: "/photos/voros-feny.jpg",
    alt: "Két előadó szemben a kamerával, vörös és rózsaszín színpadi fényben.",
    width: 1357,
    height: 1800,
    category: "koncert",
    title: "Vörös fény",
    caption: "Duett, teljes energia",
  },
  {
    src: "/photos/lendulet.jpg",
    alt: "Énekes mozgásban, lila fényben, mikrofonnal a kezében.",
    width: 1357,
    height: 1800,
    category: "koncert",
    title: "Lendület",
    caption: "A mozdulat, ami megmarad",
  },
  {
    src: "/photos/alkonyat.jpg",
    alt: "Énekesnő egy szabadtéri színpadon, narancssárga alkonyati fényben.",
    width: 1012,
    height: 1800,
    category: "fesztival",
    title: "Alkonyati színpad",
    caption: "Szabadtéri fellépés",
  },
  {
    src: "/photos/kozonseg.jpg",
    alt: "Fesztiválközönség a zöld színpad előtt, kék ég alatt.",
    width: 960,
    height: 720,
    category: "fesztival",
    title: "A közönség soraiból",
    caption: "Nyári fesztivál",
  },
  {
    src: "/photos/szabadteri.jpg",
    alt: "Énekesnő a szabadtéri színpadon, zöld fényben, a közönség előtt.",
    width: 1170,
    height: 867,
    category: "fesztival",
    title: "Szabadtéri színpad",
    caption: "Fesztiválest, zöld fény",
  },
  {
    src: "/photos/kek-hatter.jpg",
    alt: "Előadó fekete sapkában, kék klubfényben, a színpad előtt.",
    width: 1161,
    height: 1355,
    category: "klub",
    title: "Kék háttér",
    caption: "Klubkoncert, teljes jelenlét",
  },
  {
    src: "/photos/lila-feny.jpg",
    alt: "Előadó lila klubfényben, mikrofonnal, sapkában.",
    width: 1088,
    height: 1446,
    category: "klub",
    title: "Lila fény",
    caption: "Klubkoncert, teljes energia",
  },
  {
    src: "/photos/zold-klub.jpg",
    alt: "Előadó zöld klubfényben, mikrofonnal, sapkában.",
    width: 1088,
    height: 1445,
    category: "klub",
    title: "Zöld klubfény",
    caption: "Közeli, sötét terem",
  },
  {
    src: "/photos/meleg-feny.jpg",
    alt: "Két előadó meleg, narancssárga fényben egy klubszínpadon.",
    width: 1170,
    height: 1560,
    category: "klub",
    title: "Meleg fény",
    caption: "Energikus klubpillanat",
  },
  {
    src: "/photos/unnepi.jpg",
    alt: "Énekesnő ünnepi díszlet előtt, karácsonyfa mellett lép fel.",
    width: 1079,
    height: 1800,
    category: "esemeny",
    title: "Ünnepi fellépés",
    caption: "Különleges esemény, személyes hangulat",
  },
];

export const featuredPhotos = [
  "feher-feny",
  "kozonseg",
  "lila-feny",
  "zold-fenyek",
  "voros-feny",
  "szabadteri",
].map((key) => photos.find((photo) => photo.src.endsWith(`${key}.jpg`))!);

export const services = [
  {
    num: "01",
    title: "Koncertfotózás élő fellépéseken",
    text: "A koncertfotózás élő fellépéseken a zenészek energiájának, a közönség lelkesedésének és a színpadi fények hangulatának elkapásáról szól.",
    image: photos[0],
  },
  {
    num: "02",
    title: "Eseményfotózás rendezvényeken",
    text: "Eseményfotózás során a legfontosabb pillanatokat, a résztvevők érzelmeit és hangulatát kreatív módon örökítem meg.",
    image: photos[13],
  },
  {
    num: "03",
    title: "Zenekari promóciós fotózás",
    text: "Zenekari promóciós fotózáson a zenekar karakterét és a tagok jelenlétét építem képpé: sajtóanyagokhoz, borítókhoz és közösségi felületekhez.",
    image: photos[2],
  },
];

export const works = [
  {
    title: "Nyári fesztivál hangulatok",
    text: "A nyári fesztivál hangulatokban keveredik a szabadság érzése a zenével, a színes fényekkel és a hajnalig tartó önfeledt tánccal.",
    image: photos[7],
  },
  {
    title: "Klubkoncert energikus pillanatok",
    text: "A klubkoncerten az energikus pillanatokban a lüktető ritmus, a fények és a közönség felszabadult hangulata egyetlen sodró élménnyé olvad össze.",
    image: photos[10],
  },
  {
    title: "Szabadtéri rendezvény esték",
    text: "A szabadtéri rendezvény esték varázslatos hangulatot teremtenek, ahol a vendégek a szabad ég alatt élvezhetik a programokat és a finom ételeket.",
    image: photos[6],
  },
  {
    title: "Intim akusztikus fellépések",
    text: "Az intim akusztikus fellépések közel hozzák az előadót a közönséghez, személyes, őszinte hangulatot teremtve.",
    image: photos[13],
  },
];

export const about = {
  short:
    "Koncert- és eseményfotósként Szegeden és a környéken örökítem meg a legjobb pillanatokat a színpadról és a közönség soraiból. Célom, hogy a felvételek hangulatukban is visszaadják az élményt, ne csak dokumentálják azt. Azok is teljesen átélhessék a pillanatot, akik nem lehettek ott.",
  story:
    "A fotózás számomra mindig is a pillanat varázsának megőrzéséről szólt. Koncertfotósként Szegeden kezdtem el járni a helyi klubokba és fesztiválokra. Ahogy egyre több zenekar és szervező keresett meg, lassan kialakult az a szakmai út, amelynek a középpontjában ma is az élő zene energiája és a közös élmények megörökítése áll.",
  practice:
    "A Koncert Fotós Szegeden és környékén koncert- és eseményfotózásra specializálódott, profi vizuális élményt nyújtva zenekaroknak, szervezőknek és magánügyfeleknek. Célom, hogy visszaadjam az élő pillanatok energiáját: a színpadi fények dinamikáját, a közönség lelkesedését és az apró részleteket, amelyek egy eseményt igazán emlékezetessé tesznek.",
  quote:
    "Célom, hogy hangulatában is visszaadjam az élményt, ne csak dokumentáljam azt.",
};

export const audiences = [
  {
    title: "Zenekaroknak",
    text: "Fellépésképek és promóciós anyagok, amelyeken látszik a színpadi jelenlét, nem csak a beállítás.",
  },
  {
    title: "Szervezőknek",
    text: "Fesztiválok és rendezvények dokumentálása úgy, hogy a közönség energiája is a képen maradjon.",
  },
  {
    title: "Magánügyfeleknek",
    text: "Privát események, amelyeken a fontos pillanatok később is újra átélhetők.",
  },
];

export const steps = [
  {
    num: "01",
    title: "Egyeztetés",
    text: "Megírod, hol és mikor szól a zene. Átbeszéljük a helyszínt, a hangulatot és azt, mire kellenek a képek.",
  },
  {
    num: "02",
    title: "Fotózás",
    text: "A színpadon és a közönség soraiban keresem azokat a pillanatokat, amelyekben benne van az este.",
  },
  {
    num: "03",
    title: "Utómunka",
    text: "A válogatott képeket finomhangolom, hogy a fény, a szín és az érzelem ugyanazt mesélje, mint a helyszínen.",
  },
];

export const eventTypes = [
  "Koncert",
  "Fesztivál",
  "Esemény",
  "Zenekari promóció",
  "Egyéb",
];
