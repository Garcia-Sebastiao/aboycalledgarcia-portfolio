/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ExperienceNodeLeft, ExperienceNodeRight } from "./lines/node";
import { cn } from "@/lib/utils";

interface Props {
  company: string;
  role: string;
  period: string;
  logo: string;
  logoWidth: string;
  color: string;
  description: string;
  side: "left" | "right";
  className?: string;
}

export function ExperienceCard({
  company,
  role,
  period,
  logo,
  logoWidth,
  color,
  side,
  description,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const path = containerRef.current?.querySelector(".exp-node-path");

      const circle = containerRef.current?.querySelector(".exp-node-circle");

      const content = containerRef.current?.querySelector(
        ".experience-content",
      );

      const logoEl = containerRef.current?.querySelector(".experience-logo");

      if (!path || !circle || !content || !logoEl) return;

      const length = (path as SVGPathElement).getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      });

      tl.fromTo(
        path,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        circle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: "back.out(2.5)",
        },
        "-=0.45",
      );

      tl.fromTo(
        content,
        {
          opacity: 0,
          y: 48,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
        },
        "-=0.1",
      );

      tl.fromTo(
        logoEl,
        {
          opacity: 0,
          scale: 0.8,
          rotate: -8,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "back.out(1.8)",
        },
        "-=0.85",
      );
    },
    { scope: containerRef },
  );

  const isLeft = side === "left";

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-y-6 items-center ${
        !isLeft ? "relative left-27.5" : ""
      }`}
    >
      <div className={`relative ${isLeft ? "right-30" : "left-6"}`}>
        {isLeft ? (
          <ExperienceNodeLeft color={color} />
        ) : (
          <ExperienceNodeRight color={color} />
        )}
      </div>

      <div className="flex items-center gap-x-22">
        {isLeft ? (
          <>
            <ExperienceContent
              description={description}
              company={company}
              role={role}
              period={period}
              className={className}
            />

            <img
              src={logo}
              alt={company}
              className={`experience-logo ${logoWidth}`}
            />
          </>
        ) : (
          <>
            <img
              src={logo}
              alt={company}
              className={`experience-logo ${logoWidth}`}
            />

            <ExperienceContent
              description={description}
              className={className}
              company={company}
              role={role}
              period={period}
            />
          </>
        )}
      </div>
    </div>
  );
}

function ExperienceContent({
  company,
  role,
  period,
  description,
  className,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "experience-content relative flex flex-col gap-y-4",
        className,
      )}
    >
      <div>
        <h3 className="text-2xl font-bold min-w-104 text-white">
          {company} - {role}
        </h3>

        <span className="text-sm text-white font-semibold">{period}</span>
      </div>

      <span
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        className="text-white/60 text-sm max-w-102.25 leading-6"
      />
    </div>
  );
}
