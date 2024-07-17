"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {

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
                <NavItem title={link.title} index={index} icon={link.icon} url={link.url}/>
              ))}
            </ul>
          </nav>
        </div>
        {/* NAVLIST END */}
      </div>
    </section>
  );
};

const NavItem = ({title, icon, url, index}: {title: string; icon: string; url: string; index: number;}) => {
  const pathName = usePathname();
  const [hover, setHover] = useState(false);

  return (
    <li key={index+1}>
    <Link href={url}>
      <div className={`relative py-1 px-6 rounded-xl`} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <span className="w-fit h-fit flex items-center justify-center mx-auto">
          <Image
            src={icon}
            width={32}
            height={32}
            className={`object-contain duration-200  ${
              url === pathName
                ? "size-[38px] !fill-slate-500 drop-shadow-[0_0_12px_#fff]"
                : ""
            } ${hover ? "drop-shadow-[0_0_12px_#fff]" : ""}`}
            alt=""
          />
        </span>
        <p className={`text-center ${url === pathName ? "font-extrabold" : ""}`}>{title}</p>
      </div>
    </Link>
  </li>
  )
}

export default Header;
