"use client";
import Header from "@/Components/Header/Header";
import { useState } from "react";
import ContentContainer from "@/Components/ContentContainer/ContentContainer";
import LikedSection from "@/Components/LikedSection/LikedSection";
import HeroesSection from "@/Components/HeroesSection/HeroesSection";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import getHeroes from "@/api/getHeroes/getHeroes";
import { useDispatch } from "react-redux";
import {
  setAllHeroes,
  setAllHeroesWithOutLiked,
} from "@/Store/HeroesList/HeroesList";
import { setLikedSection } from "@/Store/likedSection/LikedSectionSlice";


export default function Home() {
  const dispatch = useDispatch();

  const handleOpenLikedSection = () => {
    if (localStorage.getItem("likedSectionOpen") === null) {
      localStorage.setItem("likedSectionOpen", JSON.stringify(false));
    } else {
      // get the value from local storage
      const value = JSON.parse(localStorage.getItem("likedSectionOpen")!);
      // set the value to the state
      dispatch(setLikedSection(value));
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getHeroes,
    staleTime: Infinity,
    cacheTime: Infinity,

    onSuccess: (data) => {
      handleOpenLikedSection();

      if (localStorage.getItem("likedHeroes") === null) {
        localStorage.setItem("likedHeroes", JSON.stringify([]));
        dispatch(setAllHeroes(data?.data));
      } else {
        let payload = {
          allHeroes: data?.data,
          idArrayOfLikedHeroes: JSON.parse(
            localStorage.getItem("likedHeroes")!
          ),
        };

        dispatch(setAllHeroesWithOutLiked(payload));
      }
    },
  });

  return (
    <main className="flex flex-col w-full min-h-screen bg-darkPurple">
      <Header />
      <ContentContainer>
        <LikedSection loading={isLoading} />
        <HeroesSection loading={isLoading} error={isError} />
      </ContentContainer>
    </main>
  );
}
