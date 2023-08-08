import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Hero from "./components/main/Hero";
import Job from "./components/main/Job";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <Hero data={data}/>
          ))}
      </section>
      <Job skills={profile[0].skills}/>
    </main>
  );
}
