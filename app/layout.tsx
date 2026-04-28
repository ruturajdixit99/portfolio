import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruturaj Dixit — Data Scientist · AI/ML Engineer",
  description:
    "Data scientist and AI/ML engineer. Shipping production AI for global B2B enterprises and building AI-native products.",
  openGraph: {
    title: "Ruturaj Dixit — Data Scientist · AI/ML Engineer",
    description:
      "Data scientist and AI/ML engineer. Shipping production AI for global B2B enterprises and building AI-native products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
