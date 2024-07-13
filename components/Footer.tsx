import { footerLinks, socialMedia } from "@/constants/footerlinks";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#f4f7ff] pt-4 lg:pt-12">
      <div className="max-w-6xl w-full mx-auto px-3">
        <Link href={"/"} className="block">
          <Image
            src={"/favicon.svg"}
            alt="logo"
            width={125}
            height={41}
            className="mx-auto mb-1"
          />
        </Link>

        <div className="flex lg:items-center pt-4 pb-8 lg:pt-11  lg:justify-between max-lg:flex-col max-lg:gap-y-4 lg:border-b-2">
          <div>
            <h4 className="mb-4 text-[20px]">About us</h4>
            <ul>
              {footerLinks.aboutUs.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1b5bf7] hover:underline text-[16px] mb-1 font-medium cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[20px]">Services</h4>
            <ul>
              {footerLinks.services.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1b5bf7] hover:underline text-[16px] mb-1 font-medium cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[20px]">Portfolio</h4>
            <ul>
              {footerLinks.portfolio.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1b5bf7] hover:underline text-[16px] mb-1 font-medium cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:py-6 py-4 flex justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-3">
          <p className="text-[#1b5bf7] text-[14px] lg:text-[15px] font-medium">
            © 2024 Udevs. All rights reserved
          </p>
          <div className="flex items-center gap-2">
            {socialMedia.map((item) => (
              <div
                className="bg-[#1b5bf7] p-[7px] rounded-full flex justify-center items-center text-white"
                key={item.id}
              >
                <item.icon size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
