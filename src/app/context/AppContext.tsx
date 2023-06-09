'use client'
import { createContext, Dispatch, SetStateAction, MouseEvent, useState } from "react";

export interface ProjectsType {
  id: number;
  nome: string;
  img: string;
  deploy: string;
  code: string;
}

export type AppContextType = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  projects: ProjectsType[];
};

const AppContext = createContext<AppContextType>({
  openModal: false,
  setOpenModal: () => {},
  projects: [],
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const projects: ProjectsType[] = [
    {
      id:0,
      nome: "Coffe Delivery",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116160499214712832/image.png",
      deploy: "https://vrcoffeedelivery.vercel.app/",
      code: "https://github.com/viniciosragazzidev/coffeedelivery",
    },
    {
      id:1,
      nome: "Pomodox",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116206779861319762/image.png",
      deploy: "https://pomodox-app.vercel.app/app",
      code: "https://github.com/viniciosragazzi/pomodoxApp",
    },

    {
      id:2,
      nome: "Vortex App",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116171755153801246/image.png",
      deploy: "https://vortexapp.vercel.app/fun",
      code: "https://github.com/viniciosragazzi/vortexapp",
    },
    {
      id:3,
      nome: "Woop Blog",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116172367828369499/image.png",
      deploy: "https://woppblog.vercel.app/home",
      code: "https://github.com/viniciosragazzi/woppblog",
    },
    {
      id:4,
      nome: "Tip Count",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116173451699429376/image.png",
      deploy: "https://tip-calculator-app-mocha.vercel.app/",
      code: "https://github.com/viniciosragazzi/TipCalculatorUi",
    },
    {
      id:5,
      nome: "crowdfunding product",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116209309160841397/image.png",
      deploy: "https://crowdfunding-product-page-main-peach.vercel.app/",
      code: "https://github.com/viniciosragazzi/crowdfunding-product-page-main",
    },

    {
      id:6,
      nome: "Todo App",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116170985599684678/image.png",
      deploy: "https://vrtodoapp.vercel.app/",
      code: "https://github.com/viniciosragazzidev/todoapp",
    },
    {
      id:7,
      nome: "Codelandia Oriental",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116207549910368276/image.png",
      deploy: "https://codelandia-05-oriental.vercel.app/#",
      code: "https://github.com/viniciosragazzi/codelandia_05_oriental",
    },
    {
      id:8,
      nome: "Codelandia FoodJP",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116208512926748742/image.png",
      deploy: "https://codelandia-desafio-26.vercel.app/#",
      code: "https://github.com/viniciosragazzi/Codelandia-Desafio---26",
    },
    {
      id:9,
      nome: "FrontEnd Mentor Notas",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116210020808392704/image.png",
      deploy: "https://frontend-mentor-notas.vercel.app/",
      code: "https://github.com/viniciosragazzi/frontend-mentor-notas",
    },
    {
      id:10,
      nome: "Valorant Page (feito no inicio de aprendizado)",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116211342534246480/image.png",
      deploy: "https://valorant-page-ui.vercel.app/",
      code: "https://github.com/viniciosragazzi/ValorantPageUi",
    },
  ];
  return (
    <AppContext.Provider value={{ setOpenModal, openModal, projects }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
