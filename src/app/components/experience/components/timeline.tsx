"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GeneralLines } from "./lines/general-lines";
import { CareerBadge } from "./career-badge";
import { ExperienceCard } from "./experiece-card";
import { experiences } from "../data";
import { useTranslations } from "next-intl";

export function Timeline() {
  const translate = useTranslations("home");
  const timelineRef = useRef<HTMLDivElement>(null);
  const mainLineDivRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const generalLinesRef = useRef<SVGSVGElement>(null);

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

      gsap.set(mainLineDivRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.to(mainLineDivRef.current, {
        scaleY: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      if (mainCircleRef.current) {
        gsap.set(mainCircleRef.current, {
          scale: 0,
          opacity: 0,
        });

        gsap.to(mainCircleRef.current, {
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

      <div className="relative flex items-center pb-56 justify-center -ml-5 w-226.5">
        <div className="absolute flex items-center flex-col top-0 h-full z-1">
          <div className="overflow-hidden h-full">
            <div
              ref={mainLineDivRef}
              className="w-0.5 h-full bg-white origin-top"
            />
          </div>

          <div ref={mainCircleRef} className="w-6 h-6 rounded-full bg-white" />
        </div>

        <div className=" flex flex-col gap-y-10 relative -left-2 top-24 items-center">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              description={
                translate(
                  `experience.experiences.${experience.id}.description`,
                ) as string
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
