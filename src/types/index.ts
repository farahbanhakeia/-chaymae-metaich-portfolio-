export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  handle?: string;
}

export interface Stat {
  value: string;
  label: string;
  sub?: string;
}

export type SkillLevel = 'practiced' | 'studied' | 'notion';

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  blurb?: string;
  skills: Skill[];
}

export type ProjectCategory = 'finance' | 'data' | 'research' | 'consulting';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  objective: string;
  approach: string[];
  stack: string[];
  outcome: string;
  outcomeKind: 'targeted' | 'design' | 'qualitative' | 'deliverable';
  demonstrates: string;
  icon: string;
  links?: { label: string; href: string }[];
  note?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  tag: string;
  context?: string;
  groups: { title: string; items: string[] }[];
  tools?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  status?: string;
  details?: string[];
  upcoming?: boolean;
  icon: string;
}

export interface MethodStep {
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface Domain {
  title: string;
  description: string;
  icon: string;
}

export interface Exploration {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  detail: string;
  icon: string;
}
