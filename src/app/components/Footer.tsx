"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="w-full px-5 min-h-[60px] ">
      <div className="flex justify-between items-center h-full max-sm:flex-col gap-3 max-sm:pb-5">
        <span className="text-white text-sm">
          {" "}
          <span className=" px-5 text-xs">2023</span> Feito por{" "}
          <span className="font-bold">Vinicios Ragazzi </span> &copy;{" "}
        </span>
        <div className="socials flex items-center gap-4">
          <a
            href="#"
            className="rede text-primary bg-white text-base w-6 h-6  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
          >
            <InstagramLogo weight="fill" />
          </a>
          <a
            href="#"
            className="rede text-primary bg-white text-base w-6 h-6  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
          >
            <GithubLogo weight="fill" />
          </a>
          <a
            href="#"
            className="rede text-primary bg-white text-base w-6 h-6  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
          >
            <LinkedinLogo weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
};
