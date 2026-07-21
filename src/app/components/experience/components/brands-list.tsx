/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function BrandsList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll("img");
      if (!items || items.length === 0) return;

      // Otimização: Apenas GPU-friendly properties
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            // FastScrollEnd desativa animações intermediárias se o usuário rolar rápido
            fastScrollEnd: true, 
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-x-32"
    >
      <img
        className="w-35.5 grayscale brightness-100 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 will-change-transform"
        src="/images/brands/pnclique.png"
        alt="PN Clique"
      />
      <img
        className="w-41.25 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 will-change-transform"
        src="/images/brands/monabele.png"
        alt="Monabele"
      />
      <img
        className="w-30 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 will-change-transform"
        src="/images/brands/mirantes.png"
        alt="Mirantes"
      />
      <img
        className="w-48 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 will-change-transform"
        src="/images/brands/statement.png"
        alt="Statement Labs"
      />
      <img
        className="w-31.25 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 will-change-transform"
        src="/images/brands/tis.png"
        alt="TIS"
      />
    </div>
  );
}