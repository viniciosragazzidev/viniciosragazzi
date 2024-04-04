"use client";

import React from "react";
import {
  BiBook,
  BiCodeBlock,
  BiGift,
  BiHomeAlt,
  BiLaptop,
  BiLogoDribbble,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiNews,
} from "react-icons/bi";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./DarkModeSwitch";
import LinkTransition from "./LinkTransition";

const Sidebar = () => {
  const meLinks = [
    {
      name: "Sobre mim",
      icon: <BiBook />,
      url: "/about",
    },
    {
      name: "Projetos",
      icon: <BiLaptop />,
      url: "/projects",
    },
    {
      name: "Tecnologias e Ferramentas",
      icon: <BiCodeBlock />,
      url: "/technologies",
    },
  ];

  const comunidadeLinks = [
    {
      name: "Blog",
      icon: <BiNews />,
      url: "/blog",
    },
    {
      name: "Indicações",
      icon: <BiGift />,
      url: "/indications",
    },
  ];

  const redesSociaisLinks = [
    {
      name: "Instagram",
      icon: <BiLogoInstagram />,
      url: "/",
    },
    {
      name: "Linkedin",
      icon: <BiLogoLinkedin />,
      url: "/",
    },
    {
      name: "Github",
      icon: <BiLogoGithub />,
      url: "/",
    },
    {
      name: "Dribbble",
      icon: <BiLogoDribbble />,
      url: "/",
    },
  ];
  const pathname = usePathname();

  return (
    <aside className=" min-w-[300px] h-screen overflow-hidden relative max-sm:hidden ">
      <div className=" min-w-[300px] h-full fixed  border-r ">
        <div className=" px-3 py-3 sticky top-0 left-0 bg-background border-b flex gap-3 items-center ">
          <div
            className="image aspect-square overflow-hidden
            rounded-xl  "
          >
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-foreground font-bold text-sm">
              Vinicios Ragazzi
            </h1>
            <p className="text-slate-400 text-xs">Dev Front-End</p>
          </div>
          <ModeToggle />
        </div>
        <nav className="flex flex-col gap-3  py-t overflow-y-auto max-h-[calc(100vh-5rem)] p-[0.7rem]">
          <ul>
            <LinkTransition
              href="/"
              className={`w-full py-[6px] px-3 rounded-md flex items-center gap-2 group  cursor-pointer  ${
                pathname === "/" ? "bg-slate-400/15" : ""
              } hover:bg-slate-600/15 transition-all`}
            >
              <span className="text-primary">
                <BiHomeAlt />
              </span>{" "}
              Início
            </LinkTransition>
          </ul>

          <ul className="space-y-1">
            <span className="text-sm font-semibold text-muted-foreground pl-2">
              Eu
            </span>
            {meLinks.map((link) => (
              <LinkTransition
                href={link.url}
                key={link.name}
                className={`w-full py-[6px] px-3 rounded-md flex items-center gap-2 group  cursor-pointer  ${
                  link.url === pathname ? "bg-slate-400/15" : ""
                } hover:bg-slate-600/15 transition-all`}
              >
                <span className="text-primary group-hover:text-foreground group-hover:animate-shake">
                  {link.icon}
                </span>{" "}
                {link.name}
              </LinkTransition>
            ))}
          </ul>

          <ul className="space-y-1">
            <span className="text-sm font-semibold text-muted-foreground pl-2">
              Comunidade
            </span>
            {comunidadeLinks.map((link) => (
              <LinkTransition
                href={link.url}
                key={link.name}
                className={`w-full py-[6px] px-3 rounded-md flex items-center gap-2 group  cursor-pointer  ${
                  link.url === pathname ? "bg-slate-400/15" : ""
                } hover:bg-slate-600/15 transition-all`}
              >
                <span className="text-primary group-hover:text-foreground group-hover:animate-shake">
                  {link.icon}
                </span>{" "}
                {link.name}
              </LinkTransition>
            ))}
          </ul>

          <ul className="space-y-3 ">
            <span className="text-sm font-semibold text-muted-foreground pl-2">
              Redes Sociais
            </span>
            {redesSociaisLinks.map((link) => (
              <Link
                target="_blank"
                href={link.url}
                key={link.name}
                className="w-full  py-[6px] px-3 rounded-md flex items-center gap-2 group  cursor-pointer  hover:bg-slate-600/15 transition-all "
              >
                <span className="text-primary  group-hover:text-foreground group-hover:animate-shake">
                  {link.icon}
                </span>{" "}
                {link.name}
              </Link>
            ))}
          </ul>
          <div className="flex w-full"></div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
