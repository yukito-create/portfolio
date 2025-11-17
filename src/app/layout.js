import "./globals.css";
import Link from "next/link";
import Image from "next/image";
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
        <h1>
          <Link href={"/"}>
            <Image src="/logo.png" width={40} height={40} alt="ポートフォリオです。" />
          </Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
