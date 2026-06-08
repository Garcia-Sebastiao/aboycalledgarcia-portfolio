"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Inicialização do hook de tradução para a secção de contacto
  const t = useTranslations("home.contact");

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const imgLeft =
          sectionRef.current?.querySelector<HTMLElement>(".contact-img-left");
        const imgRight =
          sectionRef.current?.querySelector<HTMLElement>(".contact-img-right");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        /**
         * IMAGES (LATERAIS)
         */
        tl.fromTo(
          imgLeft as HTMLElement,
          {
            opacity: 0,
            x: -80,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
          },
          0,
        );

        tl.fromTo(
          imgRight as HTMLElement,
          {
            opacity: 0,
            x: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
          },
          0,
        );

        /**
         * TITLE
         */
        tl.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6",
        );

        /**
         * TEXT
         */
        tl.fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
          },
          "-=0.7",
        );

        /**
         * BUTTON
         */
        tl.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.85,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "back.out(1.8)",
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
      className="flex w-full px-4 mt-10 lg:mt-60 relative items-center justify-center"
    >
      <img
        src="/images/work1.png"
        alt="Work"
        className="contact-img-left hidden lg:block absolute left-0 w-1/4"
      />

      <img
        src="/images/work2.png"
        alt="Work"
        className="contact-img-right hidden lg:block absolute right-0 w-1/4"
      />

      <div className="flex flex-col items-center gap-y-6">
        <h2
          ref={titleRef}
          className="text-2xl lg:text-5xl text-white leading-8 lg:leading-16 font-extrabold max-w-198.5 text-center uppercase"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />

        <p
          ref={textRef}
          className="text-white/60 text-center leading-6"
          dangerouslySetInnerHTML={{ __html: t("description") }}
        />

        <Button
          ref={buttonRef}
          variant="default"
          className="bg-white text-background font-semibold py-2.5 px-12 transition-transform hover:scale-105"
        >
          {t("button")}
        </Button>
      </div>
    </div>
  );
}
