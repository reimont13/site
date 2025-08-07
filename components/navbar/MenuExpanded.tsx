"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowBendUpRight } from "phosphor-react";
import Image from "next/image";
import { Menu } from "lucide-react";

export const menu = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export function MenuExpanded() {
  const [isShowing, setIsShowing] = useState(false);

  function openMenu() {
    document.body.classList.add("expanded");
    setIsShowing((isShowing) => !isShowing);
  }

  function closeMenu() {
    document.body.classList.remove("expanded");
    setIsShowing((isShowing) => !isShowing);
  }

  return (
    <section>
      <button
        aria-expanded="false"
        aria-label="Abrir menu"
        className={
          isShowing ? "hidden" : "pc:hidden text-white hover:text-cyan-300 "
        }
        onClick={openMenu}
      >
        <Menu color="white" size={75} strokeWidth={3} />
      </button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-[300ms]"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-[200ms]"
        leaveFrom="opacity-0 translate-y-100"
        leaveTo="opacity-100 translate-y-full"
      >
        <div className="fixed inset-0 bg-gray-500 p-4 z-50">
          <header
            id="MenuExpanded"
            className="flex gap-1 wrapper justify-between items-center h-20 z-50"
          >
            <Image
              src="/logo.svg"
              alt="Interface da plataforma Site.Set"
              width={690}
              height={84}
            />

            <button
              className=""
              aria-expanded="true"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <ArrowBendUpRight
                className="text-gray-100 hover:text-cyan-300"
                size={40}
                weight="bold"
              />
            </button>
          </header>
        </div>
      </Transition>
    </section>
  );
}
