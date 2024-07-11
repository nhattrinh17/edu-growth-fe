"use client";

import { ClassItem } from "@/components/home/ClassItem";
import { GenderStudent, TypeRequireClass } from "@/constants";
import { useAppDispatch } from "@/lib";
import { resetDataClass } from "@/lib/redux/app/class.slice";
import { useClass, useClassDetail } from "@/utils/handleClass";
import {
  faBook,
  faBookmark,
  faCircleCheck,
  faClock,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ClassDetailPage(): JSX.Element {
  const params = useParams();
  const idClass = +params.id;
  const { data } = useClassDetail(idClass);
  const { data: dataClass } = useClass(!data?.subject.id);
  const dispatch = useAppDispatch();
  let textRequire = "";
  switch (data?.require) {
    case TypeRequireClass.student:
      textRequire = "Sinh viên";
      break;
    case TypeRequireClass.femaleStudent:
      textRequire = "Sinh viên nam";
      break;
    case TypeRequireClass.maleStudent:
      textRequire = "Sinh viên nữ";
      break;
    case TypeRequireClass.lecturers:
      textRequire = "Giảng viên";
      break;

    default:
      break;
  }

  useEffect(() => {
    return () => {
      dispatch(resetDataClass());
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 gap-6 container py-10">
        <section className="text-[var(--text-color-detail-class)]">
          <h2 className="text-xl font-semibold pb-6">
            Chi tiết lớp A{data?.id}
          </h2>
          <div className="flex mb-2 items-center">
            <span>Tình trạng:</span>
            <span className="text-[#28a745] ml-1">
              Đang còn
              <FontAwesomeIcon
                className="text-[#28a745] w-5 pr-2 ml-2"
                icon={faCircleCheck}
              />
            </span>
          </div>
          <div className="flex mb-2 items-center">
            <FontAwesomeIcon
              className="text-[#6c757d] w-5 pr-2"
              icon={faBook}
            />
            <h3 className="text-base font-semibold">
              {data?.subject.name} - Lớp {data?.class}
            </h3>
          </div>

          <div className="flex mb-2 items-center ">
            <FontAwesomeIcon
              className="text-[#6c757d] w-5 pr-2"
              icon={faLocationDot}
            />
            <h3 className="text-base">{data?.locationNear}</h3>
          </div>

          <div className="flex mb-2 items-center ">
            <FontAwesomeIcon
              className="text-[#6c757d] w-5 pr-2"
              icon={faDollarSign}
            />
            <h4 className="text-base ">{`${data?.price?.toLocaleString()} ₫/buổi, ${
              data?.numberSessions
            } buổi/tuần`}</h4>
          </div>

          <div className="flex mb-2 items-center ">
            <FontAwesomeIcon
              className="text-[#6c757d] w-5 pr-2"
              icon={faBookmark}
            />
            <p className="text-base ">{`Yêu cầu: ${textRequire}`}</p>
          </div>

          <div className="flex mb-2 items-center ">
            <FontAwesomeIcon
              className="text-[#6c757d] w-5 pr-2"
              icon={faClock}
            />
            <p className="text-base ">{`Thời gian có thể học: ${"Các buổi sáng, chiều, tối"}`}</p>
          </div>

          <div className="pb-5">
            <h5 className="text-base font-semibold">Đặc điểm học sinh: </h5>
            <div className="flex text-base ">
              <span>Giới tính: </span>
              <span>
                {data?.genderStudent == GenderStudent.Female ? "Nam" : "Nữ"}
              </span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: data?.studentStatus || "" }}
            ></div>
          </div>

          <div className="border-t-[1px] border-b-[1px] border-[#0000001a] py-5">
            <h5 className="text-base font-semibold">Thông tin bổ sung: </h5>

            <div
              dangerouslySetInnerHTML={{ __html: data?.moreInfoStudent || "" }}
            ></div>
          </div>

          <div className="flex py-5">
            <span className="">
              Mức thu nhập:
              <span className="font-semibold text-black">
                {(
                  (data?.price || 0) *
                  (data?.numberSessions || 0) *
                  4
                ).toLocaleString()}{" "}
                ₫/tháng
              </span>
            </span>
          </div>

          <button className="cursor-pointer font-semibold rounded-lg text-white px-5 py-3 bg-[var(--primary-color)]">
            Đăng ký nhận lớp
          </button>

          <div className="pt-5">
            <span>Phí nhận lớp: </span>
            <span className="font-semibold">{data?.receivingFee}%</span>
            <span className="text[#dadada] px-3">|</span>
            <span className="text-[#6c757d]">
              Chỉ nộp phí 1 lần, những tháng tiếp theo sẽ không mất phí
            </span>
          </div>
        </section>
        <section className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1446786998386!2d105.81423427596964!3d21.026896287841147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6e19693785%3A0x349b01c93d8836c!2zVlRWQ2FiIFRydXnhu4FuIEjDrG5oIEPDoXAgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1720669463206!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-[#6c757d] mt-4">
            Lưu ý: bản đồ thể hiện địa chỉ lớp gia sư một cách tương đối.
          </p>
        </section>
      </div>

      <div className="mt-5 border-t-[1px] border-b-[1px] border-[#0000001a] py-10">
        <div className="container">
          <h4 className="font-semibold text-xl">Các lớp tương tự:</h4>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {dataClass.map((item, index) => {
              return <ClassItem key={index} typeShow={"grid"} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
