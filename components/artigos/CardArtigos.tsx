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
    <div className="grid grid-cols-3 gap-12 bg-white font-poppins">
      {articles.map((article) => (
        <div
          key={article.id}
          className="grid gap-8 pb-12 shadow-[0rem_0rem_1.25rem_#00000045] rounded-[1.25rem]"
        >
          <Image
            src={article.src}
            alt={article.alt}
            width={528}
            height={352}
            className="w-full h-[22rem] rounded-[1.25rem]"
          />

          <div className="grid gap-4 px-8 text-left">
            <h2 className="text-4xl font-semibold text-gray-200 leading-[3.125rem]">
              {article.title}
            </h2>
            <p className="text-[1.375rem] leading-[2.5rem] text-gray-200">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
