export const DEFAULT_ESTIMATOR_RATES = {
  residential: {
    basic: {
      rate: 1650,
      label: 'Basic Package',
      spec: 'UltraTech/Zuari Cement, Fe-500 Steel, Standard Red Bricks, Vitrified 2x2 Tiles, Asian Paints, Standard UPVC Windows',
    },
    standard: {
      rate: 1950,
      label: 'Standard Package',
      spec: 'Grade 53 Cement, Vizag/Tata TMT Steel, Wire-cut Bricks, 2x4 Glazed Vitrified Tiles, Teak Wood Main Door, Jaguar/Cera Fittings, Finolex Wiring',
    },
    premium: {
      rate: 2400,
      label: 'Premium Package',
      spec: 'Tata Tiscon TMT Steel, Ready-Mix Concrete M25, Full Teak Wood Frames, Italian Marble / GVT Flooring, Grohe/Kohler Bathrooms, Full False Ceiling',
    },
    luxury: {
      rate: 2900,
      label: 'Ultra Luxury',
      spec: 'Architectural Customization, Imported Marble, Smart Home Automation, Soundproof Double Glazed Windows, Designer Landscapes, VRV AC Conduits',
    },
  },
  commercial: {
    basic: {
      rate: 1750,
      label: 'Commercial Basic',
      spec: 'Commercial Grade RCC Frame, Vitrified Flooring, Heavy-duty Aluminium Glazing, Standard Fire Safety Conduits',
    },
    standard: {
      rate: 2200,
      label: 'Commercial Standard',
      spec: 'Curtain Wall Structural Glazing, High-Traffic Granite/Tile Flooring, Concealed HVAC ducts, High-Speed Lift Shafts',
    },
    premium: {
      rate: 2750,
      label: 'Commercial Premium',
      spec: 'Grade A Corporate Finishes, Acoustic Ceilings, Integrated Access Control, Full Fire Fighting Hydrant System, Energy-Efficient Low-E Glass',
    },
    luxury: {
      rate: 3200,
      label: 'Corporate Tower',
      spec: 'Double skin facade, LEED certified green specs, 100% backup power infrastructure',
    },
  },
  renovation: {
    basic: {
      rate: 800,
      label: 'Renovation Basic',
      spec: 'Plaster repairs, Wall skim coating, Full exterior & interior repainting, Basic electrical rewiring, Waterproofing patch repairs',
    },
    standard: {
      rate: 1250,
      label: 'Renovation Modern',
      spec: 'New tile overlay, Modern false ceiling with LED profiles, Bathroom remodelling with sanitary upgrade, Elevation modern cladding',
    },
    premium: {
      rate: 1750,
      label: 'Complete Overhaul',
      spec: 'Structural strengthening, Layout reconfiguration, New plumbing/wiring lines, Premium flooring, Designer facade facelift, 5-Yr Guaranteed Waterproofing',
    },
    luxury: {
      rate: 2200,
      label: 'Heritage Restoration',
      spec: 'Specialized structural retrofitting, luxury interior remodel, soundproofing, high-end facade enhancement',
    },
  },
  floorMultipliers: {
    g: 1.0,
    g1: 1.95,
    g2: 2.9,
    g3: 3.85,
    g4: 4.8,
  },
};

export const NAV_LINKS = [
  { href: '#home', label: 'HOME', id: 'link-home' },
  { href: '#about', label: 'ABOUT', id: 'link-about' },
  { href: '#services', label: 'SERVICES', id: 'link-services' },
  { href: '#projects', label: 'PROJECTS', id: 'link-projects' },
  { href: '#gallery', label: 'GALLERY', id: 'link-gallery' },
  { href: '#process', label: 'PROCESS', id: 'link-process' },
  { href: '#why-buildsphere', label: 'WHY BUILDSPHERE', id: 'link-why-buildsphere' },
  { href: '#testimonials', label: 'TESTIMONIALS', id: 'link-testimonials' },
  { href: '#estimate', label: 'ESTIMATE', id: 'link-estimate' },
  { href: '#tracker', label: 'TRACK PROJECT', id: 'link-tracker' },
  { href: '#contact', label: 'CONTACT', id: 'link-contact' },
];

export const COMPANY_CONTACT = {
  name: 'BuildSphere Infra & Engineering Works',
  phone1: '+91 81795 17373',
  phone1Raw: '+918179517373',
  phone2: '+91 96760 18666',
  phone2Raw: '+919676018666',
  phone3: '+91 70757 37548',
  email: 'contact@buildsphere.in',
  address: 'Door No. 6-13, Kaveti Vari Street, Ring Road (Near M Convention), Ramavarapadu, Vijayawada, Andhra Pradesh, 521108',
  hours: 'Mon – Sat: 9:00 AM – 7:30 PM',
  experience: '20+ Yrs Experience (Est. 2004)',
  warranty: '15-Year Structural Warranty',
};
