'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const commentSchema = z.object({
  comment: z
    .string()
    .min(10, 'Escreva pelo menos 10 caracteres.')
    .max(2000, 'O comentário pode ter no máximo 2000 caracteres.'),
  name: z
    .string()
    .min(2, 'Informe seu nome.')
    .max(120, 'O nome pode ter no máximo 120 caracteres.'),
  email: z
    .string()
    .email('Informe um e-mail válido.')
    .max(254, 'O e-mail é muito longo.')
})

type CommentFormValues = z.infer<typeof commentSchema>

export type CommentFormProps = {
  className?: string
  defaultValues?: Partial<CommentFormValues>
}

export default function Comente({
  className = '',
  defaultValues = {}
}: CommentFormProps) {
  const [submitted, setSubmitted] = useState<null | { name: string }>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      comment: '',
      name: '',
      email: '',
      ...defaultValues
    }
  })

  async function onSubmit(values: CommentFormValues) {
    // Simula envio (substitua por ação no servidor/endpoint)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitted({ name: values.name })
    reset({ comment: '', name: '', email: '' })
  }

  return (
    <div
      className={[
        ' mx-auto bg-white rounded-[1.25rem] shadow-[0rem_0rem_1.25rem_#00000045] overflow-hidden mt-24',
        className
      ].join(' ')}
    >
      {/* Comment Section */}
      <div className="pt-[6.25rem] py-8 pl-[7.5rem] pr-[8.75rem]">
        <h2 className="text-[5.188rem] leading-[6.25rem] font-bold text-gray-200 mb-6">
          {'Comente'}
        </h2>

        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-describedby="form-status"
        >
          <div>
            <label
              htmlFor="comment"
              className="block text-4xl font-light leading-[3.125rem] text-gray-200 pb-2 pt-12"
            >
              {'Comente'}
            </label>
            <textarea
              id="comment"
              rows={4}
              placeholder="Escreva aqui"
              className="block w-full h-[16.375rem] px-12 py-9 text-3xl border border-gray-300 rounded-[1.25rem] focus:ring-blue-500 focus:border-blue-500"
              aria-invalid={!!errors.comment || undefined}
              aria-describedby={errors.comment ? 'comment-error' : undefined}
              {...register('comment')}
            />
            {errors.comment && (
              <p
                id="comment-error"
                className="mt-3 text-2xl leading-8 text-red-600"
                role="alert"
              >
                {errors.comment.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-4xl font-light leading-[3.125rem] text-gray-200 mb-2"
              >
                {'Nome'}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="block w-full px-12 py-9 placeholder:text-3xl border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                aria-invalid={!!errors.name || undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-3 text-2xl leading-8 text-red-600"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-4xl font-light leading-[3.125rem] text-gray-200 mb-2"
              >
                {'E-mail'}
              </label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@exemplo.com.br"
                className="block w-full px-12 py-9 placeholder:text-3xl border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                aria-invalid={!!errors.email || undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-3 text-2xl leading-8 text-red-600"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-60"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>

          <div
            id="form-status"
            aria-live="polite"
            className="mt-4 text-2xl leading-8"
          >
            {isSubmitSuccessful && submitted ? (
              <p className="text-green-700">
                {`Obrigado, ${submitted.name}! Seu comentário foi enviado.`}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}
