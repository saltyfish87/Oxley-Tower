export type Language = 'en' | 'zh';

export interface BilingualText {
  en: string;
  zh: string;
}

export interface FeatureItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon?: string;
}

export interface FacilityItem {
  id: string;
  name: BilingualText;
  icon: string;
}

export interface LayoutItem {
  id: string;
  type: BilingualText;
  size: BilingualText;
  description: BilingualText;
  image: string;
  price?: BilingualText;
  perks: BilingualText[];
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
}

export interface AgentDetails {
  name: string;
  ren: string;
  agency: string;
  agencyReg: string;
  phone: string;
  email?: string;
  whatsappMessage: string;
  address: string;
}

export interface TowerDetails {
  name: BilingualText;
  image: string;
  description: BilingualText;
  stats: { label: BilingualText; value: BilingualText }[];
  layouts: LayoutItem[];
}

export interface SiteContent {
  project: {
    name: BilingualText;
    tagline: BilingualText;
  };
  hero: {
    title: BilingualText;
    subtitle: BilingualText;
    image: string;
  };
  overview: {
    title: BilingualText;
    content: BilingualText;
    image: string;
    details: {
      developer: BilingualText;
      towers: BilingualText;
      location: BilingualText;
      tenure: BilingualText;
      completion: BilingualText;
    };
  };
  whyChoose: {
    title: BilingualText;
    items: { title: BilingualText; description: BilingualText; icon: string }[];
  };
  towers: {
    title: BilingualText;
    so: TowerDetails;
    jewel: TowerDetails;
  };
  features: {
    title: BilingualText;
    items: FeatureItem[];
  };
  location: {
    title: BilingualText;
    description: BilingualText;
    subtitle?: BilingualText;
    mapImage: string;
    highlights: BilingualText[];
  };
  facilities: {
    title: BilingualText;
    items: FacilityItem[];
  };
  gallery: {
    title: BilingualText;
    items: GalleryItem[];
  };
  cta: {
    title: BilingualText;
    subtitle: BilingualText;
    buttonText: BilingualText;
    embedCode?: string;
    formType?: 'whatsapp' | 'embed' | 'built-in';
  };
  agent: AgentDetails;
  disclaimers: {
    management: BilingualText;
    general: BilingualText;
  };
  legal: {
    terms: BilingualText;
    privacy: BilingualText;
  };
}
