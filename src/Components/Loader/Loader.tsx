import React from "react";
import ContentLoader from "react-content-loader";

interface Props {
  amount?: number;
  cols?: number;
  includeTopBar?: boolean;
}

export default function Loader({
  amount = 4,
  includeTopBar = true,
}: Props) {

  return (
    <div className={`w-full`}>
      {includeTopBar && (
        <div className="h-[27px] w-[285px] bg-cardLoader bg-opacity-25 rounded-xl animate-pulse" />
      )}
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-[15px] mt-[21px]">
        {Array.from({ length: amount }, (_, i) => (
          <div
            key={i}
            className="h-[174px] w-[285px] bg-cardLoader bg-opacity-25  rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
