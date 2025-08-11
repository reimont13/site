import { CardArtigos } from "./CardArtigos";

export function Artigos() {
  return (
    <div className="mx-auto bg-white text-gray-200 font-poppins 2xl:px-30 xl:px-24 lg:px-18 pt-28 pb-45">
      <h1 className="2xl:text-[5.188rem]
                      xl:text-7xl 
                      lg:text-6xl 
                      font-semibold uppercase text-center 
                     2xl:pb-20
                      xl:pb-16
                      lg:pb-12">
        Artigos E Notícias
      </h1>
      <div>
        <CardArtigos />
      </div>
    </div>
  );
}
