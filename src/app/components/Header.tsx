"use client";
import { House, Phone, Scroll } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <header className="w-full flex justify-center  items-center py-5 ">
      
      <ul className="menuTop flex justify-center items-center gap-6 h-full">
        <li>
          <a
            className="cursor-pointer   text-white text-2xl"
            data-name="Home"
            href="#"
          >
            <House weight="fill" className="hover:scale-95 transition-all" />
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer   text-white  text-2xl "
            data-name="Projetos"
            href="#projects"
          >
            <Scroll
              weight="fill"
              className="hover:scale-95 transition-all
"
            />
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer   text-white  text-2xl "
            data-name="Contato"
            href="#"
          >
            <Phone weight="fill" className="hover:scale-95 transition-all" />
          </a>
        </li>
      </ul>
    </header>
  );
};
