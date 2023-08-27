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

export default function Home() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getHeroes,
    onSuccess: (data) => {
      if (localStorage.getItem("likedHeroes") === null) {
        localStorage.setItem("likedHeroes", JSON.stringify([1]));
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
        <HeroesSection loading={isLoading} error={error} />
      </ContentContainer>
    </main>
  );
}
