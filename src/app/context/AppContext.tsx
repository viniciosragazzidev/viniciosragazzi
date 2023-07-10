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
      nome: "Adote um Pet",
      img: "https://cdn.discordapp.com/attachments/524765307081064452/1128069712920719371/192.168.1.2_3000_adote_5.png",
      imgList: [
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1128069712920719371/192.168.1.2_3000_adote_5.png",
        },
        {
          img: "https://cdn.discordapp.com/attachments/524765307081064452/1128070126000930907/image.png",
        },
      ],
      deploy: "https://adoteumpet-three.vercel.app/",
      code: "https://github.com/viniciosragazzidev/adoteumpet",
    },
    {
      id: 1,
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
    // Rest of the projects...
  ];

  return (
    <AppContext.Provider value={{ setOpenModal, openModal, projects }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
