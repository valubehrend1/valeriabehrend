export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  technologies?: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  category?: string;
  imageUrl?: string;
  imagePosition?: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}