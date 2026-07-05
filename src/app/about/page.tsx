import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About — D'Ajiks Coffee & Billiard",
  description: "Kisah di balik D'Ajiks Coffee & Billiard dan arti Semeton D'Ajiks.",
};

export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="container-page grid gap-14 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold/15">
          <Image
            src="/images/ambiance/hero-bar-counter.jpg"
            alt="Interior D'Ajiks Coffee & Billiard"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Apa Arti 'Semeton D'Ajiks'?"
          />
          <p className="font-body text-ivory/70">
            <em>Semeton</em> adalah kata dalam bahasa Bali yang berarti saudara,
            kerabat, atau keluarga. Filosofi inilah yang kami bawa ke setiap
            sudut D&apos;Ajiks Coffee &amp; Billiard — sebuah ruang di Kendari
            tempat siapa pun yang datang diperlakukan seperti bagian dari
            keluarga.
          </p>
          <p className="font-body text-ivory/70">
            Kami menggabungkan dua hal yang sama-sama butuh waktu untuk
            dinikmati: secangkir kopi yang diseduh dengan sungguh-sungguh, dan
            satu partai billiard yang tak terburu-buru. Di sinilah percakapan
            panjang, tawa, dan persaingan sehat di atas meja hijau bertemu.
          </p>
          <p className="font-body text-ivory/70">
            Buka setiap hari dari siang hingga dini hari — karena Semeton tidak
            mengenal jam kerja.
          </p>
        </div>
      </div>
    </section>
  );
}
