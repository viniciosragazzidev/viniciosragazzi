import { createContext, Dispatch, SetStateAction, MouseEvent } from "react";

export interface ProjectsType {
  id:number,
  nome:string,
  img:string,
  deploy:string, 
  code:string,
}

export type AppContextType = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  projects: ProjectsType[];
};

const AppContext = createContext<AppContextType>({
  openModal: false,
  setOpenModal: () => {},
  projects: []
});

export default AppContext;
