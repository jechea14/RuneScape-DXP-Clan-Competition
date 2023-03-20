import Image from "next/image";
import Link from "next/link";
import etkIcon from "../public/images/ETK_transparent.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#111111] space-x-2 p-2">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src={etkIcon} alt="etk-icon" height={30} width={30} />
          <div className="">Elite Team Killerz</div>
        </div>
      </Link>
      <div className="space-x-6">
        <Link href={"/brackets"}>Brackets</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
