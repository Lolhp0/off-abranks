import { infos } from "@/constants/info";
import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section className="w-full h-fit px-8 py-16">
      <head>
        <title>ABRANKS - Information</title>
      </head>
      <div>
        <h1 className="text-3xl font-p">Information</h1>
      </div>
      <div className="w-full gap-28 flex justify-start">
        <div className="w-3/6 h-fit pl-4">
          {infos.map((info) => (
            <>
              <div className="my-8 flex flex-col gap-2">
                <h2 className="text-2xl font-extrabold mb-2">{info.header}</h2>
                {info.body.map((body) => (
                  <p>{body}</p>
                ))}
                <div className="text-sm text-right text-stone-400">
                  By {info.author}
                </div>
              </div>
              <hr className="border-stone-600" />
            </>
          ))}
        </div>
        <div className="w-3/6 h-fit sticky top-0 left-0 pt-12">
          <div
            className="w-full h-12 bg-zinc-500 relative flex items-center justify-center 
          before:absolute
          before:-top-4
          before:left-7
          before:content-['']
          before:w-[12px]
          before:h-[74px]
          before:bg-zinc-900
          before:rotate-45
          before:shadow-angle-left

          after:absolute
          after:-top-4
          after:right-7
          after:content-['']
          after:w-[12px]
          after:h-[74px]
          after:bg-zinc-900
          after:-rotate-45
          after:shadow-angle-right
          "
          >
            <strong className="text-3xl tracking-wider font-p">KIT</strong>
          </div>
          <div className="relative w-full h-[473px]">
            <Image
              src="https://media.discordapp.net/attachments/1161651212500869301/1208101136826105866/image.png?ex=6696039c&is=6694b21c&hm=7e2ae1d11dc78edc4669fba6c06461dbef020ef394af58f90ac47a79db4bee0a&=&format=webp&quality=lossless&width=645&height=473"
              fill
              className="object-contain"
              alt="Kit"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
