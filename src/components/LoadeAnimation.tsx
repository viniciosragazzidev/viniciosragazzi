import React from "react";
import { twMerge } from "tailwind-merge";

const MusicAnimation = ({ className }: { className?: string }) => {
  return (
    <div className="wrapper cursor-pointer">
      <div className={`loader cursor-pointer`}>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
      </div>
    </div>
  );
};

export default MusicAnimation;
