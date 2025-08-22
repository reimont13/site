"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome.")
    .max(120, "O nome pode ter no máximo 120 caracteres."),
  surname: z
    .string()
    .min(2, "Informe seu sobrenome.")
    .max(120, "O sobrenome pode ter no máximo 120 caracteres."),
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .max(254, "O e-mail é muito longo."),
  phone: z
    .string()
    .min(10, "Informe um telefone válido.")
    .max(20, "O telefone é muito longo."),
});

type FormHeroValues = z.infer<typeof contactSchema>;

export type FormHeroProps = {
  className?: string;
  defaultValues?: Partial<FormHeroValues>;
};

export function FormHero({
  className = "",
  defaultValues = {},
}: FormHeroProps) {
  const [submitted, setSubmitted] = useState<null | { name: string }>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormHeroValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      ...defaultValues,
    },
  });

  async function onSubmit(values: FormHeroValues) {
    // Simula envio (substitua por ação no servidor/endpoint)
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted({ name: values.name });
    reset({ name: "", surname: "", email: "", phone: "" });
  }

  return (
    <div className={` text-white flex font-poppins ${className}`}>
      <div className=" 
      2xl:max-w-[64rem]
      xl:max-w-[52rem]
      lg:max-w-[42rem]
      md:max-w-[36rem]
      sm:max-w-[30rem]
      w-full gap-8 items-center">
        {/* Form Section */}
        <div
          className="2xl:px-20 xl:px-18 lg:px-16 md:px-14 sm:px-12 xs:px-10 px-8
                     2xl:py-14 xl:12 lg:py-10 md:py-8 sm:py-7 py-6 
                      
                     bg-black/70 2xl:rounded-[3.125rem] "
        >
          <div className="flex flex-col gap-4">
            <h1
              className="
              2xl:text-[5.188rem]
              xl:text-7xl 
              lg:text-6xl
              md:text-5xl
              sm:text-4xl
              xs:text-3xl
              font-semibold text-left"
            >
              Vamos nos aproximar?
            </h1>
            <p className="
              2xl:text-3xl
              xl:text-2xl 
              lg:text-xl
              md:text-lg 
              sm:text-base
              xs:text-sm
              2xl:leading-[3.1rem]
              xl:leading-[2.6rem] 
              lg:leading-[2.1rem]
              md:leading-[1.6rem] 
              sm:leading-[1.2rem]
              xs:leading-[1.1rem]
              text-left text-white mb-7 font-bold ">
              Preencha o cadastro para receber uma mensagem do nosso mandato
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-describedby="form-status"
          >
            <div>
              <label
                htmlFor="name"
                className="block 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-white mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                aria-invalid={!!errors.name || undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-2 text-3xl text-red-400"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="surname"
                className="block 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-white mb-2"
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="surname"
                placeholder="Sobrenome"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                aria-invalid={!!errors.surname || undefined}
                aria-describedby={errors.surname ? "surname-error" : undefined}
                {...register("surname")}
              />
              {errors.surname && (
                <p
                  id="surname-error"
                  className="mt-2 text-3xl text-red-400"
                  role="alert"
                >
                  {errors.surname.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-white mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@exemplo.com.br"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                aria-invalid={!!errors.email || undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-3xl text-red-400"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-white mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                aria-invalid={!!errors.phone || undefined}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-2 text-3xl text-red-400"
                  role="alert"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className=" 2xl:text-2xl 
                          xl:text-xl 
                          lg:text-lg
                          md:text-base 
                          sm:text-sm 
                          xs:text-xs
                          w-fit bg-red-100 hover:bg-red-700 disabled:opacity-60 text-white font-bold px-10 py-6 rounded-3xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-900"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>

            <div id="form-status" aria-live="polite" className="mt-4">
              {isSubmitSuccessful && submitted ? (
                <p className="text-green-400 text-center">{`Obrigado, ${submitted.name}! Sua mensagem foi enviada.`}</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
