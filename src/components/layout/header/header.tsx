"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

import { Logo } from "@/assets/common/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const translate = useTranslations("home");
  const [isSticky, setIsSticky] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const links = [
    { name: translate("header.about"), href: "#about" },
    { name: translate("header.my-journey"), href: "#my-journey" },
    { name: translate("header.projects"), href: "#projects" },
    { name: translate("header.testimonials"), href: "#testimonials" },
    { name: translate("header.contact"), href: "#contact" },
  ];

  useGSAP(() => {
    if (!headerRef.current) return;

    const el = headerRef.current;

    const trigger = ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        const shouldStick = self.scroll() > 20;

        if (shouldStick && !el.classList.contains("is-sticky")) {
          el.classList.add("is-sticky");
          setIsSticky(true);

          gsap.fromTo(
            el,
            { y: -20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
          );
        }

        if (!shouldStick && el.classList.contains("is-sticky")) {
          el.classList.remove("is-sticky");
          setIsSticky(false);
        }
      },
    });

    return () => trigger.kill();
  }, []);

  const openMenu = () => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, {
        pointerEvents: "auto",
        opacity: 0,
      });

      gsap.set(menuRef.current, {
        y: 40,
        opacity: 0,
      });

      gsap.set(linksRef.current, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(
        menuRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2",
      );

      tl.to(
        linksRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );
    });

    return () => ctx.revert();
  };

  const closeMenu = () => {
    const tl = gsap.timeline({});

    tl.to(linksRef.current, {
      opacity: 0,
      y: 10,
      stagger: 0.04,
      duration: 0.2,
    });

    tl.to(
      menuRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "-=0.1",
    );

    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, {
              pointerEvents: "none",
            });
          }
        },
      },
      "-=0.2",
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "w-full transition-all duration-300",
          isSticky && "backdrop-blur-md border-b border-white/10",
        )}
      >
        <div className="container px-4 lg:px-20 mx-auto py-6 flex items-center justify-between">
          {Logo}

          <nav className="hidden lg:flex space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-x-4">
            <Button className="bg-white text-black">Lets talk</Button>

            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <button onClick={openMenu} className="lg:hidden text-white text-sm">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-9999 opacity-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xl" />

        <div
          ref={menuRef}
          className="relative h-full flex flex-col items-center justify-center gap-y-10"
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white"
          >
            <X />
          </button>

          {links.map((link, i) => (
            <a
              key={link.name}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              href={link.href}
              className="text-white hover:border-b-4 hover:border-b-white cursor-pointer transition-all text-2xl xl:text-7xl font-semibold"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}
