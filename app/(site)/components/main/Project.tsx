"use client"
import { useState } from "react";
import Image from "next/image";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { Dialog } from "@headlessui/react";

export default async function Project({ project }: { project: ProjectType }) {
  let [isOpen, setIsOpen] = useState(false);
  const projects: ProjectType[] = await getProjects();

  return (
    <>
      <article className="border border-dashed hover:cursor-pointer" onClick={() => setIsOpen(true)}>
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
        <section className="p-5">
          <h2 className="font-semibold mb-1">{project.name}</h2>
          <p className="text-sm text-zinc-400">{project.shortDescription}</p>
        </section>
      </article>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
