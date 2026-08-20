export type ProjectCategory =
  | "Advertising"
  | "Music Video"
  | "Documentary"
  | "Campaign"
    |"Comercial";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: number;
  imageUrl: string;
  publicId?: string;
  videoPublicId?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Client {
  name: string;
  kind: string;
}

export interface Social {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  eyebrow: string;
  tagline: string;
  presentedBy: string;
  email: string;
  phone: string;
  socials: Social[];
}
