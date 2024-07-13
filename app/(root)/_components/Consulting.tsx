import Image from "next/image";
import SectionHeader from "./SectionHeader";
import MinCard from "./MinCard";
import { consultingInformation } from "@/constants/consulting";

function Consulting() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4 lg:py-20">
      <div className="max-w-[270px] lg:max-w-[800px]">
        <SectionHeader title="IT consulting" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-0 lg:mt-20">
        <div className="order-2 lg:order-1">
          <h3 className="text-[16px] lg:text-[24px] text-[#18191f] font-medium max-lg:mt-4 mb-6">
            We can improve the qualifications of your employees thereby
            increasing the efficiency of your company Frontend Frontend
          </h3>
          <div className="flex items-center flex-wrap my-4 lg:my-10">
            {consultingInformation.map((item) => (
              <MinCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2  flex items-center justify-center">
          <Image
            src={"/icons/consultingImage.svg"}
            width={500}
            height={313}
            alt="developmentImage"
          />
        </div>
      </div>
    </section>
  );
}

export default Consulting;
