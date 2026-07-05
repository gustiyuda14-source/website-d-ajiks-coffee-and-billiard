export type MenuItem = {
  name: string;
  price: number | string;
};

export type MenuCategory = {
  slug: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "signature",
    title: "Signature Drinks",
    items: [
      { name: "Kintamani Whisper", price: 28000 },
      { name: "Lost In Lovina", price: 28000 },
      { name: "Jembrana Breeze", price: 28000 },
      { name: "Dewata Goldnut", price: 28000 },
      { name: "Matcha Strawberry Cloud", price: 28000 },
      { name: "Golden Uluwatu", price: 28000 },
    ],
  },
  {
    slug: "coffee",
    title: "Coffee",
    items: [
      { name: "Espresso", price: 15000 },
      { name: "Latte (Hot/Cold)", price: "25.000 / 27.000" },
      { name: "Manual Brew / V60 (Hot/Cold)", price: "30.000 / 35.000" },
      { name: "Mochacinno (Hot/Cold)", price: "26.000 / 28.000" },
      { name: "Hot Kopi Susu", price: 16000 },
      { name: "Americano (Hot/Cold)", price: "23.000 / 25.000" },
      { name: "Americano Honeyberry", price: 26000 },
      { name: "Americano Segaraningberry", price: 26000 },
      { name: "Americano Segara Spark", price: 26000 },
    ],
  },
  {
    slug: "ice-coffee",
    title: "Ice Coffee",
    items: [
      { name: "Aren", price: 24000 },
      { name: "Pandan", price: 26000 },
      { name: "Caramel", price: 26000 },
      { name: "Vanilla Latte", price: 26000 },
      { name: "Tiramisu", price: 26000 },
      { name: "Green Banana", price: 26000 },
    ],
  },
  {
    slug: "non-coffee",
    title: "Non Coffee",
    items: [
      { name: "Chocolate", price: 23000 },
      { name: "Matcha", price: 25000 },
      { name: "Red Velvet", price: 23000 },
      { name: "Lotus", price: 28000 },
      { name: "Lychee Tea", price: 20000 },
      { name: "Lemon Tea", price: 20000 },
      { name: "Pink Panther", price: 23000 },
    ],
  },
  {
    slug: "main-course",
    title: "Main Course",
    items: [
      { name: "Nasi Goreng D'Ajiks", price: 25000 },
      { name: "Nasi Goreng Tuna Asap", price: 27000 },
      { name: "Bakso Ayam", price: 27000 },
      { name: "Bandeng Crispy", price: 35000 },
      { name: "Nasi Jinggo D'Ajiks", price: 25000 },
      { name: "Ayam Betutu (Kampung)", price: 45000 },
      { name: "Ayam Betutu (Kota)", price: 30000 },
    ],
  },
  {
    slug: "snack",
    title: "Snack",
    items: [
      { name: "Risol Mayo / pcs", price: 6000 },
      { name: "Ubi Goreng", price: 20000 },
      { name: "Pisang Goreng", price: 20000 },
      { name: "Pisang Goreng Keju/Coklat", price: 25000 },
      { name: "Kerupuk Pangsit", price: 22000 },
      { name: "Kentang Goreng", price: 20000 },
    ],
  },
  {
    slug: "produk-literan",
    title: "Sharing Seliter",
    items: [
      { name: "Coklat", price: "Literan" },
      { name: "4 Sharing", price: "Literan" },
      { name: "Matcha", price: "Literan" },
      { name: "Pandan", price: "Literan" },
      { name: "Aren", price: "Literan" },
    ],
  },
];

export function formatPrice(price: number | string) {
  if (typeof price === "string") return price.includes("Literan") ? price : `Rp${price}`;
  return `Rp${price.toLocaleString("id-ID")}`;
}
