import type { Metadata } from "next";
import "./globals.css";
import TopScrollButton from "./ui/misc/topScrollButton";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Ryan Bell",
  description: "Portfolio page for an overwhelmingly mid software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
