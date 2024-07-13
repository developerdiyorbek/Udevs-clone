import Image from "next/image";
import SectionHeader from "./SectionHeader";
import MinCard from "./MinCard";
import { optimization } from "@/constants/optimization";

function Optimization() {
  return (
    <section className="bg-[#f4f7ff] py-8 lg:py-20">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="max-w-[270px]">
          <SectionHeader title="Optimization Infrastructure" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div className="bgImage flex items-center justify-center">
            <Image
              src={"/images/erpsystemImage.png"}
              width={425}
              height={400}
              alt="developmentImage"
            />
          </div>
          <div>
            <h4 className="text-[16px] text-[#18191f] font-medium max-lg:mt-4 lg:text-[24px] mb-6">
              Our experienced professionals will help you optimize your
              infrastructure
            </h4>

            <div className="flex flex-wrap items-center">
              {optimization.map((item) => (
                <MinCard key={item.id} {...item} erpCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Optimization;
