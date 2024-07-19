"use client"

import React from "react";
import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { useSkin } from "@/hooks/useSkin";
import Image from "next/image";
import Loader from "./Loader";

export default function App({ isOpen, onOpenChange, name, region, tier, rank, setView }: any) {

  const skinURL = useSkin(name);

  if(!isOpen){
    setView(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "bg-stone-800 py-16 px-8",
          backdrop: "bg-stone-900/20",
          base: "bg-inherit shadow-none border-none !text-white",
          closeButton:
            "size-8 bg-stone-600 hover:bg-stone-500 text-stone-800 top-2 right-2 z-50",
          wrapper: "!items-center z-[9999999]",
          header: "relative w-full h-24 bg-stone-400",
        }}
      >
        <ModalContent>
          <ModalHeader>
            {/* FRAME */}
            <div className="size-32 rounded-full bg-stone-900 absolute -bottom-12 left-5 overflow-clip flex items-center justify-center">
              {
                skinURL ? (
                  <>
                    <Image src={skinURL} width={120} height={120}  className="" alt={`${name}'s Minecraft Skin`}/>
                  </>
                ) : (
                  <Loader/>
                )
              }
            </div>
            <strong className="font-bold tracking-wide text-2xl max-md:text-xl absolute -bottom-3 left-[146px] rounded-xl bg-stone-800 px-2">
              {name}
            </strong>
          </ModalHeader>
          <ModalBody>
            <div className="w-full h-fit">
              <span className="text-stone-500">Region:</span>
              <div className="bg-neutral-900 w-48 h-9 rounded-xl flex items-center mt-2">
                <div
                  className={`${
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
                  }
      text-black font-bold w-12 h-[inherit] rounded-tl-xl rounded-bl-xl flex items-center justify-center text-xl
      `}
                >
                  {region.toUpperCase()}
                </div>
                <span className="px-2">
                  {region.toLowerCase() === "eu"
                    ? "Europe"
                    : region.toLowerCase() === "na"
                    ? "North America"
                    : region.toLowerCase() === "as"
                    ? "Asia"
                    : region.toLowerCase() === "me"
                    ? "Middle East"
                    : region.toLowerCase() === "sa"
                    ? "South America"
                    : region.toLowerCase() === "af"
                    ? "Africa"
                    : region.toLowerCase() === "au"
                    ? "Australia"
                    : ""}
                </span>
              </div>
            </div>

            <div className="w-full h-fit">
              <span className="text-stone-500">Tier:</span>
              <div className="bg-neutral-900 w-48 h-9 rounded-xl flex items-center mt-2">
                <div
                  className={`text-black font-bold w-12 px-1 h-[inherit] rounded-tl-xl rounded-bl-xl flex items-center text-xl
                  ${
                    tier === "Tier 1" ? "bg-yellow-500" :
                    tier === "Tier 2" ? "bg-zinc-200" :
                    tier === "Tier 3" ? "bg-amber-800" :
                    tier === "Tier 4" ? "bg-zinc-400" :
                    tier === "Tier 5" ? "bg-zinc-500" :
                    ""
                  }
                  `}
                >
                  {
                    tier === "Tier 1" ? "T1" :
                    tier === "Tier 2" ? "T2" :
                    tier === "Tier 3" ? "T3" :
                    tier === "Tier 4" ? "T4" :
                    tier === "Tier 5" ? "T5" :
                    "null"
                  }
                  {rank}
                </div>
                <span className="px-2">
                  {tier} 
                  <> {rank === "H" ? "High" : "Low"}</>
                </span>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
