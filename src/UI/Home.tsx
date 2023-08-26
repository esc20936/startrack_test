"use client";
import Header from "@/Components/Header/Header";
import { useState } from "react";
import ContentContainer from "@/Components/ContentContainer/ContentContainer";
import LikedSection from "@/Components/LikedSection/LikedSection";
import HeroesSection from "@/Components/HeroesSection/HeroesSection";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import getHeroes from "@/api/getHeroes/getHeroes";

export default function Home() {

  const {data, isLoading, error} = useQuery({ queryKey: ['todos'], queryFn: getHeroes })

  
  return (
    <main className="flex flex-col w-full min-h-screen bg-darkPurple">
      <Header />
      <ContentContainer>
        <LikedSection loading={isLoading} />
        <HeroesSection loading={isLoading} data={data} error={error} />
      </ContentContainer>
    </main>
  );
}
