import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { BiFile, BiEnvelope} from "react-icons/bi";
import type { ProfileType } from "@/types";

export default async function Hero({ data }: { data: ProfileType }) {
  return (
    <div className="max-w-6xl flex w-full justify-between">
      <div key={data._id} className="lg:max-w-3xl max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          {data.headline}
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          {data.shortBio}
        </p>
        <ul className="flex items-center gap-x-6 my-10">
          {Object.entries(data.socialLinks).map(([key, value], id) => (
            <li key={id}>
              <a
                href={value}
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                {key[0].toUpperCase() + key.toLowerCase().slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
        <div>
          <Image
            className="rounded-full mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
            src={data.profileImage.image}
            width={200}
            height={200}
            quality={100}
            alt={data.profileImage.alt}
          />
          <a
            href={`${data.resumeURL}?dl=${data.fullName}_resume`}
            className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 text-center cursor-pointer font-medium gap-x-2"
          >
            <BiFile className="text-base" /> Donwload Resume
          </a>
          <ul>
            <li className="flex items-center gap-x-2">
              <HiLocationMarker />
              {data.location}
            </li>
            <li>
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
              >
                <BiEnvelope />
                {data.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
