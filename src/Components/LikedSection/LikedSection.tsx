import React from "react";
import Loader from "../Loader/Loader";


interface Props {
  loading: boolean;
}

export default function LikedSection({ loading }: Props) {
  if (loading)
    return (
        <div className="flex flex-col items-start w-full h-full">
            <Loader />
        </div>
    );

  return <div></div>;
}
