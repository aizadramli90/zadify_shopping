import type { Metadata } from "next";
import { Afacad } from "next/font/google";
// import "@/assets/styles/globals.css";
import "@/app/globals.css";

const afacad = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zadify Shopping ",
  description: "Tradition Meets Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.className} antialiased`}>{children}</body>
    </html>
  );
}
