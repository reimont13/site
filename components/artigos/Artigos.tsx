import { CardArtigos } from "./CardArtigos";

export function Artigos() {
  return (
    <div 
    className="
    mx-auto bg-white text-gray-200 font-poppins 
    2xl:px-30 xl:px-24 lg:px-18 md:px-12 sm:px-10 xs:px-8 px-6
    2xl:pt-38 xl:pt-30 lg:pt-22 md:pt-16 sm:pt-14 xs:pt-12 pt-8
    2xl:pb-45 xl:pb-37 lg:pb-29 md:pb-21 sm:pb-17 xs:pb-15 pb-12">
      <h1 className="2xl:text-[5.188rem]
                      xl:text-7xl 
                      lg:text-6xl
                      md:text-5xl
                      sm:text-4xl
                      xs:text-3xl
                      text-xl
                      font-semibold uppercase text-center 
                     2xl:pb-20
                      xl:pb-16
                      lg:pb-12
                      md:pb-10
                      sm:pb-9
                      xs:pb-8
                      pb-6">
        Artigos E Notícias
      </h1>
      <div>
        <CardArtigos />
      </div>
    </div>
  );
}
