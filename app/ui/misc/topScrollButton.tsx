import { UpArrowIcon } from "@/app/icons";
import styles from "./topScrollButton.module.css";

export default function TopScrollButton() {
  return (
    <a className={styles.topScrollButton} href="#top">
      <UpArrowIcon size="lg" color="black" />
    </a>
  );
}
