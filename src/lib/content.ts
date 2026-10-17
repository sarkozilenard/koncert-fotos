export const site = {
  name: "Koncert Fotós",
  photographer: "Zénó",
  fullName: "Zénó Varga",
  role: "Koncert- és eseményfotós",
  city: "Szeged",
  area: "Szeged és környéke",
  email: "zenovarga02@gmail.com",
  instagram: "@varga.visuals",
  instagramUrl: "https://instagram.com/varga.visuals",
  headline: "Felejthetetlen pillanatok, örök koncertemlékek",
  lead: "Szegedi koncert- és eseményfotósként segítek megőrizni fellépéseid és rendezvényeid legintenzívebb pillanatait profi, hangulatos képeken, hogy újra és újra átélhessétek az élményt.",
};

export const nav = [
  { href: "/", label: "Kezdőlap" },
  { href: "/rolam", label: "Rólam" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/munkaim", label: "Munkáim" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;

export type CategoryId =
  | "koncert"
  | "fesztival"
  | "klub"
  | "akusztikus"
  | "esemeny";

export const categories: { id: "osszes" | CategoryId; label: string }[] = [
  { id: "osszes", label: "Összes" },
  { id: "koncert", label: "Koncert" },
  { id: "fesztival", label: "Fesztivál" },
  { id: "klub", label: "Klub" },
  { id: "akusztikus", label: "Akusztikus" },
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
    src: "/photos/byealex.jpg",
    alt: "Énekes a színpadon, fehér fénycsóvák előtt, mikrofonnal a kezében.",
    width: 1192,
    height: 1319,
    category: "koncert",
    title: "ByeAlex",
    caption: "Élő fellépés, színpadi fények",
  },
  {
    src: "/photos/zold-szinpad.jpg",
    alt: "Énekesnő zöld színpadi fényben, mikrofonnal, a dobos a háttérben.",
    width: 1205,
    height: 1600,
    category: "koncert",
    title: "Zöld fények",
    caption: "A pillanat energiája a színpadon",
  },
  {
    src: "/photos/duett.jpg",
    alt: "Két előadó együtt énekel vörös és rózsaszín színpadi fényben.",
    width: 1206,
    height: 1600,
    category: "koncert",
    title: "Duett",
    caption: "Közös jelenet, vörös fény",
  },
  {
    src: "/photos/mozgas.jpg",
    alt: "Énekesnő mozgásban, zöld fénypászmák alatt a színpadon.",
    width: 1124,
    height: 1600,
    category: "koncert",
    title: "Lendület",
    caption: "A mozdulat, ami megmarad",
  },
  {
    src: "/photos/fesztival.jpg",
    alt: "Szabadtéri fesztiválközönség a színpad előtt, kék ég alatt.",
    width: 1600,
    height: 1200,
    category: "fesztival",
    title: "A közönség soraiból",
    caption: "Nyári fesztivál, Szeged és környéke",
  },
  {
    src: "/photos/szabadteri.jpg",
    alt: "Énekesnő egy szabadtéri színpadon, narancssárga alkonyati fényben.",
    width: 900,
    height: 1600,
    category: "fesztival",
    title: "Alkonyati színpad",
    caption: "Szabadtéri fellépés",
  },
  {
    src: "/photos/lezerek.jpg",
    alt: "Éjszakai fesztivál, lézersugarak és három kivetítő a tömeg felett.",
    width: 1200,
    height: 1600,
    category: "fesztival",
    title: "Éjszakai lézerek",
    caption: "A fény és a tömeg együtt",
  },
  {
    src: "/photos/szin.jpg",
    alt: "Nagy fesztiválszínpad a SZIN-en, konfetti és a közönség sziluettje.",
    width: 1020,
    height: 574,
    category: "fesztival",
    title: "SZIN",
    caption: "Szabadtéri nagy színpad, Szeged",
  },
  {
    src: "/photos/lila.jpg",
    alt: "Énekes lila klubfényben, dobos a háttérben.",
    width: 1205,
    height: 1600,
    category: "klub",
    title: "Lila fény",
    caption: "Klubkoncert, teljes energia",
  },
  {
    src: "/photos/klub-zold.jpg",
    alt: "Előadó zöld klubfényben, mikrofonnal, sapkában.",
    width: 1205,
    height: 1600,
    category: "klub",
    title: "Klubfény",
    caption: "Közeli, sötét terem",
  },
  {
    src: "/photos/klub-meleg.jpg",
    alt: "Két előadó meleg, narancssárga fényben egy klubszínpadon.",
    width: 1170,
    height: 1560,
    category: "klub",
    title: "Meleg fény",
    caption: "Energikus klubpillanat",
  },
  {
    src: "/photos/akusztik.jpg",
    alt: "Akusztikus fellépés egy beltéri térben, a közönség telefonokkal veszi körül a színpadot.",
    width: 1200,
    height: 1600,
    category: "akusztikus",
    title: "Akusztikus közelség",
    caption: "Előadó és közönség egy térben",
  },
  {
    src: "/photos/plaza.jpg",
    alt: "Háromtagú zenekar beltéri színpadon, a karzatokon álló közönséggel.",
    width: 1600,
    height: 900,
    category: "esemeny",
    title: "Beltéri színpad",
    caption: "Esemény a közönség gyűrűjében",
  },
  {
    src: "/photos/karacsonyi.jpg",
    alt: "Énekesnő ünnepi díszlet előtt, karácsonyfa mellett lép fel.",
    width: 959,
    height: 1600,
    category: "esemeny",
    title: "Ünnepi fellépés",
    caption: "Különleges esemény, személyes hangulat",
  },
];

export const featuredPhotos = [
  "byealex",
  "fesztival",
  "lila",
  "szin",
  "duett",
  "lezerek",
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
    image: photos[11],
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
    image: photos[4],
  },
  {
    title: "Klubkoncert energikus pillanatok",
    text: "A klubkoncerten az energikus pillanatokban a lüktető ritmus, a fények és a közönség felszabadult hangulata egyetlen sodró élménnyé olvad össze.",
    image: photos[8],
  },
  {
    title: "Szabadtéri rendezvény esték",
    text: "A szabadtéri rendezvény esték varázslatos hangulatot teremtenek, ahol a vendégek a szabad ég alatt élvezhetik a programokat és a finom ételeket.",
    image: photos[5],
  },
  {
    title: "Intim akusztikus fellépések",
    text: "Az intim akusztikus fellépések közel hozzák az előadót a közönséghez, személyes, őszinte hangulatot teremtve.",
    image: photos[11],
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
