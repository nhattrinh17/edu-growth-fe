"use client";

import { ClassItem } from "@/components/home/ClassItem";
import { FilterClass } from "@/components/home/FilterClass";
import { useAppDispatch } from "@/lib";
import { resetDataClass } from "@/lib/redux/app/class.slice";
import { useClass } from "@/utils/handleClass";
import {
  faBorderAll,
  faChevronDown,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HomeSection(): JSX.Element {
  const [openSort, setOpenSort] = useState(false);
  const [typeShow, setTypeShow] = useState("list");
  const { data, total } = useClass();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetDataClass());
    };
  }, []);

  return (
    <main className="bg-[var(--bg-main-color)] py-12 lg:py-20">
      <section className="container">
        <div className="flex justify-between">
          <h3 className="text-2xl hidden flex-1 lg:block">
            {total} Kết quả phù hợp
          </h3>
          <div className="flex flex-1 lg:flex-none">
            <div
              onClick={() => setOpenSort((pre) => !pre)}
              className="cursor-pointer mr-auto relative flex items-center px-7 py-3 bg-white rounded-md border-[1.5px] border-[#E1E1E1]"
            >
              <p className="">Giá tăng dần</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-5 relative top-[-1px]"
              />
              <ul
                className={classNames(
                  "absolute left-0 top-[calc(100%+2px)] right-0 p-2 bg-white transition-all duration-500 ease-out",
                  {
                    hidden: !openSort,
                    block: openSort,
                    "animate-slideDown": openSort,
                    "animate-slideUp": !openSort,
                  }
                )}
              >
                <li className="py-3 cursor-pointer hover:bg-[var(--bg-main-color)]">
                  Giá tăng dần
                </li>
                <li className="py-3 cursor-pointer hover:bg-[var(--bg-main-color)]">
                  Giá giảm dần
                </li>
              </ul>
            </div>
            <div
              onClick={() => setTypeShow("list")}
              className={classNames(
                "mx-3 h-[48px] w-[48px] cursor-pointer rounded-sm flex items-center justify-center",
                {
                  "border-[1px] border-[#e1e1e1] bg-white": typeShow == "list",
                }
              )}
            >
              <FontAwesomeIcon
                icon={faListUl}
                color="#999999"
                className="text-xl"
              />
            </div>
            <div
              onClick={() => setTypeShow("grid")}
              className={classNames(
                "mx-3 h-[48px] w-[48px] cursor-pointer rounded-sm flex items-center justify-center",
                {
                  "border-[1px] border-[#e1e1e1] bg-white": typeShow == "grid",
                }
              )}
            >
              <FontAwesomeIcon
                icon={faBorderAll}
                color="#999999"
                className="text-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-5 lg:pt-10 grid lg:grid-cols-3 lg:gap-4">
        <FilterClass />
        <div
          className={classNames("col-span-2", {
            "grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-2":
              typeShow == "grid",
          })}
        >
          {data.map((item, index) => {
            return <ClassItem key={index} typeShow={typeShow} {...item} />;
          })}

          <div
            className={classNames("object-contain mx-auto", {
              hidden: data.length > 0,
            })}
          >
            <Image
              alt="no data"
              src={"/no-data-6.png"}
              width={512}
              height={512}
              className={classNames("object-contain mx-auto")}
            />
            <h3 className="text-center text-xl font-semibold text-red-400">
              Hiện tại chưa có lớp theo yêu cầu !!!
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
