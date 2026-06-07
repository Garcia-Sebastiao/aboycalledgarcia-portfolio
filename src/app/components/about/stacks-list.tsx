"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { AngularIcon } from "@/assets/icons/angular-icon";
import { DockerIcon } from "@/assets/icons/docker-icon";
import { GraphQlIcon } from "@/assets/icons/graphql-icon";
import { NextIcon } from "@/assets/icons/netx-icon";
import { NodeIcon } from "@/assets/icons/node-icon";
import { ReactIcon } from "@/assets/icons/react-icon";
import { TailwindIcon } from "@/assets/icons/tailwind-icon";
import { TypescriptIcon } from "@/assets/icons/typescript-icon";
import { VueIcon } from "@/assets/icons/vue-icon";

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

export function StacksList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stack-item",
        {
          opacity: 0,
          scale: 0.6,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 md:grid-cols-6 place-items-center place-content-center lg:flex gap-6 lg:gap-8 items-center"
    >
      {stacks.map((Icon, index) => (
        <div
          key={index}
          className="stack-item w-16 md:w-20 h-16 md:h-20 rounded-xl border border-white/30 bg-white/5 flex items-center justify-center p-3 lg:p-0"
        >
          {Icon}
        </div>
      ))}
    </div>
  );
}