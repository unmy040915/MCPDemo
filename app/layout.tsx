import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "推しカフェ 4選 | SARYU",
  description: "神戸にあるイチオシカフェを大学生の観点からまとめました。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
