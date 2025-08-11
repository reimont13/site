import Image from "next/image";

export function CardArtigos() {
  const articles = [
    {
      id: "1",
      src: "/congresso_em_foco-hero.png",
      alt: "Papa Francisco acenando",
      title: "Papa Francisco celebra missa após internação",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque leo diam, in sagittis nunc semper interdum.",
    },
    {
      id: "2",
      src: "/congresso_em_foco-hero.png",
      alt: "Papa Francisco acenando",
      title: "Papa Francisco celebra missa após internação",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque leo diam, in sagittis nunc semper interdum.",
    },
    {
      id: "3",
      src: "/congresso_em_foco-hero.png",
      alt: "Papa Francisco acenando",
      title: "Papa Francisco celebra missa após internação",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque leo diam, in sagittis nunc semper interdum.",
    },
  ];

  return (
    <div
      className="2xl:gap-12
                  xl:gap-10
                  lg:gap-10
                  grid grid-cols-3 bg-white font-poppins"
    >
      {articles.map((article) => (
        <div
          key={article.id}
          className="2xl:gap-8 
                      xl:gap-6 
                      lg:gap-4 
                      2xl:pb-10
                      xl:pb-8 
                      lg:pb-6 
                      grid shadow-[0rem_0rem_1.25rem_#00000045] rounded-[1.25rem]"
        >
          <div className="2xl:h-[22rem] 
                           xl:h-[18rem] 
                           lg:h-[14rem] 
                           relative w-full rounded-[1.25rem] overflow-hidden">
            <Image
              src={article.src}
              alt={article.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[1.25rem]"
              sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               (max-width: 1280px) 100vw,
               100vw"
            />
          </div>

          <div className="2xl:gap-4 
                           xl:gap-3 
                           lg:gap-2 
                          2xl:px-8 
                           xl:px-7 
                           lg:px-6 
                           grid text-left">
            <h2
              className="2xl:text-4xl 
                           xl:text-3xl 
                           lg:text-2xl
                           2xl:leading-[2.5rem]
                            xl:leading-[2.25rem]
                            lg:leading-[1.75rem]
                           font-semibold text-gray-200"
            >
              {article.title}
            </h2>
            <p
              className="2xl:text-2xl 
                           xl:text-xl 
                           lg:text-lg
                           2xl:leading-[2rem]
                            xl:leading-[1.75rem]
                            lg:leading-[1.5rem]
                           text-gray-200"
            >
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
