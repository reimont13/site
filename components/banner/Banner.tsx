import React from "react";

export default function Banner() {
  return (
    <section className="2xl:px-58
                         xl:px-42
                         lg:px-26
                         md:px-13
                         sm:px-12
                         xs:px-10
                         px-6
                        2xl:gap-16
                         xl:gap-12
                         lg:gap-10
                         md:gap-8
                         sm:gap-6
                         xs:gap-5
                         gap-4
                        2xl:py-26
                         xl:py-20
                         lg:py-16
                         md:py-14
                         sm:py-12
                         xs:py-10
                         py-8
                        flex flex-col items-center font-poppins text-white bg-red-100">
      <h1 className="2xl:text-[5.188rem] 
                      xl:text-7xl 
                      lg:text-6xl
                      md:text-5xl
                      sm:text-4xl
                      xs:text-3xl
                      text-lg
                     2xl:border-b-6 2xl:border-t-6 2xl:py-6
                      xl:border-b-5 xl:border-t-5 xl:py-5
                      lg:border-b-4 lg:border-t-4 lg:py-4
                      md:border-b-4 md:border-t-4 md:py-3
                      sm:border-b-3 sm:border-t-3 sm:py-2
                      xs:border-b-3 xs:border-t-3 xs:py-1
                      border-b-2 border-t-2 py-0.5

                     border-gray-100 text-center  font-semibold uppercase ">
        Não falem de nós <span className="font-bold uppercase">sem nós</span>
      </h1>

      <div className="w-full mx-auto">
        <p className="2xl:text-[1.8rem] 
                        xl:text-[1.6rem] 
                        lg:text-xl
                        md:text-lg
                        sm:text-base
                        text-sm
                       2xl:leading-[3.75rem]
                        xl:leading-[2.75rem]
                        lg:leading-[2rem]
                        md:leading-[2.5rem]
                        grid text-center font-semibold">
          Acreditamos que políticas públicas precisam ser construídas de maneira
          coletiva e participativa.
          Por isso, lutamos lado a lado com os
          profissionais da educação, os moradores de comunidades e favelas, os
          trabalhadores da cultura, os ambulantes e as pessoas em situação de
          rua.
        </p>
      </div>
    </section>
  );
}
