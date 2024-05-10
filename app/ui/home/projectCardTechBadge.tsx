import { GolangIcon, PythonIcon, ReactIcon } from "@/app/icons";
import { ReactNode } from "react";

const techIcons: Map<String, ReactNode> = new Map([
  ["react", [<ReactIcon key="react" color="#58c4dc" size="lg" />]],
  ["go", [<GolangIcon key="go" color="#08afd8" size="lg" />]],
  ["python", [<PythonIcon key="python" color="#00aa00" size="lg" />]],
]);

export default function ProjectCardTechBadge({ tech }: { tech: string }) {
  let badge: ReactNode = <p>{tech}</p>;
  if (techIcons.has(tech)) {
    badge = techIcons.get(tech);
  }
  return badge;
}
