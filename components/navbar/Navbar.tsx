import Image from "next/image";
import { MenuExpanded } from "./MenuExpanded";
import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-30 py-18 bg-red-100">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="Interface da plataforma Site.Set"
          width={638}
          height={82}
        />
      </Link>

      <div className="flex gap-4 items-center">
        <Link href={""}>
          <Search color="white" size={75} strokeWidth={3} />
        </Link>

        <MenuExpanded />
      </div>
    </nav>
  );
}
