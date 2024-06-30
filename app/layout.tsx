import type { Metadata } from "next";
import "./globals.css";
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
      <body
        className={`${roboto.className} text-black dark:text-white bg-blue-100 dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
