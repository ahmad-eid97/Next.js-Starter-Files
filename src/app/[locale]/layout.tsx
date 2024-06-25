//= Components
import { GlobalProviders } from '@/providers/global-providers';
import { Navbar } from "@/components/Common";
import { Footer } from "@/components/Common";
//= Font
import { Tajawal } from 'next/font/google';
//= Styles
import '@/styles/globals.css';
import '@/styles/globals.scss';

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={tajawal.className} suppressHydrationWarning>
      <body>
        <GlobalProviders>
          <Navbar />
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}
