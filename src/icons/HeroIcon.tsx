import React from "react";

interface SpinningTextCircleProps {
  id: string;
  text: string;
  className?: string;
  radius?: number;
}

export const SpinningTextCircle = ({
  id,
  text,
  className,
  radius = 150,
}: SpinningTextCircleProps) => {
  return (
    <svg viewBox="0 0 500 500" className={className}>
      <path
        id={id}
        d={`M 250, 250 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
          radius * 2
        },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        fill="transparent"
      />

      <text className="text-xs font-bold fill-yellow-500 uppercase tracking-widest">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
};

export const LocationIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export const ChristmasTreeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <rect x="90" y="270" width="20" height="30" fill="#3d2b1f" />
      {/* Bottom Layer */}
      <path d="M100 200 L20 270 L180 270 Z" fill="#143314" />
      {/* Middle Layer */}
      <path d="M100 130 L40 210 L160 210 Z" fill="#1a4d1a" />
      {/* Top Layer */}
      <path d="M100 60 L60 140 L140 140 Z" fill="#2d5a27" />
      {/* Star */}
      <path
        d="M100 35 L105 50 L120 50 L108 60 L112 75 L100 66 L88 75 L92 60 L80 50 L95 50 Z"
        fill="#fbbf24"
      />
      {/* Decorative Lights */}
      <circle cx="80" cy="240" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="120" cy="240" r="4" fill="#fbbf24" opacity="0.8" />
      <circle cx="100" cy="180" r="4" fill="#3b82f6" opacity="0.8" />
      <circle cx="85" cy="110" r="3" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
};
