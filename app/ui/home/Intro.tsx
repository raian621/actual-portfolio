import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";
import { ReactElement } from "react";

type IntroLinkInfo = {
  link: string;
  element: () => ReactElement;
};

export default function Intro() {
  const introLinkInfo: IntroLinkInfo[] = [
    {
      link: "https://github.com/raian621",
      element: () => <SiGithub />,
    },
    {
      link: "https://www.linkedin.com/in/ryan-z-bell",
      element: () => <SiLinkedin />,
    },
    {
      link: "mailto:ryanzbell@proton.me",
      element: () => <Mail />,
    },
    {
      link: "tel:469-678-6995",
      element: () => <Phone />,
    },
  ];

  return (
    <>
      <h1 className="text-4xl">Ryan Bell</h1>
      {/* yapping */}
      <p>
        Aspiring Software Engineer with experience in automation, cloud
        computing, machine learning, computer science, and software development.
        Recently graduated with honors from the University of North Texas with a
        Bachelors in Computer Science, and is equipped with the practical skills
        and theoretical knowledge necessary to become a valuable asset in any
        software development team.
      </p>
      <div className="flex gap-4 justify-center">
        {introLinkInfo.map((info, idx) => {
          const { link, element: LinkIcon } = info;
          return (
            <a
              key={`intro-link-${idx}`}
              href={link}
              className="dark:hover:text-slate-300 hover:text-slate-500"
            >
              <LinkIcon />
            </a>
          );
        })}
      </div>
    </>
  );
}
