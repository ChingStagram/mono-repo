import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Chingstagram",
  description: "칭스타그램은 칭찬글을 올리는 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
