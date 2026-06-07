"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import { Header } from "@/components/layout/header/header";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrambleTextPlugin);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        const root = containerRef.current as HTMLDivElement;

        const avatar = root.querySelector(".hero-avatar");
        const title1 = root.querySelector(".hero-title-1");
        const title2 = root.querySelector(".hero-title-2");
        const subText = root.querySelector(".hero-subtext");
        const brackets = root.querySelectorAll(".hero-bracket");
        const bottom = root.querySelector(".hero-bottom");

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        /**
         * INITIAL STATE (centralizado)
         */
        tl.set(avatar, {
          scale: 0.5,
          opacity: 0,
          rotate: -10,
          filter: "blur(10px)",
        })
          .set(brackets, {
            opacity: 0,
            y: 40,
          })
          .set(subText, {
            opacity: 0,
            y: 30,
          })
          .set(bottom, {
            opacity: 0,
            y: 60,
          });

        /**
         * AVATAR
         */
        tl.to(avatar, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "back.out(2.2)",
        });

        /**
         * BRACKETS + TITLE (stagger estrutural)
         */
        tl.to(
          brackets,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.6",
        );

        /**
         * SCRAMBLE TEXT (controlado e leve)
         */
        tl.to(
          title1,
          {
            scrambleText: {
              text: "FRONTEND",
              chars: "upperCase",
              speed: 0.3,
            },
            duration: 1.2,
          },
          "-=0.4",
        );

        tl.to(
          title2,
          {
            scrambleText: {
              text: "DEVELOPER",
              chars: "upperCase",
              speed: 0.3,
            },
            duration: 1.2,
          },
          "-=1",
        );

        /**
         * SUBTEXT
         */
        tl.to(
          subText,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.6",
        );

        /**
         * BOTTOM CTA
         */
        tl.to(
          bottom,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4",
        );
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col border-b border-b-white/20 min-h-dvh overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-pattern.png"
          className="w-full h-full object-cover"
          alt="Hero Pattern"
        />
      </div>

      <div className="absolute inset-0 grid grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-white/5" />
        ))}
      </div>

      <div className="relative z-10 flex flex-col pb-12">
        <Header />
        <div className="flex mt-20.75 flex-col items-center gap-y-12">
          <div className="hero-avatar w-32 md:w-40 lg:w-45 will-change-transform">
            <img src="/images/avatar.png" alt="Avatar" />
          </div>

          <div className="flex items-center gap-x-4 lg:gap-x-32">
            <span className="hero-bracket text-5xl lg:text-9xl text-white font-bold">
              {"<"}
            </span>

            <div className="flex flex-col text-2xl md:text-5xl lg:text-7xl font-extrabold text-white text-center">
              <span className="hero-title-1">FRONTEND</span>
              <span className="hero-title-2">DEVELOPER</span>
            </div>

            <span className="hero-bracket text-5xl lg:text-9xl text-white font-bold">
              {">"}
            </span>
          </div>

          <div className="hero-subtext flex items-center gap-x-12">
            <span className="uppercase text-xs md:text-base font-bold text-white/80 text-center">
              Garcia Sebastião - Creative Web Developer
            </span>
          </div>
        </div>

        <div className="hero-bottom w-full px-4 lg:px-20 container mt-40 flex flex-col lg:flex-row lg:justify-between mx-auto items-center">
          <Button className="font-bold text-white/80" variant="ghost">
            EXPLORE TO KNOW MORE
            <ChevronDown className="hidden lg:flex size-6" />
          </Button>

          <span className="hidden lg:flex text-white/80 max-w-xs">
            With over 5 years of experience, I specialize in developing scalable
            web and mobile applications with a strong focus on performance.
          </span>
        </div>
      </div>
    </div>
  );
}
