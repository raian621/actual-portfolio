import {
  Link,
  Share,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
} from "lucide-react";

export type CertificationInfo = {
  name: string;
  org: string;
  issued: string;
  expires?: string;
  link?: string;
  factoids: string[];
};

export default function Certifications() {
  const certs = [
    {
      name: "IBM DevOps and Software Engineering Specialization",
      org: "Coursera",
      issued: "July 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/TP58KH6HB5C5",
      factoids: [],
    },
    {
      name: "IBM Full Stack Software Developer",
      org: "Coursera",
      issued: "March 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/VFK52PHX2CJU",
      factoids: [],
    },
  ];
  return (
    <div className={`space-y-4 text-left`}>
      <h1 className="text-2xl">Certifications</h1>
      {certs.map((cert, idx) => {
        return <Certification key={`cert-${idx}`} cert={cert} />;
      })}
    </div>
  );
}

function Certification({ cert }: { cert: CertificationInfo }) {
  return (
    <div>
      <div className="flex justify-between gap-2 items-center">
        <h2 className="text-xl">{cert.name}</h2>
        <span className="whitespace-nowrap">
          {cert.expires ? `${cert.issued}-${cert.expires}` : `${cert.issued}`}
        </span>
      </div>
      {cert.link ? (
        <a
          href={cert.link}
          target="_blank"
          className="flex gap-2 items-center hover:text-slate-600"
        >
          <span className="italic">{cert.org}</span>
          <SquareArrowOutUpRight size="1em" />
        </a>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="italic">{cert.org}</span>
        </div>
      )}

      <ul className="list-disc">
        {cert.factoids.map((factoid, idx) => {
          return (
            <li key={`factoid-${idx}`} className="list-inside">
              {factoid}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
