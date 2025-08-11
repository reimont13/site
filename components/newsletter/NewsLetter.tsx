import Image from "next/image";

export function NewsLetter() {
  return (
    <section className="2xl:pt-70
                        2xl:h-[27.875rem]
                         w-full bg-white">
      <div className="2xl:max-w-[96.063rem]
                       relative mx-auto">
        <Image
          src="/reimon_L.png"
          alt="Reimon de Barros"
          width={636}
          height={578}
          className="absolute bottom-0 left-6 z-10"
        />

        <div className="2xl:max-h-[21.563rem] 
                        rounded-[5.5rem] bg-red-100">
          <div className="grid grid-cols-2 items-center">
            <div></div>

            <div className="max-w-[40.563rem] flex flex-col gap-6 text-white px-4 py-10">
              <h2 className="2xl:text-[3.563rem] 
                             2xl:leading-[4.438rem] 
                             font-semibold text-left">
                Receba nossa newsletter
              </h2>

              <div className="flex bg-white rounded-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]">
                <input
                  type="text"
                  placeholder="Seu e-mail aqui"
                  className="2xl:text-3xl
                              flex-1 h-27 px-6 py-4 bg-white text-gray-500 placeholder-gray-500 focus:outline-none border-0 ring-0 rounded-l-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]"
                />
                <button className="2xl:-mr-0.5
                                   2xl:text-2xl 
                                   bg-red-100 text-white px-13 py-8 font-semibold hover:bg-[#C73E3E] transition-colors duration-200 border-0 outline-none ring-0 rounded-[1.25rem]">
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
