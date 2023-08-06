import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import { HiLocationMarker } from "react-icons/hi";
import { BiFile, BiEnvelope, BiSolidLocationPlus } from "react-icons/bi";
import type { ProfileType } from "@/types";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <>
              {" "}
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
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
                    className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
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
            </>
          ))}
      </section>
    </main>
  );
}
