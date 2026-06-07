"use client";

import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";

type Props = {
  title: string;
};

export function ProjectItem({ title }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="project-item flex flex-col gap-y-4 min-w-75 will-change-transform"
    >
      
      <div className="w-full h-50 rounded-2xl bg-[#181818]" />

      <div className="flex items-start justify-between">
        <h5 className="text-white font-bold text-sm lg:text-xl leading-6 max-w-67.5">
          {title}
        </h5>

        <ChevronRight className="size-5 text-white" />
      </div>
    </div>
  );
}