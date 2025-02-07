import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-[0.2rem] bg-gray-200 rounded-full">
      <div
        className="h-full bg-[var(--secondary)] rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
