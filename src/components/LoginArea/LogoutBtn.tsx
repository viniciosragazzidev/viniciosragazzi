"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutBtn = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>
      <li className="w-full py-[6px] px-2 text-sm rounded-md flex items-center gap-2 group  cursor-pointer hover:bg-slate-600/15 transition-all">
        <BiLogOut className="text-red-500" /> Sair da conta
      </li>
    </button>
  );
};

export default LogoutBtn;
