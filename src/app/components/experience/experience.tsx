import { GeneralLines } from "./lines/general-lines";
import { MainLine } from "./lines/main-line";

/* eslint-disable @next/next/no-img-element */
export function Experience() {
  return (
    <div className="w-full relative container mx-auto mt-20 items-center flex flex-col gap-y-20">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-xl text-center">
          Explore between my journeys.
        </h2>

        <p className="text-white/60 text-center leading-7 max-w-191">
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-x-28">
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

          <div className="px-8 w-fit -ml-4 py-2.5 h-12 -mt-8 bg-white rounded-2xl font-bold text-2xl">
            My Career
          </div>

          <div className="relative">
            <div className="-ml-5">
              <MainLine />
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
