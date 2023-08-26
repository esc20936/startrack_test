"use client";
import Header from "@/Components/Header/Header";
import { useState } from "react";
import ContentContainer from "@/Components/ContentContainer/ContentContainer";
import LikedSection from "@/Components/LikedSection/LikedSection";
import HeroesSection from "@/Components/HeroesSection/HeroesSection";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex flex-col w-full min-h-screen bg-darkPurple">
      <Header />
      <ContentContainer>
        <LikedSection loading={loading} />
        <HeroesSection loading={loading} />
      </ContentContainer>
    </main>
  );
}
