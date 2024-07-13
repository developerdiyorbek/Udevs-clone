import Image from "next/image";
import SectionHeader from "./SectionHeader";

function Team() {
  return (
    <section className="bg-[#f4f7ff] py-8 lg:py-20">
      <div className="max-w-6xl mx-auto w-full px-4">
        <SectionHeader title="Team" />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <div className="text-[#464359] order-2 lg:order-1">
            <p className="font-medium text-[16px] mb-6 lg:text-[20px]">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <div className="text-[#1b5bf7] font-bold text-[80px] lg:mb-1 lg:text-[120px]">
              100+
            </div>
            <p className="lg:text-[40px] font-extrabold text-[24px]">
              Dedicated team
            </p>
          </div>
          <div className="max-lg:w-[300px] max-lg:m-8 max-lg:h-[251px] order-1 lg:order-2">
            <Image
              src={"/images/teamImage.svg"}
              alt="teamImage"
              width={470}
              height={395}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
