"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeaderLayout(): JSX.Element {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.backgroundColor = "white";
          headerRef.current.style.boxShadow =
            "rgba(100, 100, 111, 0.35) 0px 7px 29px 0px";
        } else {
          headerRef.current.style.backgroundColor = "inherit";
          headerRef.current.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full z-20 transition-colors bg-inherit duration-500"
    >
      <div className="container h-[89px] flex items-center justify-between">
        <div className="cursor-pointer">
          <Image alt="Logo" src={"/logo.png"} width={228} height={41} />
        </div>
        <div className="flex">
          <ul className="flex [&>li]:transition-colors [&>li]:cursor-pointer [&>li]:text-base [&>li]:px-5 [&>li]:py-3 ">
            <li className="font-bold hover:text-[#2D69F0]">Về Edu Growth</li>
            <li className="font-bold hover:text-[#2D69F0]">Lớp Học</li>
            <li className="font-bold hover:text-[#2D69F0]">Phụ Huynh</li>
            <li className="font-bold hover:text-[#2D69F0]">Gia sư</li>
            <li className="font-bold hover:text-[#2D69F0]">Tin tức</li>
          </ul>
          <button className="ml-6 cursor-pointer py-3 px-[40px_!important] rounded-lg text-white font-semibold bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-[#333] transition-colors">
            Liên hệ
          </button>
        </div>
      </div>
    </header>
  );
}
