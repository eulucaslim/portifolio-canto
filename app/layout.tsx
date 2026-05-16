import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})
export const metadata: Metadata = {
  title: "Portifólio - Lucas de Lima Canto",
  description: "Criado por Canto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
