import { SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import { ReactElement } from "react";
import { Metadata } from "next";

type ContactInfo = {
  link: string;
  text: string;
  icon: () => ReactElement;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
  };
}

export default function Page() {
  const contactInfoList: ContactInfo[] = [
    {
      link: "https://www.linkedin.com/in/ryan-z-bell",
      text: "https://www.linkedin.com/in/ryan-z-bell",
      icon: () => <SiLinkedin />,
    },
    {
      link: "mailto:ryanzbell@proton.me",
      text: "ryanzbell@proton.me",
      icon: () => <Mail />,
    },
    {
      link: "tel:469-678-6995",
      text: "469-678-6995",
      icon: () => <Phone />,
    },
  ];

  return (
    <>
      <div className="flex w-[100vdw] h-full">
        <div className="m-auto bg-white dark:bg-slate-800 md:shadow-2xl flex-col p-8 space-y-4 content-center">
          <h1 className="text-4xl text-center">Contact</h1>
          <table className="border-separate border-spacing-2 m-auto">
            <tbody>
              {contactInfoList.map((info, idx) => {
                const { link, text, icon: ContactIcon } = info;
                const target = (!link.startsWith("tel") && !link.startsWith("mailto")) ? "_blank" : undefined;

                return (
                  <tr key={`row-${idx}`}>
                    <td>
                      <ContactIcon />
                    </td>
                    <td>
                      <a href={link} target={target}>
                        {text}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
