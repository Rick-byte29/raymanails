import type { Metadata } from "next";
import "./globals.css";
import { IntroLoader } from "@/components/intro-loader";

export const metadata: Metadata = {
  title: {default: "Nails By Rayma | A little luxury, at your fingertips", template: "%s | Nails By Rayma"},
  description: "Considered nail artistry, gel extensions, signature chrome and bridal designs. Explore the lookbook and request your studio appointment.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><IntroLoader/><div id="studio-content">{children}</div></body>
    </html>
  );
}
