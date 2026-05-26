/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/layout/header/header";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex flex-col border-b border-b-white/20 min-h-dvh">
      <div className="absolute inset-0 top-0 w-full h-full  min-h-dvh left-0">
        <img
          src="/images/hero-pattern.png"
          className="w-full h-full"
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
          <div className="w-45 h-45 flex">
            <img
              src="/images/avatar.png"
              className="w-full h-full"
              alt="Hero Pattern"
            />
          </div>

          <div className="flex items-center gap-x-2">
            <span className="text-9xl left-12 relative text-white font-bold">
              {" "}
              {"<"}{" "}
            </span>
            <h1 className="font-extrabold leading-24 text-7xl text-white max-w-4xl text-center">
              FRONTEND DEVELOPER
            </h1>
            <span className="text-9xl right-12 relative text-white font-bold">
              {" "}
              {">"}{" "}
            </span>
          </div>

          <div className="flex items-center gap-x-12">
            <div className="flex-1 min-w-65 h-px bg-white/80" />
            <span className="uppercase font-extrabold text-white/80">
              Garcia Sebastião - Creative Web Developer
            </span>
            <div className="flex-1 min-w-65 h-px bg-white/80" />
          </div>
        </div>

        <div className="w-full px-20 container mt-32 self-end mx-auto flex items-center justify-between">
          <Button className="font-extrabold text-white/80" variant="ghost">
            EXPLORE TO KNOW MORE
            <ChevronDown className="size-6" />
          </Button>

          <span className="text-white/80 leading-6 text-justify max-w-xs">
            With over 5 years of experience, I specialize in developing scalable
            web and mobile applications with a strong focus on performance and
            user experience.
          </span>
        </div>
      </div>
    </div>
  );
}
