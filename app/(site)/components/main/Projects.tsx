import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Project from "./Project";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <section className="mt-32 mb-20">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl">
          Featured projects I've worked on
        </h2>
      </div>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-32 mb-12">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </section>
    </section>
  );
  return <div>Projects</div>;
}
