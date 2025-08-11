import Image from "next/image";

export function NewsLetter() {
  return (
    <section
      className="2xl:pt-70
                  xl:pt-64
                  lg:pt-52
                 2xl:h-[27.875rem]
                  xl:h-[23.875rem]
                  lg:h-[19.875rem]
                  w-full bg-white"
    >
      <div
        className="2xl:max-w-[96rem]
                    xl:max-w-[80rem]
                    lg:max-w-[72rem]
                    relative mx-auto"
      >
        <div
          className="absolute bottom-0 left-6.5 z-10
                lg:w-[425px]
                xl:w-[521px]
                2xl:w-[636px]
                h-auto"
        >
          <Image
            src="/reimon_L.png"
            alt="Reimon de Barros"
            width={636}
            height={578}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div
          className="
                        2xl:rounded-[5.5rem]
                         xl:rounded-[4.5rem]
                         lg:rounded-[3.5rem]
                         bg-red-100"
        >
          <div className="grid grid-cols-2 items-center">
            <div></div>

            <div className="2xl:max-w-[40rem] 
                             xl:max-w-[34rem]
                             lg:max-w-[26rem]
                            2xl:gap-6 
                             xl:gap-4 
                             lg:gap-3  
                             2xl:px-4 
                             xl:px-2 
                             lg:px-0 
                            2xl:py-10
                             xl:py-9
                             lg:py-8
                             flex flex-col text-white">
              <h2
                className="2xl:text-[3.563rem] 
                            xl:text-5xl
                            lg:text-4xl
                           2xl:leading-[4.438rem] 
                            xl:leading-[3.438rem]
                            lg:leading-[2.438rem]
                            font-semibold text-left"
              >
                Receba nossa newsletter
              </h2>

              <div className="flex bg-white rounded-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]">
                <input
                  type="text"
                  placeholder="Seu e-mail aqui"
                  className="2xl:text-3xl
                              xl:text-2xl
                              lg:text-xl
                              2xl:px-6 
                              xl:px-5 
                              lg:px-4 
                              flex-1 
                              bg-white text-gray-500 placeholder-gray-500 focus:outline-none border-0 ring-0 rounded-l-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045]"
                />
                <button
                  className="2xl:text-2xl
                              xl:text-xl
                              lg:text-lg
                              2xl:py-8 
                               xl:py-6 
                               lg:py-4
                               -mr-1 bg-red-100 text-white 2xl:px-14 xl:px-12 lg:px-10 font-semibold hover:bg-[#C73E3E] transition-colors duration-200 border-0 outline-none ring-0 rounded-[1.25rem]"
                >
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
