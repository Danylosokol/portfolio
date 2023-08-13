"use client";
import { useState } from "react";
import Image from "next/image";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Dialog } from "@headlessui/react";
import { TfiClose } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import {BiLinkAlt} from "react-icons/bi";

export default function ProjectModal({
  project,
  isOpen,
  setIsOpen,
}: {
  project: ProjectType;
  isOpen: boolean;
  setIsOpen: Function;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-2 md:p-4 bg-primary-lighter bg-opacity-90">
        <Dialog.Panel className="w-full md:w-[40vw] rounded bg-black p-4">
          <Dialog.Title className="text-3xl font-semibold my-4">
            {project.name}
          </Dialog.Title>

          <div className="mb-4 text-secondary-bright">
            <PortableText value={project.fullDescription} />
          </div>
          <h4 className="font-bold text-xl mb-2">Technologies:</h4>
          <p className="text-sm text-zinc-400 mb-8">
            {project.technologies.join(", ")}
          </p>
          <div className="flex gap-5">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 max-w-sm outline-none"
              >
                <BiLinkAlt />
              </a>
            )}

            {project.projectGithub && (
              <a
                href={project.projectGithub}
                target="_blank"
                className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 max-w-sm outline-none"
              >
                <BsGithub />
              </a>
            )}

            <button className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 max-w-sm outline-none">
              <TfiClose />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
