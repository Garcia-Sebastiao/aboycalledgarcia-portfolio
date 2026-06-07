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

      <circle className="exp-node-circle" cx="8" cy="8" r="8" fill={color} />
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

      <circle className="exp-node-circle" cx="214" cy="8" r="8" fill={color} />
    </svg>
  );
}

export function ExperienceNodeSmall({ color }: { color: string }) {
  return (
    <svg
      width="44"
      height="16"
      viewBox="0 0 44 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="exp-node-path" d="M1.72853e-06 8L44 8" stroke={color} />
      <circle
        cx="8"
        cy="8"
        r="8"
        transform="matrix(-1 0 0 1 44 0)"
        fill={color}
      />
    </svg>
  );
}
