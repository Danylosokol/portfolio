import { createClient,  groq} from "next-sanity";

const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID
  ? process.env.NEXT_PUBLIC_PROJECT_ID
  : "";

export async function getProjects(){
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    apiVersion: "2023-07-27",
  });
  return client.fetch(
    groq`*[_type = "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}