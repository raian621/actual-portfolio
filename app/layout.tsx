import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TopScrollButton from "./ui/misc/topScrollButton";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ryan Bell",
  description: "Overwhelmingly mid software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div id="top" />
        <TopScrollButton />
        {children}
      </body>
    </html>
  );
}
