import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Serralheria Canadá | Portões, Escadas, Grades e Locação de Containers em Avanhandava";
const description =
  "Serralheria em Avanhandava/SP desde 2016: portões sob medida, escadas, grades, estruturas metálicas e locação de containers para obras. Atendemos Penápolis, Barbosa, Promissão e região. Peça seu orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "serralheria Avanhandava",
    "serralheria Penápolis",
    "serralheria Barbosa",
    "serralheria Promissão",
    "portão sob medida",
    "portão de garagem",
    "escada metálica",
    "grade de janela",
    "estrutura metálica",
    "locação de container",
    "aluguel de container para obra",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.name,
    description: `Portões, escadas, grades, estruturas metálicas e locação de containers desde ${SITE.since}. ${SITE.phone}`,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: SITE.name, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121314",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  telephone: SITE.phoneE164,
  email: SITE.email,
  foundingDate: String(SITE.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "BR",
  },
  areaServed: SITE.citiesServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [SITE.social.instagram, SITE.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${barlow.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
