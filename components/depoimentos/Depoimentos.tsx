import { Carrousel } from "./Carrousel";

export function Depoimentos() {
  return (
    <div className="2xl:pt-38 2xl:px-30 2xl:pb-40 
                     xl:pt-30 xl:px-22 xl:pb-32
                     lg:pt-22 lg:px-16 lg:pb-24
                     md:pt-16 md:px-12 md:pb-20
                    mx-auto bg-gray-100 text-gray-200 font-poppins flex-shrink-0">
      <h1 className="2xl:text-[5.188rem]
                      xl:text-7xl 
                      lg:text-6xl
                      md:text-5xl 
                      font-semibold uppercase text-center 
                     2xl:pb-20
                      xl:pb-16
                      lg:pb-12
                      md:pb-10">
        O que falam sobre nós?
      </h1>
      <div>
        <Carrousel />
      </div>
    </div>
  );
}
