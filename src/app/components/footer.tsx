"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { LinkedinIcon } from "@/assets/icons/linkedin-icon";
import { WhatsappIcon } from "@/assets/icons/whatsapp-icon";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { openWhatsApp } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const translate = useTranslations("home");

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const ctx = gsap.context(() => {
        const icons = iconsRef.current?.children ?? [];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        /**
         * INITIAL STATES
         */
        gsap.set(textRef.current, {
          opacity: 0,
          y: 20,
        });

        gsap.set(icons, {
          opacity: 0,
          y: 16,
          scale: 0.9,
        });

        gsap.set(buttonRef.current, {
          opacity: 0,
          y: 16,
          scale: 0.95,
        });

        /**
         * ANIMATION
         */
        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
        });

        tl.to(
          icons,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.5",
        );

        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.8)",
          },
          "-=0.4",
        );
      }, footerRef);

      return () => ctx.revert();
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="flex flex-col-reverse px-4 lg:px-20 gap-y-6 lg:flex-row justify-between w-full mt-10 lg:mt-70 pb-16 items-center container mx-auto"
    >
      <span ref={textRef} className="text-xl text-white font-bold">
        © {new Date().getFullYear()} aboycalledgarcia
      </span>

      <div ref={iconsRef} className="flex items-center gap-x-6">
        <button onClick={openWhatsApp}>{WhatsappIcon}</button>
        <Link
          href="https://www.linkedin.com/in/garcia-sebastiao/"
          target="_blank"
        >
          {LinkedinIcon}
        </Link>
      </div>

      <button
        ref={buttonRef}
        className="text-white hidden lg:flex items-center gap-x-6 font-bold text-xl group"
      >
        {translate("back")}
        <ChevronUp className="size-6 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
