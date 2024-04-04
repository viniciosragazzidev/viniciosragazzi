import React from "react";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiLogOut, BiMessage, BiUser } from "react-icons/bi";
import LogoutBtn from "./LogoutBtn";

const LoginArea = async () => {
  const session = await getServerSession();
  return (
    <>
      {session?.user?.email ? (
        <Popover>
          <PopoverTrigger className="absolute top-5 right-5">
            <div className="image  relative w-9 h-9 overflow-hidden rounded-full">
              <Image
                fill
                priority
                src={session.user.image!}
                alt={session.user.name!}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-min right-5 relative p-2 pt-4 pb-1 bi">
            <ul className="flex flex-col ">
              <li className="text-sm font-semibold flex flex-col mb-2 bg-slate-600/15  rounded-lg p-1 px-2">
                <span className="font-semibold text-foreground">
                  {session.user.name}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {session.user.email}
                </span>
              </li>
              <li className="w-full py-[6px] px-2 text-sm rounded-md flex items-center gap-2 group  cursor-pointer hover:bg-slate-600/15 transition-all">
                <BiMessage className="text-primary" /> Mensagem
              </li>
              <li className="w-full py-[6px] px-2 text-sm rounded-md flex items-center gap-2 group  cursor-pointer hover:bg-slate-600/15 transition-all">
                <BiUser className="text-primary" /> Perfil
              </li>
              <LogoutBtn />
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginBtn />
      )}
    </>
  );
};

export default LoginArea;
