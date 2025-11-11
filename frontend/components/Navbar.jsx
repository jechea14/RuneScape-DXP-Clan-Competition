import Image from "next/image";
import Link from "next/link";
import etkIcon from "../public/images/ETK_transparent.png";
import { BsDiscord } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="items-center bg-[#111111] space-x-2 p-2 px-6">
      <div className="flex items-center justify-between">
        {/* Home */}
        <Link href={"/"}>
          <div className="flex items-center space-x-2">
            <Image src={etkIcon} alt="etk-icon" height={30} width={30} />
            <div className="font-semibold hover:text-[#bd93f9] transition">
              Elite Team Killerz
            </div>
          </div>
        </Link>
        <div className="space-x-6 flex font-semibold items-center">
          {/* Brackets Link */}
          <Link href={"/brackets"}>
            {" "}
            <div className="hover:text-[#bd93f9] transition">Brackets</div>
          </Link>
          {/* Rules Link */}
          {/* <Link href={"/rules"}>
            <div className="hover:text-[#bd93f9] transition">Rules</div>
          </Link> */}
          {/* Discord Link */}
          {/* <Link href={"https://discord.com/invite/gdKQjsYMDE"} target="_blank">
            <div className="hover:text-[#bd93f9] transition">
              <BsDiscord size={22} />
            </div>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
