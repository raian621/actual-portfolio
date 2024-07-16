import { SquareArrowOutUpRight } from "lucide-react";

export type CertificationInfo = {
  name: string;
  org: string;
  issued: string;
  expires?: string;
  link?: string;
  factoids: string[];
};

export default function Certifications() {
  const certs: CertificationInfo[] = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      org: "Amazon Web Services",
      issued: "July 2024",
      expires: "July 2027",
      link: "https://www.credly.com/badges/21975415-1c7a-44a4-aa34-4d2beffc39e1/",
      factoids: [
        "Gained a comprehensive understanding of AWS services and technologies",
        "Demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements",
        "Learned how to design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant",
      ],
    },
    {
      name: "IBM DevOps and Software Engineering Specialization",
      org: "Coursera",
      issued: "July 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/TP58KH6HB5C5",
      factoids: [
        "Developed a RESTful microservice for managing user accounts using \
        Flask and PostgreSQL",
        "Created CI/CD pipelines using GitHub Actions and Tekton",
        "Incorporated static analysis tools and automated testing into CI/CD \
        pipelines",
        "Learned about the software development life cycle, Test Driven \
        Development, Behavior Driven Development, and other DevOps \
        methodologies",
      ],
    },
    {
      name: "IBM Full Stack Software Developer",
      org: "Coursera",
      issued: "March 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/VFK52PHX2CJU",
      factoids: [
        "Developed a full stack application for a mock car dealership",
        "Utilized IBM Cloud Technologies like IBM Cloud Functions, IBM \
        Cloudant NoSQL database, and IBM Watson's Natural Language \
        Understanding",
        "Containerized the application using Docker and deployed it to an \
        OpenShift Kubernetes service on IBM Cloud",
      ],
    },
  ];
  return (
    <div className="space-y-4 text-left py-2">
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
          {cert.expires ? `${cert.issued} - ${cert.expires}` : `${cert.issued}`}
        </span>
      </div>
      {cert.link ? (
        <a
          href={cert.link}
          target="_blank"
          className="flex gap-2 items-center dark:hover:text-slate-300 hover:text-slate-500"
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
