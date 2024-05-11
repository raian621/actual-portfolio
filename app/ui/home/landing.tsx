import Link from "next/link";
import styles from "./home.module.css";
import { faKaggle } from "@fortawesome/free-brands-svg-icons/faKaggle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GitHubIcon, KaggleIcon, LinkedInIcon } from "@/app/icons";
import { notoSansMono } from "@/app/fonts";
config.autoAddCss = false;

export default function Landing() {
  return (
    <section id="landing">
      <div className={styles.title}>
        <h2 className={`${styles.nameTitle} ${notoSansMono.className}`}>
          Ryan Bell
        </h2>
        <h2 className={`${styles.nameSubtitle} ${notoSansMono.className}`}>
          Software Engineer
        </h2>
      </div>
      <ul className={styles.landingPageLinks}>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul className={styles.landingPageLinks}>
        <li>
          <a href="https://github.com/raian621" target="_blank">
            <GitHubIcon size="2x" color="black" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryan-z-bell/" target="_blank">
            <LinkedInIcon size="2x" color="#0a66c2" />
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/ryanbell62101" target="_blank">
            <KaggleIcon size="2x" color="#20beff" />
          </a>
        </li>
      </ul>
    </section>
  );
}
