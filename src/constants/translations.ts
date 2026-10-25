export type Language = 'en' | 'te';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    gallery: string;
    videoTour: string;
    materials: string;
    whyUs: string;
    faq: string;
    contact: string;
    callNow: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaConsultation: string;
    ctaProjects: string;
    ctaCall: string;
    teluguPromo: string;
    trustYears: string;
    trustFinishing: string;
    trustChoice: string;
    trustMaterials: string;
    cardTitle: string;
    cardSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    serviceLabel: string;
    locationLabel: string;
    submitBtn: string;
  };
  about: {
    tag: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    cta: string;
  };
  services: {
    tag: string;
    title: string;
    desc: string;
    tabAll: string;
    tabConstruction: string;
    tabInteriors: string;
    tabRenovation: string;
    tabSpecialized: string;
    includedHeading: string;
    benefitsHeading: string;
    enquireBtn: string;
  };
  materials: {
    tag: string;
    title: string;
    desc: string;
    disclaimer: string;
    cementTitle: string;
    cementDesc: string;
    steelTitle: string;
    steelDesc: string;
    paintsTitle: string;
    paintsDesc: string;
    tilesTitle: string;
    tilesDesc: string;
    bathTitle: string;
    bathDesc: string;
  };
  gallery: {
    tag: string;
    title: string;
    desc: string;
    filterAll: string;
    filterPosters: string;
    filterResidential: string;
    filterCommercial: string;
    filterRenovation: string;
    filterInteriors: string;
    clickToEnlarge: string;
  };
  whyUs: {
    tag: string;
    title: string;
    desc: string;
  };
  faq: {
    tag: string;
    title: string;
    desc: string;
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    phoneHeading: string;
    addressHeading: string;
    hoursHeading: string;
    formTitle: string;
    formSubtitle: string;
    submitBtn: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    servicesTitle: string;
    contactDesk: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT US',
      services: 'SERVICES',
      projects: 'PROJECTS',
      gallery: 'GALLERY',
      videoTour: 'VIDEO TOUR',
      materials: 'MATERIALS & BRANDS',
      whyUs: 'WHY CHOOSE US',
      faq: 'FAQ',
      contact: 'CONTACT US',
      callNow: 'CALL NOW',
      langToggle: 'తెలుగు',
    },
    hero: {
      badge: '20+ YEARS OF EXPERIENCE • VIJAYAWADA & AMARAVATI',
      headline: 'Building Your Vision with',
      headlineHighlight: 'Quality and Trust',
      subheadline:
        'SS Global Constructions and Interior Works provides end-to-end residential, commercial, and interior solutions. From foundation to finishing, we bring decades of hands-on stability and craftsmanship to your dream project.',
      ctaConsultation: 'GET FREE CONSULTATION',
      ctaProjects: 'EXPLORE OUR PROJECTS',
      ctaCall: 'CALL 9494502777',
      teluguPromo: 'మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా...',
      trustYears: '20+ Years Experience',
      trustFinishing: 'From Foundation to Finishing',
      trustChoice: 'Choice Is Yours...',
      trustMaterials: 'Trusted Brand Materials',
      cardTitle: 'Request Free Site Visit',
      cardSubtitle: 'Speak directly with our engineering & interior team in Vijayawada',
      nameLabel: 'Full Name *',
      phoneLabel: 'Mobile Number *',
      serviceLabel: 'Service Required',
      locationLabel: 'Project Location / Area',
      submitBtn: 'REQUEST FREE SITE CONSULTATION',
    },
    about: {
      tag: 'ABOUT SS GLOBAL',
      title: 'Trusted | Quality | Stability Through Experience',
      lead:
        'With 20+ years of established practical experience, SS Global Constructions and Interior Works stands as a reliable partner for homeowners and commercial developers across Vijayawada and Andhra Pradesh.',
      p1:
        'We believe that great buildings and interiors start with careful planning, continue with sound structural engineering, and conclude with meticulous finishing. Whether building an independent luxury villa, constructing a commercial complex, or renovating your kitchen and living space, our from-foundation-to-finishing approach ensures seamless execution without the hassle of coordinating multiple unverified contractors.',
      p2:
        'Our motto "Choice Is Yours..." reflects our customer-centric ethos: we listen to your lifestyle needs, aesthetic preferences, and budget, and provide honest technical guidance so you make the best decisions for your property.',
      pillar1Title: '20+ Years Practical Knowledge',
      pillar1Desc: 'Decades of on-ground civil execution in Vijayawada, Krishna district, and surrounding regions.',
      pillar2Title: 'From Foundation to Finishing',
      pillar2Desc: 'Single-window accountability for earthwork, RCC framing, masonry, electrical, plumbing, tiles, and bespoke interiors.',
      pillar3Title: 'Quality Brand Materials',
      pillar3Desc: 'We prioritize tested materials from reputable manufacturers like UltraTech, Tata Tiscon, Asian Paints, and Kajaria.',
      pillar4Title: 'Transparent Communication',
      pillar4Desc: 'Clear work scopes, milestone visibility, and honest timelines with no hidden surprises.',
      cta: 'SCHEDULE A DISCUSSION',
    },
    services: {
      tag: 'OUR CAPABILITIES',
      title: 'Specialists in All Constructions & Interior Works',
      desc:
        'Explore our comprehensive service offerings covering new civil construction, interior design, complete home remodeling, and specialist masonry & plumbing works.',
      tabAll: 'All Services (15)',
      tabConstruction: 'Civil Construction',
      tabInteriors: 'Interior Design',
      tabRenovation: 'Renovation & Remodel',
      tabSpecialized: 'Masonry & Waterproofing',
      includedHeading: 'What Is Included',
      benefitsHeading: 'Customer Benefits',
      enquireBtn: 'ENQUIRE ABOUT THIS SERVICE',
    },
    materials: {
      tag: 'MATERIAL EXCELLENCE',
      title: 'Quality Materials & Trusted Brands',
      desc:
        'Durability, beauty, and safety depend on the materials inside your walls, slabs, and finishes. We work with leading industry-recognized brands to build enduring homes.',
      disclaimer:
        'Note: Brand names are mentioned based on quality materials referenced in promotional literature and project execution specifications, and do not imply an exclusive dealership.',
      cementTitle: 'Structural Cement (UltraTech / JSW)',
      cementDesc: 'High-grade 53/43 cement ensuring superior compressive strength, crack resistance, and longevity for foundations, columns, and slabs.',
      steelTitle: 'Reinforced TMT Steel (Tata Tiscon)',
      steelDesc: 'High-ductility Fe-500D/550D grade steel with superior earthquake resilience, corrosion resistance, and structural bonding.',
      paintsTitle: 'Architectural Coatings (Asian Paints)',
      paintsDesc: 'Anti-fungal exterior weather-shield emulsions and silky interior royal finishes that protect walls against coastal humidity and wear.',
      tilesTitle: 'Vitrified & Ceramic Tiles (Kajaria)',
      tilesDesc: 'Stain-resistant, slip-resistant, and high-load vitrified tiles with photorealistic marble and granite patterns for elegant floors.',
      bathTitle: 'Plumbing & Bath Fittings (Hindware)',
      bathDesc: 'Precision ceramic sanitaryware, dual-flush water-saving systems, and rust-proof brass chromium-plated fixtures.',
    },
    gallery: {
      tag: 'VISUAL SHOWCASE',
      title: 'Official Posters, Banners & Work Gallery',
      desc:
        'Explore our official promotional flex posters, luxury villa elevations, renovation highlights, and verified credentials across Vijayawada.',
      filterAll: 'All Showcase',
      filterPosters: 'Official Posters & Banners',
      filterResidential: 'Villas & Houses',
      filterCommercial: 'Commercial',
      filterRenovation: 'Renovation Works',
      filterInteriors: 'Interiors',
      clickToEnlarge: 'Click any photo to view full screen in High Definition',
    },
    whyUs: {
      tag: 'THE SS GLOBAL ADVANTAGE',
      title: 'Why Property Owners Choose Us',
      desc:
        'Choosing the right construction and interior partner is once in a lifetime. Here is why clients trust SS Global for their residential and commercial spaces.',
    },
    faq: {
      tag: 'FREQUENT QUESTIONS',
      title: 'Frequently Asked Questions',
      desc: 'Clear, straightforward answers to help you plan your upcoming construction or interior project.',
    },
    contact: {
      tag: 'GET IN TOUCH',
      title: 'Contact Our Engineering & Interior Desk',
      desc:
        'We welcome you to call us or visit our Vijayawada office to discuss your project requirements in detail.',
      phoneHeading: 'Direct Phone & WhatsApp',
      addressHeading: 'Registered Office Address',
      hoursHeading: 'Working Hours',
      formTitle: 'Send a Project Enquiry',
      formSubtitle: 'Fill out the details below and our team will get in touch promptly.',
      submitBtn: 'SUBMIT ENQUIRY TO SS GLOBAL',
    },
    footer: {
      aboutText:
        'SS Global Constructions and Interior Works is Vijayawada’s trusted partner for turnkey house construction, luxury villas, commercial spaces, and complete interior execution with 20+ years of practical stability.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Core Services',
      contactDesk: 'Contact Desk',
      rights: 'All Rights Reserved. Specialists in All Constructions & Interior Works.',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      projects: 'ప్రాజెక్ట్‌లు',
      gallery: 'గ్యాలరీ',
      videoTour: 'వీడియో టూర్',
      materials: 'మెటీరియల్స్ & బ్రాండ్స్',
      whyUs: 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి',
      faq: 'ప్రశ్నోత్తరాలు',
      contact: 'సంప్రదించండి',
      callNow: 'కాల్ చేయండి',
      langToggle: 'English',
    },
    hero: {
      badge: '20+ సంవత్సరాల అనుభవం • విజయవాడ & అమరావతి',
      headline: 'నాణ్యత మరియు నమ్మకంతో మీ కలల సౌధ నిర్మాణం',
      headlineHighlight: 'SS గ్లోబల్ కన్‌స్ట్రక్షన్స్',
      subheadline:
        'మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా... ఇంటిని అందంగా తీర్చిదిద్దే మీ విశ్వసనీయ భాగస్వామి SS గ్లోబల్. పునాది నుండి ఫినిషింగ్ వరకు (From Foundation to Finishing) అత్యున్నత ప్రమాణాలతో నిర్మిస్తాము.',
      ctaConsultation: 'ఉచిత కన్సల్టేషన్ పొందండి',
      ctaProjects: 'మా ప్రాజెక్ట్‌లను చూడండి',
      ctaCall: 'కాల్: 9494502777',
      teluguPromo: 'తరాలు మారినా తరగని బలం... మీ నమ్మకమే మా పునాది...',
      trustYears: '20+ ఏళ్ల అనుభవం',
      trustFinishing: 'పునాది నుండి ఫినిషింగ్ వరకు',
      trustChoice: 'ఛాయిస్ ఈజ్ యువర్స్...',
      trustMaterials: 'నాణ్యమైన బ్రాండెడ్ మెటీరియల్స్',
      cardTitle: 'ఉచిత సైట్ విజిట్ బుక్ చేసుకోండి',
      cardSubtitle: 'విజయవాడలోని మా సివిల్ ఇంజనీరింగ్ & ఇంటీరియర్ బృందంతో నేరుగా మాట్లాడండి',
      nameLabel: 'మీ పూర్తి పేరు *',
      phoneLabel: 'మొబైల్ నంబర్ *',
      serviceLabel: 'కావలసిన సేవ',
      locationLabel: 'ప్రాజెక్ట్ లొకేషన్ / ప్రాంతం',
      submitBtn: 'ఉచిత సైట్ విజిట్ కోసం అభ్యర్థించండి',
    },
    about: {
      tag: 'మా గురించి',
      title: 'విశ్వసనీయత | నాణ్యత | అనుభవంతో కూడిన స్థిరత్వం',
      lead:
        '20+ సంవత్సరాల ఆచరణాత్మక అనుభవంతో, విజయవాడ మరియు ఆంధ్రప్రదేశ్‌లో గృహ యజమానులకు, కమర్షియల్ డెవలపర్లకు SS గ్లోబల్ కన్‌స్ట్రక్షన్స్ అండ్ ఇంటీరియర్ వర్క్స్ నమ్మకమైన భాగస్వామిగా నిలిచింది.',
      p1:
        'సరైన ప్రణాళిక, పటిష్టమైన నిర్మాణం, నైపుణ్యం కలిగిన కార్మికులు మరియు నాణ్యమైన ఫినిషింగ్‌తోనే ప్రతి ఇల్లు శాశ్వత సౌధంగా నిలుస్తుంది. స్వతంత్ర విల్లాలు, అపార్ట్‌మెంట్లు, కమర్షియల్ భవనాలు లేదా కిచెన్ & బాత్రూమ్ రినోవేషన్ ఏదైనా సరే - పునాది నుండి ఫినిషింగ్ వరకు పూర్తి బాధ్యత మాదే.',
      p2:
        '"Choice Is Yours..." (ఎంపిక మీదే) అనే మా సిద్ధాంతం ప్రకారం మీ కుటుంబ అవసరాలు, వాస్తు నమ్మకాలు మరియు బడ్జెట్‌కు అనుగుణంగా మీకు పూర్తి మార్గదర్శకత్వం అందిస్తాము.',
      pillar1Title: '20+ సంవత్సరాల ప్రత్యక్ష అనుభవం',
      pillar1Desc: 'విజయవాడ, కృష్ణా మరియు పరిసర జిల్లాల్లో పటిష్టమైన సివిల్ నిర్మాణ అనుభవం.',
      pillar2Title: 'పునాది నుండి ఫినిషింగ్ వరకు',
      pillar2Desc: 'ఎర్త్‌వర్క్, పిల్లర్స్, స్లాబ్, బ్రిక్‌వర్క్, ప్లంబింగ్, టైలింగ్ మరియు లగ్జరీ ఇంటీరియర్స్ అన్నీ ఒకే చోట.',
      pillar3Title: 'నాణ్యమైన బ్రాండెడ్ మెటీరియల్స్',
      pillar3Desc: 'అల్ట్రాటెక్, టాటా టిస్కాన్, ఏషియన్ పెయింట్స్, కజారియా వంటి గుర్తింపు పొందిన నాణ్యమైన బ్రాండ్ల వినియోగం.',
      pillar4Title: 'పారదర్శకమైన కమ్యూనికేషన్',
      pillar4Desc: 'ప్రతి దశలో స్పష్టమైన వివరణ, నాణ్యమైన పర్యవేక్షణ మరియు నిర్ణీత సమయంలో పనుల పూర్తి.',
      cta: 'మాతో చర్చించండి',
    },
    services: {
      tag: 'మా సేవలు',
      title: 'అన్ని రకాల నిర్మాణాలు & ఇంటీరియర్ పనులలో నిపుణులు',
      desc:
        'కొత్త గృహ నిర్మాణం, విల్లాలు, కమర్షియల్ కాంప్లెక్స్‌లు, ఇంటీరియర్ డిజైనింగ్, కిచెన్/బాత్ రినోవేషన్ మరియు వాటర్‌ప్రూఫింగ్ పనుల వివరాలు క్రింద చూడండి.',
      tabAll: 'మొత్తం సేవలు (15)',
      tabConstruction: 'సివిల్ నిర్మాణాలు',
      tabInteriors: 'ఇంటీరియర్ వర్క్స్',
      tabRenovation: 'రినోవేషన్ & మార్పులు',
      tabSpecialized: 'మేసన్రీ & వాటర్‌ప్రూఫింగ్',
      includedHeading: 'పనిలో చేర్చబడే అంశాలు',
      benefitsHeading: 'కస్టమర్ ప్రయోజనాలు',
      enquireBtn: 'ఈ సేవ గురించి విచారించండి',
    },
    materials: {
      tag: 'మెటీరియల్ విశిష్టత',
      title: 'నాణ్యమైన మెటీరియల్స్ & విశ్వసనీయ బ్రాండ్లు',
      desc:
        'మీ ఇంటి బలం, అందం మరియు మన్నిక మీరు వాడే మెటీరియల్స్‌పై ఆధారపడి ఉంటాయి. అందుకే మేము నాణ్యమైన బ్రాండెడ్ మెటీరియల్స్‌కు ప్రాధాన్యతనిస్తాము.',
      disclaimer:
        'గమనిక: మెటీరియల్ పేర్లు మా ప్రచార సమాచారంలో మరియు నిర్మాణాలలో ఉపయోగించే నాణ్యత సూచికగా మాత్రమే పేర్కొనబడ్డాయి. ఇది ప్రత్యేక డీలర్‌షిప్ ఒప్పందం కాదు.',
      cementTitle: 'స్ట్రక్చరల్ సిమెంట్ (అల్ట్రాటెక్ / జేఎస్డబ్ల్యూ)',
      cementDesc: 'పునాదులు, పిల్లర్లు మరియు స్లాబ్‌లకు పటిష్టమైన సంపీడన బలం మరియు పగుళ్లు రాని మన్నికను అందిస్తుంది.',
      steelTitle: 'రీన్‌ఫోర్స్డ్ టీఎంటీ స్టీల్ (టాటా టిస్కాన్)',
      steelDesc: 'భూకంప నిరోధకత, వంగే గుణం మరియు తుప్పు పట్టని నాణ్యతతో కూడిన అత్యుత్తమ స్టీల్.',
      paintsTitle: 'ఆర్కిటెక్చరల్ పెయింట్స్ (ఏషియన్ పెయింట్స్)',
      paintsDesc: 'తేమ, వర్షం మరియు ఎండల నుండి గోడలను కాపాడే వెదర్ ప్రొటెక్షన్ ఎక్స్‌టీరియర్ & లగ్జరీ ఇంటీరియర్ పెయింట్స్.',
      tilesTitle: 'విట్రిఫైడ్ & సిరామిక్ టైల్స్ (కజారియా)',
      tilesDesc: 'మరకలు పడని, జారకుండా ఉండే మరియు సులభంగా శుభ్రం చేసుకోగల అధునాతన డిజైన్ల ఫ్లోరింగ్ టైల్స్.',
      bathTitle: 'ప్లంబింగ్ & బాత్‌రూమ్ ఫిట్టింగ్స్ (హిండ్‌వేర్)',
      bathDesc: 'నీటి లీకేజీలు లేని, ఎక్కువ కాలం మన్నే మరియు స్టైలిష్ లుక్ ఇచ్చే మోడరన్ శానిటరీవేర్.',
    },
    gallery: {
      tag: 'విజువల్ గ్యాలరీ',
      title: 'అధికారిక పోస్టర్లు, బ్యానర్లు & వర్క్స్ ప్రదర్శన',
      desc:
        'SS గ్లోబల్ అధికారిక బ్యానర్లు, విల్లా ఎలివేషన్లు, రినోవేషన్ సేవల పోస్టర్లు మరియు నాణ్యమైన నిర్మాణ పనుల ఫోటోలు ఇక్కడ చూడవచ్చు.',
      filterAll: 'అన్నీ (All)',
      filterPosters: 'అధికారిక బ్యానర్లు & పోస్టర్లు',
      filterResidential: 'విల్లాలు & ఇళ్ళు',
      filterCommercial: 'కమర్షియల్',
      filterRenovation: 'రినోవేషన్ వర్క్స్',
      filterInteriors: 'ఇంటీరియర్స్',
      clickToEnlarge: 'ఫుల్ స్క్రీన్ హెచ్‌డీ వీక్షణ కోసం క్లిక్ చేయండి',
    },
    whyUs: {
      tag: 'మా ప్రత్యేకతలు',
      title: 'యజమానులు మమ్మల్ని ఎందుకు ఎంచుకుంటారు?',
      desc:
        'ఇల్లు కట్టడం అనేది జీవితంలో ఒక గొప్ప కల. SS గ్లోబల్‌ను ఎంచుకోవడం వల్ల కలిగే ప్రయోజనాలు ఇక్కడ చూడండి.',
    },
    faq: {
      tag: 'సందేహాలు - సమాధానాలు',
      title: 'తరచూ అడిగే ప్రశ్నలు',
      desc: 'మీ నిర్మాణ లేదా ఇంటీరియర్ ప్లానింగ్ కోసం స్పష్టమైన వివరాలు.',
    },
    contact: {
      tag: 'సంప్రదించండి',
      title: 'మా ఇంజనీరింగ్ & ఇంటీరియర్ డెస్క్‌ను సంప్రదించండి',
      desc:
        'మీ ప్రాజెక్ట్ గురించి వివరంగా మాట్లాడటానికి కాల్ చేయండి లేదా విజయవాడలోని మా కార్యాలయానికి రండి.',
      phoneHeading: 'ఫోన్ నంబర్ & వాట్సాప్',
      addressHeading: 'కార్యాలయ చిరునామా',
      hoursHeading: 'పనివేళలు',
      formTitle: 'ప్రాజెక్ట్ ఎంక్వైరీ పంపండి',
      formSubtitle: 'క్రింది వివరాలను పూరించండి, మా బృందం వెంటనే మిమ్మల్ని సంప్రదిస్తుంది.',
      submitBtn: 'SS గ్లోబల్‌కు ఎంక్వైరీ పంపండి',
    },
    footer: {
      aboutText:
        'SS గ్లోబల్ కన్‌స్ట్రక్షన్స్ అండ్ ఇంటీరియర్ వర్క్స్ - 20+ సంవత్సరాల అనుభవంతో విజయవాడ మరియు ఆంధ్రప్రదేశ్‌లో గృహ నిర్మాణాలు, లగ్జరీ విల్లాలు, కమర్షియల్ భవనాలు మరియు ఇంటీరియర్ పనులకు విశ్వసనీయ సంస్థ.',
      quickLinks: 'ముఖ్యమైన లింకులు',
      servicesTitle: 'మా ముఖ్య సేవలు',
      contactDesk: 'సంప్రదింపులు',
      rights: 'సర్వహక్కులు ప్రత్యేకించబడ్డాయి. అన్ని రకాల నిర్మాణాలు & ఇంటీరియర్ పనులలో నిపుణులు.',
    },
  },
};
