import { Education, Landing, Projects, Skills } from "./ui/home";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.home}>
      <Landing />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}
