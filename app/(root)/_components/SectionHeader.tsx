interface Props {
  title: string;
}

function SectionHeader({ title }: Props) {
  return (
    <h2 className="text-[#1b5bf7] font-extrabold text-[32px] mb-5 lg:text-[58px] lg:mb-11">
      {title}
    </h2>
  );
}

export default SectionHeader;
