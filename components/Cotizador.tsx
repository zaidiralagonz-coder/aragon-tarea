"use client";

import { useMemo, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const TIPOS = [
  "Ensayo",
  "Resumen",
  "Cuestionario",
  "Presentación",
  "Investigación",
  "Mapa conceptual",
  "Otro",
] as const;

type Tipo = (typeof TIPOS)[number];

const URGENCIAS = [
  { value: "hoy", label: "Para hoy" },
  { value: "48h", label: "En 48 horas" },
  { value: "semana", label: "Esta semana" },
  { value: "flexible", label: "Fecha flexible" },
] as const;

type Urgencia = (typeof URGENCIAS)[number]["value"];

const URGENCIA_LABEL: Record<Urgencia, string> = {
  hoy: "Para hoy",
  "48h": "En 48 horas",
  semana: "Esta semana",
  flexible: "Fecha flexible",
};

const INPUT_CLASS =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-600";

export default function Cotizador() {
  const [tipo, setTipo] = useState<Tipo>("Ensayo");
  const [materia, setMateria] = useState("");
  const [urgencia, setUrgencia] = useState<Urgencia>("48h");
  const [extension, setExtension] = useState("");
  const [notas, setNotas] = useState("");

  const mensaje = useMemo(() => {
    const lineas: string[] = [
      "Hola Aragón Tareas, quiero cotizar:",
      "",
      `Tipo: ${tipo}`,
      `Urgencia: ${URGENCIA_LABEL[urgencia]}`,
    ];
    if (materia.trim()) lineas.push(`Materia: ${materia.trim()}`);
    if (extension.trim()) lineas.push(`Extensión: ${extension.trim()}`);
    if (notas.trim()) lineas.push(`Notas: ${notas.trim()}`);
    return lineas.join("\n");
  }, [tipo, materia, urgencia, extension, notas]);

  const href = `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(mensaje)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="cotizador"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Cotiza en 30 segundos
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Arma tu solicitud y envíala por WhatsApp. Te respondemos con el
            precio, sin compromiso.
          </p>

          <form
            id="cotizador-form"
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <Field label="Tipo de trabajo">
              <select
                value={tipo}
                onChange={(event) => setTipo(event.target.value as Tipo)}
                className={INPUT_CLASS}
              >
                {TIPOS.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Materia" hint="Ej. Historia, Matemáticas">
              <input
                type="text"
                value={materia}
                onChange={(event) => setMateria(event.target.value)}
                placeholder="Materia"
                autoComplete="off"
                className={INPUT_CLASS}
              />
            </Field>

            <Field label="Urgencia">
              <div
                role="group"
                aria-label="Urgencia"
                className="grid grid-cols-2 gap-2"
              >
                {URGENCIAS.map((opcion) => {
                  const activa = urgencia === opcion.value;
                  return (
                    <button
                      key={opcion.value}
                      type="button"
                      onClick={() => setUrgencia(opcion.value)}
                      aria-pressed={activa}
                      className={
                        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 " +
                        (activa
                          ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-600 dark:bg-blue-950/40 dark:text-blue-300"
                          : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900")
                      }
                    >
                      {opcion.label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label="Extensión" hint="Cuartillas, diapositivas…">
              <input
                type="text"
                value={extension}
                onChange={(event) => setExtension(event.target.value)}
                placeholder="Ej. 5 cuartillas"
                autoComplete="off"
                className={INPUT_CLASS}
              />
            </Field>

            <Field label="Notas adicionales" hint="Opcional">
              <textarea
                value={notas}
                onChange={(event) => setNotas(event.target.value)}
                rows={3}
                placeholder="Detalles, fuentes, formato…"
                className={INPUT_CLASS + " resize-y"}
              />
            </Field>
          </form>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Para: Aragón Tareas
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                WhatsApp
              </span>
            </div>
            <pre className="whitespace-pre-wrap break-words bg-white px-4 py-4 font-sans text-sm leading-relaxed text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              {mensaje}
            </pre>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enviar por WhatsApp
          </a>

          <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-500">
            Los datos de pago se comparten solo por chat.
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {label}
        </span>
        {hint && (
          <span className="text-xs text-zinc-500 dark:text-zinc-500">
            {hint}
          </span>
        )}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}