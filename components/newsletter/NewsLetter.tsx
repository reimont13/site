import Image from "next/image";

export function NewsLetter() {
  return (
    <section className="w-full pt-70 bg-white h-[27.875rem]">
      <div className="relative mx-auto max-w-[96.063rem]">
        <Image
          src="/reimon_L.png"
          alt="Reimon de Barros"
          width={636}
          height={578}
          className="absolute bottom-0 left-6 z-10"
        />

        <div className="rounded-[5.5rem] bg-[#E14747] max-h-[21.563rem]">
          <div className="grid grid-cols-2 items-center">
            <div></div>
            <div className="max-w-[40.563rem] flex flex-col gap-6 text-white px-4 py-10">
              <h2 className="text-[3.563rem] leading-[4.438rem] font-semibold text-left">
                Receba nossa newsletter
              </h2>

              <div className="flex bg-white rounded-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]">
                <input
                  type="text"
                  placeholder="Seu e-mail aqui"
                  className="flex-1 h-27 px-6 py-4 bg-white text-3xl text-gray-500 placeholder-gray-500 focus:outline-none border-0 ring-0 rounded-l-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]"
                />
                <button className="-mr-0.5 bg-red-100 text-white text-2xl px-13 py-8 font-semibold hover:bg-[#C73E3E] transition-colors duration-200 border-0 outline-none ring-0 rounded-[1.25rem]">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-800 -z-10"></div>
      </div>
    </section>
  );
}
