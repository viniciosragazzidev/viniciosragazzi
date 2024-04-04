"use client";

import React from "react";
import { BiX } from "react-icons/bi";

interface FrameWebsiteTypes {
  url: string;
  closed: boolean;
  setClosed: (closed: boolean) => void;
}
const FrameWebsite = ({ url, closed, setClosed }: FrameWebsiteTypes) => {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-50  bg-background/20 backdrop-blur-sm ${
        closed && "hidden"
      }`}
    >
      <div className="w-screen h-screen relative top-0 left-0">
        <div
          onClick={() => setClosed(!closed)}
          className="absolute z-40 w-full h-full "
        ></div>
        <button
          onClick={() => setClosed(true)}
          className="absolute top-5 right-5 text-3xl z-50"
        >
          <BiX />
        </button>
        <iframe
          className="w-full h-full z-50 absolute overflow-hidden rounded-lg  max-w-6xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"
          title="website"
          name="website"
          src={url}
        ></iframe>
      </div>
    </div>
  );
};

export default FrameWebsite;
