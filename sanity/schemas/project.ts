import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the modal window or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      description: "Upload photo for project",
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "projectGithub",
      title: "Poroject Github",
      type: "url",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      description: "Add a list of technologies used in the project",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
