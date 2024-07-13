import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

function TechnologiesCard(item: Props) {
  return (
    <div className="min-w-[60px] lg:min-w-[68px] lg:mr-12 mr-4 text-center">
      <Image
        src={item.img}
        alt={item.title}
        width={56}
        height={56}
        className="mx-auto mr-2"
      />
      <p>{item.title}</p>
    </div>
  );
}

export default TechnologiesCard;
