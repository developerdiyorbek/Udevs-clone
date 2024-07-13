import Image from "next/image";

interface Props {
  title: string;
  img: string;
  erpCard?: boolean;
}

function MinCard(card: Props) {
  return (
    <div
      className={`${
        card.erpCard ? "bg-[#e0e8ff]" : "bg-[#f4f7ff]"
      } rounded-[8px] p-2 lg:p-[10px] min-w-24 lg:min-w-[150px] lg:pr-5 mr-2 mb-2 lg:mr-[15px] lg:mb-[15px]`}
    >
      <Image
        src={card.img}
        alt={card.title}
        width={56}
        height={56}
        className="mb-6"
      />
      <p className={`text-[16px] sm:text-[18px] font-semibold`}>{card.title}</p>
    </div>
  );
}

export default MinCard;
