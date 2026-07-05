import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuTabs } from "@/components/menu/MenuTabs";

export const metadata: Metadata = {
  title: "Menu — D'Ajiks Coffee & Billiard",
  description: "Daftar lengkap menu kopi, signature drinks, main course, snack, dan produk literan D'Ajiks Coffee & Billiard.",
};

export default function MenuPage() {
  return (
    <section className="py-24">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          align="center"
          eyebrow="Menu Lengkap"
          title="Setiap Cangkir, Setiap Piring"
          description="Semua harga dalam Rupiah. Menu dapat berubah sewaktu-waktu mengikuti ketersediaan bahan."
          className="mx-auto"
        />
        <MenuTabs />
      </div>
    </section>
  );
}
