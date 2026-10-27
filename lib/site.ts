export const siteConfig = {
  name: "Schäferhundeverein Heidelberg & Dossenheim e.V.",
  shortName: "SV OG Heidelberg & Dossenheim",
  slogan: "Verein für Deutsche Schäferhunde",
  domain: "schaeferhundeverein-heidelberg.de",
  description:
    "Verein für Deutsche Schäferhunde, Ortsgruppe Heidelberg & Dossenheim e.V. (gegr. 1922). Hundesport, Agility, IGP, Begleithundeprüfung, Welpentraining und mehr. Hunde aller Rassen willkommen, auch Nichtmitglieder.",
  color: "#0080c9",
  instagram: "https://www.instagram.com/schaeferhundeverein_heidelberg",
  foundingYear: 1922,
} as const;

export const contact = {
  address: {
    name: "Schäferhundeverein Heidelberg & Dossenheim e.V.",
    street: "Im Fennenberger 2",
    city: "69121 Heidelberg",
  },
  // Vereinsheim
  phone: "06221 - 47 55 65",
  phoneHref: "tel:+4962214755 65".replace(/\s/g, ""),
  email: "info@schaeferhundeverein-heidelberg.de",
  // Fallback training contact when a discipline has no own address
  sportbeauftragte: "sportbeauftragte@schaeferhundeverein-heidelberg.de",
  // Anmeldung / Kontakt Kathrin Fischer
  sms: "+49 175 5245250",
  smsHref: "sms:+491755245250",
  anmeldung: {
    name: "Kathrin Fischer",
    phone: "0175 / 524 52 50",
    phoneHref: "tel:+491755245250",
    email: "k.fischer@schaeferhundeverein-heidelberg.de",
  },
} as const;
