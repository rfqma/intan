import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "../fonts/Manrope-Regular.ttf", weight: "400" },
    { path: "../fonts/Manrope-Medium.ttf", weight: "500" },
    { path: "../fonts/Manrope-SemiBold.ttf", weight: "600" },
    { path: "../fonts/Manrope-Bold.ttf", weight: "700" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const italianno = localFont({
  src: "../fonts/Italianno-Regular.ttf",
  variable: "--font-italianno",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intan Nuraini — Portfolio",
  description: "Intan Nuraini's UI/UX design portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${italianno.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
