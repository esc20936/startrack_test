import React,{useEffect} from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: Props) {


  return (
    <div className="h-full w-full md:px-[128px] px-4 mt-[68px]">
      {children}
    </div>
  );
}
