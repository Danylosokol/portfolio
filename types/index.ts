import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  _createdAt: Date;
  fullName: string,
  headline: string, 
  profileImage: {
    alt: string,
    image: string,
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL:string,
  socialLinks: string[],
  skills: string[],
}

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  companyUrl: string;
  logo: string;
  url: string;
  description: PortableTextBlock[];
  startDate: Date;
  endDate: Date;
}

export type ProjectType = {
  _id: string;
  name: string;
  tagline: string;
  slug: string;
  projectImage: {
    alt: string | null;
    image: string;
  };
  projectUrl: string | null;
  projectGithub: string | null;
  shortDescription: string;
  fullDescription: PortableTextBlock[];
  technologies: string[];
};