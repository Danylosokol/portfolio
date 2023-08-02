import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID
  ? process.env.NEXT_PUBLIC_PROJECT_ID
  : "";

const config = defineConfig({
  projectId: projectId,
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2023-07-27",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
