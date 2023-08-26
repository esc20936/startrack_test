import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: Props) {
  return (
    <div className="min-h-screen w-full px-[128px] mt-[68px]">
      {children}
    </div>
  );
}
