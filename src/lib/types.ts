
export interface Education {
  id: number;
  institution: string;
  university?: string;
  degree: string;
  duration: string;
  score: string;
  marksheetUrl: string;
  dataAiHint: string;
  location?: string;
}

export interface Experience {
  id: number;
  slug: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  period: string;
  companyUrl: string;
  gmapUrl: string;
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
  type: string;
  skills: string[];
  fileUrl: string;
  issueDate: string;
  isFeatured: boolean;
  featuredImageUrl?: string;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  dataAiHint: string;
  isFeatured: boolean;
  icon: 'Award' | 'Star';
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
  categories: SkillCategory[];
}
