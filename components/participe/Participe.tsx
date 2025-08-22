export function Participe() {
  return (
    <section 
    className="
    2xl:px-30 2xl:pb-54 2xl:pt-38
    xl:px-22 xl:pb-46 xl:pt-30
    lg:px-16 lg:pb-36 lg:pt-22
    md:px-10 md:pb-26 md:pt-16
    px-6 pb-16 pt-8
    mx-auto bg-gray-100 text-gray-200 flex flex-col font-poppins">
      <h1
        className="
        2xl:text-2xl:text-[5.188rem] 2xl:pb-37 
        xl:text-7xl xl:pb-29 
        lg:text-6xl lg:pb-21
        md:text-5xl md:pb-15
        sm:text-4xl sm:pb-11
        xs:text-3xl xs:pb-9
        text-xl pb-8
        uppercase text-center font-semibold"
      >
        Participe do nosso mandato
      </h1>

      <div 
      className="
      2xl:flex 2xl:justify-between 2xl:gap-30
      xl:flex xl:justify-between xl:gap-30
      lg:flex lg:justify-between lg:gap-30
      md:flex md:justify-between md:gap-30
      sm:flex sm:justify-between sm:gap-30
      xs:flex xs:justify-between xs:gap-30
      grid gap-10">
        <div className="flex flex-col justify-between max-w-[28.438rem]">
          <div className="flex flex-col gap-5">
            <h2
              className="
              2xl:text-4xl 
              xl:text-3xl 
              lg:text-2xl
              md:text-xl
              sm:text-lg
              xs:text-base
              text-sm
              text-left pr-4 font-bold"
            >
              Qual é o problema da sua cidade?
            </h2>
            <p 
            className="
            2xl:text-[1.688rem]
            xl:text-2xl 
            lg:text-xl
            md:text-lg
            text-xs text-left mb-3 ">
              Se sua cidade não está do jeito que você gostaria, conte para nós.
              Vamos tentar melhorá-la junto com você.
            </p>
          </div>

          <button className="w-fit lg bg-red-100 text-white font-poppins font-bold 
                         2xl:text-xl 2xl:px-10 2xl:py-6 2xl:rounded-[1.25rem]
                          xl:text-lg xl:px-9 xl:py-5 xl:rounded-3xl
                          lg:text-base lg:px-8 lg:py-4 lg:rounded-2xl
                          md:text-sm md:px-7 md:py-3 md:rounded-xl
                          sm:text-sm sm:px-6 sm:py-2 sm:rounded-lg
                          xs:text-xs xs:px-5 xs:py-2 xs:rounded-lg
                          text-xs px-4 py-1 rounded-lg">
            Conte aqui
          </button>
        </div>

        <div>imagem</div>

        <div className="flex flex-col gap-10 justify-between max-w-[28.438rem]">
          <div className="flex flex-col gap-5">
            <h2
              className="
              2xl:text-4xl 
              xl:text-3xl 
              lg:text-2xl
              md:text-xl
              sm:text-lg
              xs:text-base
              text-sm
              text-left pr-4 font-bold"
            >
              Proponha seu Projeto de Lei
            </h2>
            <p 
            className="
            2xl:text-[1.688rem]
            xl:text-2xl 
            lg:text-xl
            md:text-lg
            text-xs text-left mb-3">
              Tem alguma necessidade ou ideia e não tem uma lei sobre isso?
              Mande para nós a sua sugestão e vamos conversar!
            </p>
          </div>

          <button className="w-fit lg bg-red-100 text-white font-poppins font-bold 
                         2xl:text-xl 2xl:px-10 2xl:py-6 2xl:rounded-[1.25rem]
                          xl:text-lg xl:px-9 xl:py-5 xl:rounded-3xl
                          lg:text-base lg:px-8 lg:py-4 lg:rounded-2xl
                          md:text-sm md:px-7 md:py-3 md:rounded-xl
                          sm:text-sm sm:px-6 sm:py-2 sm:rounded-lg
                          xs:text-xs xs:px-5 xs:py-2 xs:rounded-lg
                          text-xs px-4 py-1 rounded-lg">
            Proponha aqui
          </button>
        </div>
      </div>
    </section>
  );
}
