import React from "react";
export const PeaceCurveText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <svg viewBox="0 0 500 200" className={className}>
      <path
        id="curve"
        d="M 50,250 A 200,200 0 0,1 450,250"
        fill="transparent"
      />
      <text
        className="text-4xl font-black fill-green-900 uppercase tracking-widest text-center"
        textAnchor="middle"
      >
        <textPath href="#curve" startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export const BookOpenIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`${className} w-4 h-4`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
};
