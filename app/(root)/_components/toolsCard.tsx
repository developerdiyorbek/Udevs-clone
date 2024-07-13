import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

function ToolsCard(card: Props) {
  return (
    <div className="bg-[#dbe5ff] rounded-[5px] flex flex-col items-center justify-center h-[54px] lg:h-[90px]">
      <div className="relative size-[15px] lg:size-[24px] text-center">
        <Image src={card.img} alt={card.title} fill />
      </div>
      <p className="lg:text-[11px] text-[9px] mt-2 lg:mt-3">{card.title}</p>
    </div>
  );
}

export default ToolsCard;
