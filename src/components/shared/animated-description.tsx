"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedDescription({ children, className }: Props) {
  const textRef = useRef<HTMLParagraphElement>(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     textRef.current,
  //     {
  //       opacity: 0,
  //       y: 20,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "top 85%",
  //       },
  //     },
  //   );
  // });

  return (
    <p
      ref={textRef}
      className={cn(
        "text-white/60 leading-12 text-sm lg:text-base text-center max-w-md",
        className,
      )}
    >
      {children}
    </p>
  );
}
