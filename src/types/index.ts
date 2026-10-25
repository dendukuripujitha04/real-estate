export interface Address {
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface BusinessHours {
  weekdays: string;
  sunday: string;
}

export interface Guarantees {
  structuralWarranty: string;
  leakageGuarantee: string;
  model: string;
}

export interface Company {
  name: string;
  shortName: string;
  tagline: string;
  established: number;
  experienceYears: number;
  founder: string;
  phones: string[];
  primaryPhone: string;
  whatsappPhone: string;
  email: string;
  altEmail: string;
  address: Address;
  businessHours: BusinessHours;
  serviceAreas: string[];
  guarantees: Guarantees;
  philosophy: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  cta: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  location: string;
  area: string;
  year: string;
  status: string;
  image: string;
  description: string;
  servicesProvided?: string[];
  services?: string[];
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  titleTe?: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  project: string;
  rating: number;
  text: string;
}

export interface RateTier {
  rate: number;
  label: string;
  spec: string;
}

export interface EstimatorRates {
  residential: Record<string, RateTier>;
  commercial: Record<string, RateTier>;
  renovation: Record<string, RateTier>;
  floorMultipliers: Record<string, number>;
}

export type AdminRatesPayload = {
  residential?: Record<string, Partial<RateTier>>;
  commercial?: Record<string, Partial<RateTier>>;
  renovation?: Record<string, Partial<RateTier>>;
  floorMultipliers?: Record<string, number>;
};

export interface ProgressStage {
  name: string;
  percent: number;
  status: string;
}

export interface TrackedProject {
  code: string;
  clientName: string;
  projectTitle: string;
  location: string;
  type: string;
  totalSqFt: string;
  overallProgress: number;
  status: string;
  lastUpdated: string;
  stages: ProgressStage[];
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  location?: string;
  approxArea?: string;
  message?: string;
  estimatedCost?: string;
  status: 'NEW' | 'CONTACTED' | 'IN PROGRESS' | 'COMPLETED';
  createdAt: string;
  updatedAt?: string;
}

export interface AdminCredentials {
  username: string;
  passwordHash: string;
}

export interface DatabaseSchema {
  company: Company;
  stats: StatItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  estimatorRates: EstimatorRates;
  projectProgress: TrackedProject[];
  enquiries: Enquiry[];
  admin: AdminCredentials;
}

export interface EstimateRequest {
  projectType: 'residential' | 'commercial' | 'renovation';
  quality: 'basic' | 'standard' | 'premium' | 'luxury';
  area: number;
  floors: 'g' | 'g1' | 'g2' | 'g3' | 'g4';
}

export interface EstimateResponse {
  success: boolean;
  inputs: EstimateRequest;
  totalBuiltupArea: number;
  ratePerSqFt: number;
  tierLabel: string;
  specifications: string;
  estimatedMinCost: number;
  estimatedMaxCost: number;
  formattedRange: string;
  approxPerSqFtRange: string;
  disclaimer: string;
}

export interface AiChatMessage {
  sender: 'user' | 'bot';
  text: string;
  actions?: Array<{
    text: string;
    action: 'scroll_projects' | 'open_consultation' | 'call_phone';
  }>;
}
