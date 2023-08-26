import React from "react";
import Image from "next/image";
import mediumHeart from "@/assets/medium-heart/medium-heart.svg";
import fist from "@/assets/fist/fist.svg";

interface stats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

interface Props {
  name: string;
  realName: string;
  stats: stats;
  image: string;
}

export default function HeroCard({ name, realName, stats, image }: Props) {
  const computeStats = (stats: stats) => {
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    const amount = Object.values(stats).length;
    const res = total / amount;
    return (res / 10).toFixed(1);
  };

  const statsTotal = computeStats(stats);

  return (
    <div className="relative w-[285px] h-[174px] bg-purple-900 rounded-[16px] gap-[16px]">
      {/* front card */}
      <div className="absolute w-full h-full rounded-[16px] flex flex-row items-start justify-start  p-[16px] gap-[16px] card z-10">
        {/* Image */}
        <div className="relative w-[105px] h-[140px]">
          <img
            src={image}
            alt="hero image"
            className="w-full h-full rounded-[12px] object-cover"
          />

          {/* like button */}
          <div className="w-[48px] h-[48px] rounded-[33px] p-[16px] bg-cardLoader -bottom-1 -right-2 absolute">
            <Image src={mediumHeart} alt="small heart" />
          </div>
        </div>

        {/* nfo */}
        <div className="flex flex-col flex-1  items-start justify-start gap-[4px]">
          <h1 className="text-white font-primary_Bold text-[20px]">{name}</h1>
          <p className="text-white text-opacity-[49%] font-primary_Regular text-[12px]">
            Real Name:{realName}
          </p>

          <div className="flex flex-row items-center justify-start w-full gap-[4px]">
            <Image src={fist} alt="fist" className="w-[18px] h-[18px]" />
            <p className="text-white  font-primary_Bold text-[12px]">
              {statsTotal}{" "}
              <span className="text-white text-opacity-30">/10</span>
            </p>
          </div>
        </div>
      </div>

      {/* background image */}
      <div className="absolute w-full h-full rounded-[16px]">
        <img
          src={image}
          alt="hero image"
          className="w-full h-full rounded-[16px] object-cover"
        />
      </div>
    </div>
  );
}
