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
      <div className="flex flex-col items-start w-full h-auto">
        <Loader />
      </div>
    );

  return (
    <>
      <div className={
        showLiked ?
        "w-full h-[74px] bg-darkPurple bg-opacity-[28%] rounded-t-[16px] p-[16px] border-b-0 border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between cursor-pointer":
        "w-full h-[74px] bg-cardLoader bg-opacity-[28%] rounded-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between cursor-pointer"}>
        {/* icon and name */}
        <div className="flex flex-row items-center gap-[8px]">
          {/* path */}
          <div className="w-[35px] h-[34px] rounded-[33px] p-[12px] g-[10px] bg-cardLoader">
            <Image src={smallHeart} alt="small heart" />
          </div>

          <h1 className="text-white font-primary_Bold text-[28px]">Liked</h1>
        </div>

        {/* button */}
        <button 
        onClick={() => setShowLiked(!showLiked)}
        className={
          showLiked ?
          "h-[40px] w-[40px] rounded-[32px] p-[8px] g-[10px] bg-white bg-opacity-10 cursor-pointer duration-300":
          "h-[40px] w-[40px] rounded-[32px] p-[8px] g-[10px] rotate-[180deg] bg-white bg-opacity-10 cursor-pointer duration-300"}>
          <Image src={arrowUp} alt="arrow up" />
        </button>
      </div>

      <div className={
          showLiked ?
          'w-full h-[167px] bg-darkPurple border-t-0 rounded-b-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between duration-300':
          'w-full h-[0px] bg-darkPurple  border-t-0 rounded-b-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between duration-300 transform -translate-y-1  opacity-0 -z-10'}></div>
    </>
  );
}
