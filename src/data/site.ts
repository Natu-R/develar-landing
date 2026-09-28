/**
 * Facts the page states about the business.
 *
 * PLACEHOLDERS — replace before publishing. These are the only invented values
 * on the site and they are all commercial contact details, kept in one file so
 * they can be swapped in one edit. Nothing else on the page claims a customer,
 * a metric, a price, or a certification, because none of those exist yet.
 */
export const SITE = {
  name: "Develar",
  tagline: "Atribución de WhatsApp para operadores de iGaming",

  /** PLACEHOLDER — international format, digits only. */
  whatsappNumber: "5491100000000",
  /**
   * The number as the visitor reads it on the ticket stub. Leave empty while
   * `whatsappNumber` is the placeholder: a plausible-looking fake number on the
   * page's only conversion path is a fabricated fact, and a visitor who copies
   * it reaches nothing. The stub falls back to the line's own identity until a
   * real number is set here.
   */
  whatsappDisplay: "",

  whatsappMessage:
    "Hola, vi la página de Develar y quiero ver cómo atribuyen los depósitos que entran por WhatsApp.",

  /** PLACEHOLDER — the domain the site will be served from. */
  url: "https://develar.app",

  /**
   * Where the closing form posts. Leave empty and the form composes its answers
   * into a WhatsApp message instead of pretending they were stored — see
   * components/ContactForm.astro. Set it to a URL that accepts a JSON POST
   * (your own endpoint, or a form service) when one exists.
   */
  formEndpoint: "",
} as const;

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
