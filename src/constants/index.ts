import { GalleryItem } from '@/types';

export interface ServiceDetail {
  id: string;
  category: 'construction' | 'interiors' | 'renovation' | 'specialized';
  titleEn: string;
  titleTe: string;
  shortDescEn: string;
  shortDescTe: string;
  fullDescEn: string;
  fullDescTe: string;
  image: string;
  workIncludedEn: string[];
  workIncludedTe: string[];
  benefitsEn: string[];
  benefitsTe: string[];
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  categoryTe: string;
  role: string;
  roleTe: string;
  logoText: string;
  color: string;
  educationalNoteEn: string;
  educationalNoteTe: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionTe: string;
  answerEn: string;
  answerTe: string;
}

export const COMPANY_CONTACT = {
  name: 'SS Global Constructions and Interior Works',
  shortName: 'SS Global',
  legalName: 'SS Global Constructions and Interior Works',
  phone: '9494502777',
  phoneFormatted: '+91 94945 02777',
  phoneRaw: '+919494502777',
  whatsappRaw: '919494502777',
  whatsappUrl:
    'https://wa.me/919494502777?text=Hello%20SS%20Global%20Constructions%2C%20I%20would%20like%20to%20enquire%20about%20your%20construction%20and%20interior%20services.',
  email: 'contact@ssglobalcsis.in',
  website: 'www.ssglobalcsis.in',
  websiteUrl: 'https://www.ssglobalcsis.in',
  address:
    'Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring, Vijayawada – 521108',
  addressStreet:
    'Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring',
  city: 'Vijayawada',
  state: 'Andhra Pradesh',
  pincode: '521108',
  country: 'India',
  hours: 'Mon – Sat: 9:00 AM – 7:30 PM | Sun: By Appointment',
  hoursTe: 'సోమ – శని: 9:00 AM – 7:30 PM | ఆది: అపాయింట్‌మెంట్ ద్వారా',
  experience: '20+ Years Experience',
  experienceTe: '20+ సంవత్సరాల అనుభవం',
  tagline: 'Trusted | Quality | Stability Through Experience',
  taglineTe: 'విశ్వసనీయత | నాణ్యత | అనుభవంతో కూడిన స్థిరత్వం',
  supportingTagline: 'Specialists in All Constructions & Interior Works',
  supportingTaglineTe: 'అన్ని రకాల నిర్మాణాలు & ఇంటీరియర్ పనులలో నిపుణులు',
  slogan1: 'From Foundation to Finishing',
  slogan1Te: 'పునాది నుండి ఫినిషింగ్ వరకు',
  slogan2: 'Choice Is Yours...',
  slogan2Te: 'ఛాయిస్ ఈజ్ యువర్స్...',
  teluguPromo1:
    'మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా...',
  teluguPromo2: 'ఇంటిని అందంగా తీర్చిదిద్దే మీ భాగస్వామి...',
  teluguPromo3: 'మీ కలల ఇల్లు... మా బాధ్యత...',
  teluguPromo4: 'తరాలు మారినా తరగని బలం... మీ నమ్మకమే మా పునాది...',
};

export const NAV_LINKS = [
  { href: '#home', labelKey: 'home', id: 'link-home' },
  { href: '#about', labelKey: 'about', id: 'link-about' },
  { href: '#services', labelKey: 'services', id: 'link-services' },
  { href: '#projects', labelKey: 'projects', id: 'link-projects' },
  { href: '#gallery', labelKey: 'gallery', id: 'link-gallery' },
  { href: '#video-tour', labelKey: 'videoTour', id: 'link-video-tour' },
  { href: '#materials', labelKey: 'materials', id: 'link-materials' },
  { href: '#why-us', labelKey: 'whyUs', id: 'link-why-us' },
  { href: '#faq', labelKey: 'faq', id: 'link-faq' },
  { href: '#contact', labelKey: 'contact', id: 'link-contact' },
];

export const ALL_SERVICES: ServiceDetail[] = [
  {
    id: 'complete-house',
    category: 'construction',
    titleEn: 'Complete House Construction',
    titleTe: 'సంపూర్ణ గృహ నిర్మాణం (Complete House)',
    shortDescEn:
      'Turnkey end-to-end residential home building from initial soil test and foundation up to final electrical and paint handover.',
    shortDescTe:
      'పునాది తవ్వకం నుండి ఫైనల్ పెయింట్ మరియు గృహప్రవేశం వరకు సంపూర్ణ టర్న్‌కీ నిర్మాణ సేవలు.',
    fullDescEn:
      'Our complete house construction service offers total peace of mind for families in Vijayawada. We manage architecture, structural engineering, civil framing, brickwork, plastering, plumbing, wiring, and premium painting with single-window accountability.',
    fullDescTe:
      'మా కంప్లీట్ హౌస్ కన్‌స్ట్రక్షన్ సర్వీస్ ద్వారా ప్లానింగ్ నుండి హ్యాండోవర్ వరకు పూర్తి పర్యవేక్షణ మాదే. వేర్వేరు కాంట్రాక్టర్ల వెంట తిరిగే అవసరం లేకుండా నిర్ణీత బడ్జెట్ మరియు సమయంలో ఇల్లు పూర్తి చేయబడుతుంది.',
    image: '/images/residential.jpg',
    workIncludedEn: [
      'Excavation & Deep RCC Footing Foundation',
      'Engineered Columns, Beams & Roof Slabs',
      'Red Brick / Solid Fly Ash Masonry',
      'Concealed Piping & Finolex/Polycab Wiring',
      'Vitrified Tile Flooring & Bathroom Fitting',
      'Exterior Weather-Proof & Interior Royal Emulsion',
    ],
    workIncludedTe: [
      'ఎర్త్‌వర్క్ మరియు పటిష్టమైన ఆర్‌సీసీ ఫౌండేషన్',
      'పిల్లర్లు, బీములు మరియు రూఫ్ స్లాబ్ కాస్టింగ్',
      'నాణ్యమైన రెడ్ బ్రిక్ / ఫ్లై యాష్ గోడల నిర్మాణం',
      'కన్సీల్డ్ ప్లంబింగ్ మరియు ఐఎస్ఐ కేబుల్ వైరింగ్',
      'ప్రీమియం విట్రిఫైడ్ టైలింగ్ & శానిటరీ ఫిట్టింగ్',
      'ఏషియన్ పెయింట్స్ ఎక్స్‌టీరియర్ & ఇంటీరియర్ ఫినిషింగ్',
    ],
    benefitsEn: [
      'Single point of responsibility for the entire home',
      'Strict adherence to IS civil structural standards',
      '100% Vasthu compliant architectural space planning',
      'Clear milestone-by-milestone construction progress',
    ],
    benefitsTe: [
      'మొత్తం ఇంటి నిర్మాణానికి ఒకే విశ్వసనీయ సంస్థ బాధ్యత',
      'నాణ్యతా ప్రమాణాలు మరియు వాస్తు నియమాల కచ్చితమైన పాటింపు',
      'బడ్జెట్ అదుపులో ఉండేలా దశలవారీగా పనుల నిర్వహణ',
      'మన్నికైన నాణ్యతతో తరతరాలు నిలిచే భవనం',
    ],
  },
  {
    id: 'independent-house',
    category: 'construction',
    titleEn: 'Independent House Construction',
    titleTe: 'స్వతంత్ర గృహ నిర్మాణం (Independent Houses)',
    shortDescEn:
      'Custom ground and multi-floor independent houses built according to your family’s individual plot dimensions and privacy requirements.',
    shortDescTe:
      'మీ స్వంత ప్లాట్‌లో మీ కుటుంబ అవసరాలు మరియు అభిరుచులకు తగినట్లుగా నిర్మించే స్వతంత్ర గృహాలు.',
    fullDescEn:
      'Independent homes require a balance of privacy, security, natural cross-ventilation, and parking. SS Global handles G, G+1, and G+2 residential configurations with custom compound walls, gate setups, and rainwater harvesting.',
    fullDescTe:
      'స్వతంత్ర గృహాలలో విశాలమైన స్థలం, కార్ పార్కింగ్, ప్రైవసీ మరియు గార్డెన్ స్పేస్ ముఖ్యమైనవి. మీ ప్లాట్ సైజుకు తగినట్లుగా అందమైన ఎలివేషన్‌తో స్వతంత్ర ఇళ్లను నిర్మిస్తాము.',
    image: '/images/hero-bg.jpg',
    workIncludedEn: [
      'Site clearing and accurate boundary layout',
      'Reinforced plinth beam and anti-termite treatment',
      'Open hall, spacious bedrooms with attached toilets',
      'Dedicated staircase and car porch structure',
      'Terrace waterproofing and parapet wall safety',
    ],
    workIncludedTe: [
      'సైట్ క్లీనింగ్ మరియు సరిహద్దు మార్కింగ్',
      'ప్లింత్ బీమ్ మరియు చెదలు పట్టని కెమికల్ ట్రీట్‌మెంట్',
      'విశాలమైన హాల్, అటాచ్డ్ బాత్రూమ్స్‌తో కూడిన బెడ్‌రూమ్‌లు',
      'కార్ పోర్చ్, మెట్లు మరియు సురక్షితమైన కాంపౌండ్ వాల్',
      'టెర్రస్ వాటర్‌ప్రూఫింగ్ మరియు పారపెట్ వాల్ రక్షణ',
    ],
    benefitsEn: [
      'Tailored for optimal sunlight and air circulation',
      'Provision for future floor additions with heavy-duty columns',
      'Complete compound wall and secure gate execution',
    ],
    benefitsTe: [
      'సహజమైన గాలి, వెలుతురు వచ్చేలా సైంటిఫిక్ ప్లానింగ్',
      'భవిష్యత్తులో పై అంతస్తులు కట్టుకునేందుకు పటిష్టమైన పునాదులు',
      'పూర్తి భద్రతతో కూడిన గేట్ మరియు కాంపౌండ్ వాల్',
    ],
  },
  {
    id: 'villa-construction',
    category: 'construction',
    titleEn: 'Villa Construction',
    titleTe: 'లగ్జరీ విల్లా నిర్మాణం (Luxury Villas)',
    shortDescEn:
      'High-end contemporary and classic duplex & triplex villas with double-height ceilings, bespoke exterior elevations, and premium finishes.',
    shortDescTe:
      'డబుల్ హైట్ సీలింగ్స్, మోడరన్ ఎలివేషన్ మరియు రాయల్ లుక్‌తో కూడిన డ్యూప్లెక్స్ & ట్రిప్లెక్స్ లగ్జరీ విల్లాలు.',
    fullDescEn:
      'Building a luxury villa represents elegance and prestige. We integrate cantilevered balconies, stone cladding, glass railings, textured facades, and smart conduits, ensuring your villa stands out in any premier locality in Vijayawada or Amaravati.',
    fullDescTe:
      'విల్లా నిర్మాణం ఒక హోదా మరియు లగ్జరీ జీవనశైలికి ప్రతీక. గ్రాండ్ లివింగ్ స్పేసెస్, టెర్రస్ గార్డెన్స్, ఆర్కిటెక్చరల్ ఎలివేషన్ మరియు హై-ఎండ్ మెటీరియల్స్‌తో మీ విల్లాను అత్యద్భుతంగా రూపొందిస్తాము.',
    image: '/images/residential.jpg',
    workIncludedEn: [
      'Architectural 3D elevation modeling and structural detailing',
      'Double-height grand living room framing',
      'High-grade concrete (M25/M30) & Tata Tiscon Fe-550D rebar',
      'Toughened glass balcony railings and Teak wood main frames',
      'False ceiling integration and landscaped outdoor provisions',
    ],
    workIncludedTe: [
      'రియలిస్టిక్ 3D ఎలివేషన్ మరియు ఆర్కిటెక్చరల్ ప్లానింగ్',
      'గ్రాండ్ లివింగ్ హాల్ మరియు ఫ్లోటింగ్ స్టేర్‌కేస్',
      'హై-గ్రేడ్ కాంక్రీట్ మరియు టాటా టిస్కాన్ రీబార్ స్టీల్',
      'టెక్ వుడ్ ప్రధాన ద్వారాలు మరియు టఫ్‌నెడ్ గ్లాస్ బాల్కనీలు',
      'టెర్రస్ గార్డెన్ మరియు మోడరన్ ఫాల్స్ సీలింగ్ ప్రొవిజన్స్',
    ],
    benefitsEn: [
      'Magnificent architectural aesthetics with high curb appeal',
      'Uncompromised premium materials for lasting luxury',
      'Thermal insulation and noise-dampening construction methods',
    ],
    benefitsTe: [
      'చూడగానే ఆకట్టుకునే రాయల్ ఆర్కిటెక్చరల్ అందం',
      'గరిష్ట నాణ్యతతో కూడిన ప్రీమియం బ్రాండ్ మెటీరియల్స్',
      'ఎగ్జిక్యూటివ్ లైఫ్‌స్టైల్‌కు సరిపోయే విలాసవంతమైన వాతావరణం',
    ],
  },
  {
    id: 'apartment-construction',
    category: 'construction',
    titleEn: 'Apartment Construction',
    titleTe: 'అపార్ట్‌మెంట్ నిర్మాణం (Apartments & Flats)',
    shortDescEn:
      'Multi-family residential apartment blocks engineered for heavy structural loads, seismic safety, and optimal common utility layouts.',
    shortDescTe:
      'నాణ్యమైన ఆర్‌సీసీ ఫ్రేమింగ్, లిఫ్ట్ షాఫ్ట్స్ మరియు పటిష్టమైన భద్రతతో నిర్మించే బహుళ అంతస్తుల అపార్ట్‌మెంట్లు.',
    fullDescEn:
      'For plot owners and developers seeking multi-unit flats in Vijayawada, we handle structural load calculations, soil bearing investigations, lift provisions, basement stilt parking, generator backup wiring, and municipal bye-law compliance.',
    fullDescTe:
      'అపార్ట్‌మెంట్ నిర్మాణంలో గ్రౌండ్ స్టిల్ట్ పార్కింగ్, లిఫ్ట్ ఇన్ఫ్రాస్ట్రక్చర్, ఫైర్ సేఫ్టీ డక్ట్స్ మరియు ప్రతి ఫ్లాట్‌కు సమానమైన వెంటిలేషన్ ఉండేలా పటిష్టంగా నిర్మిస్తాము.',
    image: '/images/structural.jpg',
    workIncludedEn: [
      'Soil investigation and deep RCC pile/raft foundation',
      'Heavy column-beam grid for multi-story load distribution',
      'Fire-rated ducting, drainage stacks, and overhead tank design',
      'Standardized floor layouts with soundproof party walls',
      'Common area tile/granite flooring, lobby, and staircase safety',
    ],
    workIncludedTe: [
      'సాయిల్ టెస్టింగ్ మరియు డీప్ రాఫ్ట్/పైల్ ఫౌండేషన్',
      'బహుళ అంతస్తుల బరువును తట్టుకునే బలమైన పిల్లర్ల గ్రిడ్',
      'లిఫ్ట్ షాఫ్ట్, వాటర్ ట్యాంక్ మరియు డ్రైనేజ్ పైప్‌లైన్స్',
      'ప్రతి ఫ్లాట్‌కు సౌకర్యవంతమైన వాస్తు బేస్డ్ లేఅవుట్',
      'కామన్ ఏరియా గ్రానైట్ ఫ్లోరింగ్ మరియు సేఫ్టీ రైలింగ్స్',
    ],
    benefitsEn: [
      'Optimized carpet-to-super-builtup ratio with zero space wastage',
      'Rigorous structural safety meeting Indian Seismic Standards',
      'Smooth municipal sanction support and certified execution',
    ],
    benefitsTe: [
      'స్పేస్ వేస్ట్ కాకుండా కార్పెట్ ఏరియాను గరిష్టంగా ఉపయోగించుకునే ప్లాన్',
      'భూకంపాలను తట్టుకునే ఇండియన్ స్టాండర్డ్స్ కోడ్స్ ప్రకారం నిర్మాణం',
      'ఫ్లాట్ కొనుగోలుదారులను ఆకర్షించే పటిష్టమైన నాణ్యత',
    ],
  },
  {
    id: 'commercial-construction',
    category: 'construction',
    titleEn: 'Commercial Construction',
    titleTe: 'కమర్షియల్ కాంప్లెక్స్ నిర్మాణం (Commercial Buildings)',
    shortDescEn:
      'Modern commercial complexes, retail showrooms, corporate offices, and shopping hubs with expansive column-free floor plates.',
    shortDescTe:
      'షాపింగ్ కాంప్లెక్స్‌లు, షోరూమ్‌లు మరియు కార్పొరేట్ ఆఫీసుల కోసం మోడరన్ కమర్షియల్ భవనాలు.',
    fullDescEn:
      'Commercial properties require durable materials, high floor-to-ceiling heights, wide display frontages, heavy electrical loads, and glass or ACP facade capability. SS Global brings commercial building expertise to busy arterial corridors in Vijayawada.',
    fullDescTe:
      'వ్యాపారాలకు అనువైన పెద్ద షోరూమ్ స్పేసెస్, గ్లాస్ ఫ్రంట్ ఎలివేషన్, హెవీ ఎలక్ట్రికల్ సదుపాయాలు మరియు దృఢమైన నిర్మాణంతో కమర్షియల్ కాంప్లెక్స్‌లను నిర్మిస్తాము.',
    image: '/images/commercial.jpg',
    workIncludedEn: [
      'Long-span RCC beams for unobstructed retail showroom areas',
      'High-traffic granite and industrial vitrified floor paving',
      'Provisions for structural glazing, curtain walls, and ACP panels',
      'Heavy commercial electrical panel conduits and 3-phase wiring',
      'Basement parking with heavy-duty ramp slope and sump pumps',
    ],
    workIncludedTe: [
      'షోరూమ్‌లలో అడ్డంకులు లేని పెద్ద హాల్స్ కోసం లాంగ్ స్పాన్ బీములు',
      'ఎక్కువ రద్దీని తట్టుకునే హెవీ డ్యూటీ గ్రానైట్ ఫ్లోరింగ్',
      'గ్లాస్ ఫ్రంట్ మరియు ఏసీపీ ప్యానెల్ ఎలివేషన్ ప్రొవిజన్స్',
      'కమర్షియల్ త్రీ-ఫేజ్ పవర్ వైరింగ్ మరియు సేఫ్టీ లైన్స్',
      'బేస్‌మెంట్ పార్కింగ్ మరియు వాటర్ డ్రైనేజ్ సిస్టమ్',
    ],
    benefitsEn: [
      'Maximum rentable floor area with flexible partition potential',
      'Modern aesthetic facade attracting prime corporate and retail tenants',
      'Fast-track milestone delivery minimizing financing costs',
    ],
    benefitsTe: [
      'వ్యాపారాలకు ఎక్కువ అద్దె వచ్చేలా ఆకర్షణీయమైన ఫ్రంట్ లుక్',
      'షోరూమ్‌లకు అనుకూలమైన ఫ్లెక్సిబుల్ ఇంటీరియర్ స్పేస్',
      'నిర్ణీత గడువులో ప్రాజెక్ట్ పూర్తి చేసే పద్ధతి',
    ],
  },
  {
    id: 'interior-design-execution',
    category: 'interiors',
    titleEn: 'Interior Design and Execution',
    titleTe: 'ఇంటీరియర్ డిజైన్ & ఎగ్జిక్యూషన్ (Turnkey Interiors)',
    shortDescEn:
      'Full turnkey interior solutions including space planning, modular carpentry, designer false ceilings, and ambient architectural lighting.',
    shortDescTe:
      'స్పేస్ ప్లానింగ్, మాడ్యులర్ కార్పెంట్రీ, ఫాల్స్ సీలింగ్ మరియు లైటింగ్‌తో కూడిన పూర్తి ఇంటీరియర్ పనులు.',
    fullDescEn:
      'Turn bare concrete walls into warm, ergonomic, and breathtaking homes. We manage end-to-end interior execution with premium marine-grade plywood, acrylic/laminate shutters, warm LED cove lighting, and Italian marble/granite finishes.',
    fullDescTe:
      'ఇంటికి అసలైన అందం ఇంటీరియర్‌తోనే వస్తుంది. ప్రీమియం ప్లైవుడ్, ల్యామినేట్స్, అందమైన టీవీ యూనిట్లు, ఫాల్స్ సీలింగ్ మరియు ఎల్‌ఈడీ లైటింగ్‌తో మీ ఇంటిని ఒక ప్యాలెస్‌లా మారుస్తాము.',
    image: '/images/interior.jpg',
    workIncludedEn: [
      '3D interior visualization before wood cutting or framing',
      'Bespoke TV entertainment wall units with fluted paneling',
      'Gypsum designer false ceilings with warm indirect cove LEDs',
      'Foyer partitions, pooja room teak carvings, and shoe units',
      'Full bedroom wardrobes with soft-close German hardware',
    ],
    workIncludedTe: [
      'పనులు ప్రారంభించే ముందే 3D ఇంటీరియర్ డిజైన్ ప్రివ్యూ',
      'లివింగ్ రూమ్‌లో ఆకర్షణీయమైన టీవీ యూనిట్ & వాల్ ప్యానెలింగ్',
      'జిప్సం ఫాల్స్ సీలింగ్ మరియు వార్మ్ ఎల్‌ఈడీ కోవ్ లైటింగ్',
      'పూజా రూమ్ డెకరేటివ్ వుడ్‌వర్క్ మరియు ఫోయర్ పార్టిషన్స్',
      'బెడ్‌రూమ్‌లలో విశాలమైన వార్డ్‌రోబ్‌లు & డ్రెస్సింగ్ యూనిట్స్',
    ],
    benefitsEn: [
      'Integrated concept avoiding clashes between carpenters and electricians',
      'Branded termite-treated marine ply for long lifespan',
      'Ergonomic space optimization for clutter-free living',
    ],
    benefitsTe: [
      'కార్పెంటర్, పెయింటర్, ఎలక్ట్రీషియన్ల సమన్వయంతో నాణ్యమైన పని',
      'చెదలు పట్టని వాటర్‌ప్రూఫ్ ప్లైవుడ్ మరియు బ్రాండెడ్ హార్డ్‌వేర్',
      'మీ ఇల్లు విశాలంగా మరియు విలాసవంతంగా కనిపించేలా డిజైన్',
    ],
  },
  {
    id: 'kitchen-renovation',
    category: 'renovation',
    titleEn: 'Kitchen Renovation',
    titleTe: 'కిచెన్ రినోవేషన్ (Modular Kitchen Upgrade)',
    shortDescEn:
      'Modern modular kitchen upgrades with heat/water-resistant granite counters, tandem pantry boxes, and silent chimney conduits.',
    shortDescTe:
      'మోడరన్ మాడ్యులర్ కిచెన్, గ్రానైట్ కౌంటర్‌టాప్స్, టాండెమ్ బాక్సెస్ మరియు చిమ్నీ ప్రొవిజన్స్.',
    fullDescEn:
      'The kitchen is the heart of every Indian home. We convert old, cramped cooking spaces into sleek, hygienic, and highly functional modular kitchens with anti-termite marine ply, soft-close drawers, tall pantries, and stain-free wall dadoing.',
    fullDescTe:
      'వంటగది శుభ్రంగా, సౌకర్యవంతంగా ఉండటం ప్రతి గృహిణి కల. పాత కిచెన్‌ను పూర్తిగా ఆధునీకరించి, తేమను తట్టుకునే మాడ్యులర్ డ్రాయర్లు, గ్రానైట్ టాప్ మరియు సులభంగా శుభ్రమయ్యే టైల్స్‌తో తీర్చిదిద్దుతాము.',
    image: '/images/interior.jpg',
    workIncludedEn: [
      'Dismantling old concrete shelves without damaging wall structure',
      'Plumbing re-routing for under-sink RO units and dishwashers',
      'Heavy-duty jet black granite / quartz slab installation',
      'Marine ply carcases with acrylic / PVC seamless edge-banded shutters',
      'Stainless steel 304 pullouts, spice racks, and corner carousels',
    ],
    workIncludedTe: [
      'గోడలు దెబ్బతినకుండా పాత రాక్స్ తొలగింపు',
      'ఆర్వో ప్యూరిఫైయర్ మరియు సింక్ కోసం కొత్త ప్లంబింగ్ లైన్స్',
      'జెట్ బ్లాక్ గ్రానైట్ / క్వార్ట్జ్ కౌంటర్‌టాప్ ఫిక్సింగ్',
      'వాటర్‌ప్రూఫ్ మెరైన్ ప్లైవుడ్ మరియు స్మూత్ షట్టర్స్',
      'ఎస్ఎస్ 304 స్టెయిన్‌లెస్ స్టీల్ బాస్కెట్లు & స్పైస్ రాక్స్',
    ],
    benefitsEn: [
      'Organized storage accommodating Indian cookware and utensils',
      'Heat, oil, and moisture-resistant surface materials',
      'Fast turnaround minimizing cooking disruption',
    ],
    benefitsTe: [
      'భారతీయ వంటలకు అనువైన ఎక్కువ స్టోరేజ్ కెపాసిటీ',
      'నూనె మరకలు, వేడిని తట్టుకునే క్వాలిటీ మెటీరియల్స్',
      'వంట పని సులభతరం అయ్యేలా ఎర్గోనామిక్ లేఅవుట్',
    ],
  },
  {
    id: 'bathroom-renovation',
    category: 'renovation',
    titleEn: 'Bathroom Renovation',
    titleTe: 'బాత్‌రూమ్ రినోవేషన్ (Bathroom Modernization)',
    shortDescEn:
      'Complete bathroom overhauls with high-performance waterproofing, modern anti-skid tiles, concealed CPVC lines, and Hindware fixtures.',
    shortDescTe:
      'యాంటీ-స్కిడ్ టైలింగ్, లీక్ ప్రూఫ్ వాటర్‌ప్రూఫింగ్ మరియు హిండ్‌వేర్ మోడరన్ శానిటరీవేర్ ఫిట్టింగ్.',
    fullDescEn:
      'Old bathrooms often suffer from concealed pipe corrosion, joint leakages, and outdated tiles. We strip bathrooms down to bare masonry, apply guaranteed waterproof membranes, and install modern wall-hung commodes, concealed flush tanks, and diverter showers.',
    fullDescTe:
      'బాత్‌రూమ్‌లలో లీకేజీలు, పాత పైపులు మరియు మురికి టైల్స్ ప్రధాన సమస్యలు. మేము పాత వాటిని తొలగించి, పూర్తి వాటర్‌ప్రూఫింగ్ చేసి, మోడరన్ వాల్-హంగ్ క్లోజెట్స్, డైవర్టర్ షవర్లు మరియు అందమైన టైల్స్‌ను అమర్చుతాము.',
    image: '/images/interior.jpg',
    workIncludedEn: [
      'Removal of legacy tiles and corroded GI pipes',
      'Installation of heavy-duty Astral/Ashirvad CPVC & SWR pipes',
      'Multi-coat polymer cementitious waterproofing on floors and walls',
      'Anti-skid floor tiles and full-height glossy wall tiles',
      'Branded diverters, glass shower partition, and vanity basin',
    ],
    workIncludedTe: [
      'పాత టైల్స్ మరియు తుప్పు పట్టిన పైపుల తొలగింపు',
      'హై-క్వాలిటీ సీపీవీసీ పైప్‌లైన్స్ అమరిక',
      'ఫ్లోర్ మరియు గోడలకు డబుల్ కోట్ వాటర్‌ప్రూఫింగ్ ట్రీట్‌మెంట్',
      'జారకుండా ఉండే యాంటీ-స్కిడ్ టైల్స్ మరియు వాల్ టైల్స్',
      'వాల్ హంగ్ కమోడ్, డైవర్టర్ షవర్ మరియు వాష్ బేసిన్ ఫిట్టింగ్',
    ],
    benefitsEn: [
      'Zero seepage guarantee protecting adjacent bedroom walls',
      'Safe, non-slip flooring for elderly family members',
      'Luxury hotel-like finish with water-saving fixtures',
    ],
    benefitsTe: [
      'పక్క గదుల గోడలకు చెమ్మ రాకుండా 100% లీకేజ్ ఫ్రీ గ్యారెంటీ',
      'పెద్దవారికి సురక్షితమైన జారకుండా ఉండే టైల్స్',
      'లగ్జరీ హోటల్ తరహా ఫ్రెష్ & మోడరన్ బాత్‌రూమ్ లుక్',
    ],
  },
  {
    id: 'waterproofing',
    category: 'specialized',
    titleEn: 'Waterproofing Works',
    titleTe: 'వాటర్‌ప్రూఫింగ్ పనులు (Leakage & Dampness Solutions)',
    shortDescEn:
      'Specialist structural waterproofing for roofs, sunken slabs, basements, water sumps, and external damp walls.',
    shortDescTe:
      'రూఫ్ స్లాబ్‌లు, సంప్స్, బేస్‌మెంట్ మరియు గోడల చెమ్మ నివారణకు శాశ్వత వాటర్‌ప్రూఫింగ్ పరిష్కారాలు.',
    fullDescEn:
      'Water ingress is the silent enemy of concrete and steel reinforcement. Our team uses polymer-modified cementitious coatings, elastomeric roof membranes, and chemical pressure grouting to seal structural joints, terraces, and water tanks permanently.',
    fullDescTe:
      'నీటి చెమ్మ వల్ల కాంక్రీట్ బలహీనపడి, ఐరన్ తుప్పు పడుతుంది. మేము ప్రఖ్యాత బ్రాండ్ల కెమికల్ కోటింగ్స్ మరియు టెక్నికల్ గ్రౌటింగ్ ద్వారా టెర్రస్ స్లాబ్, వాటర్ ట్యాంకులు మరియు గోడలను లీకేజీ రహితంగా మారుస్తాము.',
    image: '/images/structural.jpg',
    workIncludedEn: [
      'Deep terrace surface grinding and crack repair routing',
      'Polymer modified slurry coat application with fiber mesh reinforcement',
      'Elastomeric UV-reflective heat & waterproofing top coats',
      'Sunken bathroom floor water-barrier testing before tile laying',
      'Pressure grouting for concrete honeycombs and expansion joints',
    ],
    workIncludedTe: [
      'స్లాబ్ ఉపరితలం క్లీనింగ్ మరియు పగుళ్ల మరమ్మతు',
      'ఫైబర్ మెష్‌తో కూడిన పాలిమర్ వాటర్‌ప్రూఫింగ్ కోటింగ్',
      'ఎండ వేడిని మరియు వర్షాన్ని తట్టుకునే యూవీ టాప్‌కోట్',
      'బాత్‌రూమ్ సన్కెన్ స్లాబ్ లీక్-టెస్టింగ్ మరియు సీలింగ్',
      'కాంక్రీట్ జాయింట్స్ మరియు సంప్ వాటర్‌ప్రూఫింగ్',
    ],
    benefitsEn: [
      'Protects TMT steel rebar from internal rust and spalling',
      'Eliminates ugly ceiling dampness and ceiling paint peeling',
      'Reduces indoor top-floor room temperature during peak summer',
    ],
    benefitsTe: [
      'స్లాబ్‌లోని స్టీల్ తుప్పు పట్టకుండా దీర్ఘకాలిక భద్రత',
      'గోడలు, సీలింగ్స్ పై పెయింట్ పాడవకుండా శాశ్వత పరిష్కారం',
      'వేసవిలో పై అంతస్తు వేడిని గణనీయంగా తగ్గించే ప్రయోజనం',
    ],
  },
  {
    id: 'cement-masonry-works',
    category: 'specialized',
    titleEn: 'Cement & Masonry Works',
    titleTe: 'సిమెంట్ & మేసన్రీ పనులు (Masonry & Plastering)',
    shortDescEn:
      'Precision red-brick construction, solid block masonry, parapet extensions, smooth double-coat plastering, and structural repairs.',
    shortDescTe:
      'ఇటుకల నిర్మాణం, నునుపైన ప్లాస్టరింగ్, గోడల మరమ్మతులు మరియు కాంపౌండ్ వాల్ వర్క్స్.',
    fullDescEn:
      'Solid walls require plumb alignment, consistent mortar mix ratios, and thorough curing. Our skilled masons execute red clay brickwork, AAC block jointing, window sill bands, lintel casting, and mirror-finish sand plastering.',
    fullDescTe:
      'గోడలు స్ట్రెయిట్‌గా, దృఢంగా ఉండటానికి అనుభవజ్ఞులైన మేస్త్రీల నైపుణ్యం అవసరం. నాణ్యమైన ఇసుక, సిమెంట్ మిక్సింగ్‌తో గోడల నిర్మాణం, ఆర్చ్‌లు మరియు స్మూత్ ప్లాస్టరింగ్ పనులను చేస్తాము.',
    image: '/images/structural.jpg',
    workIncludedEn: [
      'Leveling and plumb-line accurate brick bond laying',
      'Reinforced concrete window lintels and sunshade chajjas',
      '1:4 cement-sand mix ratio for internal wall plastering',
      'Waterproof sponge-finish external plastering with drip moulds',
      'Parapet wall raising and terrace partition additions',
    ],
    workIncludedTe: [
      'తూకం, మట్టం సరిచూసుకుంటూ ఇటుకల గోడల నిర్మాణం',
      'కిటికీలు, తలుపులకు బలమైన కాంక్రీట్ లింటెల్స్ వేయడం',
      'లోపలి గోడలకు నునుపైన రెండు కోట్ల ప్లాస్టరింగ్',
      'వర్షపు నీరు కారకుండా బయటి గోడలకు వాటర్‌ప్రూఫ్ ప్లాస్టరింగ్',
      'అదనపు గోడలు, పారపెట్ వాల్స్ మరియు పార్టీషన్స్ నిర్మాణం',
    ],
    benefitsEn: [
      'Crack-free surfaces ready for smooth putty and painting',
      'Strong structural bonding resisting weather expansion',
      'Proper 7-day curing monitoring ensuring design strength',
    ],
    benefitsTe: [
      'పగుళ్లు రాని నునుపైన గోడలు (పుట్టీ వేయడానికి సులువు)',
      'బలమైన సిమెంట్ క్యూరింగ్‌తో గరిష్ట స్థిరత్వం',
      'పక్కా కొలతలతో గదుల సైజులు తగ్గకుండా నిర్మాణం',
    ],
  },
  {
    id: 'tile-laying',
    category: 'specialized',
    titleEn: 'Tile Laying Works',
    titleTe: 'టైల్స్ వేసే పనులు (Vitrified, Ceramic & Granite)',
    shortDescEn:
      'Professional floor and wall tiling for living rooms, kitchens, parking areas, and staircases using laser level alignment.',
    shortDescTe:
      'లివింగ్ రూమ్, కిచెన్, మెట్లు మరియు పార్కింగ్ ఏరియాలలో లేజర్ లెవల్‌తో పర్ఫెక్ట్ టైల్ ఫిక్సింగ్.',
    fullDescEn:
      'Uneven tiles or hollow sounding spots ruin an otherwise good house. We use polymer adhesive mortars, leveling clips, and epoxy grouts to lay vitrified slabs (2x4, 4x6), parking pavers, and anti-skid bathroom walls with razor-sharp alignment.',
    fullDescTe:
      'టైల్స్ వేసేటప్పుడు ఎత్తుపల్లాలు లేకుండా, లోపల డొల్లతనం రాకుండా స్పెషల్ టైల్ అడెసివ్‌తో ఫిట్ చేస్తాము. లేజర్ లెవెలింగ్ ఉపయోగించి పర్ఫెక్ట్ జాయింట్స్ మరియు ఎపోక్సీ గ్రౌటింగ్‌తో అందంగా వేస్తాము.',
    image: '/images/architecture.jpg',
    workIncludedEn: [
      'Floor base screed leveling and zero-slope water drains',
      'Laser level alignment ensuring uniform grout gaps',
      'Application of high-strength polymer tile adhesives',
      'Precision water-jet / tile-cutter mitering for 45° edges',
      'Stain-proof epoxy resin grouting matching tile shades',
    ],
    workIncludedTe: [
      'ఫ్లోర్ లెవెలింగ్ మరియు వాటర్ డ్రైన్ అయ్యేలా సరైన స్లోప్',
      'లేజర్ లెవల్ ద్వారా గీతలు పక్కకు పోకుండా కచ్చితమైన అమరిక',
      'బ్రాండెడ్ టైల్ అడెసివ్ గమ్‌తో శాశ్వత పట్టు',
      'మూలలు మరియు పిల్లర్ల దగ్గర నీట్ 45 డిగ్రీల కట్టింగ్',
      'మురికి చేరని వాటర్‌ప్రూఫ్ ఎపోక్సీ గ్రౌట్ ఫిల్లింగ్',
    ],
    benefitsEn: [
      'Zero hollow sound underfoot and zero tile popping risk',
      'Waterproof, stain-proof joint lines that remain clean',
      'Luxury hotel look with large format modern vitrified tiles',
    ],
    benefitsTe: [
      'టైల్స్ లోపల డొల్ల రాదు, కాలక్రమేణా పైకి లేవవు',
      'మరకలు పడని క్లీన్ జాయింట్స్ మరియు సులభమైన మెయింటెనెన్స్',
      'మార్బుల్ తరహా రిచ్ లుక్ ఇచ్చే పెద్ద సైజు విట్రిఫైడ్ టైల్స్',
    ],
  },
  {
    id: 'plumbing-works',
    category: 'specialized',
    titleEn: 'Plumbing Works',
    titleTe: 'ప్లంబింగ్ పనులు (Sanitary & Water Lines)',
    shortDescEn:
      'Concealed CPVC/PVC water supply networks, overhead tank manifolds, pressure testing, and wastewater drainage systems.',
    shortDescTe:
      'కన్సీల్డ్ వాటర్ పైప్‌లైన్స్, ఓవర్‌హెడ్ ట్యాంక్ కనెక్షన్స్ మరియు డ్రైనేజ్ లైన్ పనులు.',
    fullDescEn:
      'Faulty plumbing causes expensive structural seepage. Our certified plumbers install pressure-tested CPVC hot/cold lines, SWR drainage stacks, water meter loops, and concealed diverters with zero leakage guarantees.',
    fullDescTe:
      'ప్లంబింగ్ సరిగ్గా లేకపోతే గోడలన్నీ పాడవుతాయి. మేము ప్రెజర్ టెస్టింగ్ చేసిన బ్రాండెడ్ సీపీవీసీ పైపులు, వాటర్ ట్యాంక్ కనెక్షన్లు, సంప్ మోటార్ ఫిట్టింగ్ మరియు డ్రైనేజ్ సిస్టమ్‌ను లీకేజ్ లేకుండా ఏర్పాటు చేస్తాము.',
    image: '/images/structural.jpg',
    workIncludedEn: [
      'Concealed pipe trenching and CPVC hot/cold water loop',
      'Hydrostatic pressure testing before wall plastering',
      'Multi-floor SWR vertical drainage stack installation',
      'Overhead tank manifold valves and automatic water level sensors',
      'Connection of kitchen sinks, washing machines, and geysers',
    ],
    workIncludedTe: [
      'గోడలలో కన్సీల్డ్ సీపీవీసీ వాటర్ సప్లై లైన్స్ అమరిక',
      'ప్లాస్టరింగ్ చేయడానికి ముందే హై-ప్రెజర్ లీక్ టెస్టింగ్',
      'మురుగునీటి కోసం నాణ్యమైన ఎస్‌డబ్ల్యూఆర్ పైపుల లైన్',
      'ఓవర్‌హెడ్ ట్యాంక్ కనెక్షన్లు మరియు ఆటోమేటిక్ వాటర్ సెన్సార్స్',
      'గీజర్లు, వాషింగ్ మెషీన్ మరియు సింక్ పాయింట్స్ ఫిక్సింగ్',
    ],
    benefitsEn: [
      'High pressure water delivery across all showers and taps',
      'Odor-free, anti-syphon drainage prevention for clean bathrooms',
      'Long-lasting piping resistant to scaling and borewell minerals',
    ],
    benefitsTe: [
      'షవర్లలో మంచి వాటర్ ప్రెజర్ వచ్చేలా సైంటిఫిక్ పైపింగ్',
      'దుర్వాసన రాని యూ-ట్రాప్ డ్రైనేజ్ సిస్టమ్',
      'ఉప్పు నీటిని సైతం తట్టుకుని తుప్పు పట్టని నాణ్యమైన పైపులు',
    ],
  },
  {
    id: 'residential-interior-works',
    category: 'interiors',
    titleEn: 'Residential Interior Works',
    titleTe: 'రెసిడెన్షియల్ ఇంటీరియర్స్ (Living, Bedroom & Dining)',
    shortDescEn:
      'Warm, ergonomic home spaces with bespoke wardrobes, vanity consoles, decorative partition screens, and cove false ceilings.',
    shortDescTe:
      'మాస్టర్ బెడ్‌రూమ్ వార్డ్‌రోబ్స్, లివింగ్ రూమ్ వాల్ ప్యానెలింగ్ మరియు డైనింగ్ ఇంటీరియర్ పనులు.',
    fullDescEn:
      'Every family member needs dedicated, organized comfort. From master bedrooms with floor-to-ceiling wardrobes and study desks to cozy dining spaces with decorative crockery units, we create peaceful, functional home environments.',
    fullDescTe:
      'మీ కుటుంబ సభ్యుల అభిరుచులకు తగినట్లుగా బెడ్‌రూమ్‌లు, హాల్ మరియు డైనింగ్ ఏరియాలను తీర్చిదిద్దుతాము. డ్రెస్సింగ్ యూనిట్స్, స్టడీ టేబుల్స్ మరియు క్రాకరీ యూనిట్లతో ఇంటికి నిండుదనం తెస్తాము.',
    image: '/images/interior.jpg',
    workIncludedEn: [
      'Custom sliding and openable wardrobes with sensor LED lighting',
      'Crockery display cabinets with tempered glass shelves',
      'Headboard accent wall paneling with acoustic acoustic battens',
      'CNC cut designer pooja room wooden mandirs and jali screens',
      'Curtain pelmet and motorized drape track provisions',
    ],
    workIncludedTe: [
      'సెన్సార్ లైట్లతో కూడిన స్లైడింగ్ వార్డ్‌రోబ్‌లు',
      'గ్లాస్ షెల్వ్స్‌తో కూడిన అందమైన క్రాకరీ క్యాబినెట్',
      'బెడ్‌రూమ్ హెడ్‌బోర్డ్ డెకరేటివ్ వాల్ ప్యానెలింగ్',
      'సీఎన్‌సీ జాలీ వర్క్‌తో కూడిన పవిత్రమైన పూజా మందిరం',
      'కర్టెన్ పెల్మెట్స్ మరియు స్మార్ట్ ఇంటీరియర్ ఫినిషింగ్',
    ],
    benefitsEn: [
      'Maximizes available room space with tailor-fit carpentry',
      'Durable, scratch-resistant acrylic and matte laminate finishes',
      'A welcoming ambiance tailored to your personal family lifestyle',
    ],
    benefitsTe: [
      'గది సైజుకు పర్ఫెక్ట్‌గా సరిపోయే కస్టమ్ కార్పెంట్రీ',
      'గీతలు పడని, శుభ్రం చేయడానికి సులువైన మ్యాట్ & గ్లాస్ ఫినిషింగ్',
      'బంధువులు, స్నేహితులు మెచ్చుకునే అందమైన గృహ వాతావరణం',
    ],
  },
  {
    id: 'commercial-interior-works',
    category: 'interiors',
    titleEn: 'Commercial Interior Works',
    titleTe: 'కమర్షియల్ ఇంటీరియర్స్ (Offices & Retail Outlets)',
    shortDescEn:
      'Professional office layouts, reception counters, conference rooms, executive cabins, and retail display racks.',
    shortDescTe:
      'కార్పొరేట్ ఆఫీస్ క్యాబిన్స్, రిసెప్షన్ డెస్క్, కాన్ఫరెన్స్ హాల్ మరియు రిటైల్ డిస్‌ప్లే యూనిట్లు.',
    fullDescEn:
      'Your commercial workplace reflects your brand credibility. SS Global designs and executes modern office partitions, acoustic ceiling grids, reception desks, network cabling ducts, and retail shelving with fast project turnarounds.',
    fullDescTe:
      'మీ ఆఫీస్ లేదా షోరూమ్ ఇంటీరియర్ మీ వ్యాపార స్థాయిని తెలియజేస్తుంది. ఉద్యోగులకు ఆహ్లాదకరమైన వర్క్‌స్పేస్, కస్టమర్లను ఆకట్టుకునే రిసెప్షన్ మరియు కాన్ఫరెన్స్ రూమ్‌లను రూపొందిస్తాము.',
    image: '/images/commercial.jpg',
    workIncludedEn: [
      'Aluminum glass modular partitions for executive cabins',
      'Acoustic mineral fiber false ceiling with anti-glare panel lighting',
      'Ergonomic workstation desks with integrated wire raceways',
      'Custom reception counters with 3D acrylic brand signage backdrops',
      'Conference room AV cabling and presentation wall cladding',
    ],
    workIncludedTe: [
      'ఎగ్జిక్యూటివ్ క్యాబిన్స్ కోసం అల్యూమినియం గ్లాస్ పార్టిషన్స్',
      'సౌండ్‌ప్రూఫ్ ఫాల్స్ సీలింగ్ మరియు ప్రొఫెషనల్ లైటింగ్',
      'కంప్యూటర్ కేబుల్ డక్ట్స్‌తో కూడిన వర్క్‌స్టేషన్స్',
      'కంపెనీ బ్రాండింగ్ బ్యాక్‌డ్రాప్‌తో రిసెప్షన్ డెస్క్',
      'కాన్ఫరెన్స్ రూమ్ ఏవీ మరియు ప్రొజెక్టర్ వాల్ డిజైనింగ్',
    ],
    benefitsEn: [
      'Boosts employee productivity and positive customer impressions',
      'Heavy-duty commercial-grade materials designed for high daily usage',
      'Night-shift execution available to minimize business downtime',
    ],
    benefitsTe: [
      'కస్టమర్లను ఆకట్టుకునే కార్పొరేట్ ప్రొఫెషనల్ లుక్',
      'రోజూ ఎక్కువ మంది తిరిగినా పాడవని క్వాలిటీ మెటీరియల్స్',
      'వ్యాపారానికి ఆటంకం కలగకుండా త్వరితగతిన పూర్తి',
    ],
  },
  {
    id: 'renovation-finishing-works',
    category: 'renovation',
    titleEn: 'Renovation and Finishing Works',
    titleTe: 'రినోవేషన్ & ఫినిషింగ్ పనులు (Complete Home Makeover)',
    shortDescEn:
      'Old building modernization, elevation facelifts, room extensions, structural strengthening, and full painting overhauls.',
    shortDescTe:
      'పాత భవనాల ఆధునీకరణ, ఎలివేషన్ మార్పులు, అదనపు గదుల నిర్మాణం మరియు రీ-పెయింటింగ్.',
    fullDescEn:
      'Give new life to your old home or commercial building without rebuilding from scratch. We remove dated elements, strengthen columns, add modern exterior elevations, upgrade flooring, and complete full repainting.',
    fullDescTe:
      'మీ పాత ఇంటిని కూల్చివేయకుండానే సరికొత్త మోడరన్ ఇల్లుగా మార్చవచ్చు. బలహీనపడిన భాగాలను పటిష్టపరచడం, కొత్త ఎలివేషన్ డిజైన్, ఫ్లోరింగ్ మార్చడం ద్వారా మీ ఇంటి రూపురేఖలనే పూర్తిగా మార్చేస్తాము.',
    image: '/images/hero-bg.jpg',
    workIncludedEn: [
      'Structural crack investigation and micro-concrete patching',
      'Wall demolition and layout rearrangement with steel beam supports',
      'Modern ACP, stone louvers, and texture paint elevation facelifts',
      'Complete interior and exterior repainting with primer and putty',
      'Door frame replacements with polished Teak / WPC alternatives',
    ],
    workIncludedTe: [
      'గోడల పగుళ్లు గుర్తించి మైక్రో-కాంక్రీట్‌తో శాశ్వత మరమ్మతు',
      'గదులను విశాలంగా మార్చేందుకు అవసరమైన లేఅవుట్ రీ-అరేంజ్‌మెంట్',
      'బయటి ఎలివేషన్‌ను సరికొత్త మోడరన్ లుక్‌లోకి మార్చడం',
      'పాత పెయింట్ తీసివేసి పుట్టీతో సరికొత్త రాయల్ పెయింటింగ్',
      'తలుపులు, కిటికీలు మార్చి కొత్త మోడ్రన్ ఫ్రేమ్స్ అమర్చడం',
    ],
    benefitsEn: [
      'Increases current property rental and market resale value dramatically',
      'Significantly less expensive than demolishing and rebuilding',
      'Transforms dated architectural aesthetics into contemporary luxury',
    ],
    benefitsTe: [
      'మీ ఆస్తి మార్కెట్ విలువ మరియు అద్దె ఆదాయం భారీగా పెరుగుతాయి',
      'కూల్చి మళ్లీ కట్టే ఖర్చుతో పోలిస్తే ఎంతో ఆదా అవుతుంది',
      'పాత ఇల్లు కూడా సరికొత్త లగ్జరీ భవనంలా మెరిసిపోతుంది',
    ],
  },
];

export const TRUSTED_BRANDS: BrandItem[] = [
  {
    id: 'ultratech',
    name: 'UltraTech Cement',
    category: 'Cement & Concrete',
    categoryTe: 'సిమెంట్ & కాంక్రీట్',
    role: "The Engineer's Choice for Structural Foundation & Slabs",
    roleTe: 'పునాదులు మరియు స్లాబ్‌లకు పటిష్టమైన బలం',
    logoText: 'UltraTech',
    color: '#f59e0b',
    educationalNoteEn:
      'Grade 53/43 Portland Pozzolana Cement provides high early strength, low heat of hydration to prevent thermal micro-cracks, and outstanding chemical resistance against soil sulfates.',
    educationalNoteTe:
      'అల్ట్రాటెక్ గ్రేడ్ 53 సిమెంట్ పునాదులకు అత్యంత వేగంగా పటిష్టమైన బలాన్ని ఇస్తుంది. స్లాబ్‌లలో చిన్న పగుళ్లు కూడా రాకుండా రక్షిస్తుంది.',
  },
  {
    id: 'tata-tiscon',
    name: 'Tata Tiscon',
    category: 'TMT Reinforcement Steel',
    categoryTe: 'టీఎంటీ రీన్‌ఫోర్స్డ్ స్టీల్',
    role: 'Fe-550D Superior Earthquake & Structural Rebar',
    roleTe: 'భూకంప నిరోధకత కలిగిన అత్యుత్తమ స్టీల్',
    logoText: 'TATA TISCON',
    color: '#0284c7',
    educationalNoteEn:
      'Fe-550D super-ductile steel rebar absorbs heavy seismic energy during earthquakes while providing high tensile yield strength and superior corrosion resistance.',
    educationalNoteTe:
      'టాటా టిస్కాన్ Fe-550D స్టీల్ అత్యంత ఫ్లెక్సిబిలిటీ మరియు బలాన్ని కలిగి ఉండి, భూకంపాల వంటి విపత్తుల నుండి భవనాన్ని కాపాడుతుంది.',
  },
  {
    id: 'asian-paints',
    name: 'Asian Paints',
    category: 'Protective & Luxury Coatings',
    categoryTe: 'ఎక్స్‌టీరియర్ & ఇంటీరియర్ పెయింట్స్',
    role: 'Weather-Proof Exteriors & Royale Interior Emulsions',
    roleTe: 'తేమను తట్టుకునే అందమైన గోడల పెయింట్స్',
    logoText: 'asianpaints',
    color: '#ef4444',
    educationalNoteEn:
      'Apex Ultima anti-algae elastomeric coatings shield outer walls from coastal Andhra rainfall and heat, while Royale interior emulsions provide anti-bacterial, washable silk finishes.',
    educationalNoteTe:
      'ఏషియన్ పెయింట్స్ గోడలపై వర్షపు నీరు, పాచి పట్టకుండా కాపాడుతుంది. లోపలి గోడలకు స్మూత్ మరియు సులభంగా కడిగే వీలున్న ఫినిషింగ్ ఇస్తుంది.',
  },
  {
    id: 'jsw-cement',
    name: 'JSW Cement',
    category: 'Eco-Friendly High-Strength Cement',
    categoryTe: 'పర్యావరణ హిత పటిష్ట సిమెంట్',
    role: 'Portland Slag Cement for Dense, Impermeable Concrete',
    roleTe: 'నీటి లీకేజీలు లేని సాంద్రమైన కాంక్రీట్',
    logoText: 'JSW Cement',
    color: '#10b981',
    educationalNoteEn:
      'Ground granulated blast-furnace slag (GGBS) creates high density concrete that actively prevents moisture penetration and protects steel from saline water corrosion.',
    educationalNoteTe:
      'జేఎస్డబ్ల్యూ సిమెంట్ కాంక్రీట్‌ను దట్టంగా మార్చి నీటి చెమ్మ లోపలికి వెళ్లకుండా చేసి, స్టీల్ తుప్పు పట్టకుండా కాపాడుతుంది.',
  },
  {
    id: 'kajaria',
    name: 'Kajaria Tiles',
    category: 'Vitrified & Floor Ceramic Surfaces',
    categoryTe: 'విట్రిఫైడ్ & ఫ్లోరింగ్ టైల్స్',
    role: 'Zero-Porosity Stain-Resistant Architectural Tiles',
    roleTe: 'మరకలు పడని అందమైన ఫ్లోరింగ్ టైల్స్',
    logoText: 'Kajaria',
    color: '#8b5cf6',
    educationalNoteEn:
      'Digital glazed vitrified tiles offer zero water absorption (<0.05%), high abrasion resistance against heavy footfall, and photorealistic marble patterns that never fade.',
    educationalNoteTe:
      'కజారియా టైల్స్ నీటిని పీల్చుకోవు, మరకలు పడవు మరియు కాలక్రమేణా రంగు మారవు. ఇళ్లకు శాశ్వతమైన మార్బుల్ లుక్‌ను అందిస్తాయి.',
  },
  {
    id: 'hindware',
    name: 'Hindware',
    category: 'Sanitaryware & Bath Fittings',
    categoryTe: 'శానిటరీవేర్ & బాత్‌రూమ్ ఫిట్టింగ్స్',
    role: 'Precision Dual-Flush Ceramics & Brass Diverters',
    roleTe: 'లీకేజ్ ఫ్రీ మోడరన్ బాత్‌రూమ్ ఫిట్టింగ్స్',
    logoText: 'hindware',
    color: '#06b6d4',
    educationalNoteEn:
      'Vitreous china ceramic sanitaryware baked at 1200°C creates non-porous hygienic bowl glazes, paired with multi-layer chrome plated brass taps for lifelong drip-free service.',
    educationalNoteTe:
      'హిండ్‌వేర్ శానిటరీవేర్ అధిక నాణ్యతతో తయారై క్రిములు చేరకుండా శుభ్రంగా ఉంటుంది. ఇత్తడి నల్లాలతో లీకేజీలు లేని మన్నిక లభిస్తుంది.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    questionEn: 'What construction services are available at SS Global?',
    questionTe: 'SS గ్లోబల్‌లో ఏయే నిర్మాణ సేవలు అందుబాటులో ఉన్నాయి?',
    answerEn:
      'We handle complete turnkey residential and commercial projects including Complete House Construction, Independent Villas, Duplexes, Apartments, Commercial Buildings, as well as specialized services like Waterproofing, Cement & Masonry, Tile Laying, and Plumbing.',
    answerTe:
      'మేము సంపూర్ణ గృహ నిర్మాణం, స్వతంత్ర విల్లాలు, డ్యూప్లెక్స్ ఇళ్లు, అపార్ట్‌మెంట్లు, కమర్షియల్ కాంప్లెక్స్‌లతో పాటు వాటర్‌ప్రూఫింగ్, మేసన్రీ, టైలింగ్ మరియు ప్లంబింగ్ వంటి అన్ని రకాల సేవలను అందిస్తున్నాము.',
  },
  {
    id: 'faq-2',
    questionEn: 'Do you undertake independent house and villa construction?',
    questionTe: 'స్వతంత్ర గృహాలు మరియు విల్లాల నిర్మాణం చేస్తారా?',
    answerEn:
      'Yes, independent homes and luxury villas are a cornerstone of our work. We provide custom architectural space planning, 100% Vasthu compliance, reinforced concrete framing, premium Teak wood doors, and turnkey handover tailored to your plot size.',
    answerTe:
      'అవును, స్వతంత్ర గృహాలు మరియు విల్లాల నిర్మాణం మా ప్రత్యేకత. మీ ప్లాట్ సైజుకు తగ్గట్లు వాస్తు ప్రకారం ప్లానింగ్ చేసి, పటిష్టమైన ఆర్‌సీసీ ఫ్రేమింగ్ మరియు టెక్ వుడ్ తలుపులతో లగ్జరీగా నిర్మిస్తాము.',
  },
  {
    id: 'faq-3',
    questionEn: 'Are interior design and execution works available?',
    questionTe: 'ఇంటీరియర్ డిజైన్ మరియు ఎగ్జిక్యూషన్ పనులు చేస్తారా?',
    answerEn:
      'Yes, we provide end-to-end turnkey interior works including custom modular kitchens, designer gypsum false ceilings, LED cove lighting, bedroom wardrobes, pooja room carvings, and commercial office cabins using high-grade marine plywood.',
    answerTe:
      'అవును, మాడ్యులర్ కిచెన్, ఫాల్స్ సీలింగ్, బెడ్‌రూమ్ వార్డ్‌రోబ్స్, పూజా మందిరాలు మరియు ఆఫీస్ క్యాబిన్స్ వంటి పూర్తి ఇంటీరియర్ పనులను వాటర్‌ప్రూఫ్ ప్లైవుడ్‌తో నైపుణ్యంగా చేస్తాము.',
  },
  {
    id: 'faq-4',
    questionEn: 'Do you provide renovation services for existing homes and flats?',
    questionTe: 'పాత ఇళ్లు మరియు ఫ్లాట్‌లకు రినోవేషన్ సేవలు అందిస్తారా?',
    answerEn:
      'Yes! As our promotional message states: "మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా..." — we specialize in complete home remodeling, bathroom upgrades, modular kitchen makeovers, elevation facelifts, and crack/seepage repair.',
    answerTe:
      'ఖచ్చితంగా! "మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా..." అన్నట్లుగా - కిచెన్, బాత్రూమ్ మార్పులు, ఫ్లోరింగ్ మార్చడం, ఎలివేషన్ మోడరనైజేషన్ మరియు పూర్తి రినోవేషన్ పనులు చేస్తాము.',
  },
  {
    id: 'faq-5',
    questionEn: 'What information is needed to get a project estimate?',
    questionTe: 'ప్రాజెక్ట్ అంచనా (ఎస్టిమేట్) కోసం ఎలాంటి వివరాలు ఇవ్వాలి?',
    answerEn:
      'To provide an accurate estimate, we typically review your plot dimensions or built-up area, proposed number of floors (G, G+1, G+2), required service type (new build, interior, or renovation), preferred finishing tier, and site location in Vijayawada or surrounding districts.',
    answerTe:
      'ఖచ్చితమైన అంచనా కోసం మీ ప్లాట్ కొలతలు, ఎన్ని అంతస్తులు కట్టాలనుకుంటున్నారు (G, G+1, G+2), కావలసిన సేవ (కొత్త ఇల్లా లేదా రినోవేషనా) మరియు మీ సైట్ లొకేషన్ వివరాలు అవసరం.',
  },
  {
    id: 'faq-6',
    questionEn: 'Can customers choose their preferred materials and finishes?',
    questionTe: 'కస్టమర్లు తమకు నచ్చిన మెటీరియల్స్ మరియు ఫినిషింగ్‌లను ఎంచుకోవచ్చా?',
    answerEn:
      'Absolutely. Our core philosophy is "Choice Is Yours..." We guide you through various branded options for cement, steel, tiles, sanitary fittings, paints, and plywood, allowing you full flexibility to choose items that match your budget and taste.',
    answerTe:
      'ఖచ్చితంగా ఎంచుకోవచ్చు. మా విధానమే "Choice Is Yours..." సిమెంట్, స్టీల్, టైల్స్, పెయింట్స్ మరియు శానిటరీవేర్‌లో మీ బడ్జెట్ మరియు అభిరుచికి తగిన బ్రాండ్లను ఎంచుకునే పూర్తి స్వేచ్ఛ మీకు ఉంటుంది.',
  },
  {
    id: 'faq-7',
    questionEn: 'How can customers arrange an on-site consultation?',
    questionTe: 'సైట్ కన్సల్టేషన్ లేదా విజిట్ కోసం ఎలా సంప్రదించాలి?',
    answerEn:
      'You can call us directly at 9494502777, send a WhatsApp message, or submit the consultation form on this website. Our team will schedule a convenient time to inspect your site, discuss requirements, and guide you on the next steps.',
    answerTe:
      'మీరు నేరుగా 9494502777 కు కాల్ చేయవచ్చు, వాట్సాప్ మెసేజ్ పంపవచ్చు లేదా వెబ్‌సైట్‌లోని ఫారమ్ నింపవచ్చు. మా టీమ్ మీ సైట్‌ను పరిశీలించి తగిన సూచనలు అందిస్తారు.',
  },
  {
    id: 'faq-8',
    questionEn: 'Where is the SS Global office located?',
    questionTe: 'SS గ్లోబల్ కార్యాలయం ఎక్కడ ఉంది?',
    answerEn:
      'Our registered office is located at: Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring, Vijayawada – 521108, Andhra Pradesh.',
    answerTe:
      'మా కార్యాలయం: డోర్ నం. 6-6, శ్రీనివాస నిలయం, కరెన్సీ నగర్ రోడ్, కావేటి వారి వీధి, రామవరప్పాడు రింగ్ దగ్గర, విజయవాడ – 521108 లో కలదు.',
  },
  {
    id: 'faq-9',
    questionEn: 'How can customers contact the company directly?',
    questionTe: 'సంస్థను నేరుగా ఎలా సంప్రదించవచ్చు?',
    answerEn:
      'Call or WhatsApp us at 9494502777, email contact@ssglobalcsis.in, or visit our website at www.ssglobalcsis.in. We are available Monday to Saturday, 9:00 AM to 7:30 PM.',
    answerTe:
      'ఫోన్ లేదా వాట్సాప్ నంబర్ 9494502777 ద్వారా, ఇమెయిల్ contact@ssglobalcsis.in ద్వారా లేదా www.ssglobalcsis.in వెబ్‌సైట్ ద్వారా సంప్రదించవచ్చు. సోమవారం నుండి శనివారం వరకు ఉదయం 9 నుండి రాత్రి 7:30 వరకు అందుబాటులో ఉంటాము.',
  },
  {
    id: 'faq-10',
    questionEn: 'What does "From Foundation to Finishing" mean for the client?',
    questionTe: '"పునాది నుండి ఫినిషింగ్ వరకు" అంటే కస్టమర్‌కు కలిగే లాభం ఏమిటి?',
    answerEn:
      'It means complete peace of mind. We take full responsibility from initial earthwork, basement footings, structural framing, and brickwork, right up to interior carpentry, tile flooring, plumbing, painting, and handover—all under one roof with 20+ years of trust.',
    answerTe:
      'పునాది తవ్వకం నుండి కీ హ్యాండోవర్ వరకు ప్రతీ పనికి మేమే బాధ్యత వహిస్తాము. వివిధ కాంట్రాక్టర్ల వద్దకు వెళ్లే శ్రమ లేకుండా, 20+ సంవత్సరాల అనుభవంతో నాణ్యమైన ఇంటిని నిర్మించి ఇస్తాము.',
  },
];

export const DEFAULT_ESTIMATOR_RATES = {
  residential: {
    standard: { label: 'Standard Package', rate: 1850, spec: 'Standard materials' },
    premium: { label: 'Premium Package', rate: 2250, spec: 'Premium branded materials' },
    luxury: { label: 'Luxury Package', rate: 2850, spec: 'Ultra luxury finishes' },
  },
  commercial: {
    standard: { label: 'Standard Commercial', rate: 1650, spec: 'Standard commercial' },
    premium: { label: 'Premium Commercial', rate: 2100, spec: 'Premium commercial' },
    luxury: { label: 'Luxury Commercial', rate: 2600, spec: 'High-end commercial' },
  },
  renovation: {
    standard: { label: 'Essential Renovation', rate: 850, spec: 'Essential revamp' },
    premium: { label: 'Complete Renovation', rate: 1350, spec: 'Full renovation' },
    luxury: { label: 'Luxury Remodel', rate: 1950, spec: 'High-end transformation' },
  },
  floorMultipliers: {
    '1': 1.0,
    '2': 1.05,
    '3': 1.1,
    '4': 1.15,
  },
};

export const SS_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-poster-villa',
    title: '20 Years Experience & Trust Villa Poster',
    titleTe: '20 సంవత్సరాల నమ్మకం & అనుభవం - లగ్జరీ విల్లా పోస్టర్',
    category: 'posters',
    image: '/images/gallery/ss-brand-poster-villa.jpg',
    badge: 'Official Poster',
    caption:
      '20 Years Experience & Trust • Luxury Villa Construction with UltraTech, Asian Paints, JSW Cement & Tata Tiscon • Call 94945 02777 • Vijayawada',
  },
  {
    id: 'gal-office-flex',
    title: 'SS Global Official Office Banner & Location',
    titleTe: 'SS గ్లోబల్ అధికారిక కార్యాలయ ఫ్లెక్స్ బ్యానర్',
    category: 'posters',
    image: '/images/gallery/ss-office-flex-banner.jpg',
    badge: 'Office Identity',
    caption:
      'Official Office Flex • Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring, Vijayawada – 521108',
  },
  {
    id: 'gal-poster-renovation',
    title: 'Complete House & Renovation Services Poster',
    titleTe: 'ఇంటిని అందంగా తీర్చిదిద్దే సంపూర్ణ రినోవేషన్ సేవల పోస్టర్',
    category: 'posters',
    image: '/images/gallery/ss-renovation-services-poster.jpg',
    badge: 'Official Poster',
    caption:
      'మీ పాత ఇంటిని లేదా ఫ్లాట్‌ని మరింత అందంగా మార్చుకోండి • Kitchen, Bathroom, Waterproofing, Tile Laying & Plumbing • Contact 94945 02777',
  },
  {
    id: 'gal-official-banner',
    title: 'SS Constructions & Interior Works - Official Brand',
    titleTe: 'తరాలు మారినా తరగని బలం... SS కన్‌స్ట్రక్షన్స్ అఫీషియల్ బ్యానర్',
    category: 'posters',
    image: '/images/gallery/ss-official-banner-card.jpg',
    badge: 'Brand Identity',
    caption:
      'SS Constructions & Interior Works • 20 Years+ • Mobile: 9494502777 • www.ssglobalcsis.in • Vijayawada, Andhra Pradesh',
  },
  {
    id: 'gal-residential-villa',
    title: 'Contemporary Luxury Villa Elevation',
    titleTe: 'ఆధునిక లగ్జరీ విల్లా ఎలివేషన్ - పోరంకి, విజయవాడ',
    category: 'residential',
    image: '/images/residential.jpg',
    badge: 'Luxury Villa',
    caption:
      'Triplex Contemporary Luxury Villa Elevation with Teak Wood Frames & Toughened Glass Balconies • Poranki, Vijayawada',
  },
  {
    id: 'gal-commercial-arcade',
    title: 'SS Global Commercial Arcade Complex',
    titleTe: 'కమర్షియల్ కాంప్లెక్స్ నిర్మాణం - రామవరప్పాడు రింగ్',
    category: 'commercial',
    image: '/images/commercial.jpg',
    badge: 'Commercial',
    caption:
      'Multi-Story Commercial Retail & Office Arcade with High Structural Load Capacity • Near Ramavarappadu Ring, Vijayawada',
  },
  {
    id: 'gal-interior-living',
    title: 'Grand Living Hall & Designer False Ceiling',
    titleTe: 'గ్రాండ్ లివింగ్ రూమ్ ఇంటీరియర్స్ & ఫాల్స్ సీలింగ్',
    category: 'interiors',
    image: '/images/interior.jpg',
    badge: 'Interior Design',
    caption:
      'Turnkey Luxury Living Hall with Italian Vitrified Tiles, Custom TV Unit & Concealed Ambient Warm Lighting',
  },
  {
    id: 'gal-structural-work',
    title: 'Structural Column & Slab Reinforcement Inspection',
    titleTe: 'భూకంప నిరోధక పిల్లర్లు మరియు స్లాబ్ రీన్‌ఫోర్స్‌మెంట్ పర్యవేక్షణ',
    category: 'construction',
    image: '/images/structural.jpg',
    badge: 'Structural Quality',
    caption:
      'Heavy Column-Beam Grid & High-Grade Concrete (M25/M30) Quality Inspection with Certified Civil Engineers',
  },
  {
    id: 'gal-architecture-blueprint',
    title: '2D Floor Plan & 3D Vasthu Exterior Elevation',
    titleTe: '100% వాస్తు ప్రకారమైన ఆర్కిటెక్చరల్ 2D/3D డ్రాయింగ్స్',
    category: 'architecture',
    image: '/images/architecture.jpg',
    badge: 'Vasthu Planning',
    caption:
      'Scientific Vasthu Compliant Spatial Planning & High-Resolution 3D Exterior Elevation Renderings',
  },
];
