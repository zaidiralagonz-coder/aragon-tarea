import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Wallet,
} from "lucide-react";
import { site } from "@/data/site";

interface GuaranteeItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
}

const GUARANTEES: readonly GuaranteeItem[] = [
  {
    id: "anonymity",
    title: "100% Anónimo y Confidencial",
    description:
      "Cero nombres de alumnos o profesores en nuestras muestras. Tu identidad nunca se expone.",
    icon: ShieldCheck,
  },
  {
    id: "quality",
    title: "Rigurosidad Técnica",
    description:
      "Código en C, C++ y PSeInt compilado sin errores ni warnings. Documentos con formato exacto.",
    icon: Terminal,
  },
  {
    id: "payments",
    title: "Pago Flexible y Seguro",
    description:
      "Aceptamos pagos en persona o transferencia bancaria. Datos proporcionados solo por chat.",
    icon: Wallet,
  },
];

export default function HeroSection() {
  const directWhatsappUrl = `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(
    "Hola, me interesa cotizar una tarea para CONALEP Aragón 004."
  )}`;

  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl px-4 pt-14 pb-16 sm:px-6 md:pt-24 md:pb-24">
        <div className="flex flex-col items-start text-left sm:items-center sm:text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-600"
            />
            <span>+100 tareas entregadas</span>
            <span
              aria-hidden="true"
              className="text-zinc-300 dark:text-zinc-700"
            >
              /
            </span>
            <span className="text-zinc-600 dark:text-zinc-400">
              {site.location}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50"
          >
           Resolución académica y técnica con precisión profesional.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {site.slogan}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#cotizador"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span>Cotizar tarea ahora</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-5 text-sm font-medium text-zinc-900 transition-colors duration-150 ease-out hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <MessageSquare
                className="h-4 w-4 text-emerald-600"
                aria-hidden="true"
              />
              <span>WhatsApp directo ({site.whatsappDisplay})</span>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {GUARANTEES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40"
                >
                  <dt className="flex items-center gap-2.5 text-sm font-medium text-zinc-950 dark:text-zinc-100">
                    <IconComponent
                      className="h-4 w-4 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </dt>
                  <dd className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}