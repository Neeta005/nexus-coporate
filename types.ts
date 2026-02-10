import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'BarChart' | 'Globe' | 'Shield' | 'Users' | 'Zap' | 'Briefcase';
  details?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}

export interface SiteContent {
  company: CompanyInfo;
  navigation: NavItem[];
  home: {
    hero: {
      headline: string;
      subheadline: string;
      ctaText: string;
      heroImage: string;
    };
    aboutSnippet: {
      title: string;
      content: string;
    };
    stats: { label: string; value: string }[];
  };
  about: {
    title: string;
    intro: string;
    mission: string;
    vision: string;
    values: { title: string; description: string }[];
    team: TeamMember[];
  };
  services: {
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  portfolio: {
    title: string;
    intro: string;
    items: PortfolioItem[];
  };
  contact: {
    title: string;
    intro: string;
  };
}