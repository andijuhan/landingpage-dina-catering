'use client';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { menus } from '@/lib/data';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
   const { activeSection } = useStoreSectionActive();
   const [scrollProgress, setScrollProgress] = useState('0');
   const progressBarRef = useRef<any>(null);

   useEffect(() => {
      const handleScroll = () => {
         const windowHeight = window.innerHeight;
         const fullHeight = document.body.clientHeight;
         const scrolled = window.scrollY;

         const scrollProgress = Math.round(
            (scrolled / (fullHeight - windowHeight)) * 100
         );
         setScrollProgress(`${scrollProgress}`);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      if (progressBarRef.current) {
         progressBarRef.current.style.width = `${scrollProgress}%`;
      }
   }, [scrollProgress]);

   return (
      <nav className='bg-stone-950 fixed left-0 top-0 z-50 w-full text-white pt-[20px] shadow-xl bg-opacity-90 backdrop-blur-lg'>
         <div className='flex items-center justify-between max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='text-xl md:text-2xl font-bold'>
               <Link href='/'>DinaCatering</Link>
            </div>
            <div className='flex gap-10 items-center justify-center'>
               <ul className='hidden lg:flex gap-6'>
                  {menus.map((menu, index) => (
                     <li
                        key={index}
                        className={`${
                           activeSection === menu.title
                              ? 'text-yellow-400'
                              : 'hover:text-yellow-400 transition-all duration-300 hover:underline underline-offset-8'
                        }`}
                     >
                        <Link href={menu.link}>{menu.title}</Link>
                     </li>
                  ))}
               </ul>
               <button className='items-center text-sm rounded-full px-6 py-2 bg-white hover:bg-yellow-200 transition-all duration-300 text-black'>
                  Hubungi Kami
               </button>
            </div>
         </div>
         <div
            ref={progressBarRef}
            className={`h-[4px] transition-all duration-200 mb-auto bg-orange-500 mt-5`}
         />
      </nav>
   );
}
