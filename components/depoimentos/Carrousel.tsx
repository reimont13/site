"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Carrousel() {
  const testimonials = [
    {
      id: 1,
      text: "Curabitur id sapien nibh. Morbi facilisis nibh quis arcu euismod, non imperdiet leo mattis. Aliquam mollis, turpis a blandit pretium, erat metus auctor turpis, at volutpat ligula justo nec enim. Integer lacus nisi, malesuada vel enim id, viverra dictum nibh.",
      author: "Leonardo Boff",
      role: "teólogo",
      image: "/testimonial-leonardo_boff.jpg",
    },
    {
      id: 2,
      text: "Excelente iniciativa! Acredito que a participação coletiva é fundamental para a construção de políticas públicas que realmente atendam às necessidades da população. Um trabalho inspirador e necessário para o momento atual.",
      author: "Maria Silva",
      role: "Ativista Social",
      image: "/testimonial-leonardo_boff.jpg",
    },
    {
      id: 3,
      text: "A visão de luta lado a lado com os profissionais e as comunidades é um diferencial. É assim que se constrói um futuro mais justo e igualitário para todos. Parabéns pelo trabalho e dedicação.",
      author: "João Pereira",
      role: "Professor",
      image: "/testimonial-leonardo_boff.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    // Verifica se está no primeiro item para voltar ao último
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="2xl:px-26 
                  xl:px-16
                  lg:px-10
                  font-poppins text-gray-200"
    >
      <div className="mx-auto flex items-center 2xl:gap-16 xl:gap-12 lg:gap-8 justify-center">
        <button
          onClick={goToPrevious}
          className="rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={120} className="text-gray-300" strokeWidth={3} />
        </button>

        <div key={currentTestimonial.id} className="w-full">
          <div className="flex items-center justify-center gap-11">
            <div
              className="2xl:w-[19rem] 
                          xl:w-[17rem] 
                          lg:w-[15rem] 
                          md:w-[13rem] 
                          sm:w-[11rem] 
                          rounded-full 
                          overflow-hidden 
                          flex-shrink-0 
                          bg-amber-600 relative"
            >
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                width={528}
                height={352}
                style={{ objectFit: "cover" }}
                className="rounded-full"
                sizes="(max-width: 640px) 11rem,
           (max-width: 768px) 13rem,
           (max-width: 1024px) 15rem,
           (max-width: 1280px) 17rem,
           19rem"
              />
            </div>

            <div className="flex flex-col 2xl:gap-7 xl:gap-6 lg:gap-5 md:gap-4 sm:gap3 text-left">
              <p
                className="2xl:text-3xl 
                             xl:text-[2.063rem]
                             lg:text-3xl 
                            2xl:leading-[3.125rem]
                             xl:leading-[2.875rem]
                             lg:leading-[2.625rem]
                            2xl:min-h-[20rem]
                             xl:min-h-[18rem]
                             lg:min-h-[16rem]
                             font-semibold"
              >
                {currentTestimonial.text}
              </p>
              <div>
                <h4
                  className="2xl:text-4xl 
                                xl:text-3xl 
                                lg:text-[1.688rem]
                                font-semibold text-left"
                >
                  {currentTestimonial.author}
                </h4>
                <p
                  className="2xl:text-4xl 
                               xl:text-3xl 
                               lg:text-2xl 
                               italic text-left"
                >
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Próximo depoimento"
        >
          <ChevronRight size={120} className="text-gray-300" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
