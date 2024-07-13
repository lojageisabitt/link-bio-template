import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButtonIndex from "@/components/ButtonIndex";
import HeaderBlog from "@/components/headerBlog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <HeaderBlog/>
          <main className="mt-10">{children}</main>
          <ButtonIndex/>
          </ThemeProvider>
      </body>
    </html>
  );
}
