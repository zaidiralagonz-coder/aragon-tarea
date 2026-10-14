import { ClipboardCheck, MessageCircle, PackageCheck } from "lucide-react";

const PASOS = [
  {
    numero: "01",
    titulo: "Mandas tu solicitud",
    descripcion:
      "Escríbenos por WhatsApp con el tipo de trabajo, la materia y la fecha de entrega.",
    Icono: MessageCircle,
  },
  {
    numero: "02",
    titulo: "Cotizamos al instante",
    descripcion:
      "Te respondemos con el precio y el tiempo de entrega. Sin compromiso.",
    Icono: ClipboardCheck,
  },
  {
    numero: "03",
    titulo: "Recibes tu trabajo",
    descripcion:
      "Entregamos en la fecha acordada. Pago en efectivo o transferencia.",
    Icono: PackageCheck,
  },
] as const;

export default function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      className="border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Cómo funciona
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Tres pasos simples. Sin llamadas, sin formularios eternos.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {PASOS.map(({ numero, titulo, descripcion, Icono }) => (
            <li key={numero} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  <Icono className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium tracking-wider text-zinc-400 dark:text-zinc-600">
                  {numero}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {titulo}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {descripcion}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}