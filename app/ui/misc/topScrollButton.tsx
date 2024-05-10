import { UpArrowIcon } from "@/app/icons";
import styles from "./topScrollButton.module.css";

export default function TopScrollButton() {
  return (
    <button className={styles.topScrollButton}>
      <UpArrowIcon size="lg" color="white" />
    </button>
  );
}
