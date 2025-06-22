import type { Metadata } from "next";
import { Afacad } from "next/font/google";
// import "@/assets/styles/globals.css";
import "@/app/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants/index";
import { ThemeProvider } from "next-themes";

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
    <html lang="en">
      <body className={`${afacad.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </html>
  );
}
