"use client";

import { useAppSelector } from "@/lib";
import { refreshDataClass, setQueryClass } from "@/lib/redux/app/class.slice";
import { getAllEduLevel, getAllLocation, getAllSubject } from "@/utils/api";
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
  const [subjects, setSubject] = useState<
    {
      name: string;
      id: number;
    }[]
  >([]);
  const [eduLevels, setEduLevel] = useState<
    {
      name: string;
      id: number;
    }[]
  >([]);
  const [locations, setLocation] = useState<
    {
      district: string;
      province: string;
      id: number;
    }[]
  >([]);
  const require = [
    {
      name: "Sinh viên",
      id: 0,
    },

    {
      name: "Giảng viên",
      id: 3,
    },
  ];

  const [openSubject, setOpenSubject] = useState(true);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [openEduLevel, setOpenEduLevel] = useState(true);
  const [showAllEduLevels, setShowAllEduLevels] = useState(false);
  const [openLocation, setOpenLocation] = useState(true);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [openRequire, setOpenRequire] = useState(true);
  const {
    subjectId,
    eduLevelId,
    require: requireId,
    locationId,
  } = useAppSelector((state) => state.class);
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

  const changeFilterEduLevel = (eduLevel: number) => {
    const newEduLevelId = eduLevelId.includes(eduLevel)
      ? eduLevelId.filter((i) => i != eduLevel)
      : [...eduLevelId, eduLevel];
    dispatch(
      setQueryClass({
        eduLevelId: newEduLevelId,
      })
    );
  };

  const changeFilterLocation = (location: number) => {
    const newLocations = locationId.includes(location)
      ? locationId.filter((i) => i != location)
      : [...locationId, location];
    dispatch(
      setQueryClass({
        locationId: newLocations,
      })
    );
  };

  const changeFilterRequire = (require: number) => {
    const newRequires = requireId.includes(require)
      ? requireId.filter((i) => i != require)
      : [...requireId, require];
    dispatch(
      setQueryClass({
        require: newRequires,
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

  useEffect(() => {
    async function fetchData() {
      const [resSubject, resEduLevel, resLocation] = await Promise.all([
        getAllSubject(1, 100),
        getAllEduLevel(1, 100),
        getAllLocation(1, 100),
      ]);

      if (resSubject.data || resEduLevel.data || resLocation.data) {
        const dataSubject = resSubject.data?.data;
        const dataEduLevel = resEduLevel.data?.data;
        const dataLocation = resLocation.data?.data;
        setSubject(dataSubject);
        setEduLevel(dataEduLevel);
        setLocation(dataLocation);
      }
    }

    fetchData();
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
          "fixed top-0 right-0 h-[100%] z-20 lg:z-0 transition-all w-[80%] lg:w-full lg:relative lg:h-fit bg-white border-[1px] border-[#eeeeee] p-4",
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
                  (index < 4 || showAllSubjects) && (
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
                className={classNames(
                  "w-full py-2 mt-2 bg-[var(--bg-main-color)] text-[#999999] font-semibold hover:text-black transition-colors duration-300",
                  {
                    hidden: subjects.length < 5,
                  }
                )}
              >
                {showAllSubjects ? "Ẩn bớt" : "Xem thêm"}
              </button>
            </ul>
          </div>
        </div>
        <div>
          <div
            onClick={() => setOpenEduLevel((pre) => !pre)}
            className="flex items-center justify-between py-3 cursor-pointer"
          >
            <h3 className="text-base font-semibold">Cấp học</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div
            className={classNames(
              "overflow-hidden transition-all duration-700",
              {
                "max-h-0": !openEduLevel,
                "max-h-[1000px]": openEduLevel,
              }
            )}
          >
            <h4 className="font-semibold mb-3">Chọn cấp học</h4>
            <ul className="transition-all ease-linear duration-300">
              {eduLevels.map(
                (eduLevel, index) =>
                  (index < 4 || showAllEduLevels) && (
                    <li
                      key={index}
                      className="flex w-full justify-start items-center"
                    >
                      <input
                        onClick={(e) => {
                          changeFilterEduLevel(eduLevel.id);
                        }}
                        type="checkbox"
                        className="hidden"
                        id={`EduLevel-${eduLevel.id}`}
                      />
                      <label
                        htmlFor={`EduLevel-${eduLevel.id}`}
                        className={classNames(
                          "flex items-start cursor-pointer justify-center w-5 h-5 border-[1.5px] rounded-[4px] mr-2 border-[#DDDDDD] transition-colors duration-500",
                          {
                            "bg-[var(--secondary-color)]": eduLevelId.includes(
                              eduLevel.id
                            ),
                          }
                        )}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="white"
                          className={classNames("text-sm relative top-[2px]", {
                            block: eduLevelId.includes(eduLevel.id),
                            hidden: !eduLevelId.includes(eduLevel.id),
                          })}
                        />
                      </label>
                      <label
                        className="text-base cursor-pointer w-full"
                        htmlFor={`EduLevel-${eduLevel.id}`}
                      >
                        {eduLevel.name}
                      </label>
                    </li>
                  )
              )}
              <button
                onClick={() => setShowAllEduLevels((pre) => !pre)}
                className={classNames(
                  "w-full py-2 mt-2 bg-[var(--bg-main-color)] text-[#999999] font-semibold hover:text-black transition-colors duration-300",
                  {
                    hidden: eduLevels.length < 5,
                  }
                )}
              >
                {showAllEduLevels ? "Ẩn bớt" : "Xem thêm"}
              </button>
            </ul>
          </div>
        </div>
        {/* <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <h3 className="text-base font-semibold">Học phí buổi</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div> */}
        <div>
          <div
            onClick={() => setOpenLocation((pre) => !pre)}
            className="flex items-center justify-between py-3 cursor-pointer"
          >
            <h3 className="text-base font-semibold">Vị trí</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <div
            className={classNames(
              "overflow-hidden transition-all duration-700",
              {
                "max-h-0": !openLocation,
                "max-h-[1000px]": openLocation,
              }
            )}
          >
            <h4 className="font-semibold mb-3">Chọn vị trí</h4>
            <ul className="transition-all ease-linear duration-300">
              {locations.map(
                (Location, index) =>
                  (index < 4 || showAllLocations) && (
                    <li
                      key={index}
                      className="flex w-full justify-start items-center"
                    >
                      <input
                        onClick={(e) => {
                          changeFilterLocation(Location.id);
                        }}
                        type="checkbox"
                        className="hidden"
                        id={`Location-${Location.id}`}
                      />
                      <label
                        htmlFor={`Location-${Location.id}`}
                        className={classNames(
                          "flex items-start cursor-pointer justify-center w-5 h-5 border-[1.5px] rounded-[4px] mr-2 border-[#DDDDDD] transition-colors duration-500",
                          {
                            "bg-[var(--secondary-color)]": locationId.includes(
                              Location.id
                            ),
                          }
                        )}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="white"
                          className={classNames("text-sm relative top-[2px]", {
                            block: locationId.includes(Location.id),
                            hidden: !locationId.includes(Location.id),
                          })}
                        />
                      </label>
                      <label
                        className="text-base cursor-pointer w-full"
                        htmlFor={`Location-${Location.id}`}
                      >
                        {Location.province}-{Location.district}
                      </label>
                    </li>
                  )
              )}
              <button
                onClick={() => setShowAllLocations((pre) => !pre)}
                className={classNames(
                  "w-full py-2 mt-2 bg-[var(--bg-main-color)] text-[#999999] font-semibold hover:text-black transition-colors duration-300",
                  {
                    hidden: locations.length < 5,
                  }
                )}
              >
                {showAllLocations ? "Ẩn bớt" : "Xem thêm"}
              </button>
            </ul>
          </div>
        </div>
        <div>
          <div
            onClick={() => setOpenRequire((pre) => !pre)}
            className="flex items-center justify-between py-3 cursor-pointer"
          >
            <h3 className="text-base font-semibold">Yêu cầu giảng viên</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <div
            className={classNames(
              "overflow-hidden transition-all duration-700",
              {
                "max-h-0": !openRequire,
                "max-h-[1000px]": openRequire,
              }
            )}
          >
            <h4 className="font-semibold mb-3">Chọn yêu cầu</h4>
            <ul className="transition-all ease-linear duration-300">
              {require.map((require, index) => (
                <li
                  key={index}
                  className="flex w-full justify-start items-center"
                >
                  <input
                    onClick={(e) => {
                      changeFilterRequire(require.id);
                    }}
                    type="checkbox"
                    className="hidden"
                    id={`require-${require.id}`}
                  />
                  <label
                    htmlFor={`require-${require.id}`}
                    className={classNames(
                      "flex items-start cursor-pointer justify-center w-5 h-5 border-[1.5px] rounded-[4px] mr-2 border-[#DDDDDD] transition-colors duration-500",
                      {
                        "bg-[var(--secondary-color)]": requireId.includes(
                          require.id
                        ),
                      }
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      color="white"
                      className={classNames("text-sm relative top-[2px]", {
                        block: requireId.includes(require.id),
                        hidden: !requireId.includes(require.id),
                      })}
                    />
                  </label>
                  <label
                    className="text-base cursor-pointer w-full"
                    htmlFor={`require-${require.id}`}
                  >
                    {require.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => dispatch(refreshDataClass())}
          className="mt-4 py-3 bg-[var(--primary-color)] w-full text-white rounded-lg font-semibold"
        >
          Áp dụng lọc lớp
        </button>
        <button className="mt-4 py-3 bg-[#F7F8FC] text-[#999999] w-full rounded-lg font-semibold">
          Bỏ tất cả yêu cầu
        </button>
      </section>
    </div>
  );
}
