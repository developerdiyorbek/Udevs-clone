import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

function ServiceCard(serviceCard: Props) {
  return (
    <div className="bg-[#f4f7ff] rounded-[8px] p-4 lg:p-12">
      <Image
        src={serviceCard.img}
        alt={serviceCard.title}
        width={35}
        height={35}
        className="mb-6"
      />
      <p className="text-[#18191f] text-[16px] sm:text-[20px] font-semibold">
        {serviceCard.title}
      </p>
    </div>
  );
}

export default ServiceCard;
