import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Helper",
  description: "영어 단어 학습 도우미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
