"use client";

import { GlareHover } from "@/components/ui/glare-hover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  name: string;
  role: string;
  message: string;
  avatar: string;
};

export function TestimonialCard({
  name,
  role,
  message,
  avatar,
}: Props) {
  return (
    <GlareHover
      className="rounded-2xl hover:scale-105 mr-2 transition-transform duration-200"
      duration={600}
    >
      <div className="testimonial-card flex p-5 rounded-2xl bg-[#181818] flex-col gap-y-4 min-w-80 lg:min-w-90 max-w-80 border border-white/10">
        
        <div className="flex items-center gap-x-2.5">
          <Avatar className="size-8">
            <AvatarImage src={avatar} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="text-white font-semibold">{name}</h3>
            <span className="text-xs text-white/50 font-semibold">
              {role}
            </span>
          </div>
        </div>

        <p className="text-white font-semibold text-xs lg:text-sm text-left leading-6">
          {message}
        </p>
      </div>
    </GlareHover>
  );
}