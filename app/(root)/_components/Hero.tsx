"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="min-h-[90vh] pt-24 md:pt-18 grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full mx-auto px-4 lg:gap-5">
      <div className="self-center">
        <Link
          href={"/"}
          className="w-[125px] block lg:w-[250px] mb-6 max-lg:mx-auto"
        >
          <Image src="/icons/Logo.svg" alt="logo" width={250} height={85} />
        </Link>
        <h1 className="text-[24px] max-lg:text-center lg:text-[40px] text-[#464359] font-extrabold">
          IT-Outsourcing Company
        </h1>
        <div className="text-[#1b5bf7] max-lg:text-center lg:mb-[48px] text-[24px] lg:text-[40px] font-bold">
          <Typewriter
            options={{
              strings: [
                "Development of mobile applications",
                "Development and implementation ERP systems",
              ],
              autoStart: true,
              deleteSpeed: 80,
              loop: true,
            }}
          />
        </div>
        <button className="px-[13px] py-[16px] rounded-[10px] bg-[#1A5BF7] text-[20px] font-semibold text-white block max-lg:hidden">
          <span className="w-[200px] block">Contact</span>
        </button>
      </div>
      <div className="self-center max-lg:mx-auto">
        <Image
          src={"/images/heroImg.svg"}
          width={576}
          height={436}
          alt="HeroImage"
        />
      </div>
    </section>
  );
}

export default Hero;
