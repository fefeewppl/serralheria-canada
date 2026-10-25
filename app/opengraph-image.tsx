import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const alt = "Serralheria Canadá — portões, escadas, grades e locação de containers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Baixa a fonte Barlow Condensed (bold) do Google Fonts em tempo de build.
async function loadFont() {
  const css = await (await fetch("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700")).text();
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!url) throw new Error("Fonte Barlow Condensed não encontrada");
  return (await fetch(url)).arrayBuffer();
}

export default async function OpengraphImage() {
  const font = await loadFont();
  const photo = await readFile(join(process.cwd(), "public/portoes/portao6.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#121314", fontFamily: "Barlow" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(90deg, rgba(12,13,14,0.97) 0%, rgba(12,13,14,0.88) 55%, rgba(12,13,14,0.35) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
            <div style={{ width: 64, height: 64, border: "4px solid #f2b705", color: "#f2b705", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>
              SC
            </div>
            <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 2 }}>SERRALHERIA CANADÁ</div>
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, textTransform: "uppercase" }}>Metal sob medida,</div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", color: "#f2b705" }}>feito para durar.</div>
          <div style={{ fontSize: 34, color: "#d6d4cf", marginTop: 36, letterSpacing: 1 }}>
            Portões · Escadas · Grades · Estruturas · Containers
          </div>
          <div style={{ fontSize: 34, color: "#f2b705", marginTop: 12, fontWeight: 700 }}>
            {`${SITE.phone} · ${SITE.city}/${SITE.state}`}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Barlow", data: font, weight: 700, style: "normal" }] },
  );
}
