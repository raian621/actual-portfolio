export type EducationInfo = {
  name: string;
  type: string;
  gradDate: string;
  factoids: string[];
};

export default function Education({ className }: { className?: string }) {
  const education = [
    {
      name: "University of North Texas",
      type: "BS in Computer Science",
      gradDate: "May 2024",
      factoids: ["Graduated summa cum laude (4.0 GPA)"],
    },
    {
      name: "Collin County Community College",
      type: "AS in Computer Science",
      gradDate: "May 2022",
      factoids: ["Graduated magna cum laude (3.95 GPA)"],
    },
  ];

  return (
    <div className={`${className} space-y-4 text-left`}>
      <h1 className="text-2xl">Education</h1>
      {education.map((edu, idx) => {
        return <EducationSection education={edu} key={`edu-${idx}`} />;
      })}
    </div>
  );
}

function EducationSection({ education }: { education: EducationInfo }) {
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl">{education.name}</h2>
        <span className="whitespace-nowrap">{education.gradDate}</span>
      </div>
      <span className="italic">{education.type}</span>
      <ul className="list-disc">
        {education.factoids.map((factoid, idx) => {
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
