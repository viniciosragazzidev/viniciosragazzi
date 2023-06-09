"use client";
import { useState } from "react";
import { Header } from "./components/Header";
import { MenuBar } from "./components/menubar";
import AppContext, { ProjectsType } from "./context/AppContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      img:"<EUGPSCoordinates>image.png", 
       deploy:"<URL>",
       code:"<URL>",
     },
     {
       id:10,
       nome:"Valorant Page (feito no inicio de aprendizado)",
       img:"<EUGPSCoordinates>image.png", 
       deploy:"<URL>",
       code:"<URL>",
     },
   ];
   return (
     <AppContext.Provider value={{ setOpenModal, openModal,projects }}>
       <html className={`${openModal ? 'overflow-y-hidden' : ''}`} lang="pt-br" >
         <body className={`${inter.className}  magicpattern `}>
           <Header />
           <MenuBar />
           {children}
         </body>
       </html>
     </AppContext.Provider>
   );
 }
