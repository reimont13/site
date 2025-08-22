"use client";

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
      <nav
        className="2xl:px-30 
                    xl:px-22
                    lg:px-16
                    md:px-12
                    sm:px-10
                    xs:px-8
                    px-6
                   2xl:py-16
                    xl:py-14
                    lg:py-12
                    md:py-10
                    sm:py-8
                    xs:py-6
                    py-4
                    flex justify-between items-center bg-red-100"
      >
        <Link href={"/"}>
          <div
            className="2xl:w-[40rem] 
                          xl:w-[34rem] 
                          lg:w-[30rem]
                          md:w-[28rem]
                          sm:w-[26rem]
                          xs:w-[20rem]
                          w-[14rem]
                          relative"
          >
            <Image
              src="/logo.svg"
              alt="Interface da plataforma Site.Set"
              width={638}
              height={83}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>

        <div
          className="flex 
                        2xl:gap-4
                        xl:gap-3
                        lg:gap-2
                        md:gap-1
                         items-center"
        >
          <button
            type="button"
            aria-label="Abrir busca"
            className="p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            onClick={open}
          >
            <Search
              color="white"
              strokeWidth={3}
              className="
            2xl:w-19 2xl:h-19 
            xl:w-17 xl:h-17 
            lg:w-15 lg:h-15 
            md:w-14 md:h-14
            sm:w-13 sm:h-13
            xs:w-12 xs:h-12
            w-10 h-10"
            />
          </button>

          <MenuExpanded />
        </div>
      </nav>
      <SearchPanel open={openSearch} onClose={close} />
    </>
  );
}
