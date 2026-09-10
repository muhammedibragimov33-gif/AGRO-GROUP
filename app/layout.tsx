import type { Metadata } from "next";
import { Spectral, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fraunces и Work Sans из исходного макета не поддерживают кириллицу в Google Fonts —
// заменены на ближайшие по характеру шрифты с поддержкой русского языка.
const fraunces = Spectral({
  variable: "--font-fraunces",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Manrope({
  variable: "--font-work-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Агро-Групп — сельскохозяйственное хозяйство, Чеченская Республика",
  description:
    "Агро-Групп — хозяйство полного цикла в Чеченской Республике: зерновые, сады, животноводство и оптовая торговля с 2015 года.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${fraunces.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
