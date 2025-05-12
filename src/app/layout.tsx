import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Bienvenido a mi ecommerce donde puedes encontrar lo que buscas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} ${geistMono.variable} antialiased`}>
                  <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
