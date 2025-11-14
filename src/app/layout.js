import "./globals.css";
import Link from "next/link";
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
            <img className={"logo"} src={"/logo.png"} />
          </Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
