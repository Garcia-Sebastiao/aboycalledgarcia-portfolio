"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import { BlurShape } from "@/assets/common/blur-shape";

import { AngularIcon } from "@/assets/icons/angular-icon";
import { DockerIcon } from "@/assets/icons/docker-icon";
import { GraphQlIcon } from "@/assets/icons/graphql-icon";
import { NextIcon } from "@/assets/icons/netx-icon";
import { NodeIcon } from "@/assets/icons/node-icon";
import { ReactIcon } from "@/assets/icons/react-icon";
import { TailwindIcon } from "@/assets/icons/tailwind-icon";
import { TypescriptIcon } from "@/assets/icons/typescript-icon";
import { VueIcon } from "@/assets/icons/vue-icon";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const stacks = [
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  AngularIcon,
  VueIcon,
  TypescriptIcon,
  NextIcon,
  GraphQlIcon,
  DockerIcon,
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });

        /**
         * INITIAL STATES
         */
        gsap.set(titleRef.current, { opacity: 0, y: 20 });
        gsap.set(textRef.current, { opacity: 0, y: 20 });
        gsap.set(".stack-item", { opacity: 0, scale: 0.6, y: 20 });

        /**
         * --------------------------------------------------------
         * TITLE REVEAL (NEW - BLUR + SMOOTH)
         * --------------------------------------------------------
         */

        tl.fromTo(
          [titleLine1Ref.current, titleLine2Ref.current],
          {
            opacity: 0,
            y: 24,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.12,
          },
        );

        /**
         * PARAGRAPH REVEAL
         */
        tl.to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        );

        /**
         * ICONS STAGGER REVEAL
         */
        tl.to(
          ".stack-item",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.8)",
          },
          "-=0.4",
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full relative px-4 container mx-auto items-center flex flex-col gap-y-12 mt-24 lg:mt-42.5"
    >
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-2xl lg:text-[40px] font-extrabold text-white max-w-md text-center">
          <span ref={titleLine1Ref} className="inline-block">
            Checkout my
          </span>{" "}
          <span ref={titleLine2Ref} className="inline-block">
            tech stacks
          </span>
        </h2>

        <p ref={textRef} className="text-white/60 text-sm lg:text-base text-center max-w-md">
          Checkout the main stacks i normally use to develop every project i
          work on.
        </p>
      </div>

      <div ref={iconsRef} className="grid grid-cols-3 lg:flex gap-6 lg:gap-8 items-center">
        {stacks.map((Icon, index) => (
          <div
            key={index}
            className="stack-item w-20 border border-white/30 h-20 rounded-xl bg-white/5 flex items-center justify-center"
          >
            {Icon}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BlurShape />
      </div>
    </div>
  );
}
