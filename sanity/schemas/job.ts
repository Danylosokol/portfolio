import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Company name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title",
    },
    {
      name: "companyUrl",
      title: "Campany URL",
      type: "url",
      description: "Link to the company's website",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "description",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Write a brief description about this role",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default job;
