import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "A&G OTO KİRALAMA | Güvenilir Araç Kiralama Hizmeti",
  description:
    "A&G OTO KİRALAMA ile bulunduğunuz yere, hava alanına ve otogara teslimat! Bakımlı, düşük kilometreli araçlarla güvenilir kiralama. 7/24 WhatsApp: +90 532 507 00 35",
  verification: {
    google: "zuVi_W5KdJ2B-EeFJXTvOsgF1fCNoMFpq6w0YItr5Rw",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
