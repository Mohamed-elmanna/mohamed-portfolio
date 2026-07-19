export type Profile = {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  social: {
    linkedin: string;
    scholar: string;
    orcid: string;
    researchGate: string;
  };
  researchInterests: string[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
  image?: string;
  paper?: string;
  github?: string;
};

export type PublicationStatus = "Published" | "Under Review" | "Preprint";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  status: PublicationStatus;
  doi: string;
  pdf: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  gpa?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
