"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        /**
         * INITIAL STATES
         */
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 30,
          filter: "blur(14px)",
        });

        gsap.set(textRef.current, {
          opacity: 0,
          y: 18,
          filter: "blur(8px)",
        });

        gsap.set(buttonRef.current, {
          opacity: 0,
          scale: 0.85,
        });

        gsap.set([".contact-img-left", ".contact-img-right"], {
          opacity: 0,
          x: (i) => (i === 0 ? -80 : 80),
          filter: "blur(12px)",
          scale: 0.95,
        });

        /**
         * BACK IMAGES (AMBIENT ENTRY)
         */
        tl.to(
          ".contact-img-left",
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0,
        );

        tl.to(
          ".contact-img-right",
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0,
        );

        /**
         * TITLE (HERO BLUR REVEAL STYLE)
         */
        tl.to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.6",
        );

        /**
         * TEXT
         */
        tl.to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8",
        );

        /**
         * BUTTON (POP FEEL)
         */
        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.6",
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="flex w-full mt-60 relative items-center justify-center"
    >
      <img
        src="/images/work1.png"
        alt="Work"
        className="contact-img-left absolute left-0 w-1/4"
      />

      <img
        src="/images/work2.png"
        alt="Work"
        className="contact-img-right absolute right-0 w-1/4"
      />

      <div className="flex flex-col items-center gap-y-6">
        <h2
          ref={titleRef}
          className="text-5xl text-white leading-16 font-extrabold max-w-198.5 text-center"
        >
          LETS CONNECT AND SHARE IDEAS.
        </h2>

        <p
          ref={textRef}
          className="text-white/60 text-center"
        >
          You can also reach me in any of my social medias, and lets talk.
        </p>

        <Button
          ref={buttonRef}
          variant="default"
          className="bg-white text-background font-semibold py-2.5 px-12"
        >
          Lets talk
        </Button>
      </div>
    </div>
  );
}