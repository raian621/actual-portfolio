"use client";

import { UpArrowIcon } from "@/app/icons";
import styles from "./topScrollButton.module.css";
import { useEffect, useRef, useState } from "react";

export default function TopScrollButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    if (ref.current === null || ref.current.parentElement === null) {
      return;
    }

    ref.current.parentElement.scrollTo(0, 0);
  };

  useEffect(() => {
    if (ref.current === null || ref.current.parentElement === null) {
      return;
    }

    // this feels wrong, but whatever
    ref.current.parentElement.onscroll = (_e: Event) => {
      if (ref.current?.parentElement?.scrollTop === 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
  }, []);

  return (
    <button
      className={`${
        styles.topScrollButton + " " + (visible ? "" : styles.hidden)
      }`}
      ref={ref}
      onClick={() => handleClick()}
      onScroll={() => console.log("asdjkfhsdjkfh")}
    >
      <UpArrowIcon size="lg" color="white" />
    </button>
  );
}
