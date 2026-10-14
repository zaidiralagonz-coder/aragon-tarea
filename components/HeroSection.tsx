import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function HeroSection() {
  const whatsappHref = `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(
    "Hola Aragón Tareas, quiero cotizar una tarea.",
  )}`;

  return (
    <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-600"
              aria-hidden="true"
            />
            +100 entregas completadas
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Tareas y entregas escolares, resueltas.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-pretty text-zinc-600 sm:text-xl dark:text-zinc-400">
            {site.slogan}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Cotizar por WhatsApp
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
            CONALEP Plantel Aragón 004 · CDMX · Pago en efectivo o transferencia
          </p>
        </div>
      </div>
    </section>
  );
}