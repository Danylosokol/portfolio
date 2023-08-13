import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Jobs({ skills }: { skills: string[] }) {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-32 mb-20">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl">Expertise</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-y-12">
          <h3 className="font-semibold text-3xl mb-4">Work Experience</h3>
          {job
            .sort((a: JobType, b: JobType): number => {
              if (a.startDate && b.startDate) {
                return a.startDate > b.startDate ? -1 : 1;
              } else if (a.startDate) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((data) => (
              <div
                key={data._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
              >
                <a
                  href={data.companyUrl}
                  rel="noreferer noopener"
                  className="min-h-[60px] min-w-[60px] overflow-clip relative"
                >
                  <Image
                    src={data.logo}
                    className="object-cover"
                    alt={`${data.name} logo`}
                    fill
                  />
                </a>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">{data.name}</h3>
                  <p>{data.jobTitle}</p>
                  <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {data.startDate
                      ? data.startDate.toString()
                      : new Date().toString()}{" "}
                    - {data.endDate ? data.startDate.toString() : "Present"}
                  </small>
                  <PortableText value={data.description} />
                </div>
              </div>
            ))}
        </div>
        <div>
          <h3 className="font-semibold text-3xl mb-4">My skills</h3>
          <p className="text-zinc-400 max-w-lg">
            I&apos;ve spent few years working on my skills. In no particular
            order, here are a few of them.
          </p>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill, id) => (
              <li
                key={id}
                className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
