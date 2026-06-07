"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CareerBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      badgeRef.current,
      {
        opacity: 0,
        scale: 0.7,
        y: 24,
        rotate: -4,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "back.out(2.4)",
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
        },
      },
    );
  });

  return (
    <div
      ref={badgeRef}
      className="px-8 py-2.5 h-12 bg-white rounded-2xl font-bold text-2xl w-fit -ml-4 -mt-8"
    >
      My Career
    </div>
  );
}