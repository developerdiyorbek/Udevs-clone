import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ChildProps } from "@/types";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Udevs Clone",
  description: "Udevs clone",
  authors: [{ name: "Sulaymonov Diyorbek", url: "https://www.diyor-dev.uz" }],
  icons: { icon: "/favicon.svg" },
  keywords: "udevs, udevsio, udevsIO, Udevs",
  openGraph: {
    title: "Udevs Clone",
    description: "Udevs clone",
    type: "website",
    url: "https://udevs.io/",
    locale: "en_EN",
    images:
      "https://firebasestorage.googleapis.com/v0/b/for-upload-photos.appspot.com/o/favicon.svg?alt=media&token=93b89426-0efc-4fc0-b373-5028b82a4336",
    countryName: "Uzbekistan",
    siteName: "udevs.io",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
