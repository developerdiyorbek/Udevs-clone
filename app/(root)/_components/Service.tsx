import { services } from "@/constants/service";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <section className="max-w-6xl w-full mx-auto px-4 py-24">
      <div className="max-lg:text-center">
        <SectionHeader title="Our services" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-16 lg:mt-20">
        {services.map((service) => (
          <ServiceCard {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
}

export default Service;
