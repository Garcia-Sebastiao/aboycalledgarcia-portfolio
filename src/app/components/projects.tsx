"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Marquee } from "@/components/ui/marquee";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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
         * INITIAL STATE
         */
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 24,
          filter: "blur(12px)",
        });

        gsap.set(textRef.current, {
          opacity: 0,
          y: 18,
          filter: "blur(8px)",
        });

        gsap.set(".project-item", {
          opacity: 0,
          y: 20,
          scale: 0.96,
          filter: "blur(8px)",
        });

        /**
         * TITLE REVEAL (BLUR STYLE)
         */
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
        });

        /**
         * PARAGRAPH
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
          "-=0.7",
        );

        /**
         * PROJECTS STAGGER
         */
        tl.to(
          ".project-item",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.6)",
          },
          "-=0.5",
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full relative items-center flex flex-col gap-y-12"
    >
      <div className="flex flex-col items-center gap-y-6">
        <h2
          ref={titleRef}
          className="text-[40px] font-extrabold text-white max-w-2xl text-center"
        >
          Check out some projects i worked on.
        </h2>

        <p
          ref={textRef}
          className="text-white/60 max-w-191 leading-7 text-center"
        >
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </p>
      </div>

      <div className="w-full overflow-hidden relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={index}
              className="project-item flex flex-col gap-y-6 min-w-75"
            >
              <div className="w-full h-50 rounded-2xl bg-[#181818]" />

              <div className="flex items-start">
                <h5 className="text-white max-w-67.5 font-bold text-xl">
                  Aura Ai - Mental health assistant
                </h5>
                <ChevronRight className="size-5 text-white" />
              </div>
            </div>
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 -left-32 w-1/4 bg-linear-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 -right-32 w-1/4 bg-linear-to-l" />
      </div>
    </div>
  );
}
