"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Marquee } from "@/components/ui/marquee";
import { projects } from "./projects.data";
import { ProjectItem } from "./project-item";

gsap.registerPlugin(ScrollTrigger);

export function ProjectMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".project-item");

        gsap.set(items, {
          opacity: 0,
          y: 24,
          scale: 0.96,
          filter: "blur(10px)",
          willChange: "transform, opacity",
        });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="w-full overflow-hidden relative">
      
      <Marquee pauseOnHover className="[--duration:40s]">
        {projects.map((project) => (
          <ProjectItem key={project.id} title={project.title} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 -left-32 w-1/4 bg-linear-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 -right-32 w-1/4 bg-linear-to-l from-background" />
    </div>
  );
}