"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { MainLine } from "./lines/main-line";
import { ExperienceNodeSmall } from "./lines/node";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);

export function MobileExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

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

      tl.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      );

      const brandItems = gsap.utils.toArray<HTMLImageElement>(
        brandsRef.current?.querySelectorAll("img") || [],
      );

      gsap.set(brandItems, {
        opacity: 0,
        y: 20,
        scale: 0.92,
        filter: "blur(10px)",
      });

      tl.to(
        brandItems,
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.4",
      );

      /**
       * TOP NODE
       */

      gsap.set(".career-start-circle", {
        scale: 0,
        opacity: 0,
      });

      gsap.set(".career-start-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".career-badge", {
        opacity: 0,
        scale: 0.8,
        y: 16,
        filter: "blur(10px)",
      });

      /**
       * Circle
       */

      tl.to(
        ".career-start-circle",
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: "back.out(2.5)",
        },
        "-=0.4",
      );

      /**
       * Horizontal line
       */

      tl.to(
        ".career-start-line",
        {
          scaleX: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.15",
      );

      /**
       * Badge
       */

      tl.to(
        ".career-badge",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "back.out(1.8)",
        },
        "-=0.05",
      );

      /**
       * Timeline
       */

      tl.to(
        ".mobile-timeline",
        {
          scaleY: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.15",
      );

      const experienceItems = gsap.utils.toArray<HTMLElement>(
        ".mobile-experience-item",
      );

      experienceItems.forEach((item) => {
        const nodePath = item.querySelector<SVGPathElement>(".exp-node-path");

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

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        itemTl.to(nodePath, {
          strokeDashoffset: 0,
          duration: 0.7,
          ease: "power3.out",
        });

        itemTl.to(
          nodeCircle,
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(2.5)",
          },
          "-=0.2",
        );

        itemTl.to(
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

        itemTl.to(
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full relative px-4 container mx-auto mt-20 items-center flex flex-col gap-y-20"
    >
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-2xl font-extrabold text-white max-w-xl text-center">
          <span ref={titleLine1Ref} className="inline-block">
            Explore between
          </span>{" "}
          <span ref={titleLine2Ref} className="inline-block">
            my journeys.
          </span>
        </h2>

        <p
          ref={paragraphRef}
          className="text-white/60 text-sm lg:text-base text-center leading-7 max-w-191"
        >
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </p>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="career-start-circle w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>

            <div className="career-start-line w-14 h-px bg-white/20" />

            <div className="career-badge px-6 py-2 rounded-2xl bg-white font-bold">
              My career
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 relative pl-4 -mt-4">
          <div className="mobile-timeline min-h-14 w-px relative z-20 bg-white/20"></div>
          <div className="bg-white w-6 h-6 left-1 rounded-full flex items-center justify-center absolute bottom-0">
            <div className="w-3 h-3 rounded-full bg-black" />
          </div>

          <div className="flex  pb-18 flex-col gap-y-12 pt-12 items-start">
            <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
              <div className="mobile-experience-header mb-4 flex items-center gap-x-4 -left-4 relative">
                <ExperienceNodeSmall color="#00C3D0" />
                <img
                  className="w-30 mt-2 brightness-100 transition-all duration-500"
                  src="/images/brands/pnclique.png"
                  alt="PN Clique"
                />
              </div>

              <div className="mobile-experience-content">
                <h3 className="text-lg font-bold text-white">
                  PN Clique - Frontend Developer
                </h3>

                <span className="text-sm text-white font-semibold">
                  11/2022 - 11/2023
                </span>

                <p className="text-left pt-4 text-white/60 text-sm lg:max-w-102.25 leading-6">
                  I contributed to the development of key digital products and
                  user-facing solutions, focusing on performance optimization,
                  usability, and modern interface design.
                  <br /> <br />
                  Participated in the development of the company’s streaming
                  platform, Pn Clique Streaming, designed to deliver services
                  similar to Netflix, Spotify, and Prime Video; fixed
                  performance issues and developed core components and services.
                  <br /> <br />
                  Built the company’s unified chat platform, PN Chat, used to
                  create chatbots and integrate with messaging platforms such as
                  WhatsApp and Telegram.
                  <br /> <br />
                  Designed the company website UI, delivering a simple, clean,
                  and user-friendly interface.
                </p>
              </div>
            </div>

            <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
              <div className="mobile-experience-header mb-4 flex items-center gap-x-4 -left-4 relative">
                <ExperienceNodeSmall color="white" />
                <img
                  className="w-32  mt-2 brightness-100 transition-all duration-500"
                  src="/images/brands/monabele.png"
                  alt="Monabele"
                />
              </div>

              <div className="mobile-experience-content">
                <h3 className="text-lg font-bold text-white">
                  Monabele - Frontend Developer
                </h3>

                <span className="text-sm text-white font-semibold">
                  09/2023 - 02/2025
                </span>

                <p className="text-left text-white/60 pt-4 text-sm lg:max-w-102.25 leading-6">
                  I contributed to the development of key digital products and
                  user-facing solutions, focusing on performance optimization,
                  usability, and modern interface design.
                  <br /> <br />
                  Participated in the development of the company’s streaming
                  platform, Pn Clique Streaming, designed to deliver services
                  similar to Netflix, Spotify, and Prime Video; fixed
                  performance issues and developed core components and services.
                  <br /> <br />
                  Built the company’s unified chat platform, PN Chat, used to
                  create chatbots and integrate with messaging platforms such as
                  WhatsApp and Telegram.
                  <br /> <br />
                  Designed the company website UI, delivering a simple, clean,
                  and user-friendly interface.
                </p>
              </div>
            </div>

            <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
              <div className="mobile-experience-header mb-4 flex items-center gap-x-4 -left-4 relative">
                <ExperienceNodeSmall color="#0B89CE" />
                <img
                  className="w-30 brightness-100 transition-all duration-500"
                  src="/images/brands/mirantes.png"
                  alt="Mirantes"
                />
              </div>

              <div className="mobile-experience-content">
                <h3 className="text-lg font-bold text-white">
                  Mirantes - Frontend Developer
                </h3>

                <span className="text-sm text-white font-semibold">
                  11/2023 - 07/2025
                </span>

                <p className="text-left pt-4 text-white/60 text-sm lg:max-w-102.25 leading-6">
                  I contributed to the development of key digital products and
                  user-facing solutions, focusing on performance optimization,
                  usability, and modern interface design.
                  <br /> <br />
                  Participated in the development of the company’s streaming
                  platform, Pn Clique Streaming, designed to deliver services
                  similar to Netflix, Spotify, and Prime Video; fixed
                  performance issues and developed core components and services.
                  <br /> <br />
                  Built the company’s unified chat platform, PN Chat, used to
                  create chatbots and integrate with messaging platforms such as
                  WhatsApp and Telegram.
                  <br /> <br />
                  Designed the company website UI, delivering a simple, clean,
                  and user-friendly interface.
                </p>
              </div>
            </div>

            <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
              <div className="mobile-experience-header mb-4 flex items-center gap-x-4 -left-4 relative">
                <ExperienceNodeSmall color="#FF8D28" />

                <img
                  className="w-32 mt-2 brightness-100 transition-all duration-500"
                  src="/images/brands/njila.png"
                  alt="NjilaBrand"
                />
              </div>

              <div className="mobile-experience-content">
                <h3 className="text-lg font-bold text-white">
                  NjilaBrand - CTO
                </h3>

                <span className="text-sm text-white font-semibold">
                  08/2023 - Present
                </span>

                <p className="text-left pt-4 text-white/60 text-sm lg:max-w-102.25 leading-6">
                  I contributed to the development of key digital products and
                  user-facing solutions, focusing on performance optimization,
                  usability, and modern interface design.
                  <br /> <br />
                  Participated in the development of the company’s streaming
                  platform, Pn Clique Streaming, designed to deliver services
                  similar to Netflix, Spotify, and Prime Video; fixed
                  performance issues and developed core components and services.
                  <br /> <br />
                  Built the company’s unified chat platform, PN Chat, used to
                  create chatbots and integrate with messaging platforms such as
                  WhatsApp and Telegram.
                  <br /> <br />
                  Designed the company website UI, delivering a simple, clean,
                  and user-friendly interface.
                </p>
              </div>
            </div>

            <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
              <div className="mobile-experience-header mb-4 flex items-center gap-x-4 -left-4 relative">
                <ExperienceNodeSmall color="#036EF1" />

                <img
                  className="w-30 mt-2 brightness-100 transition-all duration-500"
                  src="/images/brands/tis.png"
                  alt="TIS"
                />
              </div>

              <div className="mobile-experience-content">
                <h3 className="text-lg font-bold text-white">
                  TIS - Developer Analyst
                </h3>

                <span className="text-sm text-white font-semibold">
                  07/2025 - Present
                </span>

                <p className="text-left pt-4 text-white/60 text-sm lg:max-w-102.25 leading-6">
                  I contributed to the development of key digital products and
                  user-facing solutions, focusing on performance optimization,
                  usability, and modern interface design.
                  <br /> <br />
                  Participated in the development of the company’s streaming
                  platform, Pn Clique Streaming, designed to deliver services
                  similar to Netflix, Spotify, and Prime Video; fixed
                  performance issues and developed core components and services.
                  <br /> <br />
                  Built the company’s unified chat platform, PN Chat, used to
                  create chatbots and integrate with messaging platforms such as
                  WhatsApp and Telegram.
                  <br /> <br />
                  Designed the company website UI, delivering a simple, clean,
                  and user-friendly interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
