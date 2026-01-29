import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: {
    default: "Core Wellness | Luxury Peptide Wellness",
    template: "%s | Core Wellness",
  },
  description:
    "Redefine your wellness journey with Core Wellness. Premium GLP-3 peptides crafted for those who demand excellence.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corewellness.com",
    siteName: "Core Wellness",
    title: "Core Wellness | Luxury Peptide Wellness",
    description:
      "Redefine your wellness journey with Core Wellness. Premium GLP-3 peptides crafted for those who demand excellence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Wellness | Luxury Peptide Wellness",
    description:
      "Redefine your wellness journey with Core Wellness. Premium GLP-3 peptides crafted for those who demand excellence.",
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
