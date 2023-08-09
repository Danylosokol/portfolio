import { groq } from "next-sanity";
import client from "./sanity.client";
import type { ProfileType, JobType, ProjectType } from "@/types";

export async function getProfile(): Promise<ProfileType[]>{
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills,
    }`
  );
}

export async function getJob(): Promise<JobType[]>{
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      companyUrl,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]>{
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      tagline,
      slug,
      projectImage {alt, "image": asset->url},
      projectUrl,
      projectGithub,
      shortDescription,
      fullDescription,
      technologies,
    }`
  );
}