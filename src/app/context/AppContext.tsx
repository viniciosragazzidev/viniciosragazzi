"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
} from "react";
export interface ImgListType {
  img: string;
}
export interface ProjectsType {
  id: number;
  nome: string;
  img: string;
  imgList: ImgListType[];
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
      id: 0,
      nome: "Coffe Delivery",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116160499214712832/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116160499214712832/image.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/221905565-30fec0ed-11c9-4105-84ad-d73097177dbf.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/221905921-83092db0-4b3d-4789-ad9a-737f141f1842.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/221906058-e1ad831a-56ef-4e22-9b52-38b738d75019.png",
        },
      ],
      deploy: "https://vrcoffeedelivery.vercel.app/",
      code: "https://github.com/viniciosragazzidev/coffeedelivery",
    },
    {
      id: 1,
      nome: "Pomodox",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116206779861319762/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116206779861319762/image.png",
        },
       
      ],
      deploy: "https://pomodox-app.vercel.app/app",
      code: "https://github.com/viniciosragazzi/pomodoxApp",
    },

    {
      id: 2,
      nome: "Vortex App",
      img: "https://user-images.githubusercontent.com/73366668/244793760-06740970-33d1-4853-9679-4739cd77d438.png",
      imgList: [
        {
          img: "https://user-images.githubusercontent.com/73366668/244793760-06740970-33d1-4853-9679-4739cd77d438.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244793556-7526e754-09d3-412b-8108-769e0df8b371.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244793618-dd083d73-0e39-408e-97f2-8117541066f3.png",
        },
      ],
      deploy: "https://vortexapp.vercel.app/fun",
      code: "https://github.com/viniciosragazzi/vortexapp",
    },
    {
      id: 3,
      nome: "NapedApp",
      img: "https://user-images.githubusercontent.com/125518719/245610939-7f31832e-d1af-4682-8ad8-921f212588fc.png",
      imgList: [
        {
          img: "https://user-images.githubusercontent.com/125518719/245610939-7f31832e-d1af-4682-8ad8-921f212588fc.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611134-3c5c2062-d108-4479-a314-341551d257da.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611291-ab091857-bf8f-48ad-8c7e-8541e9b5e3aa.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611565-a85ad38c-e6df-4d08-b342-0081282f31ed.png",
        },
      ],
      deploy: "https://valorant-page-ui.vercel.app/",
      code: "https://github.com/viniciosragazzi/ValorantPageUi",
    },
    {
      id: 4,
      nome: "Woop Blog",
      img: "https://user-images.githubusercontent.com/73366668/244794278-adaf088f-5621-4ebf-92b5-93f72309da82.png",
      imgList: [
        {
          img: "https://user-images.githubusercontent.com/73366668/244794278-adaf088f-5621-4ebf-92b5-93f72309da82.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244794329-82c538bc-f2f3-4e28-9503-251481c637fe.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244794372-777eef43-6cb9-4e94-ba14-438fa375c4dc.png",
        },
      ],
      deploy: "https://woppblog.vercel.app/",
      code: "https://github.com/viniciosragazzi/woppblog",
    },
    {
      id: 5,
      nome: "Tip Count",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116173451699429376/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116173451699429376/image.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244794675-2c94dba2-e086-4821-a80d-e8ac3ed33e9a.png",
        },
        {
          img: "https://user-images.githubusercontent.com/73366668/244794839-ffd61f4c-9b43-4fad-860c-759ff72b37d7.png",
        },
      ],
      deploy: "https://tip-calculator-app-mocha.vercel.app/",
      code: "https://github.com/viniciosragazzi/TipCalculatorUi",
    },
    {
      id: 6,
      nome: "crowdfunding product",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116209309160841397/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116209309160841397/image.png",
        },
       
      ],
      deploy: "https://crowdfunding-product-page-main-peach.vercel.app/",
      code: "https://github.com/viniciosragazzi/crowdfunding-product-page-main",
    },
    {
      id: 7,
      nome: "Todo App",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116170985599684678/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116170985599684678/image.png",
        },
        
      ],
      deploy: "https://vrtodoapp.vercel.app/",
      code: "https://github.com/viniciosragazzidev/todoapp",
    },
    {
      id: 8,
      nome: "Codelandia Oriental",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116207549910368276/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116207549910368276/image.png",
        },
        
      ],
      deploy: "https://codelandia-05-oriental.vercel.app/#",
      code: "https://github.com/viniciosragazzi/codelandia_05_oriental",
    },
    {
      id: 9,
      nome: "Codelandia FoodJP",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116208512926748742/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116208512926748742/image.png",
        },
        
      ],
      deploy: "https://codelandia-desafio-26.vercel.app/#",
      code: "https://github.com/viniciosragazzi/Codelandia-Desafio---26",
    },
    {
      id: 10,
      nome: "FrontEnd Mentor Notas",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116210020808392704/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116210020808392704/image.png",
        },
        
      ],
      deploy: "https://frontend-mentor-notas.vercel.app/",
      code: "https://github.com/viniciosragazzi/frontend-mentor-notas",
    },
    {
      id: 11,
      nome: "Valorant Page (feito no inicio de aprendizado)",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1116211342534246480/image.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1116211342534246480/image.png",
        },
       
      ],
      deploy: "https://valorant-page-ui.vercel.app/",
      code: "https://github.com/viniciosragazzi/ValorantPageUi",
    },
    {
      id: 12,
      nome: "NapedApp",
      img: "https://user-images.githubusercontent.com/125518719/245610939-7f31832e-d1af-4682-8ad8-921f212588fc.png",
      imgList: [
        {
          img: "https://user-images.githubusercontent.com/125518719/245610939-7f31832e-d1af-4682-8ad8-921f212588fc.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611134-3c5c2062-d108-4479-a314-341551d257da.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611291-ab091857-bf8f-48ad-8c7e-8541e9b5e3aa.png",
        },
        {
          img: "https://user-images.githubusercontent.com/125518719/245611565-a85ad38c-e6df-4d08-b342-0081282f31ed.png",
        },
      ],
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
