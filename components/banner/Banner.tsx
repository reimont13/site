import React from "react";

export default function Banner() {
  return (
    <section className="2xl:px-58
                         xl:px-42
                         lg:px-26
                         2xl:gap-16
                          xl:gap-12
                          lg:gap-8
                         2xl:py-30
                          xl:py-26
                          lg:py-22
                         flex flex-col items-center font-poppins text-white bg-red-100">
      <h1 className="2xl:text-7xl 
                      xl:text-6xl 
                      lg:text-5xl
                     2xl:border-b-6 
                     2xl:border-t-6
                      xl:border-b-5 
                      xl:border-t-5
                      lg:border-b-4
                      lg:border-t-4
                     border-gray-100 text-center p-5 font-semibold uppercase ">
        Não falem de nós <span className="font-bold uppercase">sem nós</span>
      </h1>

      <div className="w-full mx-auto">
        <p className="2xl:text-3xl 
                        xl:text-2xl 
                        lg:text-xl 
                       2xl:leading-[3.75rem]
                        xl:leading-[2.250rem]
                        lg:leading-[2rem]
                        grid text-center font-semibold">
          <span>Acreditamos que políticas públicas precisam ser construídas de maneira
          coletiva e participativa.</span>
          <span>Por isso, lutamos lado a lado com os
          profissionais da educação, os moradores de comunidades e favelas, os
          trabalhadores da cultura, os ambulantes e as pessoas em situação de
          rua.</span>
        </p>
      </div>
    </section>
  );
}
