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
      } rounded-[8px] p-2 lg:p-[10px] min-w-24 lg:max-w-[200px] lg:pr-5 mr-2 mb-2 lg:mr-[15px] lg:mb-[15px] flex-grow`}
    >
      <div className="relative size-[42px] lg:size-[56px]">
        <Image src={card.img} alt={card.title} className="mb-6" fill />
      </div>
      <p className={`text-[16px] sm:text-[18px] font-semibold`}>{card.title}</p>
    </div>
  );
}

export default MinCard;
