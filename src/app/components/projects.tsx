import { ChevronRight } from "lucide-react";

export function Projects() {
  return (
    <div className="w-full relative items-center flex flex-col gap-y-12">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-2xl text-center">
          Check out some projects i worked on.
        </h2>

        <p className="text-white/60 max-w-191 leading-7 text-center">
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </p>
      </div>

      <div className="flex w-full gap-x-8 items-center gap-y-6">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-y-6 min-w-75">
            <div className="w-full h-50 rounded-2xl bg-[#181818]"></div>

            <div className="flex items-start">
              <h5 className="text-white max-w-67.5 font-bold text-xl">
                Aura Ai - Mental health assistant
              </h5>
              <ChevronRight className="size-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
