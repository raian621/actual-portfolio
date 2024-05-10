import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faKaggle } from "@fortawesome/free-brands-svg-icons/faKaggle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  SizeProp,
  config,
} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUp,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGolang,
  faJava,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

type IconProps = {
  size: SizeProp;
  color?: string;
};

function FaIcon({
  icon,
  size,
  color,
}: {
  icon: IconDefinition;
  size: SizeProp;
  color?: string;
}) {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
}

export const ExternalLinkIcon = (props: IconProps) =>
  FaIcon({ icon: faUpRightFromSquare, ...props });

export const GitHubIcon = (props: IconProps) =>
  FaIcon({ icon: faGithub, ...props });

export const GolangIcon = (props: IconProps) =>
  FaIcon({ icon: faGolang, ...props });

export const JavaIcon = (props: IconProps) =>
  FaIcon({ icon: faJava, ...props });

export const JavaScriptIcon = (props: IconProps) =>
  FaIcon({ icon: faJs, ...props });

export const PythonIcon = (props: IconProps) =>
  FaIcon({ icon: faPython, ...props });

export const KaggleIcon = (props: IconProps) =>
  FaIcon({ icon: faKaggle, ...props });

export const LinkedInIcon = (props: IconProps) =>
  FaIcon({ icon: faLinkedin, ...props });

export const ReactIcon = (props: IconProps) =>
  FaIcon({ icon: faReact, ...props });

export const TypeScriptIcon = (props: IconProps) =>
  FaIcon({ icon: faJs, ...props });

export const UpArrowIcon = (props: IconProps) =>
  FaIcon({ icon: faArrowUp, ...props });
