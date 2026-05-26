/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="flex w-full mt-60 relative items-center justify-center">
      <img src="/images/work1.png" alt="Work" className="absolute left-0 w-1/4" />
      <img src="/images/work2.png" alt="Work" className="absolute right-0 w-1/4" />
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-5xl text-white leading-16 font-extrabold max-w-198.5 text-center">
          LETS CONNECT AND SHARE IDEAS.
        </h2>

        <p className="text-white/60 text-center">
          You can also reach me in any of my social medias, and lets talk.
        </p>

        <Button
          variant="default"
          className="bg-white text-background font-semibold py-2.5 px-12"
        >
          Lets talk
        </Button>
      </div>
    </div>
  );
}
