/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ProjectProps } from "./projects.data";

export function ProjectItem({ project }: { project: ProjectProps }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLButtonElement>(null);

  const onEnter = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(glowRef.current, {
      opacity: 1,
      scale: 1.15,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 0.9,
      ease: "power2.out",
    });
    gsap.to(descRef.current, {
      opacity: 1,
      height: "auto",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(linkRef.current, {
      rotate: 45,
      backgroundColor: "rgba(255,255,255,0.12)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(lineRef.current, {
      strokeDashoffset: 240,
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(descRef.current, {
      opacity: 0,
      height: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(linkRef.current, {
      rotate: 0,
      backgroundColor: "rgba(255,255,255,0.05)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="project-item group relative flex flex-col gap-y-4 min-w-75 max-w-90 will-change-transform"
    >
      <div className="relative w-full h-50 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden">
        <img src={project.img} className="w-full h-full object-cover" alt={project.title} />

        <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest text-white/40">
          N.{String(project.id).padStart(2, "0")}
        </span>

        <button
          ref={linkRef}
          className="absolute bottom-4 right-4 flex items-center justify-center size-8 rounded-full bg-black border border-white/10 text-white/70"
        >
          <ArrowUpRight className="size-4" />
        </button>
      </div>

      <h5 className="text-white font-bold text-sm lg:text-xl leading-6">
        {project.title}
      </h5>

      <div className="flex flex-wrap gap-1.5">
        {project.stacks.map((stack: string) => (
          <span
            key={stack}
            className="px-2 py-0.5 rounded-full border border-white/10 bg-white/3 text-[10px] font-mono uppercase tracking-wide text-white/50"
          >
            {stack}
          </span>
        ))}
      </div>

      {/* <p
        ref={descRef}
        className="text-white/50 text-xs leading-5 overflow-hidden opacity-0 h-0"
      >
        {project.description}
      </p> */}
    </a>
  );
}
