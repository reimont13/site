import React from "react";

export default function Banner() {
  return (
    <section className="flex flex-col gap-16 items-center font-poppins text-white py-31 px-48 bg-red-100">
      <h1 className="font-semibold text-[5.188rem] uppercase border-b-7 border-t-7 border-gray-100 text-center p-5">
        Não falem de nós <span className="font-bold uppercase">sem nós</span>
      </h1>

      <div className="w-full mx-auto max-w-[95.938rem]">
        <p className="text-3xl text-center leading-[3.75rem] font-semibold">
          Acreditamos que políticas públicas precisam ser construídas de maneira
          coletiva e participativa. Por isso, lutamos lado a lado com os
          profissionais da educação, os moradores de comunidades e favelas, os
          trabalhadores da cultura, os ambulantes e as pessoas em situação de
          rua.
        </p>
      </div>
    </section>
  );
}
