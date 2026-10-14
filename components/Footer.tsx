import Link from "next/link";
import { site } from "@/data/site";

const ANIO = new Date().getFullYear();

export default function Footer() {
  const whatsappHref = `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(
    "Hola Aragón Tareas, quiero cotizar una tarea.",
  )}`;

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              {site.slogan}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#servicios"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#como-funciona"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/#cotizador"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Cotizador
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                {site.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Información
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Pago en efectivo o transferencia</li>
              <li>Datos de pago solo por chat</li>
              <li>Evidencias anonimizadas</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-500">
          <p>
            © {ANIO} {site.name}. Todos los derechos reservados.
          </p>
          <p>
            Hecho para estudiantes del {site.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}