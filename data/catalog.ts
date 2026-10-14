export const servicios = [
  {
    slug: "ensayos",
    titulo: "Ensayos",
    descripcion:
      "Redacción con estructura clara, citas y formato solicitado por el docente.",
  },
  {
    slug: "resumenes",
    titulo: "Resúmenes",
    descripcion:
      "Síntesis de lecturas, capítulos o artículos sin perder las ideas clave.",
  },
  {
    slug: "cuestionarios",
    titulo: "Cuestionarios",
    descripcion:
      "Respuestas desarrolladas y bien fundamentadas, listas para entregar.",
  },
  {
    slug: "presentaciones",
    titulo: "Presentaciones",
    descripcion:
      "Diapositivas limpias y visualmente ordenadas, con notas del expositor.",
  },
  {
    slug: "investigaciones",
    titulo: "Investigaciones",
    descripcion:
      "Trabajos con fuentes verificables, formato APA o el que solicite el docente.",
  },
  {
    slug: "mapas-conceptuales",
    titulo: "Mapas conceptuales",
    descripcion:
      "Esquemas jerárquicos, claros y legibles, listos para imprimir o entregar digital.",
  },
] as const;

export type Servicio = (typeof servicios)[number];