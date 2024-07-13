import Marquee from "react-fast-marquee";
import SectionHeader from "./SectionHeader";
import { clients } from "@/constants/clients";
import Image from "next/image";

function Clients() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-3">
        <SectionHeader title="Our clients" />
      </div>
      <Marquee direction="left" className="mb-5 lg:mb-14" speed={40}>
        <div className="flex items-center gap-6 lg:gap-7">
          {clients.map((item) => (
            <div
              className="relative w-[130px] h-[78px] lg:w-[213px] lg:h-[126px]"
              key={item.id}
            >
              <Image src={item.img} alt={item.img} fill />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right" className="mb-5 lg:mb-14" speed={40}>
        <div className="flex items-center gap-6 lg:gap-7">
          {clients.map((item) => (
            <div
              className="relative w-[130px] h-[78px] lg:w-[213px] lg:h-[126px]"
              key={item.id}
            >
              <Image src={item.img} alt={item.img} fill />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default Clients;
