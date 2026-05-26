import { GeneralLines } from "./lines/general-lines";
import { MainLine } from "./lines/main-line";
import { ExperienceNodeLeft, ExperienceNodeRight } from "./lines/node";

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

          <div className="relative flex items-center justify-center -ml-5 w-226.5">
            <div className="relative z-10">
              <MainLine />
            </div>

            <div className="flex absolute  flex-col gap-y-10 -left-2 top-24 items-center">
              <div className="flex flex-col gap-y-6 -left-2 top-33 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#00C3D0" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="flex pr-11 flex-col gap-y-4 items-start">
                    <div className="">
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        PN Clique - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        11/2022 - 11/2023
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="w-65"
                    src="/images/brands/pnclique.png"
                    alt="PN Clique"
                  />
                </div>
              </div>

              <div className="flex relative left-27.5 flex-col gap-y-6 items-center">
                <div className="relative left-14.5">
                  <ExperienceNodeRight color="#fff" />
                </div>

                <div className="flex items-center gap-x-22">
                  <img
                    className="w-65"
                    src="/images/brands/monabele.png"
                    alt="Monabele"
                  />

                  <div className="flex pl-11 flex-col gap-y-4 items-start">
                    <div className="">
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        Monabele - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        09/2023 - 02/2025
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-6 -left-2 top-33 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#0B89CE" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="flex pr-14 flex-col gap-y-4 items-start">
                    <div className="">
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        Mirantes - Frontend Developer
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        11/2023 - 07/2025
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="w-55"
                    src="/images/brands/mirantes.png"
                    alt="Mirantes"
                  />
                </div>
              </div>

              <div className="flex relative left-27.5 flex-col gap-y-6 items-center">
                <div className="relative left-14.5">
                  <ExperienceNodeRight color="#FF8D28" />
                </div>

                <div className="flex items-center gap-x-22">
                  <img
                    className="w-55"
                    src="/images/brands/njila.png"
                    alt="Njila"
                  />

                  <div className="flex pl-20 flex-col gap-y-4 items-start">
                    <div className="">
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        NjilaBrand - CTO
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        08/2023 - Present
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-6 -left-2 top-33 items-center">
                <div className="relative right-13.5">
                  <ExperienceNodeLeft color="#036EF2" />
                </div>

                <div className="flex items-center gap-x-22">
                  <div className="flex pr-10 flex-col gap-y-4 items-start">
                    <div className="">
                      <h3 className="text-2xl font-bold min-w-104 text-white">
                        TIS - Developer Analyst
                      </h3>

                      <span className="text-sm text-white font-semibold">
                        07/2025 - Present
                      </span>
                    </div>

                    <p className="text-left text-white/60 text-sm max-w-102.25 leading-6">
                      I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.
                    </p>
                  </div>

                  <img
                    className="w-60"
                    src="/images/brands/tis.png"
                    alt="TIS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
