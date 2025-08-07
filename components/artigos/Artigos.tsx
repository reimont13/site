import { CardArtigos } from "./CardArtigos";

export function Artigos() {
  return (
    <div className="mx-auto bg-white text-gray-200 font-poppins px-30 pt-28 pb-45">
      <h1 className="font-semibold text-[5.188rem] uppercase text-center pb-20">
        Artigos E Notícias
      </h1>
      <div>
        <CardArtigos />
      </div>
    </div>
  );
}
