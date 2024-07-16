"use client";

import { DiscordWidget, Footer, Header } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nunito = Nunito({subsets: ["latin"]})
const poppins = Poppins({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins"});

export default function App({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <main className={`w-full min-h-screen bg-zinc-900 text-white ${nunito.className} ${poppins.variable}`}>
      <Header/>
      <Component {...pageProps} />
      <div className="fixed bottom-2 right-8 z-[99999] flex flex-col items-end justify-start" onClick={() => setToggle(!toggle)}>
        {
          toggle && (
            <div className="mb-2">
              <DiscordWidget/>
            </div>
          )
        }
        <Image src="/discord-widget.svg" width={52} height={52}  className="object-contain duration-200 hover:scale-125 cursor-pointer" alt="discord widget"/>
      </div>
      <Footer/>
    </main>
  );
}
