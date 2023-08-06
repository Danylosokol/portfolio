import { createClient,  type ClientConfig} from "next-sanity";

const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID
  ? process.env.NEXT_PUBLIC_PROJECT_ID
  : "";

const config: ClientConfig = {
  projectId: projectId,
  dataset: "production",
  apiVersion: "2023-07-27",
  useCdn: false,
};

const client = createClient(config);

export default client;
