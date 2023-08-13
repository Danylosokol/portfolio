import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { BiFile, BiEnvelope } from "react-icons/bi";
import type { ProfileType } from "@/types";

export default async function Hero({ profile }: { profile: ProfileType[] }) {
  return (
    <section className="mt-32 md:mt-40 mb-40">
      {profile &&
        profile.map((data, indx) => (
          <div key={`hero-${indx}`} className="w-full">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-8 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {data.headline}
            </h1>
            <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-x-10">
              <div
                key={data._id}
                className="max-w-full md:max-w-xl lg:max-w-3xl flex flex-col flex-wrap justify-between"
              >
                <p className="text-secondary-bright leading-relaxed mb-3 md:mb-0">
                  {data.shortBio}
                </p>
                <p className="flex items-center gap-x-2 mb-3 md:mb-0">
                  <HiLocationMarker />
                  {data.location}
                </p>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-x-2 hover:text-secondary-bright duration-300 mb-3 md:mb-0"
                >
                  <BiEnvelope />
                  {data.email}
                </a>
                <ul className="flex items-center gap-x-6">
                  {Object.entries(data.socialLinks).map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        target="_blank"
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 hover:text-secondary-bright duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0 md:-mt-20">
                <Image
                  className="rounded-full mb-4 object-cover w-40 md:w-56 bg-top border border-secondary border-dashed"
                  src={data.profileImage.image}
                  width={200}
                  height={200}
                  quality={100}
                  alt={data.profileImage.alt}
                />
                <a
                  href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                  className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 max-w-sm outline-none"
                >
                  <BiFile className="text-base" /> Donwload Resume
                </a>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
