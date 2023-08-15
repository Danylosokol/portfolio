import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Project from "./Project";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <section className="mb-40">
      <h2 className="font-semibold text-4xl mb-8">
        Featured projects I&apos;ve worked on
      </h2>
      <section className="flex flex-wrap gap-y-8 gap-x-5 justify-around lg:justify-between">
        {projects.map((project, indx) => (
          <Project key={`project-${indx}`} project={project} />
        ))}
      </section>
    </section>
  );
}
