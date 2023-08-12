import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Hero from "./components/main/Hero";
import Jobs from "./components/main/Jobs";
import Projects from "./components/main/Projects";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile && profile.map((data, indx) => <Hero key={`hero-${indx}`} data={data} />)}
      </section>
      <div id="expertise" className="scroll-m-10"></div>
      <Jobs skills={profile[0].skills} />
      <div id="projects" className="scroll-m-10"></div>
      <Projects />
    </main>
  );
}
