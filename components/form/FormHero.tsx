"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome.").max(120, "O nome pode ter no máximo 120 caracteres."),
  surname: z.string().min(2, "Informe seu sobrenome.").max(120, "O sobrenome pode ter no máximo 120 caracteres."),
  email: z.string().email("Informe um e-mail válido.").max(254, "O e-mail é muito longo."),
  phone: z.string().min(10, "Informe um telefone válido.").max(20, "O telefone é muito longo."),
})

type FormHeroValues = z.infer<typeof contactSchema>

export type FormHeroProps = {
  className?: string
  defaultValues?: Partial<FormHeroValues>
}

export function FormHero({ className = "", defaultValues = {} }: FormHeroProps) {
  const [submitted, setSubmitted] = useState<null | { name: string }>(null)

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
  })

  async function onSubmit(values: FormHeroValues) {
    // Simula envio (substitua por ação no servidor/endpoint)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitted({ name: values.name })
    reset({ name: "", surname: "", email: "", phone: "" })
  }

  return (
    <div className={` text-white flex p-4 ${className}`}>
      <div className="w-fit gap-8 items-center">
        {/* Form Section */}
        <div className="2xl:px-20 xl:px-18 lg:px-16
                        2xl:py-8 xl:7 lg:py-6 bg-black/70 rounded-[3.125rem]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Vamos nos aproximar?</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Preencha o cadastro para receber uma mensagem do nosso mandato
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate aria-describedby="form-status">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-300 mb-2">
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
                <p id="surname-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.surname.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
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
                <p id="phone-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
  )
}
