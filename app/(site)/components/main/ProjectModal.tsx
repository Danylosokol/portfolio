"use client";
import { useState } from "react";
import Image from "next/image";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { Dialog } from "@headlessui/react";

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
      <div className="fixed inset-0 flex items-center justify-center p-2 md:p-4 bg-white bg-opacity-30">
        <Dialog.Panel className="w-full md:w-[40vw] rounded bg-black p-3">
          <Dialog.Title>Complete your order</Dialog.Title>

          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <div className="mb-5">
            <PortableText value={project.fullDescription} />
          </div>

          <button className="py-2 px-6 border-solid border-[1px] bg-transparent hover:bg-secondary" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
