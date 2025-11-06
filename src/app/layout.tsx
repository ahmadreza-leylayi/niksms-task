import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
// @ts-ignore: allow side-effect CSS import in Next.js app directory
import "./globals.css";



export const metaata: Metadata = {
  title: "Nik SMS",
  description: "Nik SMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
