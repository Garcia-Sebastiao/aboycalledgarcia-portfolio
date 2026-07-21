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
      if (!timelineRef.current || !generalLinesRef.current) return;

      const generalPaths = Array.from(
        generalLinesRef.current.querySelectorAll<SVGPathElement>(".general-path")
      );
      const generalCircles = Array.from(
        generalLinesRef.current.querySelectorAll<SVGCircleElement>(".general-circle")
      );

      generalPaths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(generalCircles, { scale: 0, opacity: 0 });
      gsap.set(mainLineDivRef.current, { scaleY: 0, transformOrigin: "top center" });

      if (mainCircleRef.current) {
        gsap.set(mainCircleRef.current, { scale: 0, opacity: 0 });
      }

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
      });

      mainTl
        .to(generalPaths, {
          strokeDashoffset: 0,
          duration: 1.2, // Reduzido de 1.8s para dar mais fluidez
          stagger: 0.05,
          ease: "power2.out",
        })
        .to(
          generalCircles,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .to(
          mainLineDivRef.current,
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        );

      if (mainCircleRef.current) {
        mainTl.to(
          mainCircleRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.3"
        );
      }
    },
    { scope: timelineRef }
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
              className="w-0.5 h-full bg-white origin-top will-change-transform"
            />
          </div>

          <div
            ref={mainCircleRef}
            className="w-6 h-6 rounded-full bg-white will-change-transform"
          />
        </div>

        <div className="flex flex-col gap-y-10 relative -left-2 top-24 items-center">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              description={
                translate(
                  `experience.experiences.${experience.id}.description`
                ) as string
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}