"use client";

import React, { useState } from "react";

const Player = ({ name, region, rank, reason }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`w-full h-[32px] duration-100 cursor-pointer ${
        rank === "L"
          ? "bg-blue-600 hover:bg-blue-700"
          : rank === "H"
          ? "bg-blue-800 hover:bg-blue-800/95"
          : "bg-[#080c0c] hover:bg-[#080c0c]/75"
      } mb-[1px] flex items-center`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hovering={hover}
    >
      {/* REGION START */}
      {region && (
        <>
          <div
            className={`w-2 h-[inherit]
      ${
        region.toLowerCase() === "eu"
          ? "bg-green-400"
          : region.toLowerCase() === "na"
          ? "bg-red-500"
          : region.toLowerCase() === "as"
          ? "bg-yellow-600"
          : region.toLowerCase() === "me"
          ? "bg-orange-300"
          : region.toLowerCase() === "sa"
          ? "bg-amber-700"
          : region.toLowerCase() === "af"
          ? "bg-orange-500"
          : region.toLowerCase() === "au"
          ? "bg-cyan-500"
          : ""
      }`}
          ></div>
          <span
            className={`w-0 h-[inherit] flex items-center justify-center overflow-clip duration-[160ms] ease-[ease-out] bg-neutral-800 ${
              hover ? "!w-10 !px-2" : ""
            }`}
          >
            {region.toUpperCase()}
          </span>
        </>
      )}
      {/* REGION END */}
      {/* NAME START */}
      <span className={`mx-2.5 ${reason ? "text-stone-50" : "text-stone-950"} text-lg font-p`}>{name}</span>
      {/* NAME END */}
      {reason && (
        <p
          className={`ml-auto mr-2 text-white/70 opacity-0 duration-200 text-sm ${
            hover && "opacity-100"
          }`}
        >
          {reason}
        </p>
      )}
    </div>
  );
};

export default Player;
