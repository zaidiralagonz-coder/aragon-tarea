import {
  BookOpen,
  FileText,
  Layers,
  LineChart,
  Presentation,
  Workflow,
} from "lucide-react";
import { servicios } from "@/data/catalog";

const ICONOS = {
  ensayos: BookOpen,
  resumenes: FileText,
  cuestionarios: Layers,
  presentaciones: Presentation,
  investigaciones: LineChart,
  "mapas-conceptuales": Workflow,
} as const;

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Lo que resolvemos
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Trabajos escolares entregados a tiempo, con formato y calidad que
            cumplen lo que pide el docente.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icono = ICONOS[servicio.slug];
            return (
              <li
                key={servicio.slug}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  <Icono className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {servicio.titulo}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {servicio.descripcion}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}