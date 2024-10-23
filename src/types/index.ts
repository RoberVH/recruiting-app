export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  verified: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  projects: string[];
  achievements: string[];
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  certifications: Certification[];
  experience: WorkExperience[];
  skills: string[];
  available: boolean;
}