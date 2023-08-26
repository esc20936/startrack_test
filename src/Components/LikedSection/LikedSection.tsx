import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Image from "next/image";
import smallHeart from "@/assets/small-heart/small-heart.svg";
import arrowUp from "@/assets/arrow-up/arrow-up.svg";

interface Props {
  loading: boolean;
}

export default function LikedSection({ loading }: Props) {
  const [showLiked, setShowLiked] = useState(false);

  if (loading)
    return (
      <div className="flex flex-col items-start w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="w-full h-[74px] bg-cardLoader bg-opacity-[28%] rounded-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between cursor-pointer">
      {/* icon and name */}
      <div className="flex flex-row items-center gap-[8px]">
        {/* path */}
        <div className="w-[35px] h-[34px] rounded-[33px] p-[12px] g-[10px] bg-cardLoader">
          <Image src={smallHeart} alt="small heart" />
        </div>

        <h1 className="text-white font-primary_Bold text-[28px]">Liked</h1>
      </div>

      {/* button */}
      <div  className="h-[40px] w-[40px] rounded-[32px] p-[8px] g-[10px] rotate-[180deg] bg-white bg-opacity-10 cursor-pointer">
        <Image src={arrowUp} alt="arrow up" />
      </div>
    </div>
  );
}
