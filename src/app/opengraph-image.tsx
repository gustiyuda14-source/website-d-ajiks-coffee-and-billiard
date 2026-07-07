import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "D'Ajiks Coffee & Billiard — Coffee Shop & Billiard Lounge di Kendari";

export default async function OpengraphImage() {
  const fontsDir = join(process.cwd(), "src/assets/fonts");
  const [cinzel700, jost300, jost400, jost500, logo] = await Promise.all([
    readFile(join(fontsDir, "Cinzel-700.woff")),
    readFile(join(fontsDir, "Jost-300.woff")),
    readFile(join(fontsDir, "Jost-400.woff")),
    readFile(join(fontsDir, "Jost-500.woff")),
    readFile(join(process.cwd(), "public/brand/logo-gold-mark-og.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          backgroundImage:
            "radial-gradient(circle at 50% 32%, rgba(201,162,39,0.30), rgba(201,162,39,0) 60%), linear-gradient(160deg, #0B0B0A 0%, #111111 45%, #1A3E2F 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={158} height={110} style={{ marginBottom: 26 }} alt="" />

        <div
          style={{
            display: "flex",
            fontFamily: "Cinzel",
            fontWeight: 700,
            fontSize: 92,
            color: "#E8C766",
            letterSpacing: 3,
          }}
        >
          D&apos;AJIKS
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Jost",
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: 12,
            color: "#F3EDE3",
            marginTop: 8,
            textTransform: "uppercase",
          }}
        >
          Coffee &amp; Billiard
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Jost",
            fontWeight: 300,
            fontSize: 24,
            color: "rgba(243,237,227,0.62)",
            marginTop: 30,
          }}
        >
          Coffee Shop &amp; Billiard Lounge — Kendari
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Jost",
            fontWeight: 400,
            fontSize: 17,
            letterSpacing: 6,
            color: "#C9A227",
            marginTop: 42,
            textTransform: "uppercase",
          }}
        >
          Coffee • Billiard • Community
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cinzel", data: cinzel700, weight: 700, style: "normal" },
        { name: "Jost", data: jost300, weight: 300, style: "normal" },
        { name: "Jost", data: jost400, weight: 400, style: "normal" },
        { name: "Jost", data: jost500, weight: 500, style: "normal" },
      ],
    }
  );
}
