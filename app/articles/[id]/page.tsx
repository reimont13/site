import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Quote,
  Youtube,
} from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import Comente from "@/components/comente/Comente";

// Função para gerar os parâmetros estáticos para SSG
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

// Componente agora é async
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Aguardar params antes de acessar suas propriedades
  const { id } = await params;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-2xl text-gray-700">Artigo não encontrado.</p>
      </div>
    );
  }

  // Encontrar artigos relacionados (excluindo o atual)
  const relatedArticles = articles.filter((a) => a.id !== id).slice(0, 2); // Pega os 2 primeiros relacionados

  // Encontrar artigos anterior e próximo para navegação
  const currentIndex = articles.findIndex((a) => a.id === id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <section className="font-poppins text-gray-200 ">
      <div className="pb-49">
        <Navbar />
      </div>

      <div className="px-30">
        <div className=" mx-auto shadow-[0rem_0rem_1.25rem_#00000045] rounded-[1.25rem]">
          <div className="w-full">
            <Image
              src={article.src || "/placeholder.svg"}
              alt={article.alt}
              width={1918}
              height={1079}
              className="w-full rounded-[1.25rem]"
            />
          </div>

          <div className="bg-white rounded-[1.25rem] shadow-md overflow-hidden pl-31 pr-55">
            <div className="">
              {/* Article Title */}
              <h1 className="font-semibold text-[5.188rem] text-left pt-28 leading-tight">
                {article.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center text-left text-4xl text-gray-200 pb-12 gap-20 gap-y-2 pt-4">
                <span>{article.author}</span>
                <span>{article.date}</span>
                <span>{article.comments}</span>
                <button className="text-gray-200 hover:underline">
                  {article.share}
                </button>
              </div>

              {/* Article Content */}
              <div className="text-[2.813rem] leading-[3.75rem] text-left">
                <p>{article.paragrafo1}</p>
                <blockquote className="flex items-start gap-10 my-8 text-[3.188rem] leading-[4.375rem] pl-8 italic text-gray-200">
                  <Quote size={85} className="text-gray-300 -translate-x-1/2 -translate-y-1/2 min-w-[85px] mt-12 ml-2" />
                  {article.destaque}
                </blockquote>
                <p className="mt-12">{article.paragrafo2}</p>
                <p className="mt-12">{article.paragrafo3}</p>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="pt-16 flex flex-wrap gap-7">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-200 px-8 py-4.5 rounded-[1.25rem] text-[1.625rem] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="h-1 bg-gray-100 w-full max-w-[87.188rem] mt-25 mb-22 px-35 mx-auto " />

              {/* Previous/Next Navigation */}
              <div className="flex items-center mx-auto pb-25 ">
                <button
                  className="p-2 rounded-full transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft
                    size={40}
                    className="text-gray-300"
                    strokeWidth={4}
                  />
                </button>

                <div key={prevArticle?.id} className="w-full px-9">
                  <div className="flex justify-between items-center ">
                    {prevArticle ? (
                      <Link
                        href={`/articles/${prevArticle.id}`}
                        className="flex items-center text-gray-200 text-[1.938rem] leading-[2.625rem] text-left max-w-[34.813rem]"
                      >
                        {prevArticle.title}
                      </Link>
                    ) : (
                      <span />
                    )}
                    {nextArticle ? (
                      <Link
                        href={`/articles/${nextArticle.id}`}
                        className="flex items-center text-gray-200 text-[1.938rem] leading-[2.625rem] text-right max-w-[34.813rem]"
                      >
                        {nextArticle.title}
                      </Link>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>

                <button
                  className="p-2 rounded-full transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight
                    size={40}
                    className="text-gray-300"
                    strokeWidth={4}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Comente />

        {/* Veja Mais Section */}
        {relatedArticles.length > 0 && (
          <div className=" mx-auto mt-12 pt-8 pb-32">
            <h2 className="text-[3.813rem] leading-[6.25rem] font-semibold text-gray-200 mb-14">
              Veja mais
            </h2>

            <div className="grid gap-26">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/articles/${related.id}`}>
                  <div className="flex items-center gap-14 min-h-[352px] bg-gray-50 rounded-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045] transition-shadow duration-200 overflow-hidden">
                    <div className="overflow-hidden max-w-[528px] h-full w-full shadow-[0rem_0rem_1.25rem_#00000045]">
                      <Image
                        src={related.src || "/placeholder.svg"}
                        alt={related.alt}
                        width={528}
                        height={352}
                        className="rounded-[1.25rem] object-cover"
                      />
                    </div>

                    <div className="flex items-center max-w-[61.125rem]">
                      <div className="">
                        <h3 className="text-[3.438rem] leading-[3.75rem] font-semibold text-gray-200 text-left">
                          {related.title}
                        </h3>
                        <p className="text-gray-200 text-[2rem] leading-[2.5rem] pt-4 max-w-[48.25rem]">
                          {related.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Footer Section */}
      <section className="bg-red-100 text-white pt-48 pb-27">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/logo.svg"
              alt="Interface da plataforma Site.Set"
              width={690}
              height={84}
              className="pt-6"
            />

            {/* Social Media Icons */}
            <div className="flex gap-6 items-center pt-10">
              <a href="#" className="hover:text-coral-banner transition-colors">
                <Facebook size={60} strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-coral-banner transition-colors">
                <Instagram size={60} strokeWidth={2} />
              </a>
              <a href="#" className="hover:text-coral-banner transition-colors">
                <Youtube size={75} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
