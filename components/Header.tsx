import HamburgerMenu from "@/app/(root)/_components/HamburgerMenu";
import { navLinks } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed h-16 md:h-18  inset-0 w-full z-40 border-b-[1px] bg-white border-[#E5E9F2]">
      <div className="flex px-4 h-full mx-auto items-center justify-between max-w-6xl w-full">
        <Link href={"/"} className="text-[#18191f]">
          <Image src={"/favicon.svg"} width={96} height={32} alt="Logo" />
        </Link>
        <div className="items-center gap-4  hidden lg:flex">
          <nav>
            {navLinks.map((item) => (
              <Link
                href={"/"}
                key={item.id}
                className="text-[14px] transition-all hover:border-[#1A5BF7] hover:border-b-[2px] mr-[15px] rounded-[2px] font-bold pb-2"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <button className="bg-[#1A5BF7] transition-transform duration-200 hover:scale-105 text-white font-bold px-[14px] py-[8px] rounded-[5px]">
            Contact
          </button>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
