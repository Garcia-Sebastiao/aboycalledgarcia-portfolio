"use client";

import { useMediaQuery } from "usehooks-ts";
import { MobileExperience } from "./mobile-experience";
import { Experience } from "./experience";

export function MainExperience() {
  const isMobile = useMediaQuery("(max-width: 1025px)");
  return isMobile ? <MobileExperience /> : <Experience />;
}
