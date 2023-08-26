import React from "react";
import Loader from "../Loader/Loader";
import Image from "next/image";
import search from "@/assets/search/search.svg";
import HeroCard from "../HeroCard/HeroCard";
interface Props {
  loading: boolean;
}

const mockResponse = {
  id: 1,
  name: "A-Bomb",
  slug: "1-a-bomb",
  powerstats: {
    intelligence: 38,
    strength: 100,
    speed: 17,
    durability: 80,
    power: 24,
    combat: 64,
  },
  appearance: {
    gender: "Male",
    race: "Human",
    height: ["6'8", "203 cm"],
    weight: ["980 lb", "441 kg"],
    eyeColor: "Yellow",
    hairColor: "No Hair",
  },
  biography: {
    fullName: "Richard Milhouse Jones",
    alterEgos: "No alter egos found.",
    aliases: ["Rick Jones"],
    placeOfBirth: "Scarsdale, Arizona",
    firstAppearance: "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
    publisher: "Marvel Comics",
    alignment: "good",
  },
  work: {
    occupation: "Musician, adventurer, author; formerly talk show host",
    base: "-",
  },
  connections: {
    groupAffiliation:
      "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
    relatives:
      "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)",
  },
  images: {
    xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
    sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
    md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
    lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg",
  },
};

export default function HeroesSection({ loading }: Props) {
  if (loading)
    return (
      <div className="flex flex-col items-start w-full h-full mt-[53px]">
        <Loader amount={8} includeTopBar={true} />
      </div>
    );

  return (
    <div className="w-full flex flex-col min-h-screen h-full mt-[38px]">
      {/* Section header*/}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-white font-primary_Bold text-[28px]">
          All superheroes
        </h1>

        {/* search bar */}
        <div className="flex-row items-center gap-[10px] bg-white bg-opacity-[10%] p-[8px]   rounded-[32px] w-1/3 max-w-[371px] hidden md:flex">
          <Image src={search} alt="search" width={20} height={20} />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full font-primary_Regular text-white text-[15px]"
          />
        </div>
      </div>

      {/* heroes */}
      <div className="w-full  h-4/5 mt-[33px] overflow-y-scroll">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-[15px] mt-[21px]">
          {Array.from({ length: 16 }, (_, i) => (
            <HeroCard
              key={i}
              name={mockResponse.name}
              realName={mockResponse.biography.fullName}
              stats={mockResponse.powerstats}
              image={mockResponse.images.sm}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
