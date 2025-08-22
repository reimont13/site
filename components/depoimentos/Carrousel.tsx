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
      className="2xl:px-30 
                  xl:px-22
                  lg:px-18
                  md:px-12
                  font-poppins text-gray-200"
    >
      <div className="mx-auto flex items-center 2xl:gap-16 xl:gap-12 lg:gap-8 justify-center">
        <button
          onClick={goToPrevious}
          className="rounded-full hover:bg-gray-100 transition-colors text-gray-300"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="
            2xl:w-19 2xl:h-19 
            xl:w-17 xl:h-17 
            lg:w-15 h-15 
            md:w-14 md:h-14" strokeWidth={3} />
        </button>

        <div key={currentTestimonial.id} className="w-full">
          <div className="flex items-center justify-center gap-11 2xl:ml-21 xl:ml-17 lg:ml-13 md:ml-9">
            <div
              className="2xl:w-[19rem] 
                          xl:w-[16rem] 
                          lg:w-[14rem] 
                          md:w-[12rem] 
                          rounded-full 
                          overflow-hidden 
                          flex-shrink-0 
                          bg-amber-600 relative"
            >
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                width={304}
                height={304}
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col 2xl:gap-7 xl:gap-6 lg:gap-5 md:gap-4 text-left 2xl:mr-21 xl:mr-17 lg:mr-13 md:mr-9">
              <p
                className="2xl:text-3xl 
                             xl:text-[2.063rem]
                             lg:text-3xl 
                             md:text-2xl
                            2xl:leading-[3.1rem]
                             xl:leading-[2.7rem]
                             lg:leading-[2.3rem]
                             md:leading-[1.9rem]
                            2xl:min-h-[20rem]
                             xl:min-h-[18rem]
                             lg:min-h-[16rem]
                             md:min-h-[14rem]
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
          className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-300"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="
            2xl:w-19 2xl:h-19 
            xl:w-17 xl:h-17 
            lg:w-15 h-15 
            md:w-14 md:h-14" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
