import type { Metadata } from "next";
import { Afacad } from "next/font/google";
//import "@/assets/styles/globals.css";
import "@/app/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants/index";
import { ThemeProvider } from "next-themes";
import Head from "./head";

const afacad = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Zadify Shopping Platform`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={`${afacad.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
