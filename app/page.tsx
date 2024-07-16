import { Separator } from "@/components/ui/separator";
import { Certifications, Education, Intro, Navigation, Projects, Skills } from "./ui/home";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Page() {
  return (
    <>
      <div className="flex w-[100vdw] h-full">
        <div className="m-auto bg-white dark:bg-slate-800 md:shadow-2xl flex-col text-center p-8 md:w-[800px] space-y-4">
          <Navigation />
          <Separator className="dark:bg-slate-400" />
          <Intro />
          <Separator className="dark:bg-slate-400" />
          <Education />
          <Separator className="dark:bg-slate-400" />
          <Certifications />
          <Separator className="dark:bg-slate-400" />
          <Projects />
          <Separator className="dark:bg-slate-400" />
          <Skills />
        </div>
      </div>
      <ParticleCanvas />
    </>
  );
}
