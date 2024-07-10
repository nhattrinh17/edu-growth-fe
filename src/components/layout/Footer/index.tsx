"use client";

import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export function FooterLayout(): JSX.Element {
  return (
    <footer className="block">
      <div className="bg-[#3954d5] ">
        <div className="container lg:flex justify-between py-4">
          <div className="flex items-center mb-4 lg:mb-0">
            <Image alt="Email" src={"email.svg"} width={42} height={42} />
            <h2 className="text-xl ml-4 text-white font-bold">
              Đăng Ký Nhận Thông Báo
            </h2>
          </div>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <div className="flex max-w-[65%] lg:max-w-max bg-white rounded-md mr-4">
              <div className="border-[1px] py-3 px-2 flex rounded-l-md items-center border-[#ced4da] bg-[#e9ecef] ">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                required
                type="email"
                className="px-3 rounded-r-md lg:min-w-[300px] outline-none"
              />
            </div>
            <button className="text-white rounded-md cursor-pointer px-3 bg-[var(--primary-color)]">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      <div className="container text-base">
        <div className="my-10  grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="flex flex-col justify-between text-center lg:text-justify">
            <Image
              alt="Logo"
              src={"/logo.png"}
              height={52}
              width={285}
              className="w-full h-[52px] object-contain mb-2"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex justify-start">
              <FontAwesomeIcon
                className="mr-3 text-[var(--primary-color)]"
                icon={faLocationDot}
              />
              <Link href={"#"}>Nguyên Hồng, Đống Đa, TP. Hà Nội</Link>
            </div>
            <div className="flex justify-start">
              <Image
                className="mr-3"
                alt="Email"
                src={"email1.svg"}
                width={16}
                height={16}
              />
              <a href={"mailto:trinhminhnhatxt123@gmail.com"}>
                trinhminhnhatxt123
              </a>
            </div>
            <div className="flex justify-start">
              <FontAwesomeIcon
                className="mr-3 text-[var(--primary-color)]"
                icon={faClock}
              />
              <p>9 am - 5 pm</p>
            </div>
          </div>
          <div className="hidden lg:flex h-full flex-col">
            <div className="h-[52px] flex items-end">
              <h2 className="text-xl font-semibold">Về chúng tôi</h2>
            </div>
            <ul className="mt-2 flex-1 flex flex-col justify-around [&>li]:text-base [&>li]:pb-3">
              <li>Tổng quan</li>
              <li>Đội ngũ nhân sự</li>
              <li>Lịch sử hình thành</li>
              <li>Tuyển dụng</li>
              <li>Tin tức</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className="hidden lg:flex h-full flex-col">
            <div className="h-[52px] flex items-end">
              <h2 className="text-xl font-semibold">Về chúng tôi</h2>
            </div>
            <ul className="mt-2 flex-1 flex flex-col justify-around [&>li]:text-base [&>li]:pb-3">
              <li>Tổng quan</li>
              <li>Đội ngũ nhân sự</li>
              <li>Lịch sử hình thành</li>
              <li>Tuyển dụng</li>
              <li>Tin tức</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className="hidden lg:flex h-full flex-col">
            <div className="h-[52px] flex items-end">
              <h2 className="text-xl font-semibold">Theo dõi chúng tôi</h2>
            </div>
            <ul className="flex mt-2">
              <li className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-[var(--bg-icon-color)] text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-[var(--bg-icon-color)] text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-[var(--bg-icon-color)] text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-[var(--bg-icon-color)] text-white">
                <FontAwesomeIcon icon={faTelegram} />
              </li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3082603064086!2d105.80964917596965!3d21.020348288066124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab65e12f5745%3A0x2da9ff8ce50d7f26!2zUC4gTmd1ecOqbiBI4buTbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1720503806746!5m2!1svi!2s"
              width="auto"
              height="auto"
              //   style="border:0;"
              className="mt-4"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#D7D7D7]">
        <div className="container py-4 block lg:flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1 text-center lg:text-justify">
              Trung Tâm Gia Sư Edu Growth{" "}
            </h1>
            <div className="hidden lg:flex">
              <b>Trụ sở chính :</b>
              <p>Đống Đa, Hà Nội, Việt Nam</p>
            </div>
          </div>
          <div className="flex">
            <Image
              alt="BCT"
              src={"/e47a3187-bct-dk.png"}
              width={188}
              height={71}
              className="mr-2"
            />
            <Image
              alt="BCT"
              src={"/e3f2c736-bct-tb.png"}
              width={188}
              height={71}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
