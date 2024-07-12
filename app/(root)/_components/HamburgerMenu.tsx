import { Menu } from "lucide-react";

function HamburgerMenu() {
  return (
    <div className="block lg:hidden">
      <button className="text-[#1A5BF7] text-[24px]">
        <Menu />
      </button>
    </div>
  );
}

export default HamburgerMenu;
