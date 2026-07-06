import type { Metadata } from "next";
import { Cinzel, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatButton } from "@/components/layout/WhatsAppFloatButton";
import { business } from "@/lib/constants";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dajiks-coffee-and-billiard.vercel.app"),
  title: "D'Ajiks Coffee & Billiard | Coffee Shop & Billiard Lounge di Kendari",
  description:
    "D'Ajiks Coffee & Billiard — coffee shop dan billiard lounge premium di Kendari. Nikmati signature drinks, main course, dan meja billiard dengan suasana elegan.",
  openGraph: {
    title: "D'Ajiks Coffee & Billiard",
    description:
      "Coffee shop & billiard lounge premium di Kendari. Reservasi via WhatsApp.",
    images: ["/images/ambiance/hero-bar-counter.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: business.name,
  telephone: `+${business.whatsapp.waNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressCountry: "ID",
  },
  sameAs: [business.social.instagram, business.social.tiktok],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${cinzel.variable} ${jost.variable}`}>
      <body className="bg-forest-deep font-body text-ivory antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
