import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import type LayoutProps from "next/types";
import "./globals.css";

// Clean geometric sans for body text
const outfit = Outfit({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Elegant serif for display headlines — matching the business card typography
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sravya Global Developers | Layout Designs, Land Development & Building Plans — Hyderabad",
  description:
    "Sravya Global Developers — Hyderabad's trusted firm for Layout Designs & Approvals, HMDA/FCDA/DTCP Layout Developments, Earth Work, Landscaping, Building Plans, Land Survey, and Quantity Surveys. Led by P.C. Sekhar, Managing Partner.",
  keywords:
    "Sravya Global Developers, layout designs Hyderabad, HMDA approvals, FCDA DTCP, earth work, landscaping, building plans, land survey, quantity surveys, open plots, villa plots, land development Hyderabad, P.C. Sekhar",
  openGraph: {
    title: "Sravya Global Developers | Layout Designs & Land Development",
    description:
      "Layout Designs & Approvals, Layout Developments (HMDA, FCDA & DTCP), Earth Work, Landscaping, Building Plans, Land Survey, and Quantity Surveys in Hyderabad.",
    type: "website",
    locale: "en_IN",
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
