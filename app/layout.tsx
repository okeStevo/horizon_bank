import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--fonts-inter" });
const ibmPlex = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon bank",
  description: "Horizon is a modern banking platformm",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable} `}>
        {children}
      </body>
    </html>
  );
}
