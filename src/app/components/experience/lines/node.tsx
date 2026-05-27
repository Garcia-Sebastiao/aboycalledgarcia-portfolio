export function ExperienceNodeLeft({ color }: { color: string }) {
  return (
    <svg
      width="222"
      height="16"
      viewBox="0 0 222 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="exp-node-path" d="M222 8H0" stroke={color} />

      <circle
        className="exp-node-circle"
        cx="8"
        cy="8"
        r="8"
        fill={color}
      />
    </svg>
  );
}

export function ExperienceNodeRight({ color }: { color: string }) {
  return (
    <svg
      width="222"
      height="16"
      viewBox="0 0 222 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="exp-node-path" d="M0 8H222" stroke={color} />

      <circle
        className="exp-node-circle"
        cx="8"
        cy="8"
        r="8"
        transform="matrix(-1 0 0 1 222 0)"
        fill={color}
      />
    </svg>
  );
}