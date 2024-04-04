"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { BiLogoGoogle } from "react-icons/bi";

const LoginBtn = () => {
  return (
    <button
      className="absolute top-5 right-5 p-2 rounded-full bg-slate-700/40 hover:bg-slate-700/60 transition-all"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      <BiLogoGoogle className="text-2xl" />
    </button>
  );
};

export default LoginBtn;
