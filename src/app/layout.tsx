import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sravya Global Developers | Premium Villa Plots & Gated Communities in Hyderabad",
  description: "Discover premium open plots, residential land, and luxury gated communities by Sravya Global Developers. Strategic investments in high-growth corridors of Hyderabad.",
  keywords: "Sravya Global Developers, open plots Hyderabad, villa plots Hyderabad, land investment, gated community plots, real estate Hyderabad, plots in Rampally, plots in Yacharam",
  openGraph: {
    title: "Sravya Global Developers | Premium Land Developers",
    description: "Building Trust. Creating Landmarks. Thoughtfully planned residential plots and land investment opportunities in Hyderabad's fastest growing zones.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">{children}</body>
    </html>
  );
}
