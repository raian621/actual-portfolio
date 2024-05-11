import { MutableRefObject, createContext, useRef } from "react";

const ScrollContext = createContext<
  MutableRefObject<HTMLElement | undefined> | undefined
>(undefined);

export default ScrollContext;
