interface GeneralLinesProps {
  svgRef?: React.RefObject<SVGSVGElement | null>;
}

export function GeneralLines({ svgRef }: GeneralLinesProps) {
  return (
    <svg
      ref={svgRef}
      width="1025"
      height="270"
      viewBox="0 0 1025 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="general-path"
        d="M8.44444 35C4.06365 82.6667 30.2232 181 169.908 193C344.513 208 400.838 154 429 265"
        stroke="#0095A8"
        strokeWidth="2"
      />

      <circle
        className="general-circle"
        cx="8"
        cy="35"
        r="8"
        fill="#00C3D0"
      />

      <path
        className="general-path"
        d="M272 15C270.658 65.7754 320.199 119.217 363 132C416.502 147.978 454.371 141.761 463 260"
        stroke="white"
        strokeWidth="2"
      />

      <circle
        className="general-circle"
        cx="272"
        cy="11"
        r="8"
        fill="white"
      />

      <circle
        className="general-circle"
        cx="502"
        cy="16"
        r="8"
        fill="#0B89CE"
      />

      <path
        className="general-path"
        d="M502 24V270"
        stroke="#0B89CE"
        strokeWidth="2"
      />

      <path
        className="general-path"
        d="M1016.54 30C1021.1 77.6667 993.827 176 848.17 188C666.099 203 607.366 149 578 260"
        stroke="#036EF2"
        strokeWidth="2"
      />

      <circle
        className="general-circle"
        cx="1017"
        cy="22"
        r="8"
        fill="#036EF2"
      />

      <circle
        className="general-circle"
        cx="732"
        cy="8"
        r="7.5"
        fill="#FF8D28"
        stroke="#FF8D28"
      />

      <path
        className="general-path"
        d="M732 16C733.342 66.7754 683.801 120.217 641 133C587.498 148.978 549.629 142.761 541 261"
        stroke="#FF8D28"
        strokeWidth="2"
      />
    </svg>
  );
}