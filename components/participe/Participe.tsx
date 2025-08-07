export function Participe() {
  return (
    <section className="bg-gray-100 text-gray-200 flex flex-col font-poppins px-30 mx-auto pb-54 pt-38 ">
      <h1 className="font-semibold text-[5.188rem] uppercase text-center pb-37">
        Participe do nosso mandato
      </h1>

      <div className="flex justify-between gap-30">
        <div className="flex flex-col justify-between max-w-[28.438rem]">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[2.375rem] text-left pr-4">
              Qual é o problema da sua cidade?
            </h2>
            <p className="text-[1.688rem] text-left mb-3">
              Se sua cidade não está do jeito que você gostaria, conte para nós.
              Vamos tentar melhorá-la junto com você.
            </p>
          </div>

          <button className="w-fit lg px-10 py-6 bg-red-100 text-white rounded-3xl font-poppins font-bold text-xl">
            Conte aqui
          </button>
        </div>

        <div>imagem</div>

        <div className="flex flex-col gap-10 justify-between max-w-[28.438rem]">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[2.375rem] text-left pr-4">
              Proponha seu Projeto de Lei
            </h2>
            <p className="text-[1.688rem] text-left mb-3">
              Tem alguma necessidade ou ideia e não tem uma lei sobre isso?
              Mande para nós a sua sugestão e vamos conversar!
            </p>
          </div>

          <button className="w-fit px-10 py-6 bg-red-100 text-white rounded-3xl font-poppins font-bold text-xl">
            Proponha aqui
          </button>
        </div>
      </div>
    </section>
  );
}
