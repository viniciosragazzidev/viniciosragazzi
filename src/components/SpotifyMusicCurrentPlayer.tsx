"use client";

import React from "react";
import Image from "next/image";
import { BiLogoSpotify, BiPlayCircle } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { getCurrentlyPlaying } from "@/lib/services/spotify";

const SpotifyMusicCurrentPlayer = () => {
  const { data: currentlyPlaying } = useQuery({
    queryKey: ["currentlyPlaying"],
    queryFn: getCurrentlyPlaying,
    refetchOnWindowFocus: false,
  });

  if (!currentlyPlaying) return null;

  console.log(currentlyPlaying);

  return (
    // <section className="flex gap-4 items-center ">
    //   <div className="image w-24 h-24 aspect-square overflow-hidden relative rounded-lg">
    //     <Image
    //       src={currentlyPlaying.item.album.images[0].url}
    //       fill
    //       alt={currentlyPlaying.item.name}
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <h1 className="text-2xl  flex items-center gap-2">
    //       <span>
    //         <BiLogoSpotify className="text-green-500 text-3xl" />
    //       </span>
    //       <span className="font-bold">{currentlyPlaying.item.name}</span>
    //     </h1>
    //     <div className="flex gap-5 items-center">
    //       {" "}
    //       <p className="text-muted-foreground">
    //         {currentlyPlaying.item.artists[0].name} /{" "}
    //         {currentlyPlaying.item.album.name}
    //       </p>
    //     </div>
    //   </div>
    //   <p className="text-4xl cursor-pointer hover:scale-90 transition-all ">
    //     <BiPlayCircle className="text-green-500 " />
    //   </p>
    // </section>
    <></>
  );
};

export default SpotifyMusicCurrentPlayer;
