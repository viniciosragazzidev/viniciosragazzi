"use client";

import Image from "next/image";
import React from "react";
import { BiLaptop, BiLogoGithub } from "react-icons/bi";
import FrameWebsite from "./FrameWebsite";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const ProjectsList = () => {
  const [currentProject, setCurrentProject] = React.useState(
    "https://pixel99.vercel.app/"
  );
  const [closed, setClosed] = React.useState(true);

  return (
    <section className="flex flex-col px-2 sm:px-7 py-5 border border-slate-800/50 rounded-lg justify-center gap-10">
      <FrameWebsite
        url={currentProject}
        closed={closed}
        setClosed={setClosed}
      />

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-1">
          <BiLaptop className="text-primary text-lg" /> Projetos
        </h3>

        <span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-all">
          Ver todos
        </span>
      </div>

      <div className="flex flex-col gap-14 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className={`flex max-sm:flex-col gap-10 ${
              index % 2 !== 0 && `sm:flex-row-reverse`
            }`}
            key={index}
          >
            <div
              onClick={() => {
                setCurrentProject("https://pixel99.vercel.app/"),
                  setClosed(!closed);
              }}
              className="image cursor-view group aspect-video min-w-[300px]	  overflow-hidden relative rounded-lg"
            >
              <Image
                src="/projeto.png"
                fill
                alt="logo"
                className="object-cover group-hover:scale-95 group-hover:opacity-50 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-bold">Vortex Movie</h1>
              <p className=" text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                omnis nisi quas totam cum perspiciatis quaerat labore ducimus
                rem ipsam dolor sit amet consectetur adipisicing elit. Iste
                omnis nisi quas totam cu.
              </p>
              <button
                onClick={() => {
                  setCurrentProject("https://github.com/viniciosragazzi"),
                    setClosed(!closed);
                }}
                className="bg-muted flex hover:bg-secondary transition-all items-center gap-1 py-2 text-2xl text-primary rounded-lg self-end px-4 my-4"
              >
                <BiLogoGithub className="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
