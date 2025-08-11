'use client'

import Image from "next/image";
import { MenuExpanded } from "./MenuExpanded";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState, useCallback } from "react";
import { SearchPanel } from "../search-panel/SearchPanel";

export function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const open = useCallback(() => setOpenSearch(true), []);
  const close = useCallback(() => setOpenSearch(false), []);

  return (
    <>
      <nav className="2xl:px-30 
                       xl:px-22
                       lg:px-16
                       flex justify-between items-center  py-18 bg-red-100">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Interface da plataforma Site.Set"
            width={638}
            height={82}
          />
        </Link>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            aria-label="Abrir busca"
            className="p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            onClick={open}
          >
            <Search color="white" size={75} strokeWidth={3} />
          </button>

          <MenuExpanded />
        </div>
      </nav>
      <SearchPanel open={openSearch} onClose={close} />
    </>
  );
}
