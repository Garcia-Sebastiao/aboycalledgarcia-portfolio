"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GeneralLines } from "./lines/general-lines";
import { CareerBadge } from "./career-badge";
import { MainLine } from "./lines/main-line";
import { ExperienceCard } from "./experiece-card";
import { experiences } from "../data";

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const generalLinesRef = useRef<SVGSVGElement>(null);
  const mainLineRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!timelineRef.current) return;

      const generalPaths = gsap.utils.toArray<SVGPathElement>(
        generalLinesRef.current?.querySelectorAll(".general-path") ?? [],
      );

      const generalCircles = gsap.utils.toArray<SVGCircleElement>(
        generalLinesRef.current?.querySelectorAll(".general-circle") ?? [],
      );

      generalPaths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(generalCircles, {
        scale: 0,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(generalPaths, {
        strokeDashoffset: 0,
        duration: 1.8,
        stagger: 0.08,
        ease: "power2.out",
      });

      tl.to(
        generalCircles,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "back.out(2)",
        },
        "-=1.2",
      );

      const mainPath =
        mainLineRef.current?.querySelector<SVGPathElement>(".main-line-path");

      const mainCircle =
        mainLineRef.current?.querySelector<SVGCircleElement>(
          ".main-line-circle",
        );

      if (mainPath) {
        const length = mainPath.getTotalLength();

        gsap.set(mainPath, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(mainPath, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        });
      }

      if (mainCircle) {
        gsap.set(mainCircle, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.to(mainCircle, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "bottom 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: timelineRef },
  );

  return (
    <div
      ref={timelineRef}
      className="relative left-4 flex flex-col items-center mt-12"
    >
      <GeneralLines svgRef={generalLinesRef} />

      <CareerBadge />

      <div className="relative flex items-center justify-center -ml-5 w-226.5">
        <div className="relative z-1">
          <MainLine svgRef={mainLineRef} />
        </div>

        <div className="absolute flex flex-col gap-y-10 -left-2 top-24 items-center">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
