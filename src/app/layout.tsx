import type { Metadata } from "next";
import "./globals.css";
import { Pacifico } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight:"400" });
const jose = Josefin_Sans({ subsets: ["latin"], weight:"400" });

export const metadata: Metadata = {
  title: "Workit",
  description: "The Workout app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jose.className + " flex flex-row items-center justify-center bg-gray-800"}>{children}</body>
    </html>
  );
}
