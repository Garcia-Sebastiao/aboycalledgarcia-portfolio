import { BlurShape } from "@/assets/common/blur-shape";
import { AngularIcon } from "@/assets/icons/angular-icon";
import { DockerIcon } from "@/assets/icons/docker-icon";
import { GraphQlIcon } from "@/assets/icons/graphql-icon";
import { NextIcon } from "@/assets/icons/netx-icon";
import { NodeIcon } from "@/assets/icons/node-icon";
import { ReactIcon } from "@/assets/icons/react-icon";
import { TailwindIcon } from "@/assets/icons/tailwind-icon";
import { TypescriptIcon } from "@/assets/icons/typescript-icon";
import { VueIcon } from "@/assets/icons/vue-icon";

const stacks = [
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  AngularIcon,
  VueIcon,
  TypescriptIcon,
  NextIcon,
  GraphQlIcon,
  DockerIcon,
];

export function About() {
  return (
    <div className="w-full relative container mx-auto items-center flex flex-col gap-y-12 mt-42.5">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-md text-center">
          Checkout my tech stacks
        </h2>

        <p className="text-white/60 text-center">
          Checkout the main stacks i normally use to develop every project i
          work on.
        </p>
      </div>

      <div className="flex gap-x-8 items-center">
        {stacks.map((Icon, index) => (
          <div
            key={index}
            className="w-20 border border-white/30 h-20 rounded-xl bg-white/5 flex items-center justify-center"
          >
            {Icon}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BlurShape />
      </div>
    </div>
  );
}
