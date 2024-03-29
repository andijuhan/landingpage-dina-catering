import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
   title: 'Dina Catering',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en' className='!scroll-smooth'>
         <body className='font-primaryFont bg-gradient-to-b from-stone-900 to-stone-800 text-white'>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
