import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTabs } from "@/components/menu/MenuTabs";

export const metadata: Metadata = {
  title: "Menu — D'Ajiks Coffee & Billiard",
  description: "Daftar lengkap menu kopi, signature drinks, main course, snack, dan produk literan D'Ajiks Coffee & Billiard.",
};

export default function MenuPage() {
  return (
    <section className="pb-28">
      <PageHeader
        eyebrow="Menu Lengkap"
        title="Setiap Cangkir,"
        titleAccent="Setiap Piring"
        description="Semua harga dalam Rupiah. Menu dapat berubah sewaktu-waktu mengikuti ketersediaan bahan."
      />
      <div className="container-page pt-12">
        <MenuTabs />
      </div>
    </section>
  );
}
