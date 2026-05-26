import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlareHover } from "@/components/ui/glare-hover";
import { Marquee } from "@/components/ui/marquee";

export function Testimonials() {
  return (
    <div className="w-full relative items-center flex flex-col gap-y-12">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-2xl text-center">
          People who trusted on my work.
        </h2>
      </div>

      <div className="w-full overflow-hidden  relative">
        <Marquee pauseOnHover className="[--duration:80s]">
          {Array.from({ length: 14 }).map((_, index) => (
            <GlareHover key={index} className="rounded-2xl hover:scale-105 mr-2 transition-transform duration-200" duration={600}>
              <div className="flex p-5 rounded-2xl bg-[#181818] flex-col gap-y-4 min-w-90 max-w-90">
                <div className="flex items-center gap-x-2.5">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold">Andrey Morgan</h3>
                    <span className="text-xs text-white/50 font-semibold">
                      Senior Software Engeneer at Spotify
                    </span>
                  </div>
                </div>

                <p className="text-white font-semibold text-sm text-left leading-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has.
                </p>
              </div>
            </GlareHover>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:80s]">
          {Array.from({ length: 14 }).map((_, index) => (
            <GlareHover key={index} className="rounded-2xl hover:scale-105 mr-2 transition-transform duration-200" duration={600}>
              <div className="flex p-5 rounded-2xl bg-[#181818] flex-col gap-y-4 min-w-90 max-w-90">
                <div className="flex items-center gap-x-2.5">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h3 className="text-white font-semibold">Andrey Morgan</h3>
                    <span className="text-xs text-white/50 font-semibold">
                      Senior Software Engeneer at Spotify
                    </span>
                  </div>
                </div>

                <p className="text-white font-semibold text-sm text-left leading-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has.
                </p>
              </div>
            </GlareHover>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 -left-32 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 -right-32 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}
