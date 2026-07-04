export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string;
  image?: string;
  link?: string;
  summary?: string;
  tags?: string[];
  font?: string;
  palette?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}
