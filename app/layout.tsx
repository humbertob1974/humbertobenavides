import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Firma Benavides",
  description: "Transformando empresas mediante estrategia, liderazgo e inteligencia artificial con la metodología IMPACT 0.1.",
  keywords: ["consultoría empresarial", "estrategia", "liderazgo", "transformación operativa", "inteligencia artificial"],
  authors: [{ name: "Humberto Benavides" }],
  openGraph: {
    title: "Firma Benavides",
    description: "Transformando empresas mediante estrategia, liderazgo e inteligencia artificial.",
    type: "website",
    locale: "es_US",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
