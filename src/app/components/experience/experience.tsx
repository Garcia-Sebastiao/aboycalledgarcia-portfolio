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

      <div className="flex items-center gap-x-28">
        <img className="w-35.5" src="/images/brands/pnclique.png" alt="PN Clique" />
        <img className="w-41.25" src="/images/brands/monabele.png" alt="Monabele" />
        <img className="w-30" src="/images/brands/mirantes.png" alt="Mirantes" />
        <img className="w-30" src="/images/brands/njila.png" alt="Njila" />
        <img className="w-31.25" src="/images/brands/tis.png" alt="TIS" />
      </div>
    </div>
  );
}
