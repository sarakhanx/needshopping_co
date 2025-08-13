import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/page-components/navigaters/Navbar";

export const metadata: Metadata = {
  title: "NEED SHOPPING - อาณาจักรบ้านน็อคดาวน์ภาคตะวันออก",
  description: "ผู้ผลิตและจำหน่ายบ้านน็อคดาวน์คุณภาพสูง ส่งมอบกว่า 10,000 หลังทั่วประเทศไทย บริการครบวงจร ตั้งแต่ดีไซน์ ผลิต ขนส่ง ติดตั้ง",
  keywords: ["บ้านน็อคดาวน์", "บ้านสำเร็จรูป", "โครงสร้างเหล็ก", "NEED SHOPPING", "บ้านราคาถูก", "บ้านคุณภาพ"],
  authors: [{ name: "NEED SHOPPING" }],
  creator: "NEED SHOPPING",
  publisher: "NEED SHOPPING",
  robots: "index, follow",
  openGraph: {
    title: "NEED SHOPPING - อาณาจักรบ้านน็อคดาวน์ภาคตะวันออก",
    description: "ผู้ผลิตและจำหน่ายบ้านน็อคดาวน์คุณภาพสูง ส่งมอบกว่า 10,000 หลังทั่วประเทศไทย",
    type: "website",
    locale: "th_TH",
    siteName: "NEED SHOPPING",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEED SHOPPING - อาณาจักรบ้านน็อคดาวน์ภาคตะวันออก",
    description: "ผู้ผลิตและจำหน่ายบ้านน็อคดาวน์คุณภาพสูง ส่งมอบกว่า 10,000 หลังทั่วประเทศไทย",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png', 
        sizes: '512x512',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
