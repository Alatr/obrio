import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/lib/ThemeProvider";

const sans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
