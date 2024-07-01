import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Ryan Bell",
  description: `Aspiring Software Engineer with experience in automation, cloud \
computing, machine learning, computer science, and software development. \
Recently graduated with honors from the University of North Texas with a \
Bachelors in Computer Science, and is equipped with the practical skills \
and theoretical knowledge necessary to become an valuable asset to any software \
development team.`,
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
