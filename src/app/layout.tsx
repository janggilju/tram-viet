import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangProvider";

export const metadata: Metadata = {
  title: "Trạm Việt Restaurant | Authentic Vietnamese Cuisine in Đà Nẵng",
  description:
    "Trạm Việt Restaurant - 현지식 전통 베트남식당. Authentic Vietnamese cuisine at 01 Trần Bạch Đằng, An Hải, Sơn Trà, Đà Nẵng. Phở, Bánh Xèo, Spring Rolls & more.",
  keywords:
    "Vietnamese restaurant, Da Nang, Trạm Việt, pho, banh xeo, Vietnamese food, 베트남 식당, 다낭 맛집",
  openGraph: {
    title: "Trạm Việt Restaurant",
    description: "Authentic Vietnamese Cuisine in Đà Nẵng",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
