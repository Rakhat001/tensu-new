import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Tensu — Операционная система современного спортивного клуба",
  description: "CRM, расписание, абонементы, тренеры, ученики, аналитика и мобильное приложение для вашего спортивного клуба в одной экосистеме. Меньше рутины — больше роста.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${jakarta.variable} antialiased bg-background text-foreground overflow-x-hidden min-h-screen relative`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
