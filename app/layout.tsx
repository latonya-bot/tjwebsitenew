import type { Metadata } from "next";
import { Poppins, Playfair_Display, Yellowtail } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jenna Kutcher - Build Your Dream Business",
  description: "I help Creative, Multi-Passionate Women turn their Ideas into Steady Income while keeping their Freedom, Peace, and Joy intact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} ${yellowtail.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
