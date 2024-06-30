import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const languages = [
    "C/C++",
    "SQL",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Go",
    "Rust",
    "Java",
    "Python",
  ];
  const frameworks = [
    "Express.js",
    "WordPress",
    "FastAPI",
    "Flask",
    "Django",
    "Next.js",
  ];
  const tools = [
    "Git",
    "GitHub",
    "GitHub Actions",
    "GitLab",
    "Docker",
    "Google Cloud Platform (GCP)",
    "Amazon Web Services (AWS)",
    "Ansible",
    "Kubernetes",
  ];
  const libraries = [
    "React",
    "shadcn",
    "pandas",
    "NumPy",
    "Matplotlib",
    "sklearn",
    "PyTest",
    "Jest",
    "Material-UI",
    "Gin",
    "Echo",
  ];

  languages.sort();
  frameworks.sort();
  tools.sort();
  libraries.sort();

  return (
    <div className="text-left">
      <h2 className="text-2xl">Skills</h2>
      <h3>Languages</h3>
      <div className="my-2 flex flex-wrap gap-2">
        {languages.map((lang, idx) => {
          return (
            <Badge
              className="dark:light dark:text-white"
              variant="outline"
              key={`lang-${idx}`}
            >
              {lang}
            </Badge>
          );
        })}
      </div>
      <label>Frameworks</label>
      <div className="my-2 flex flex-wrap gap-2">
        {frameworks.map((framework, idx) => {
          return (
            <Badge
              className="dark:light dark:text-white"
              variant="outline"
              key={`framework-${idx}`}
            >
              {framework}
            </Badge>
          );
        })}
      </div>
      <label>Developer Tools</label>
      <div className="my-2 flex flex-wrap gap-2">
        {tools.map((tool, idx) => {
          return (
            <Badge
              className="dark:light dark:text-white"
              variant="outline"
              key={`dev-tools-${idx}`}
            >
              {tool}
            </Badge>
          );
        })}
      </div>
      <label>Libraries</label>
      <div className="my-2 flex flex-wrap gap-2">
        {libraries.map((lib, idx) => {
          return (
            <Badge
              className="dark:light dark:text-white"
              variant="outline"
              key={`lib-${idx}`}
            >
              {lib}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
