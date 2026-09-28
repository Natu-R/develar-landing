/**
 * What the buyer gets. Four blocks, three lines each.
 *
 * Kept deliberately thin: a landing is scanned, not read, and the earlier
 * version buried the argument under twenty bullets. Each capability now gets a
 * headline that stands alone and the three specifics most likely to decide a
 * buyer — the rest belongs in the demo, where someone can ask.
 *
 * Every line was traced to shipped code or a dashboard UI string. Where the
 * product is narrower than a phrase would suggest, the phrase is narrower too:
 * nothing here claims a built-in CRM, and nothing here claims that people who
 * message the number directly arrive with campaign attribution.
 */

export interface Capability {
  id: string;
  name: string;
  pictogram: string;
  headline: string;
  points: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "agentes",
    name: "Tu equipo",
    pictogram: "agente",
    headline: "Agentes con turno propio, y el reparto que rota solo.",
    points: [
      "Varios números de WhatsApp por agente, con el tope que definas",
      "Comparativa por agente: contactos, convertidos y monto generado",
      "Ningún contacto queda sin responder: siempre hay número de respaldo",
    ],
  },
  {
    id: "bandeja",
    name: "La bandeja",
    pictogram: "sala",
    headline: "Un WhatsApp Web para todo el equipo, y tú ves todo.",
    points: [
      "Modo supervisor: entra y responde el chat de cualquier agente",
      "Texto, fotos, emojis, reacciones y respuestas citadas",
      "Alias por número — «Línea ventas», «Línea soporte»",
    ],
  },
  {
    id: "conectar",
    name: "Tu página",
    pictogram: "web",
    headline: "Se conecta pegando un código. O sin página, si no tienes.",
    points: [
      "Botón flotante, widget donde quieras, o tu propio botón",
      "Sin página: un enlace para pegar directo en el anuncio",
      "Protección anti-spam incluida, sin configurar nada",
    ],
  },
  {
    id: "numeros",
    name: "Los números",
    pictogram: "reporte",
    headline: "Qué campaña trajo la plata, no cuántos clicks trajo.",
    points: [
      "Embudo: cuántos entraron, a cuántos se contestó, cuántos pagaron",
      "Las conversiones se reportan del lado del servidor, no del navegador",
      "Horarios: cuándo llegan los contactos y cuándo pagan",
    ],
  },
];
