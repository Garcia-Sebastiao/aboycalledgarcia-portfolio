"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import { experiences } from "../data";
import { MobileExperienceItem } from "./mobile-experience-item";
import { useTranslations } from "next-intl";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);

export function MobileTimeline() {
  const translate = useTranslations("home");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "power3.out",
        duration: 0.8,
      });

      gsap.fromTo(
        ".mobile-timeline",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      ScrollTrigger.batch(".mobile-experience-item", {
        start: "top 85%",
        once: true,

        onEnter: (batch) => {
          batch.forEach((item) => {
            const nodePath =
              item.querySelector<SVGPathElement>(".exp-node-path");
            const nodeCircle = item.querySelector<SVGCircleElement>("circle");
            const header = item.querySelector<HTMLElement>(
              ".mobile-experience-header img",
            );
            const content = item.querySelector<HTMLElement>(
              ".mobile-experience-content",
            );

            if (!nodePath || !nodeCircle || !header || !content) return;

            const length = nodePath.getTotalLength();

            gsap.set(nodePath, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });

            gsap.set(nodeCircle, {
              scale: 0,
              opacity: 0,
              transformOrigin: "center center",
            });

            gsap.set(header, {
              opacity: 0,
              x: -12,
              scale: 0.92,
              filter: "blur(10px)",
            });

            gsap.set(content, {
              opacity: 0,
              y: 32,
              filter: "blur(10px)",
            });

            /**
             * 🔥 SEQUÊNCIA ORIGINAL RESTAURADA
             */
            const tl = gsap.timeline();

            tl.to(nodePath, {
              strokeDashoffset: 0,
              duration: 0.7,
              ease: "power3.out",
            });

            tl.to(
              nodeCircle,
              {
                scale: 1,
                opacity: 1,
                duration: 0.35,
                ease: "back.out(2.5)",
              },
              "-=0.2",
            );

            tl.to(
              header,
              {
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.7,
                ease: "power4.out",
              },
              "-=0.15",
            );

            tl.to(
              content,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power4.out",
              },
              "-=0.35",
            );
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-start w-full">
      <div className="flex items-center">
        <div className="career-start-circle w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-black" />
        </div>

        <div className="career-start-line w-14 h-px bg-white/20" />

        <div className="career-badge px-6 py-2 rounded-2xl bg-white font-bold">
          My career
        </div>
      </div>

      <div className="flex gap-x-4 relative pl-4 -mt-4">
        <div className="mobile-timeline min-h-14 w-px bg-white/20" />

        <div className="bg-white w-6 h-6 left-1 rounded-full flex items-center justify-center absolute bottom-0">
          <div className="w-3 h-3 rounded-full bg-black" />
        </div>

        <div className="flex pb-18 flex-col gap-y-12 pt-12">
          {experiences.map((exp) => (
            <MobileExperienceItem  description={
                translate(
                  `experience.experiences.${exp.id}.description`,
                ) as string
              } key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
