import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar";
import { cn } from "./utils";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Villvéd",
  description: "Villanyvezeték szerelés, hibakeresés, javítás",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={cn(workSans.variable, "antialiased")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
