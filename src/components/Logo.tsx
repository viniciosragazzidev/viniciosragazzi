"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={twMerge(
        `font-bold text-xl ${className}`,
        spaceGrotesk.className
      )}
    >
      V<span className="text-primary">R</span>
    </Link>
  );
};

export default Logo;
