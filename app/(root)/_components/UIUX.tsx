import Image from "next/image";
import SectionHeader from "./SectionHeader";
import MinCard from "./MinCard";
import TechnologiesCard from "./TechnologiesCard";
import { uiuxInformation, uiuxTechnologies } from "@/constants/UIUX";

function UIUX() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4 lg:py-20">
      <div className="max-w-[270px] lg:max-w-[800px]">
        <SectionHeader title="UI / UX design" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-0 lg:mt-20">
        <div className="order-2 lg:order-1">
          <h3 className="text-[16px] lg:text-[24px] text-[#18191f] font-medium max-lg:mt-4 mb-6">
            In collaboration with startups, we have learned how to create a
            creative and functional user interface for mobile applications.
          </h3>
          <div className="flex items-center flex-wrap my-4 lg:my-10">
            {uiuxInformation.map((item) => (
              <MinCard key={item.id} {...item} />
            ))}
          </div>

          <h4 className="text-[32px] text-[#464359] font-extrabold">
            Technologies
          </h4>
          <div className="flex items-center flex-wrap my-4 lg:my-8">
            {uiuxTechnologies.map((item) => (
              <TechnologiesCard {...item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 bgImage flex items-center justify-center">
          <Image
            src={"/images/developmentImage.png"}
            width={425}
            height={400}
            alt="developmentImage"
          />
        </div>
      </div>
    </section>
  );
}

export default UIUX;
