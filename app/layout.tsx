import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import "./globals.css";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "San Pizza | Главная",
  description: "Главная страница магазина пиццы от Сани",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <main className='min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  );
}
