import { SiGithub } from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight } from "lucide-react";

export type ProjectInfo = {
  name: string;
  extLink?: string;
  ghLink?: string;
  blogLink?: string;
  tech: string[];
  factoids: string[];
};

export default function Projects() {
  const projects: ProjectInfo[] = [
    {
      name: "Security Camera Server",
      tech: ["Go", "Typescript", "Linux", "ffmpeg"],
      factoids: [
        "Developed a low-latency HTTP Live Streaming (HLS) server for \
        monitoring live webcam video",
        "Integrated ffmpeg for real-time video transcoding, achieving a sub-3 \
        second stream delay",
        "Optimized video encoding parameters to to balance quality and latency \
        for a smooth viewing experience",
      ],
      ghLink: "https://github.com/raian621/security-webcam",
    },
    {
      name: "Transcribro",
      tech: ["FastAPI", "React", "Python", "TypeScript", "Whisper AI"],
      factoids: [
        "Collaborated in a team of six with a university sponsor to build a web \
        application for accessible audio transcription, aiding the \
        hard-of-hearing",
        "Developed an audio pre-processing solution for efficient Whisper API \
        integration, enabling handling of large audio files through \
        compression and chunking",
        "Automated the deployment process with a continuous delivery pipeline \
        on GitHub, streamlining project updates with code changes",
        "Utilized GitHub Actions for automated containerization and deployment \
        of the backend service, ensuring scalability and maintainability",
      ],
      extLink: "https://transcribro.com",
      ghLink: "https://github.com/nomaddevs1/Captioning",
    },
  ];

  return (
    <div className="space-y-4 text-left">
      <h1 className="text-2xl">Projects</h1>
      {projects.map((project, idx) => {
        return <Project key={`project-${idx}`} project={project} />;
      })}
    </div>
  );
}

function Project({ project }: { project: ProjectInfo }) {
  return (
    <div className="flex-col">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl">{project.name}</h2>
        <div className="flex gap-2">
          {project.ghLink && (
            <a
              href={project.ghLink}
              target="_blank"
              className="hover:text-slate-600"
            >
              <SiGithub />
            </a>
          )}
          {project.extLink && (
            <a
              href={project.extLink}
              target="_blank"
              className="hover:text-slate-600"
            >
              <SquareArrowOutUpRight />
            </a>
          )}
        </div>
      </div>
      <p className="italic mb-2">
        {project.tech.length > 0 &&
          project.tech.reduce((acc, val, idx) => {
            return acc + `, ${val}`;
          })}
      </p>
      <ul className="list-disc">
        {project.factoids.map((factoid, idx) => {
          return (
            <li key={`factoid-${idx}`} className="list-inside">
              {factoid}
            </li>
          );
        })}
      </ul>
      {project.blogLink && (
        <a
          href={project.blogLink}
          target="_blank"
          className="mt-20 underline text-slate-600 hover:text-blue-800"
        >
          read more...
        </a>
      )}
    </div>
  );
}
