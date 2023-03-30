import Image from "next/image";
import Link from "next/link";
import etkIcon from "../public/images/ETK_transparent.png";

function Navbar() {
  return (
    <nav className="items-center bg-[#111111] space-x-2 p-2 px-6">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={etkIcon} alt="etk-icon" height={30} width={30} />
            <div className="font-semibold hover:text-[#bd93f9] transition">
              Elite Team Killerz
            </div>
          </div>
        </Link>
        <div className="space-x-6 flex font-semibold">
          <Link href={"/brackets"}>
            {" "}
            <div className="hover:text-[#bd93f9] transition">Brackets</div>
          </Link>
          <Link href={"/about"}>
            <div className="hover:text-[#bd93f9] transition">About</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
