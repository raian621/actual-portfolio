import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faKaggle } from "@fortawesome/free-brands-svg-icons/faKaggle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { SizeProp, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUp,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export function GitHubIcon({
  size,
  color,
}: {
  size: SizeProp;
  color?: string;
}) {
  return <FontAwesomeIcon icon={faGithub} size={size} color={color} />;
}

export function KaggleIcon({
  size,
  color,
}: {
  size: SizeProp;
  color?: string;
}) {
  return <FontAwesomeIcon icon={faKaggle} size={size} color={color} />;
}

export function LinkedInIcon({
  size,
  color,
}: {
  size: SizeProp;
  color?: string;
}) {
  return <FontAwesomeIcon icon={faLinkedin} size={size} color={color} />;
}

export function ExternalLinkIcon({
  size,
  color,
}: {
  size: SizeProp;
  color?: string;
}) {
  return (
    <FontAwesomeIcon icon={faUpRightFromSquare} size={size} color={color} />
  );
}

export function UpArrowIcon({
  size,
  color,
}: {
  size: SizeProp;
  color?: string;
}) {
  return <FontAwesomeIcon icon={faArrowUp} size={size} color={color} />;
}
