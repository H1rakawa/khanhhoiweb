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
