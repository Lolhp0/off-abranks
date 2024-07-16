"use client";

import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <section className="w-full h-20 bg-zinc-950">
      <div className="w-full h-[inherit] flex items-center justify-between px-8">
        {/* BRAND START */}
        <div>
          <Link href="/" className="text-5xl text-stone-200 font-bold">
            ABRANKS
          </Link>
        </div>
        {/* BRAND END */}
        {/* NAVLIST START */}
        <div>
          <nav className="w-fit h-[inherit]">
            <ul className="w-fit h-[inherit] flex items-center justify-start gap-x-6">
              {NavLinks.map((link, index) => (
                <li key={index+1}>
                  <Link href={link.url}>
                    <div className={`relative py-1 px-6 rounded-xl hover:bg-zinc-800/90 ${link.url === pathName ? "bg-zinc-800/90" : ""}`}>
                      <span className="w-fit h-fit flex items-center justify-center mx-auto">
                        <Image
                          src={link.icon}
                          width={32}
                          height={32}
                          className={`object-contain duration-200 ${
                            link.url === pathName
                              ? "size-[38px] !fill-slate-500"
                              : ""
                          }`}
                          alt=""
                        />
                      </span>
                      <p className={`text-center ${link.url === pathName ? "font-extrabold" : ""}`}>{link.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* NAVLIST END */}
      </div>
    </section>
  );
};

export default Header;
