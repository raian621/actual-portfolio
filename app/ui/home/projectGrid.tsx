import { ReactNode } from "react";
import styles from "./projects.module.css";

export default function ProjectGrid({ children }: { children: ReactNode }) {
  return <div className={styles.projectGrid}>{children}</div>;
}
