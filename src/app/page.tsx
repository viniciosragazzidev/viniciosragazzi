"use client";

import { useEffect, useState } from "react";
import { SectionOne } from "./components/sectionOne";
import { SectionTwo } from "./components/sectionTwo";
import SlideModal from "./components/Modal";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center 
      justify-between  pb-24 `}
    >
      <SlideModal/>
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
