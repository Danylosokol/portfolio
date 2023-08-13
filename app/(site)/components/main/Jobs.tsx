import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Jobs({ skills }: { skills: string[] }) {
  const job: JobType[] = await getJob();

  return (
    <section className="mb-40">
      <h2 className="font-semibold text-4xl mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-dashed border-secondary pt-5 pb-10 px-5">
          <div className="flex flex-col gap-y-12">
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
                  className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-secondary"
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
                    <h3 className="text-xl font-bold">{data.jobTitle}</h3>
                    <p>{data.name}</p>
                    <small className="text-sm text-secondary-bright mt-2 tracking-widest uppercase">
                      {data.startDate && data.startDate.toString() + " -"}
                      {data.endDate
                        ? data.endDate.toString()
                        : data.startDate && !data.endDate
                        ? "Present"
                        : ""}
                    </small>
                    <PortableText value={data.description} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="border border-dashed border-secondary pt-5 pb-10 px-5">
          <h3 className="font-bold text-xl mb-2">My Skills</h3>
          <p className="text-zinc-400 max-w-lg mb-4">
            I&apos;ve spent few years working on my skills. In no particular
            order, here are a few of them:
          </p>
          <ul className="flex flex-wrap gap-2 md:gap-5">
            {skills.map((skill, id) => (
              <li
                key={id}
                className="border font-semibold border-dashed border-secondary duration-500 hover:bg-primary-lighter px-2 md:px-4 py-2 cursor-default"
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
