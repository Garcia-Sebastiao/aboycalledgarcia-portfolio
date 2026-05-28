/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";

import { Header } from "@/components/layout/header/header";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const avatarRef = useRef<HTMLDivElement>(null);

  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const leftBracketRef = useRef<HTMLSpanElement>(null);
  const rightBracketRef = useRef<HTMLSpanElement>(null);
  const subInfoRef = useRef<HTMLDivElement>(null);
  const subInfotextRef = useRef<HTMLSpanElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !title1Ref.current ||
        !title2Ref.current ||
        !avatarRef.current ||
        !bottomContentRef.current ||
        !subInfotextRef.current
      )
        return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /**
       * INITIAL STATES
       * ----------------------------------------------------------------
       */

      gsap.set(avatarRef.current, {
        scale: 0.4,
        opacity: 0,
        rotate: -12,
        filter: "blur(12px)",
      });

      gsap.set(bottomContentRef.current, {
        y: 80,
        opacity: 0,
      });

      gsap.set(
        [leftBracketRef.current, rightBracketRef.current, subInfoRef.current],
        {
          opacity: 0,
          y: 40,
        },
      );

      /**
       * AVATAR SPLASH / POP-IN
       * ----------------------------------------------------------------
       */

      tl.to(avatarRef.current, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "back.out(2.4)",
      });

      /**
       * BRACKETS ENTRANCE
       * ----------------------------------------------------------------
       */

      tl.to(
        [leftBracketRef.current, rightBracketRef.current, subInfoRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.65",
      );

      /**
       * TEXT SHUFFLE / SCRAMBLE
       * ----------------------------------------------------------------
       * Premium cinematic loading feeling
       */

      tl.add("textReveal");

      tl.fromTo(
        title1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          scrambleText: {
            text: "FRONTEND",
            chars: "upperCase",
            speed: 0.35,
            revealDelay: 0,
          },
          ease: "none",
        },
        "textReveal",
      );

      tl.fromTo(
        title2Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          scrambleText: {
            text: "DEVELOPER",
            chars: "upperCase",
            speed: 0.35,
            revealDelay: 0,
          },
          ease: "none",
        },
        "textReveal",
      );

      tl.fromTo(
        subInfotextRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          scrambleText: {
            text: "Garcia Sebastião - Creative Web Developer",
            chars: "upperCase",
            speed: 0.35,
            revealDelay: 0,
          },
          ease: "none",
        },
        "textReveal+=0.1",
      );

      /**
       * SUBTLE TITLE WRAPPER REVEAL
       * ----------------------------------------------------------------
       */

      tl.fromTo(
        titleWrapperRef.current,
        {
          y: 30,
        },
        {
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<",
      );

      /**
       * BOTTOM CONTENT REVEAL
       * ----------------------------------------------------------------
       */

      tl.to(
        bottomContentRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col border-b border-b-white/20 min-h-dvh overflow-hidden"
    >
      <div className="absolute inset-0 top-0 w-full h-full min-h-dvh left-0">
        <img
          src="/images/hero-pattern.png"
          className="w-full h-full object-cover"
          alt="Hero Pattern"
        />
      </div>

      <div className="w-full absolute top-0 left-0 h-full grid grid-cols-12">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full h-full border-l border-white/5" />
        ))}
      </div>

      <div className="w-full h-full flex flex-col pb-12 relative z-10">
        <Header />

        <div className="flex mt-20.75 gap-y-12 flex-col items-center">
          <div
            ref={avatarRef}
            className="w-32 lg:w-45 h-32 mt-8 lg:mt-0 lg:h-45 flex will-change-transform"
          >
            <img
              src="/images/avatar.png"
              className="w-full h-full"
              alt="Avatar"
            />
          </div>

          <div
            ref={titleWrapperRef}
            className="flex items-center gap-x-4 lg:gap-x-32"
          >
            <span
              ref={leftBracketRef}
              className="text-5xl lg:text-9xl lg:left-12 relative text-white font-bold"
            >
              {"<"}
            </span>

            <div className="flex flex-col text-2xl lg:text-7xl font-extrabold leading-8 lg:leading-24 text-white max-w-4xl text-center items-center">
              <span ref={title1Ref}>FRONTEND</span>
              <span ref={title2Ref}>DEVELOPER</span>
            </div>

            <span
              ref={rightBracketRef}
              className="text-5xl lg:text-9xl lg:right-12 relative text-white font-bold"
            >
              {">"}
            </span>
          </div>

          <div
            ref={subInfoRef}
            className="flex items-center -mt-9 lg:mt-0 gap-x-12"
          >
            <div className="hidden lg:flex flex-1 min-w-65 h-px bg-white/80" />

            <span
              ref={subInfotextRef}
              className="uppercase text-xs text-center leading-5 lg:leading-normal px-6 lg:text-base font-bold lg:font-extrabold text-white/80"
            >
              Garcia Sebastião - Creative Web Developer
            </span>

            <div className="hidden lg:flex flex-1 min-w-65 h-px bg-white/80" />
          </div>
        </div>

        <div
          ref={bottomContentRef}
          className="w-full lg:px-20 container mt-40 flex-col lg:flex-row lg:mt-32 self-end mx-auto flex items-center lg:justify-between"
        >
          <Button
            className="font-bold lg:font-extrabold text-white/80"
            variant="ghost"
          >
            EXPLORE TO KNOW MORE
            <ChevronDown className="hidden lg:flex size-6" />
          </Button>

          <div className="flex lg:hidden flex-col items-center">
            <div className="w-px bg-white/40 h-24 mt-6" />
            <ChevronDown className="size-6 text-white/40" />
          </div>

          <span className="text-white/80 hidden lg:flex leading-6 text-justify max-w-xs">
            With over 5 years of experience, I specialize in developing scalable
            web and mobile applications with a strong focus on performance and
            user experience.
          </span>
        </div>
      </div>
    </div>
  );
}
