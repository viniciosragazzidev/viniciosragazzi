"use client";

import { signIn } from "next-auth/react";
import React from "react";

const UserBtn = () => {
  return (
    <button
      className="absolute top-0 right-0"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Login com Google
    </button>
  );
};

export default UserBtn;
