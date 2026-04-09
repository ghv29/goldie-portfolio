import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { Analytics } from "@vercel/analytics/next";

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
    <html lang="en" className="dark" data-theme="dashboard">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body overflow-x-hidden">
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
