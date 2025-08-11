'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, SearchIcon } from 'lucide-react'

type Item = {
  id: string
  title: string
  category: string
  image: string
  href: string
}

const DATA: Item[] = [
  {
    id: '1',
    title: 'Guia de Onboarding',
    category: 'Documentação',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '2',
    title: 'Integração com API',
    category: 'Desenvolvimento',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '3',
    title: 'Design Tokens',
    category: 'UI/UX',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '4',
    title: 'Roadmap 2025',
    category: 'Produto',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '5',
    title: 'Guia de Estilo',
    category: 'UI/UX',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '6',
    title: 'FAQ Comercial',
    category: 'Vendas',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '7',
    title: 'Boas Práticas de SEO',
    category: 'Marketing',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  },
  {
    id: '8',
    title: 'Relatório Mensal',
    category: 'Analytics',
    image:
      '/placeholder.svg?height=200&width=320',
    href: '#'
  }
]

export type SearchPanelProps = {
  open?: boolean
  onClose?: () => void
}

export function SearchPanel({
  open = false,
  onClose = () => {}
}: SearchPanelProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Foco automático ao abrir
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [open])

  // Fechar com ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Filtragem simples (title + category)
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return DATA
    return DATA.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [query])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Busca"
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Painel */}
      <div className="absolute inset-x-0 top-0 bg-white rounded-b-[2rem] shadow-[0_1.25rem_2.5rem_rgba(0,0,0,0.2)] px-[3.5rem] pt-[3rem] pb-[2rem]">
        {/* Header com Input */}
        <div className="flex items-center gap-6">
          <div className="flex-1 relative">
            <SearchIcon
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
              size={28}
            />
            <input
              ref={inputRef}
              type="search"
              placeholder="Busque por título ou categoria..."
              className="w-full pl-16 pr-16 py-6 rounded-2xl border border-gray-300 text-2xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar busca"
            className="p-3 rounded-xl hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <X size={36} />
          </button>
        </div>

        {/* Resultados */}
        <div className="mt-8">
          {results.length === 0 ? (
            <p className="text-2xl text-gray-500">{'Sem resultados.'}</p>
          ) : (
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {results.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-2xl border border-gray-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    onClick={onClose}
                  >
                    <div className="relative aspect-[16/10] bg-gray-50">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-red-600 text-xl font-medium">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-gray-900 leading-snug group-hover:underline">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
