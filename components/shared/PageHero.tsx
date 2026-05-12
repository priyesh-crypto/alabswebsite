import React from "react";

export default function PageHero({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[#09263f] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          {title}
        </h1>
        {lede && (
          <p className="text-white/70 text-lg max-w-2xl mb-2">{lede}</p>
        )}
        {children}
      </div>
    </div>
  );
}
