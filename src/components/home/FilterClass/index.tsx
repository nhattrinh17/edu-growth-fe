"use client";

import { useAppSelector } from "@/lib";
import { setQueryClass } from "@/lib/redux/app/class.slice";
import {
  faCheck,
  faPlus,
  faMinus,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function FilterClass(): JSX.Element {
  const subjects = [
    {
      id: 1,
      name: "Subject1",
    },
    {
      id: 2,
      name: "Subject2",
    },
    {
      id: 3,
      name: "Subject3",
    },
    {
      id: 4,
      name: "Subject4",
    },
    {
      id: 5,
      name: "Subject5",
    },
    {
      id: 6,
      name: "Subject6",
    },
    {
      id: 7,
      name: "Subject7",
    },
    {
      id: 8,
      name: "Subject8",
    },
  ];
  const [openSubject, setOpenSubject] = useState(true);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const { subjectId, eduLevelId, require, locationId } = useAppSelector(
    (state) => state.class
  );
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  const changeFilterSubject = (subject: number) => {
    const newSubjects = subjectId.includes(subject)
      ? subjectId.filter((i) => i != subject)
      : [...subjectId, subject];
    dispatch(
      setQueryClass({
        subjectId: newSubjects,
      })
    );
  };

  useEffect(() => {
    // Hàm để kiểm tra kích thước màn hình và cập nhật trạng thái showFilter
    const handleResize = () => {
      console.log("🚀 ~ handleResize ~ window.innerWidth:", window.innerWidth);
      if (window.innerWidth >= 768) {
        setShowFilter(true);
      }
    };

    // Gọi hàm handleResize ngay khi component mount để thiết lập trạng thái ban đầu
    handleResize();

    // Thêm event listener cho sự kiện resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="col-span-1 shadow-[0px_1px_3px_rgb(0 0 0 / 8%)]">
      <div
        onClick={() => setShowFilter((pre) => !pre)}
        className={classNames(
          "lg:hidden z-30 p-3 absolute bg-[var(--primary-color)] cursor-pointer top-[9%] right-0 rounded-l-lg",
          {
            hidden: showFilter,
          }
        )}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
      </div>
      <section
        className={classNames(
          "fixed top-0 right-0 h-[100%] z-20 transition-all w-[80%] lg:w-full lg:relative lg:h-fit bg-white border-[1px] border-[#eeeeee] p-4",
          {
            "hidden w-0": showFilter == false,
            "max-lg:animate-slideLeft": showFilter,
          }
        )}
      >
        <div
          onClick={() => setShowFilter((pre) => !pre)}
          className={classNames(
            "lg:hidden z-30 p-3 absolute bg-[var(--primary-color)] cursor-pointer top-[9%] right-0 rounded-l-lg",
            {
              "right-full": showFilter,
            }
          )}
        >
          <FontAwesomeIcon icon={faXmark} className="text-white" />
        </div>
        <div>
          <div
            onClick={() => setOpenSubject((pre) => !pre)}
            className="flex items-center justify-between py-3 cursor-pointer"
          >
            <h3 className="text-base font-semibold">Môn học</h3>
            <FontAwesomeIcon icon={openSubject ? faMinus : faPlus} />
          </div>
          <div
            className={classNames(
              "overflow-hidden transition-all duration-700",
              {
                "max-h-0": !openSubject,
                "max-h-[1000px]": openSubject,
              }
            )}
          >
            <h4 className="font-semibold mb-3">Chọn môn học</h4>
            <ul className="transition-all ease-linear duration-300">
              {subjects.map(
                (subject, index) =>
                  (index < 5 || showAllSubjects) && (
                    <li
                      key={index}
                      className="flex w-full justify-start items-center"
                    >
                      <input
                        onClick={(e) => {
                          changeFilterSubject(subject.id);
                        }}
                        type="checkbox"
                        className="hidden"
                        id={`subject-${subject.id}`}
                      />
                      <label
                        htmlFor={`subject-${subject.id}`}
                        className={classNames(
                          "flex items-start cursor-pointer justify-center w-5 h-5 border-[1.5px] rounded-[4px] mr-2 border-[#DDDDDD] transition-colors duration-500",
                          {
                            "bg-[var(--secondary-color)]": subjectId.includes(
                              subject.id
                            ),
                          }
                        )}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="white"
                          className={classNames("text-sm relative top-[2px]", {
                            block: subjectId.includes(subject.id),
                            hidden: !subjectId.includes(subject.id),
                          })}
                        />
                      </label>
                      <label
                        className="text-base cursor-pointer w-full"
                        htmlFor={`subject-${subject.id}`}
                      >
                        {subject.name}
                      </label>
                    </li>
                  )
              )}
              <button
                onClick={() => setShowAllSubjects((pre) => !pre)}
                className="w-full py-2 mt-2 bg-[var(--bg-main-color)] text-[#999999] font-semibold hover:text-black transition-colors duration-300"
              >
                {showAllSubjects ? "Ẩn bớt" : "Xem thêm"}
              </button>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <h3 className="text-base font-semibold">Cấp học</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <h3 className="text-base font-semibold">Học phí buổi</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <h3 className="text-base font-semibold">Yêu cầu giảng viên</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <h3 className="text-base font-semibold">Vị trí</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        <button className="mt-4 py-3 bg-[var(--primary-color)] w-full text-white rounded-lg font-semibold">
          Áp dụng lọc lớp
        </button>
        <button className="mt-4 py-3 bg-[#F7F8FC] text-[#999999] w-full rounded-lg font-semibold">
          Bỏ tất cả yêu cầu
        </button>
      </section>
    </div>
  );
}
