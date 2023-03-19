import Image from "next/image";
import Link from "next/link";
import etkIcon from "../public/images/ETK_transparent.png";

function Navbar() {
  return (
    <nav>
      <Link href={"/"}>
        <div className="flex justify-center items-center bg-[#111111] space-x-2 pt-2 pb-2">
          <Image src={etkIcon} alt="etk-icon" height={30} width={30} />
          <div className="">Elite Team Killerz</div>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
