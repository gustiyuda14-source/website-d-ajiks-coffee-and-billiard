export const business = {
  name: "D'Ajiks Coffee & Billiard",
  tagline: "Semeton D'Ajiks — Saudara, Kerabat, Keluarga",
  city: "Kendari",
  whatsapp: {
    displayNumber: "+62 851-2196-0870",
    waNumber: "6285121960870",
  },
  social: {
    instagram: "https://www.instagram.com/d.ajikscoffeenbiliard",
    tiktok: "https://www.tiktok.com/@d_ajikscoffeenbil",
    grabfood: "https://r.grab.com/g/6-20260706_001619_BFC670B606144A3493862E375F8823E5_MEXMPS-6-C7NAELLKKEDJWA",
  },
  hours: [
    { label: "Setiap Hari", time: "10.00 – 02.00" },
  ],
} as const;

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp.waNumber}?text=${encoded}`;
}

export const billiardPricing = [
  { period: "Siang", time: "10.00 – 18.00", price: 25000 },
  { period: "Malam", time: "18.00 – 02.00", price: 40000 },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/billiard", label: "Billiard" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
