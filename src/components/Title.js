import React from "react";

export default function Title({ text, className }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-[#ECA377] transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-[#004AAD] rounded-full"></div>
      <div className="w-40 h-2 bg-[#afd2ff] rounded-full translate-x-2"></div>
    </div>
  );
}
