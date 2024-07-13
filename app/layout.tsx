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
      </head>
      <body className={inter.className}>
        <ClientSideComponent>
          {children}
          <Footer />
        </ClientSideComponent>
      </body>
    </html>
  );
}