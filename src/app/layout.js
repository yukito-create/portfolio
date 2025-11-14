import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ weight: ["700"] });

export const metadata = {
  title: "ポートフォリオです。",
  description: "デスクリプションです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
