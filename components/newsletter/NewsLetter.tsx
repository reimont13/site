import Image from "next/image";

export function NewsLetter() {
  return (
    <section
      className="2xl:pt-70
                  xl:pt-64
                  lg:pt-58
                  md:pt-52
                  sm:pt-46
                 2xl:h-[29rem]
                  xl:h-[25rem]
                  lg:h-[22rem]
                  md:h-[19rem]
                  sm:h-[16rem]
                  w-full bg-white"
    >
      <div
        className="2xl:w-[96rem]
                    xl:w-[80rem]
                    lg:w-[72rem]
                    md:w-[56rem]
                    sm:w-[46rem]
                    relative mx-auto"
      >
        <div
          className="
          2xl:w-[40rem] 
          xl:w-[32rem] 
          lg:w-[28rem]
          md:w-[24rem]
          w-[20rem]              
          2xl:absolute 2xl:bottom-0 2xl:left-6.5
          xl:absolute xl:bottom-0 xl:left-6.5 
          lg:absolute lg:bottom-0 lg:left-6.5 
          md:absolute md:bottom-0 md:left-6.5  
          sm:absolute sm:bottom-0 sm:left-6.5
          z-10 "
        >
          <Image
            src="/reimon_L.png"
            alt="Reimon de Barros"
            width={636}
            height={578}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className="
                        2xl:rounded-[5.5rem]
                         xl:rounded-[4.5rem]
                         lg:rounded-[3.5rem]
                         md:rounded-[2.5rem]
                         sm:rounded-[2rem]
                         bg-red-100"
        >
          <div 
          className="
          2xl:grid 2xl:grid-cols-2 
          xl:grid xl:grid-cols-2
          lg:grid lg:grid-cols-2 
          md:grid md:grid-cols-2
          sm:grid sm:grid-cols-2 
          grid grid-cols-1 items-center">
            <div></div>

            <div
              className="
                            2xl:gap-8 
                             xl:gap-7 
                             lg:gap-6
                             md:gap-5 
                             sm:gap-4
                            2xl:px-4 
                             xl:px-3 
                             px-2
                            2xl:py-10
                             xl:py-8
                             lg:py-7
                             md:py-6
                             py-4
                             flex flex-col text-white"
            >
              <h2
                className="2xl:text-[3.5rem] 
                            xl:text-[3rem] 
                            lg:text-[2.5rem] 
                            md:text-[2.25rem]
                            sm:text-[2rem] 
                           2xl:leading-[4rem] 
                            xl:leading-[3rem]
                            lg:leading-[2.5rem]
                            md:leading-[2rem]
                            sm:leading-[1.75rem]
                            flex flex-col gap-1 font-semibold text-left"
              >
                <span>Receba nossa</span> 
                <span>newsletter</span>
              </h2>

              <div className="flex bg-white 2xl:rounded-[1.25rem] xl:rounded-2xl lg:rounded-xl rounded-lg 2xl:mr-20 xl:mr-16 lg:mr-14 md:mr-12 sm:mr-10 shadow-[0rem_0rem_1.25rem_#00000045]">
                <input
                  type="text"
                  placeholder="Seu e-mail aqui"
                  className="2xl:text-3xl
                              xl:text-2xl
                              lg:text-xl
                              md:text-lg
                              2xl:px-6 
                              xl:px-5 
                              lg:px-4
                              md:px-3
                              px-2
                              flex-1 
                              bg-white text-gray-500 placeholder-gray-500 focus:outline-none border-0 ring-0 2xl:rounded-l-[1.25rem] xl:rounded-l-2xl lg:rounded-l-xl rounded-l-lg shadow-[0rem_0rem_1.25rem_#00000045]"
                />
                <button
                  className="2xl:text-2xl
                              xl:text-xl
                              lg:text-lg
                              md:text-base
                              sm:text-sm
                              text-xs
                              2xl:py-8 
                               xl:py-7 
                               lg:py-6
                               md:py-5
                               sm:py-4
                               xs:py-3
                               py-2
                               -mr-1 bg-red-100 text-white 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 xs:px-5 px-4 font-semibold hover:bg-[#C73E3E] transition-colors duration-200 border-0 outline-none ring-0 2xl:rounded-[1.25rem] xl:rounded-2xl lg:rounded-xl rounded-lg shadow-[0rem_0rem_1.25rem_#00000045]"
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
