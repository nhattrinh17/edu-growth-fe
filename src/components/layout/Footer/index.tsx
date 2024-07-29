import Link from "next/link";

export function FooterLayout(): JSX.Element {
  return (
    <footer className="bg-white">
      <div className="container py-24 grid grid-cols-4 gap-5">
        <div className="col-span-4 lg:col-span-2">
          <h4 className="font-semibold text-lg text-black">Địa chỉ</h4>
          <ul className="text-[var(--text-footer-color)] text-[14px] font-medium">
            <li className="py-1">36B Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội</li>
            <li className="py-1">+84 328526957 (9am - 5pm, Thứ 2 - Thứ 7)</li>
            <li className="py-1">
              <a href="mail:vuthanhlocys11@gmail.com">
                vuthanhlocys11@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-semibold text-lg text-black">Địa chỉ</h4>
          <ul className="grid grid-cols-2 text-[var(--text-footer-color)] text-[14px] font-medium">
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Đăng ký học</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-semibold text-lg text-black">Điều khoản</h4>
          <ul className="text-[var(--text-footer-color)] text-[14px] font-medium">
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Chính sách cho gia sư</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Chính sách cho học viên</Link>
            </li>
            <li className="py-1 hover:text-[var(--primary-color)]">
              <Link href={""}>Điều khoản</Link>
            </li>
          </ul>
        </div>
        <span className="col-span-5 text-center text-[#ababab] text-sm font-medium pt-10">
          © 2020 Edu Growth. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
