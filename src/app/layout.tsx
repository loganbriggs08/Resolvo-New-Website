import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import styles from "./layout.module.css";
import NavbarComponent from "@/components/navbar";

const outfitFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resolvo - Resolve Problems, Dont Re-Solve.",
  description: "Crafting tailored software solutions to meet the end users needs.",
  themeColor: "#DD1546",

  openGraph: {
    siteName: "Resolvo",
    
    title: "Resolvo - Resolve Problems, Dont Re-Solve.",
    description: "Crafting tailored software solutions to meet the end users needs.",
    images: ["logo.png"]
  }
}

export const viewport = {
  "width=device-width, initial-scale=1, shrink-to-fit=no": "",
  "theme-color": "#DD1546"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name="theme-color" content="#DD1546"></meta>

        <meta property="og:site_name" content="Resolvo"></meta>
        <meta property="og:title" content="Resolvo - Resolve Problems, Dont Re-Solve."></meta>
        <meta property="og:description" content="Crafting tailored software solutions to meet the end users needs."></meta>
        <meta property="og:image" content="https://resolvo.dev/website_screenshot.png"></meta>

        <title>Resolvo - Resolve Problems, Dont Re-Solve.</title>
      </head>
      <body className={`${styles.body} ${outfitFont.className}`}>
        {/* <NavbarComponent /> */}
        {children}
      </body>
    </html>
  );
}
