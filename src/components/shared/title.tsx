interface AnimatedSectionTitleProps {
  line1: string;
  line2: string;
  className?: string;
}

export function Title({ line1, line2, className }: AnimatedSectionTitleProps) {
  // const containerRef = useRef<HTMLHeadingElement>(null);
  // const line1Ref = useRef<HTMLSpanElement>(null);
  // const line2Ref = useRef<HTMLSpanElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       [line1Ref.current, line2Ref.current],
  //       {
  //         opacity: 0,
  //         y: 24,
  //         filter: "blur(12px)",
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         filter: "blur(0px)",
  //         duration: 1.1,
  //         ease: "power4.out",
  //         stagger: 0.12,
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 85%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );
  //   },
  //   { scope: containerRef },
  // );

  return (
    <h2
      className={`text-2xl lg:text-[40px] font-extrabold text-white max-w-xl text-center ${className ?? ""}`}
    >
      <span className="inline-block">{line1}</span>{" "}
      <span className="inline-block">{line2}</span>
    </h2>
  );
}
