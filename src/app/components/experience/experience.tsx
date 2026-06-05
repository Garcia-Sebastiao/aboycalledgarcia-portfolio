"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { GeneralLines } from "./lines/general-lines";
import { MainLine } from "./lines/main-line";
import { ExperienceNodeLeft, ExperienceNodeRight } from "./lines/node";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const generalPaths = gsap.utils.toArray<SVGPathElement>(".general-path");

      const generalCircles =
        gsap.utils.toArray<SVGCircleElement>(".general-circle");

      const mainLine =
        document.querySelector<SVGPathElement>(".main-line-path");

      const mainCircle =
        document.querySelector<SVGCircleElement>(".main-line-circle");

      generalPaths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(generalCircles, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center",
      });

      if (mainLine) {
        const length = mainLine.getTotalLength();

        gsap.set(mainLine, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.set(mainCircle, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.to(mainLine, {
          strokeDashoffset: 0,
          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 35%",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        gsap.to(mainCircle, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

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
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.4",
      );

      tl.to(
        generalPaths,
        {
          strokeDashoffset: 0,
          duration: 1.8,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5",
      );

      tl.to(
        generalCircles,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "back.out(2)",
        },
        "-=1.2",
      );

      const experienceItems =
        gsap.utils.toArray<HTMLElement>(".experience-item");

      experienceItems.forEach((item) => {
        const nodePath = item.querySelector<SVGPathElement>(".exp-node-path");

        const nodeCircle =
          item.querySelector<SVGCircleElement>(".exp-node-circle");

        const content = item.querySelector<HTMLElement>(".experience-content");

        const logo = item.querySelector<HTMLElement>(".experience-logo");

        if (!nodePath || !content || !logo) return;

        const nodeLength = nodePath.getTotalLength();

        gsap.set(nodePath, {
          strokeDasharray: nodeLength,
          strokeDashoffset: nodeLength,
        });

        gsap.set(nodeCircle, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.set(content, {
          opacity: 0,
          y: 48,
          filter: "blur(10px)",
        });

        gsap.set(logo, {
          opacity: 0,
          scale: 0.8,
          rotate: -8,
          filter: "blur(10px)",
        });

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        itemTl.to(nodePath, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power3.out",
        });

        itemTl.to(
          nodeCircle,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(2.5)",
          },
          "-=0.45",
        );

        itemTl.to(
          content,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.1",
        );

        itemTl.to(
          logo,
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

        const careerBadge = document.querySelector(".career-badge");

        if (careerBadge) {
          gsap.set(careerBadge, {
            opacity: 0,
            scale: 0.7,
            y: 24,
            rotate: -4,
            filter: "blur(10px)",
          });

          tl.to(
            careerBadge,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "back.out(2.4)",
            },
            "-=1",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full relative container mx-auto mt-20 items-center flex flex-col gap-y-20"
    >
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-xl text-center">
          <span ref={titleLine1Ref} className="inline-block">
            Explore between
          </span>{" "}
          <span ref={titleLine2Ref} className="inline-block">
            my journeys.
          </span>
        </h2>

        <p
          ref={paragraphRef}
          className="text-white/60 text-center leading-7 max-w-191"
        >
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div ref={brandsRef} className="flex items-center gap-x-28">
          <img
            className="w-35.5 grayscale brightness-100 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            src="/images/brands/pnclique.png"
            alt="PN Clique"
          />

          <img
            className="w-41.25 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            src="/images/brands/monabele.png"
            alt="Monabele"
          />

          <img
            className="w-30 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            src="/images/brands/mirantes.png"
            alt="Mirantes"
          />

          <img
            className="w-30 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            src="/images/brands/njila.png"
            alt="Njila"
          />

          <img
            className="w-31.25 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            src="/images/brands/tis.png"
            alt="TIS"
          />
        </div>

        <div className="relative left-4 flex flex-col items-center mt-12">
          <GeneralLines />

          {/* CAREER BADGE */}
          <div className="career-badge px-8 w-fit -ml-4 py-2.5 h-12 -mt-8 bg-white rounded-2xl font-bold text-2xl">
            My Career
          </div>

          <div className="relative flex items-center justify-center -ml-5 w-226.5">
            <div className="relative z-10">
              <MainLine />
            </div>

            <div className="flex absolute flex-col gap-y-10 -left-2 top-24 items-center">
              {/* ====================================================== */}
              {/* PN CLIQUE */}
              {/* ====================================================== */}

              <div className="experience-item flex flex-col gap-y-6 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#00C3D0" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="experience-content flex pr-11 flex-col gap-y-4 items-start">
                    <div>
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        PN Clique - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        11/2022 - 11/2023
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="experience-logo w-65"
                    src="/images/brands/pnclique.png"
                    alt="PN Clique"
                  />
                </div>
              </div>

              <div className="experience-item flex relative left-27.5 flex-col gap-y-6 items-center">
                <div className="relative left-14.5">
                  <ExperienceNodeRight color="#fff" />
                </div>

                <div className="flex items-center gap-x-22">
                  <img
                    className="experience-logo w-65"
                    src="/images/brands/monabele.png"
                    alt="Monabele"
                  />

                  <div className="experience-content flex pl-11 flex-col gap-y-4 items-start">
                    <div>
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        Monabele - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        09/2023 - 02/2025
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>

              {/* ====================================================== */}
              {/* MIRANTES */}
              {/* ====================================================== */}

              <div className="experience-item flex flex-col gap-y-6 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#0B89CE" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="experience-content flex pr-14 flex-col gap-y-4 items-start">
                    <div>
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        Mirantes - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        11/2023 - 07/2025
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="experience-logo w-55"
                    src="/images/brands/mirantes.png"
                    alt="Mirantes"
                  />
                </div>
              </div>

              {/* ====================================================== */}
              {/* NJILA */}
              {/* ====================================================== */}

              <div className="experience-item flex relative left-27.5 flex-col gap-y-6 items-center">
                <div className="relative left-14.5">
                  <ExperienceNodeRight color="#FF8D28" />
                </div>

                <div className="flex items-center gap-x-22">
                  <img
                    className="experience-logo w-55"
                    src="/images/brands/njila.png"
                    alt="Njila"
                  />

                  <div className="experience-content flex pl-20 flex-col gap-y-4 items-start">
                    <div>
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        NjilaBrand - CTO
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        08/2023 - Present
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>

              {/* ====================================================== */}
              {/* TIS */}
              {/* ====================================================== */}

              <div className="experience-item flex flex-col gap-y-6 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#036EF2" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="experience-content flex pr-10 flex-col gap-y-4 items-start">
                    <div>
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        TIS - Developer Analyst
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        07/2025 - Present
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="experience-logo w-60"
                    src="/images/brands/tis.png"
                    alt="TIS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
