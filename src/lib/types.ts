export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  marksheetUrl: string;
  dataAiHint: string;
}

export interface Experience {
  id: number;
  slug: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  certificateUrl?: string;
  workImages?: { url: string; dataAiHint: string }[];
  logoUrl: string;
  dataAiHint: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: { url: string; dataAiHint: string }[];
  videoUrl?: string;
  category: string[];
  isFeatured: boolean;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  imageUrl: string;
  dataAiHint: string;
  isFeatured: boolean;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  isFeatured: boolean;
}

export interface CredentialData {
  certificates: Certificate[];
  achievements: Achievement[];
}

export interface Profile {
  id: number;
  platform: string;
  username: string;
  url: string;
  icon: string; // Lucide icon name
  stats: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  featuredSkills: string[];
  categories: SkillCategory[];
}
