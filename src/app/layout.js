import "./globals.css";

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
