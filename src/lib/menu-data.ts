export type MenuItem = {
  name: string;
  price: number | string;
  /** Foto produk asli (public path) — item dengan foto tampil sebagai photo card */
  image?: string;
  /** Label kecil di pojok foto, mis. "Signature" / "Best Seller" */
  tag?: string;
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
      {
        name: "Kintamani Whisper",
        price: 28000,
        image: "/images/menu-items/kintamani-whisper.jpg",
        tag: "Signature",
      },
      {
        name: "Lost In Lovina",
        price: 28000,
        image: "/images/menu-items/lost-in-lovina.jpg",
        tag: "Signature",
      },
      { name: "Jembrana Breeze", price: 28000 },
      { name: "Dewata Goldnut", price: 28000 },
      {
        name: "Matcha Strawberry Cloud",
        price: 28000,
        image: "/images/menu-items/matcha-strawberry-cloud.jpg",
        tag: "Signature",
      },
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
      {
        name: "Americano (Hot/Cold)",
        price: "23.000 / 25.000",
        image: "/images/menu-items/americano-splash.jpg",
      },
      { name: "Americano Honeyberry", price: 26000 },
      { name: "Americano Segaraningberry", price: 26000 },
      { name: "Americano Segara Spark", price: 26000 },
    ],
  },
  {
    slug: "ice-coffee",
    title: "Ice Coffee",
    items: [
      {
        name: "Aren",
        price: 24000,
        image: "/images/menu-items/ice-coffee-aren.jpg",
        tag: "Best Seller",
      },
      {
        name: "Pandan",
        price: 26000,
        image: "/images/menu-items/ice-coffee-pandan.jpg",
        tag: "Best Seller",
      },
      { name: "Caramel", price: 26000 },
      {
        name: "Vanilla Latte",
        price: 26000,
        image: "/images/menu-items/vanilla-latte.jpg",
      },
      {
        name: "Tiramisu",
        price: 26000,
        image: "/images/menu-items/tiramisu.jpg",
        tag: "Best Seller",
      },
      { name: "Green Banana", price: 26000 },
    ],
  },
  {
    slug: "non-coffee",
    title: "Non Coffee",
    items: [
      {
        name: "Chocolate",
        price: 23000,
        image: "/images/menu-items/chocolate.jpg",
      },
      {
        name: "Matcha",
        price: 25000,
        image: "/images/menu-items/matcha.jpg",
      },
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
      {
        name: "Nasi Goreng D'Ajiks",
        price: 25000,
        image: "/images/menu-items/action-nasi-goreng.jpg",
        tag: "Best Seller",
      },
      { name: "Nasi Goreng Tuna Asap", price: 27000 },
      {
        name: "Bakso Ayam",
        price: 27000,
        image: "/images/menu-items/bakso-ayam.jpg",
      },
      {
        name: "Bandeng Crispy",
        price: 35000,
        image: "/images/menu-items/bandeng-crispy.jpg",
      },
      {
        name: "Nasi Jinggo D'Ajiks",
        price: 25000,
        image: "/images/menu-items/nasi-jinggo.jpg",
        tag: "Best Seller",
      },
      {
        name: "Ayam Betutu (Kampung)",
        price: 45000,
        image: "/images/menu-items/ayam-betutu.jpg",
        tag: "Best Seller",
      },
      { name: "Ayam Betutu (Kota)", price: 30000 },
    ],
  },
  {
    slug: "snack",
    title: "Snack",
    items: [
      {
        name: "Risol Mayo / pcs",
        price: 6000,
        image: "/images/menu-items/action-risol.jpg",
      },
      {
        name: "Ubi Goreng",
        price: 20000,
        image: "/images/menu-items/ubi-goreng.jpg",
      },
      {
        name: "Pisang Goreng",
        price: 20000,
        image: "/images/menu-items/action-pisang-goreng.jpg",
      },
      {
        name: "Pisang Goreng Keju/Coklat",
        price: 25000,
        image: "/images/menu-items/pisang-goreng-topping.jpg",
      },
      { name: "Kerupuk Pangsit", price: 22000 },
      { name: "Kentang Goreng", price: 20000 },
    ],
  },
  {
    slug: "produk-literan",
    title: "Sharing Seliter",
    items: [
      {
        name: "Coklat",
        price: "Literan",
        image: "/images/menu-items/literan-coklat.jpg",
      },
      {
        name: "4 Sharing",
        price: "Literan",
        image: "/images/menu-items/literan-4sharing.jpg",
      },
      {
        name: "Matcha",
        price: "Literan",
        image: "/images/menu-items/literan-matcha.jpg",
      },
      {
        name: "Pandan",
        price: "Literan",
        image: "/images/menu-items/literan-pandan.jpg",
      },
      {
        name: "Aren",
        price: "Literan",
        image: "/images/menu-items/literan-aren.jpg",
      },
    ],
  },
];

export function formatPrice(price: number | string) {
  if (typeof price === "string") return price.includes("Literan") ? price : `Rp${price}`;
  return `Rp${price.toLocaleString("id-ID")}`;
}
