import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/organisms/footer";
import ClientSideComponent from './components/ClientSideComponent';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "バーチャルペット フレンズ",
  description: "バーチャルペット フレンズ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta http-equiv="cache-control" content="no-cache"/>
        <meta http-equiv="expires" content="0"/>
        <meta http-equiv="pragma" content="no-cache"/>
      </head>
      <body className={inter.className}>
        <ClientSideComponent>
          <main>{children}</main>
          <Footer />
        </ClientSideComponent>
      </body>
    </html>
  );
}