import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";

export default function Intro() {
  return (
    <>
      <h1 className="text-4xl">Ryan Bell</h1>
      {/* yapping */}
      <p>
        Aspiring Software Engineer with experience in automation, cloud
        computing, machine learning, computer science, and software development.
        Recently graduated with honors from the University of North Texas with a
        Bachelors in Computer Science, and is equipped with the practical skills
        and theoretical knowledge necessary to become an valuable asset in any
        software development team.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="https://github.com/raian621" target="_blank">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/ryan-z-bell" target="_blank">
          <SiLinkedin />
        </a>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <a href="mailto:ryan.bell62101@gmail.com" target="_blank">
                <Mail />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="dark">
              <p>ryan.bell62101@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <a href="tel:469-678-6995" target="_blank">
                <Phone />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="dark">
              <p>469-678-6995</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
