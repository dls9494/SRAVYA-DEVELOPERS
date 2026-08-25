import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import type LayoutProps from "next/types";
import "./globals.css";

// Premium sans — wide tracking range, clean geometric
const outfit = Outfit({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Deliberate serif for ONE specific use-case: the hero display eyeline
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sravya Global Developers | Premium Villa Plots in Hyderabad",
  description:
    "Discover premium open plots, residential land, and luxury gated communities by Sravya Global Developers in Hyderabad's fastest-growing corridors.",
  keywords:
    "Sravya Global Developers, open plots Hyderabad, villa plots, land investment, gated community, Chevella, Vikarabad Road",
  openGraph: {
    title: "Sravya Global Developers | Premium Land Developers",
    description:
      "Building Trust. Creating Landmarks. Premium villa plots in high-growth corridors of Hyderabad.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
