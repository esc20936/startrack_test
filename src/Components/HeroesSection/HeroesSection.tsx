import React from "react";
import { FixedSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Loader from "../Loader/Loader";
import Image from "next/image";
import search from "@/assets/search/search.svg";
import HeroCard from "../HeroCard/HeroCard";

interface Props {
  loading: boolean;
  data: any;
  error: any;
}

export default function HeroesSection({ loading, data, error }: Props) {
  if (loading)
    return (
      <div className="flex flex-col items-start w-full h-full mt-[53px]">
        <Loader amount={8} includeTopBar={true} />
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-col items-start w-full h-full mt-[53px]">
        <h1 className="text-white font-primary_Bold text-[28px]">
          Error fetching data
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen h-full mt-[38px]">
      {/* Section header*/}
      <div className="flex flex-row items-center justify-between w-full">
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
      <div className="w-full  h-4/5 mt-[33px] overflow-y-scroll overflow-x-hidden">
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeGrid
              columnCount={4}
              columnWidth={width / 4}
              rowHeight={174 + 14}
              rowCount={Math.ceil(data?.data?.length / 4)}
              height={window.innerHeight}
              width={window.innerWidth}
              className="grid w-full grid-cols-4 gap-4"
            >
              {({ columnIndex, rowIndex, style }) => (
                <div style={style} className="w-auto h-auto">
                  <HeroCard
                    key={data?.data[rowIndex * 4 + columnIndex]?.id}
                    name={data?.data[rowIndex * 4 + columnIndex]?.name}
                    realName={
                      data?.data[rowIndex * 4 + columnIndex]?.biography[
                        "full-name"
                      ]
                    }
                    stats={data?.data[rowIndex * 4 + columnIndex]?.powerstats}
                    image={data?.data[rowIndex * 4 + columnIndex]?.images.md}
                  />
                </div>
              )}
            </FixedSizeGrid>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
