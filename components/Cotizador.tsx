"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Check, Copy, MessageCircle, Lock } from "lucide-react";
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
  const [copied, setCopied] = useState(false);

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

  const handleCopyPreview = async () => {
    try {
      await navigator.clipboard.writeText(mensaje);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="cotizador"
      aria-labelledby="cotizador-heading"
      className="border-b border-zinc-200 bg-zinc-50/40 py-16 md:py-24 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-500">
            <span>COTIZADOR EXPRESS</span>
          </div>
          <h2
            id="cotizador-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
          >
            Configura tu entrega y revisa el mensaje antes de enviarlo.
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Selecciona el tipo de trabajo y la urgencia. El precio final se confirma por WhatsApp al revisar la extensión de tu actividad.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Panel de configuración */}
          <div className="space-y-6 rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 lg:col-span-7 dark:border-zinc-800 dark:bg-zinc-900">
            <form id="cotizador-form" className="space-y-5">
              <Field label="1. Tipo de trabajo">
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

              <Field label="2. Materia o módulo" hint="Ej. Historia, Matemáticas">
                <input
                  type="text"
                  value={materia}
                  onChange={(event) => setMateria(event.target.value)}
                  placeholder="Materia"
                  autoComplete="off"
                  className={INPUT_CLASS}
                />
              </Field>

              <Field label="3. Urgencia">
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

              <Field label="4. Extensión" hint="Cuartillas, diapositivas…">
                <input
                  type="text"
                  value={extension}
                  onChange={(event) => setExtension(event.target.value)}
                  placeholder="Ej. 5 cuartillas"
                  autoComplete="off"
                  className={INPUT_CLASS}
                />
              </Field>

              <Field label="5. Notas adicionales" hint="Opcional">
                <div className="relative">
                  <textarea
                    value={notas}
                    onChange={(event) => setNotas(event.target.value)}
                    rows={3}
                    maxLength={240}
                    placeholder="Detalles, fuentes, formato…"
                    className={INPUT_CLASS + " resize-y"}
                  />
                  <div className="mt-2 flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>Regla de privacidad: No escribas tu nombre completo ni el de ningún docente.</span>
                  </div>
                </div>
              </Field>
            </form>
          </div>

          {/* Panel derecho: Resumen y Preview en vivo */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 lg:sticky lg:top-24 lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Estado del servicio
                </span>
                <div className="mt-0.5 text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Disponible para hoy
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-600" />
                <span>Aceptando pedidos</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Vista previa del mensaje de WhatsApp
                </span>
                <button
                  type="button"
                  onClick={handleCopyPreview}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copiar texto</span>
                    </>
                  )}
                </button>
              </div>

              <div
                aria-live="polite"
                aria-atomic="true"
                className="mt-2 rounded-lg border border-zinc-200 bg-zinc-50 p-3.5 font-mono text-xs leading-relaxed whitespace-pre-wrap text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {mensaje}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Enviar solicitud por WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500 dark:text-zinc-400">
                <span>Atención directa al {site.whatsappDisplay} · Sin intermediarios</span>
              </div>
            </div>
          </div>
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