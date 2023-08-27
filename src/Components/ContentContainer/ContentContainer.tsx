import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: Props) {
  return (
    <div className="h-full w-full px-[128px] mt-[68px]">
      {children}
    </div>
  );
}
