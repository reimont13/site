import { Carrousel } from "./Carrousel";

export function Depoimentos() {
  return (
    <div className="mx-auto bg-gray-100 text-gray-200 font-poppins pt-38 pb-40 flex-shrink-0 px-30">
      <h1 className="font-semibold text-[5.188rem] uppercase text-center pb-20">
        O que falam sobre nós?
      </h1>
      <div>
        <Carrousel />
      </div>
    </div>
  );
}
