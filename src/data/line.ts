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
    headline: "Alguien toca tu campaña.",
  },
  {
    id: "02",
    name: "Tu página",
    pictogram: "web",
    headline: "El botón guarda de qué anuncio vino.",
  },
  {
    id: "03",
    name: "Contacto",
    pictogram: "boleto",
    headline: "El mensaje sale con un código propio.",
  },
  {
    id: "04",
    name: "Agente",
    pictogram: "agente",
    headline: "Lo atiende quien está en turno.",
  },
  {
    id: "05",
    name: "Carga",
    pictogram: "caja",
    headline: "La plata queda atada al contacto.",
  },
  {
    id: "06",
    name: "Meta",
    pictogram: "capi",
    headline: "La campaña que lo trajo queda anotada.",
  },
];

/** The states a contact moves through, as the dashboard labels them. */
export const RUN_STATES = [
  "No contactado",
  "Contactado",
  "Convertido",
  "Reportado",
] as const;
