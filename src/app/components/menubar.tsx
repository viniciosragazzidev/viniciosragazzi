"use client";
import { House, Phone, Scroll } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const MenuBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsScrolling(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // Tempo em milissegundos para considerar o scroll como inativo (ajuste conforme necessário)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isScrolling) {
      // Função a ser chamada quando o scroll parar
      setLastPosition(scrollPosition);
    }
  }, [isScrolling]);

  return (
    <nav
      className={`fixed  max-[480]:z-50 ${scrollPosition > 140 ? 'z-50' : ''} ${
        scrollPosition < 140 ? "opacity-0 -z-50" : "opacity-100 "
      }  translate-y-[40vh] transition-all duration-700   ml-20 min-sm:left-0 max-md:right-0 max-md:ml-0 max-md:mr-2 max-md:w-10 bg-primaryDark w-14 h-36 rounded-md  ${
        scrollPosition == lastPosition
          ? "translate-y-[25vh]"
          : scrollPosition >= lastPosition
          ? "translate-y-[60vh]"
          : "translate-y-[15vh]"
      } ${lastPosition} ${scrollPosition} `}
    >
      <ul className="flex  justify-center items-center  flex-col gap-3 h-full">
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
    </nav>
  );
};
