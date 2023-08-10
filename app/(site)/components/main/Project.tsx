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
        className="border border-dashed hover:cursor-pointer flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={project.projectImage.image}
          className="w-full h-40 object-cover"
          width={200}
          height={200}
          alt={
            project.projectImage.alt
              ? project.projectImage.alt
              : "project cover image"
          }
        />
        <section className="p-5 flex-grow flex flex-col">
          <h2 className="font-semibold mb-1">{project.name}</h2>
          <div className="h-full flex flex-col justify-between">
            <p className="text-sm mb-4">{project.tagline}</p>
            <p className="text-sm text-zinc-400">
              {project.technologies.join(", ")}
            </p>
          </div>
        </section>
      </article>
      <ProjectModal project={project} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
