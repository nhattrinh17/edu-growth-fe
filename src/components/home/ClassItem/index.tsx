import { faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export function ClassItem({ typeShow }: { typeShow: string }): JSX.Element {
  return (
    <div
      className={cx(
        "wrapper",
        "bg-white rounded-sm border-[1px] border-[var(--border-color-default)] transition-all duration-300 hover:shadow-md",
        {
          "lg:flex p-3 mb-5": typeShow == "list",
          "h-fit p-2 lg:p-0": typeShow == "grid",
        }
      )}
    >
      <div
        className={cx("cursor-pointer w-full flex flex-col", {
          "min-w-[33%] lg:max-w-[310px] lg:pr-5": typeShow == "list",
        })}
      >
        <Image
          alt="Image"
          src={
            "https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/03/gallery-10-580x452.jpg"
          }
          width={290}
          height={226}
          className="object-fill w-full flex-1 rounded-t-sm"
        />
        <button
          className={cx(
            "wrapper__view",
            "bg-[var(--bg-main-color)] mt-3 w-full py-2 text-[#999999] font-semibold",
            {
              block: typeShow == "list",
              hidden: typeShow != "list",
            }
          )}
        >
          Xem chi tiết
        </button>
      </div>
      <div>
        <div
          className={cx("pb-2", {
            "flex justify-between pt-6 lg:pt-0": typeShow == "list",
            "p-2": typeShow == "grid",
          })}
        >
          <div>
            <div
              className={cx("flex items-center", {
                "mt-2": typeShow == "grid",
              })}
            >
              <h3 className="text-base font-semibold">Toán - 12</h3>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={cx("text-[var(--secondary-color)] ml-2 text-sm")}
              />
            </div>
            <div className="flex">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className={cx("text-sm mr-2 text-[var(--secondary-color)]", {
                    hidden: typeShow == "grid",
                  })}
                />
                <p>Đống Đa, Hà Nội</p>
              </div>
              <div
                className={cx("ml-3 flex items-center", {
                  hidden: typeShow == "grid",
                })}
              >
                <FontAwesomeIcon
                  className="mr-2 text-[var(--secondary-color)]"
                  icon={faHeart}
                />
                <span>Save</span>
              </div>
            </div>
          </div>

          <div
            className={cx({
              hidden: typeShow == "grid",
            })}
          >
            <h4 className="font-semibold">Học phí:</h4>
            <span className="block">
              <b>250.000 VNĐ/b</b>
            </span>
          </div>
        </div>

        <div
          className={cx("flex items-center mb-2", {
            hidden: typeShow == "grid",
          })}
        >
          <h4 className="mr-2">Thời gian dạy: </h4>
          <ul className="flex flex-wrap">
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              MON
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              TUE
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              WED
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              THU
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              FRI
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)2c7b6326] text-[#2C7B63] bg-[#F0FAF7]">
              SAT
            </li>
            <li className="text-xs m-1 px-2 py-1 border-[1px] var(--border-color-default)EEEEEE] text-[#00000066] bg-[var(--bg-main-color)]">
              SUN
            </li>
          </ul>
        </div>

        <p
          className={cx("line-clamp-5", {
            hidden: typeShow == "grid",
          })}
        >
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble, On the other hand, we denounce with righteous indignation
          and dislike men who are so beguiled and demoralized by the charms of
          pleasure of the moment, so blinded by desire, that they cannot foresee
          the pain and trouble
        </p>

        <div
          className={cx("p-2 ", {
            hidden: typeShow == "list",
          })}
        >
          <div className="flex justify-between">
            <h4>Học phí :</h4>
            <span className="block text-sm">
              <b>250.000 VNĐ/b</b>
            </span>
          </div>
          <div className="flex justify-between">
            <h4>Số buổi dạy :</h4>
            <span className="block text-sm">
              <b>2 buổi/tuần</b>
            </span>
          </div>
          <div className="flex justify-between">
            <h4>Yêu cầu :</h4>
            <span className="block text-sm">
              <b>Sinh Viên Nữ</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
