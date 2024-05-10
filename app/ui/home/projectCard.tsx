import styles from "./projects.module.css";
import { ExternalLinkIcon, GitHubIcon } from "@/app/icons";

export default function ProjectCard({
  title,
  projectUrl,
  sourceUrl,
  description,
  tech,
}: {
  title: string;
  projectUrl?: string;
  sourceUrl?: string;
  description: string;
  tech?: string[];
}) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <h3>{title}</h3>
        {projectUrl && (
          <a href={projectUrl} target="_blank">
            <ExternalLinkIcon size="1x" color="black" />
          </a>
        )}
        {sourceUrl && (
          <a href={sourceUrl} target="_blank">
            <GitHubIcon size="1x" color="black" />
          </a>
        )}
      </div>
      {tech && (
        <ul>
          {tech.map((val, key) => (
            <li key={key}>{val}</li>
          ))}
        </ul>
      )}
      <p>{description}</p>
    </article>
  );
}
