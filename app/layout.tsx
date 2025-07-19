import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serralheria Canadá - Portões, Escadas, Estruturas Metálicas e Locação de Containers",
  description: "Serralheria especializada em portões sob medida, escadas personalizadas, estruturas metálicas e locação de containers para obras. Desde 2016, transformamos metal em confiança.",
  keywords: "serralheria, portões, escadas, estruturas metálicas, locação containers, Araçatuba",
  authors: [{ name: "Serralheria Canadá" }],
  openGraph: {
    title: "Serralheria Canadá",
    description: "Transformamos metal em confiança desde 2016 - (18) 98127-0860",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
