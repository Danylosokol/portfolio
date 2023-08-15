"use client";
import { Dialog } from "@headlessui/react";
import { TfiClose } from "react-icons/tfi";

export default function FormResponse({
  responseStatus,
  responseText,
  isOpen,
  setIsOpen,
}: {
  responseStatus: boolean;
  responseText: string;
  isOpen: boolean;
  setIsOpen: Function;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className={`fixed inset-0 flex items-center justify-center p-2 md:p-4 bg-opacity-40 ${
          responseStatus ? "bg-accent-right" : "bg-accent-wrong"
        }`}
      >
        <Dialog.Panel className="w-full md:w-[40vw] rounded bg-black p-4">
          <Dialog.Title className="text-3xl font-semibold my-4">
            {responseStatus
              ? "Message has been successfully sent!"
              : "Something went wrong..."}
          </Dialog.Title>
          <p className="mb-5">{responseText}</p>
          <button
            className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 max-w-sm outline-none"
            onClick={() => setIsOpen(false)}
          >
            <TfiClose />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
