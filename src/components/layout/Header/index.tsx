"use client";

import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";

const cx = classNames.bind(styles);

export function HeaderLayout(): JSX.Element {
  const headerRef = useRef<HTMLElement>(null);
  const navMobileRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.boxShadow =
            "rgba(100, 100, 111, 0.35) 0px 7px 29px 0px";
          headerRef.current.style.animation =
            "slideDown 0.5s ease-out forwards";
        } else {
          headerRef.current.style.boxShadow = "none";
          headerRef.current.style.animation = "none";
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
      className="sticky  top-0 w-full z-20 transition-colors bg-white duration-500"
    >
      <div className="container h-[var(--height-header)] flex items-center justify-between">
        <div className="cursor-pointer">
          <Image alt="Logo" src={"/logo.png"} width={228} height={41} />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex [&>li]:transition-colors [&>li]:cursor-pointer [&>li]:text-base [&>li]:px-5 [&>li]:py-3 ">
            <li
              className={cx(
                "font-[400] relative hover:text-[var(--primary-color)]"
              )}
            >
              <Link className="w-full h-full" href={"/"}>
                <span className={cx("relative", "nav__item")}>
                  Về Edu Growth
                </span>
              </Link>
            </li>
            <li
              className={cx(
                "font-[400] relative hover:text-[var(--primary-color)]"
              )}
            >
              <Link className="w-full h-full" href={"/"}>
                <span className={cx("relative", "nav__item")}>Đăng ký học</span>
              </Link>
            </li>
            <li
              className={cx(
                "font-[400] relative hover:text-[var(--primary-color)]"
              )}
            >
              <Link className="w-full h-full" href={"/"}>
                <span className={cx("relative", "nav__item")}>Gia sư</span>
              </Link>
            </li>
            <li
              className={cx(
                "font-[400] relative hover:text-[var(--primary-color)]"
              )}
            >
              <Link className="w-full h-full" href={"/"}>
                <span className={cx("relative", "nav__item")}>Tin tức</span>
              </Link>
            </li>
            <li
              className={cx(
                "font-[400] relative hover:text-[var(--primary-color)]"
              )}
            >
              <Link className="w-full h-full" href={"/"}>
                <span className={cx("relative", "nav__item")}>Liên hệ</span>
              </Link>
            </li>
          </ul>
        </div>

        <form className="relative hidden lg:block">
          <input
            required
            className="p-3 text-[#696969] bg-[#f5f5f5] rounded-md min-w-[250px] outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 bottom-0 right-3"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[var(--primary-color)]"
            />
          </button>
        </form>

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
              onClick={() => setShowNav(false)}
              ref={navMobileRef}
              className="fixed top-0 right-0 bottom-0 left-0 bg-[#000000b3] z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white animate-slideLeft h-full w-[90%] ml-auto"
              >
                <div className="h-[var(--height-header)] flex items-center justify-between px-5 py-3">
                  <Link href={"/"} className="p-2 h-full flex items-center">
                    <Image
                      alt="Logo"
                      src={"/logo.png"}
                      width={160}
                      height={50}
                      className="object-contain"
                    />
                  </Link>
                  <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faX}
                    className="text-3xl"
                  />
                </div>
                <ul className="[&>li]:transition-colors [&>li]:cursor-pointer [&>li]:text-base [&>li]:px-5 [&>li]:py-6 [&>li]:text-white [&>li]:border-b-[1px] [&>li]:border-[darkgrey] bg-[var(--bg-nav-mobile)] h-full px-4">
                  <li className="hover:text-[var(--primary-color)]">
                    Về Edu Growth
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link className="w-full h-full" href={"/"}>
                      Lớp Học
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link className="w-full h-full" href={"/"}>
                      Phụ Huynh
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link className="w-full h-full" href={"/"}>
                      Gia sư
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link className="w-full h-full" href={"/"}>
                      Tin tức
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}
