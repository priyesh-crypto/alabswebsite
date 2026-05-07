import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnalytixLabs",
  description:
    "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
