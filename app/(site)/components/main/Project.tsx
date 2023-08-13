"use client";
import { useState } from "react";
import Image from "next/image";
import type { ProjectType } from "@/types";
import ProjectModal from "./ProjectModal";

export default function Project({ project }: { project: ProjectType }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        className="border border-dashed border-secondary hover:cursor-pointer flex flex-col max-w-[18rem] lg:max-w-[20rem] w-full sm:w-[20rem]"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={project.projectImage.image}
          className="w-full h-32 object-cover"
          width={500}
          height={500}
          alt={
            project.projectImage.alt
              ? project.projectImage.alt
              : "project cover image"
          }
        />
        <section className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-1">{project.name}</h3>
          <div className="h-full flex flex-col justify-between">
            <p className="text-base mb-4">{project.tagline}</p>
            <p className="text-sm text-zinc-400">
              {project.technologies.join(", ")}
            </p>
          </div>
        </section>
      </article>
      <ProjectModal project={project} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
