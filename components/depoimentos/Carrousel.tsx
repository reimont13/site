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
    <section className="font-poppins text-gray-200 px-32">
      <div className="mx-auto flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={120} className="text-gray-300" strokeWidth={3} />
        </button>

        <div key={currentTestimonial.id} className="w-full">
          <div className="flex items-center justify-center gap-11">
            <Image
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.author}
              width={304}
              height={304}
              className="rounded-full max-w-[304px] flex-shrink-0 bg-amber-600"
            />

            <div className="flex flex-col text-left max-w-[52.063rem]">
              <p className="text-4xl font-semibold leading-[3.125rem] mb-6 min-h-[20rem] flex-shrink-0">
                {currentTestimonial.text}
              </p>
              <div>
                <h4 className="font-semibold text-4xl text-left">
                  {currentTestimonial.author}
                </h4>
                <p className="italic text-4xl text-left">
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
