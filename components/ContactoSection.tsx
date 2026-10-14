import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function ContactoSection() {
  const whatsappHref = `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(
    "Hola Aragón Tareas, quiero cotizar una tarea.",
  )}`;

  return (
    <section
      id="contacto"
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50">
            ¿Listo para quitarte la tarea de encima?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Escríbenos por WhatsApp. Te cotizamos sin compromiso y respondemos
            en minutos.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {site.whatsappDisplay}
            </Link>
          </div>

          <dl className="mt-12 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-medium text-zinc-900 dark:text-zinc-50">
                Zona
              </dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                {site.location}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-zinc-50">
                Pagos
              </dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                Efectivo y transferencia
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-zinc-50">
                Respuesta
              </dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                Normalmente en minutos
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}