# Decisiones de Diseño e Ingeniería — FASE 2 (`gemini-redesign`)

## 1. Dirección de Arte: "Startup Premium Silenciosa"
- **Cero Gradientes y Cero Emojis:** Se eliminaron por completo las clases `bg-gradient-*`, sombras difusas pesadas y caracteres emoji tanto en la interfaz como en la plantilla del mensaje de WhatsApp. La jerarquía se construye mediante tipografía (`tracking-tight`, pesos `font-medium` y `font-semibold`), espacios en blanco y bordes estructurales de `1px` (`border-zinc-200` en claro, `border-zinc-800` en oscuro).
- **Semántica del Color:**
  - `zinc` (50 a 950): Estructura, superficies, divisores y jerarquía de lectura.
  - `blue-600`: Acción primaria de navegación hacia el embudo (`Cotizar tarea ahora`), estados seleccionados en el configurador y anillos de foco (`focus-visible:outline-blue-600`).
  - `emerald-600`: Indicadores de autoridad/disponibilidad en tiempo real (`+100 tareas entregadas`, badge `Disponible`), garantías de privacidad y botón final de disparo hacia WhatsApp.
- **Transiciones Controladas:** Se aplicó `transition-colors duration-150 ease-out` siguiendo los principios de Emil Kowalski: respuesta instantánea al tacto/cursor sin animaciones intrusivas que retrasen la tarea del usuario.

## 2. Accesibilidad (WCAG AA) y Diseño Mobile-First
- **Contraste Verificado:** El texto secundario nunca cae por debajo de `text-zinc-600` sobre fondo blanco ni de `text-zinc-400` sobre `zinc-900`/`zinc-950`, asegurando ratios superiores a `4.5:1`.
- **Áreas Táctiles (Touch Targets):** Los CTAs principales y selectores interactivos mantienen una altura mínima de `40px` a `44px` (`h-10` / `h-11`) para evitar errores de pulsación en teléfonos móviles dentro del plantel.
- **Atributos ARIA y Navegación por Teclado:**
  - Uso de `aria-pressed` en los botones segmentados de categoría, formato de entregable, urgencia y método de pago.
  - Región `aria-live="polite"` en el contenedor de vista previa de WhatsApp para anunciar cambios de cotización a tecnologías de asistencia.

## 3. Psicología de Conversión en `Cotizador.tsx`
- **Eliminación de la "Caja Negra" (Live Preview):** En lugar de redirigir a WhatsApp de forma opaca, el alumno observa en tiempo real (en un bloque monoespaciado tipo consola limpia) exactamente qué texto enviará. Esto reduce la ansiedad de contacto y aumenta la tasa de envío.
- **Respaldo de Portapapeles:** Se incluyó un botón de copiado directo (`navigator.clipboard.writeText`) por si el estudiante opera desde un navegador de escritorio sin WhatsApp Web configurado.
- **Sincronización de Estado sin Datos Huérfanos:** Cuando el usuario cambia el filtro de área académica (`Todas`, `Módulos Profesionales`, `Formación Básica`), el manejador valida si la materia activa pertenece al nuevo subconjunto; de no ser así, selecciona automáticamente la primera materia válida para evitar cotizaciones vacías.

## 4. Privacy-by-Design (Regla de Oro)
- **Prevención Activa en el Formulario:** El campo de detalles adicionales incluye una restricción de longitud (`maxLength={240}`) y un recordatorio explícito al pie del input instruyendo al alumno a no escribir su nombre ni el de ningún docente.
- **Cierre del Mensaje:** La plantilla generada para WhatsApp concluye recordando que las instrucciones o capturas se envían anonimizadas, reforzando la cultura de privacidad desde el primer contacto.
- **Transparencia en Pagos:** Se explicita directamente en el selector y en el Hero que los pagos se realizan en efectivo dentro de CONALEP Plantel Aragón 004 o vía transferencia bancaria cuyos datos se entregan únicamente por chat.