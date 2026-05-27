"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlareHover } from "@/components/ui/glare-hover";
import { Marquee } from "@/components/ui/marquee";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
         * INITIAL STATE (TITLE)
         */
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 24,
          filter: "blur(12px)",
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
          People who trusted on my work.
        </h2>
      </div>

      <div className="w-full overflow-hidden relative">
        <Marquee reverse pauseOnHover className="[--duration:80s]">
          {Array.from({ length: 14 }).map((_, index) => (
            <GlareHover
              key={index}
              className="rounded-2xl hover:scale-105 mr-2 transition-transform duration-200"
              duration={600}
            >
              <div className="flex p-5 rounded-2xl bg-[#181818] flex-col gap-y-4 min-w-90 max-w-90">
                <div className="flex items-center gap-x-2.5">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold">
                      Andrey Morgan
                    </h3>
                    <span className="text-xs text-white/50 font-semibold">
                      Senior Software Engineer at Spotify
                    </span>
                  </div>
                </div>

                <p className="text-white font-semibold text-sm text-left leading-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </GlareHover>
          ))}
        </Marquee>

        <Marquee pauseOnHover className="[--duration:80s]">
          {Array.from({ length: 14 }).map((_, index) => (
            <GlareHover
              key={index}
              className="rounded-2xl hover:scale-105 mr-2 transition-transform duration-200"
              duration={600}
            >
              <div className="flex p-5 rounded-2xl bg-[#181818] flex-col gap-y-4 min-w-90 max-w-90">
                <div className="flex items-center gap-x-2.5">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold">
                      Andrey Morgan
                    </h3>
                    <span className="text-xs text-white/50 font-semibold">
                      Senior Software Engineer at Spotify
                    </span>
                  </div>
                </div>

                <p className="text-white font-semibold text-sm text-left leading-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </GlareHover>
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 -left-32 w-1/4 bg-linear-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 -right-32 w-1/4 bg-linear-to-l" />
      </div>
    </div>
  );
}