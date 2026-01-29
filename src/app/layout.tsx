import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: {
    default: "Core Wellness | Premium Research Peptides",
    template: "%s | Core Wellness",
  },
  description:
    "Premium research-grade peptides and compounds. Pharmaceutical precision, third-party tested. For research purposes only.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corewellness.com",
    siteName: "Core Wellness",
    title: "Core Wellness | Premium Research Peptides",
    description:
      "Premium research-grade peptides and compounds. Pharmaceutical precision, third-party tested. For research purposes only.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Wellness | Premium Research Peptides",
    description:
      "Premium research-grade peptides and compounds. Pharmaceutical precision, third-party tested. For research purposes only.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DisclaimerBanner />
      </body>
    </html>
  );
}
