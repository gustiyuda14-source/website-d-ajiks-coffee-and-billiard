import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About — D'Ajiks Coffee & Billiard",
  description: "Kisah di balik D'Ajiks Coffee & Billiard dan arti Semeton D'Ajiks.",
  image: "/images/ambiance/barista.jpg",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="container-page relative grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-3 -translate-x-4 translate-y-4 rounded-2xl border border-gold/25"
              aria-hidden
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold/15 shadow-card">
              <Image
                src="/images/ambiance/hero-bar-counter.jpg"
                alt="Interior D'Ajiks Coffee & Billiard"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <Reveal>
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Apa Arti"
              titleAccent="'Semeton D'Ajiks'?"
            />
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="border-l-2 border-gold/50 pl-5 font-display text-lg leading-relaxed tracking-wide text-gold-light/90">
              Semeton — saudara, kerabat, keluarga.
            </blockquote>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-body leading-relaxed text-ivory/70">
              <em>Semeton</em> adalah kata dalam bahasa Bali yang berarti saudara,
              kerabat, atau keluarga. Filosofi inilah yang kami bawa ke setiap
              sudut D&apos;Ajiks Coffee &amp; Billiard — sebuah ruang di Kendari
              tempat siapa pun yang datang diperlakukan seperti bagian dari
              keluarga.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="font-body leading-relaxed text-ivory/70">
              Kami menggabungkan dua hal yang sama-sama butuh waktu untuk
              dinikmati: secangkir kopi yang diseduh dengan sungguh-sungguh, dan
              satu partai billiard yang tak terburu-buru. Di sinilah percakapan
              panjang, tawa, dan persaingan sehat di atas meja hijau bertemu.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="font-body leading-relaxed text-ivory/70">
              Buka setiap hari dari siang hingga dini hari — karena Semeton tidak
              mengenal jam kerja.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
