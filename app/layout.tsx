import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goldie Vaghela — Data Analyst",
  description:
    "Data Analyst with an engineering and operations background. Ironhack bootcamp grad. Python, SQL, Tableau, ML.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body overflow-x-hidden antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
