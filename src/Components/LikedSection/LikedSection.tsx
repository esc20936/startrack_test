import React, { useState, useRef, useEffect } from "react";
import Loader from "../Loader/Loader";
import Image from "next/image";
import smallHeart from "@/assets/small-heart/small-heart.svg";
import mediumHeart from "@/assets/medium-heart/medium-heart.svg";
import arrowUp from "@/assets/arrow-up/arrow-up.svg";
import { useSelector, useDispatch } from "react-redux";
import HeroCard from "../HeroCard/HeroCard";
import {
  setLikedSection,
  toggleLikedSection,
} from "@/Store/likedSection/LikedSectionSlice";
import { RootState } from "@/Store/Store";
import HeroInterface from "@/interfaces/HeroInterface/HeroInterface";


interface Props {
  loading: boolean;
}

export default function LikedSection({ loading }: Props) {
  // const [showLiked, setShowLiked] = useState(false);
  const dispatch = useDispatch();
  const showLiked = useSelector((state: RootState) => state.likedSection.show);
  const likeSection = useRef<HTMLDivElement>(null);
  const likedHeroes = useSelector((state: RootState) => state.heroes.likedHeroes);

  if (loading)
    return (
      <div className="flex flex-col items-start w-full h-auto">
        <Loader />
      </div>
    );

  const handleEndTransition = () => {
    if (!showLiked) {
      likeSection.current!.classList.add("hidden");
    }
  };

  // function that returns a react node
  const renderLikedHeroes = (): JSX.Element => {

    // remove first item of array and save the new array
    



    const lastItem = likedHeroes[likedHeroes.length - 1];

    return (
      <div className={`flex flex-wrap gap-4`}>
        {likedHeroes.map((hero: HeroInterface) => (
          <HeroCard
            key={hero.id}
            name={hero.name}
            biography={hero.biography}
            powerstats={hero.powerstats}
            images={hero.images}
            id={hero.id}
            liked={true}
            lastLiked={lastItem.id === hero.id}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div
        className={
          showLiked
            ? "w-full h-[74px] bg-darkPurple bg-opacity-[28%] rounded-t-[16px] p-[16px] border-b-0 border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between"
            : "w-full h-[74px] bg-cardLoader bg-opacity-[28%] rounded-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between cursor-pointer"
        }
        onClick={() => (showLiked ? "" : dispatch(setLikedSection(true)))}
      >
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
          onClick={() => dispatch(toggleLikedSection())}
          className={
            showLiked
              ? "h-[40px] w-[40px] rounded-[32px] p-[8px] g-[10px] bg-white bg-opacity-10 cursor-pointer duration-300"
              : "h-[40px] w-[40px] rounded-[32px] p-[8px] g-[10px] rotate-[180deg] bg-white bg-opacity-10 cursor-pointer duration-300"
          }
        >
          <Image src={arrowUp} alt="arrow up" />
        </button>
      </div>

      <div
      id="likedSectionContainer"
        ref={likeSection}
        className={
          showLiked
            ? "w-full h-auto min-h-[167px] bg-darkPurple border-t-0 rounded-b-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex flex-row justify-between items-center duration-300 ease-linear"
            : "w-full hidden h-[0px] bg-darkPurple  border-t-0 rounded-b-[16px] p-[16px] border-solid border-[1px] border-cardLoader border-opacity-[44%] flex-row justify-between duration-300 transform -translate-y-1 ease-linear  opacity-0 -z-10"
        }
        onTransitionEnd={handleEndTransition}
      >
        <div className="w-full h-full">
          {likedHeroes.length > 0 ? (
            renderLikedHeroes()
          ) : (
            <div className="flex flex-col justify-center items-center">
              <Image
                src={mediumHeart}
                alt="small heart"
                className="h-[34px] w-[33px] mb-[15px]"
              />
              <h1 className="text-white font-primary_Medium text-[15px] text-center">
                You haven’t liked any superhero yet
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
