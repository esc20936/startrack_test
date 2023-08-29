import React, {useState} from "react";
import Image from "next/image";
import mediumHeart from "@/assets/medium-heart/medium-heart.svg";
import mediumHeartFilled from "@/assets/medium-filled-heart/medium-filled-heart.svg";
import fist from "@/assets/fist/fist.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addHeroToLikedList,
  removeHeroFromLikedList,
} from "@/Store/HeroesList/HeroesList";
import { setLikedSection } from "@/Store/likedSection/LikedSectionSlice";


interface stats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

interface images {
  md: string;
}

interface biography {
  fullName: string;
}

interface Props {
  name: string;
  biography: biography;
  powerstats: stats;
  images: images;
  id: string;
  liked?: boolean;
  lastLiked?: boolean;
}

export default function HeroCard({
  name,
  biography,
  powerstats,
  images,
  id,
  liked=false,
  lastLiked=false,
}: Props) {


  const dispatch = useDispatch();
  const computeStats = (stats: stats) => {
    if (!stats) return 0;
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    const amount = Object.values(stats).length;
    const res = total / amount;
    return (res / 10).toFixed(1);
  };


  const statsTotal = computeStats(powerstats);

  if (!statsTotal) return <div></div>;

  const handleLike = () => {
    
    if (liked) {
      dispatch(
        removeHeroFromLikedList({
          name,
          biography,
          powerstats,
          images,
          id,
        })
      );
      return;
    }
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
    dispatch(
      addHeroToLikedList({
        name,
        biography,
        powerstats,
        images,
        id,
      })
    );

    dispatch(setLikedSection(true));

    
  };

  return (
    <div
      onClick={handleLike}
      className="relative w-[285px] h-[174px] rounded-[16px] gap-[16px] border-darkPurple border-solid hover:border-cardLoader border-2 hover:cursor-pointer animate-opacity-scale"
    >
      {/* front card */}
      <div className="absolute w-full h-full rounded-[16px] flex flex-row items-start justify-start  p-[16px] gap-[16px] card z-10">
        {/* Image */}
        <div className="relative w-[105px] h-[140px]">
          <img
            src={images.md}
            alt="hero image"
            className="w-full h-full rounded-[12px] object-cover"
          />

          {/* like button */}
          <div className="w-[48px] h-[48px] rounded-[33px] p-[16px] bg-cardLoader -bottom-1 -right-2 absolute">
            {liked ? (
              <Image src={mediumHeartFilled} alt="small heart" />
            ) : (
              <Image src={mediumHeart} alt="small heart" />
            )}
          </div>
        </div>
        {/* liked recently only*/}

        {liked && lastLiked  && (
          <div className="w-[76px] h-[19px] rounded-[6px] px-[4px] py-[2px] bg-cardLoader -top-2 -right-2 absolute">
            <p className="text-white font-primary_Regular text-[10px]">
              Liked recently
            </p>
          </div>
        )}

        {/* nfo */}
        <div className="flex flex-col flex-1  items-start justify-start gap-[4px]">
          <h1 className="text-white font-primary_Bold text-[20px]">{name}</h1>
          <p className="text-white text-opacity-[49%] font-primary_Regular text-[12px]">
            Real Name:{biography.fullName}
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
          src={images.md}
          alt="hero image"
          className="w-full h-full rounded-[16px] object-cover"
        />
      </div>
    </div>
  );
}
