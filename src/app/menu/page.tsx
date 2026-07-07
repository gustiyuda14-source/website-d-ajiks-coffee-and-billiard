import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Menu — D'Ajiks Coffee & Billiard",
  description: "Daftar lengkap menu kopi, signature drinks, main course, snack, dan produk literan D'Ajiks Coffee & Billiard.",
  image: "/images/menu-items/kintamani-whisper.jpg",
  path: "/menu",
});

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
