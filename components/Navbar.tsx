import { menus } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className='bg-stone-950 fixed left-0 top-0 z-50 w-full text-white px-5 lg:px-0 py-[20px] shadow-xl opacity-90 backdrop-blur-lg'>
         <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <div className='text-lg md:text-2xl font-bold'>DinaCatering</div>
            <div className='flex gap-10 items-center justify-center'>
               <ul className='hidden md:flex gap-6'>
                  {menus.map((menu, index) => (
                     <li
                        key={index}
                        className='hover:text-yellow-400 transition-all duration-300 hover:underline underline-offset-8'
                     >
                        <Link href={menu.link}>{menu.title}</Link>
                     </li>
                  ))}
               </ul>
               <button className='items-center text-sm rounded-full px-6 py-2 bg-white hover:bg-yellow-400 transition-all duration-300 text-black'>
                  Hubungi Kami
               </button>
            </div>
         </div>
      </nav>
   );
}
