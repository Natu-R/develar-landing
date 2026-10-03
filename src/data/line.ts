/**
 * El recorrido — the run a contact makes, in the buyer's language.
 *
 * Every step below is something the product actually does. What it deliberately
 * does NOT do is name transports, endpoints, queues or retry policies: an owner
 * buying this does not operate it, and showing them the plumbing suggests they
 * will have to.
 *
 * Sources: develar/README.md, develar/USE-CASES.md,
 * develar/docs/agent-selection-levels.md, and the dashboard's own UI strings
 * under dashboard/src/features/**. Terminology matches the product: "agente",
 * never "cajero".
 */

export interface Step {
  /** Two-digit running order, printed on the step's plate. */
  id: string;
  /** Step name, in the product's own vocabulary. */
  name: string;
  /** Authored pictogram key — see components/Pictogram.astro. */
  pictogram: string;
  /** One line that carries the step on its own. */
  headline: string;
}

export const STEPS: Step[] = [
  {
    id: "01",
    name: "Anuncio",
    pictogram: "anuncio",
    headline: "Alguien toca tu anuncio.",
  },
  {
    id: "02",
    name: "Tu página",
    pictogram: "web",
    headline: "Llega a la landing y es redirigido a WhatsApp.",
  },
  {
    id: "03",
    name: "Lead",
    pictogram: "boleto",
    headline: "Queda cargado en Leads con un código propio.",
  },
  {
    id: "04",
    name: "Agente",
    pictogram: "agente",
    headline: "El sistema lo asigna a quien está en turno.",
  },
  {
    id: "05",
    name: "Conversión",
    pictogram: "caja",
    headline: "Una frase disparadora lee el monto y envía la conversión a Meta.",
  },
  {
    id: "06",
    name: "Meta",
    pictogram: "capi",
    headline: "Meta recibe el monto y optimiza hacia perfiles similares.",
  },
];

/** The states a contact moves through, as the dashboard labels them. */
export const RUN_STATES = [
  "No contactado",
  "Contactado",
  "Convertido",
  "Reportado",
] as const;
