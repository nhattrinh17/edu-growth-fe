"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HeaderLayout(): JSX.Element {
  const headerRef = useRef<HTMLElement>(null);
  const navMobileRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.backgroundColor = "white";
          headerRef.current.style.boxShadow =
            "rgba(100, 100, 111, 0.35) 0px 7px 29px 0px";
        } else {
          headerRef.current.style.backgroundColor = "var(--bg-main-color)";
          headerRef.current.style.boxShadow = "none";
        }
      }
    };

    const handleClickOutside = (e: Event) => {
      if (e.target && navMobileRef?.current) {
        if (!navMobileRef.current.contains(e.target as Node)) {
          setShowNav(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full z-20 transition-colors bg-[var(--bg-main-color)] duration-500"
    >
      <div className="container h-[89px] flex items-center justify-between">
        <div className="cursor-pointer">
          <Image alt="Logo" src={"/logo.png"} width={228} height={41} />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex [&>li]:transition-colors [&>li]:cursor-pointer [&>li]:text-base [&>li]:px-5 [&>li]:py-3 ">
            <li className="font-bold hover:text-[#2D69F0]">Về Edu Growth</li>
            <li className="font-bold hover:text-[#2D69F0]">Lớp Học</li>
            <li className="font-bold hover:text-[#2D69F0]">Phụ Huynh</li>
            <li className="font-bold hover:text-[#2D69F0]">Gia sư</li>
            <li className="font-bold hover:text-[#2D69F0]">Tin tức</li>
          </ul>
          <button className="ml-6 md cursor-pointer py-3 px-[40px_!important] rounded-lg text-white font-semibold bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-[#333] transition-colors">
            Liên hệ
          </button>
        </div>

        <div className="lg:hidden">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowNav((pre) => !pre);
            }}
            className="px-3 py-2 border-[1px] bg-white rounded-lg cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>

          {showNav ? (
            <div
              ref={navMobileRef}
              className="fixed animate-slideRight top-0 left-0 h-full w-[60%] bg-white z-50"
            >
              <Link href={"/"} className="p-3 flex justify-center">
                <Image
                  alt="Logo"
                  src={"/logo.png"}
                  width={160}
                  height={50}
                  className="w-auto object-contain"
                />
              </Link>
              <ul className="[&>li]:transition-colors [&>li]:cursor-pointer [&>li]:text-base [&>li]:px-5 [&>li]:py-3 ">
                <li className="font-bold hover:text-[#2D69F0]">
                  Về Edu Growth
                </li>
                <li className="font-bold hover:text-[#2D69F0]">Lớp Học</li>
                <li className="font-bold hover:text-[#2D69F0]">Phụ Huynh</li>
                <li className="font-bold hover:text-[#2D69F0]">Gia sư</li>
                <li className="font-bold hover:text-[#2D69F0]">Tin tức</li>
              </ul>
              <button className="ml-6 md cursor-pointer py-3 px-[40px_!important] rounded-lg text-white font-semibold bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-[#333] transition-colors">
                Liên hệ
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}
