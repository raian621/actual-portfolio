import { Separator } from "@/components/ui/separator";
import { Certifications, Education, Intro, Projects } from "./ui/home";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Page() {
  return (
    <div className="flex w-[100vdw] justify-center">
      <div className="bg-white md:shadow-2xl flex-col text-center p-8 md:w-[800px] space-y-4">
        <Intro />
        <Separator />
        <Education />
        <Separator />
        <Certifications />
        <Separator />
        <Projects />
      </div>
      <ParticleCanvas />
    </div>
  );
}
