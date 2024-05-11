import { Education, Landing, Projects, Skills } from "./ui/home";
import styles from "./page.module.css";
import TopScrollButton from "./ui/misc/topScrollButton";
import { useRef } from "react";

export default function Page() {
  return (
    <div className={styles.home}>
      <TopScrollButton />
      <Landing />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}
