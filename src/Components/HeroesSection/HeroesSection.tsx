import React from "react";
import Loader from "../Loader/Loader";


interface Props {
  loading: boolean;
}

export default function HeroesSection({ loading }: Props) {
  if (loading)
    return (
        <div className="flex flex-col items-start w-full h-full mt-[53px]">
            <Loader amount={8} includeTopBar={true} />
        </div>
    );



  return <div></div>;
}
