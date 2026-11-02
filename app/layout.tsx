import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Bricolage_Grotesque, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Weftora Global Sourcing | Apparel Buying House",
    template: "%s | Weftora Global Sourcing",
  },
  description:
    "Weftora Global Sourcing is a multinational apparel buying house — sourcing, design, production, quality and logistics for fashion brands worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
