import { MessageCircle } from 'lucide-react';

export default function Navbar() {
   return (
      <nav className='bg-stone-950 fixed left-0 top-0 z-50 w-full text-white py-[20px] shadow-xl'>
         <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <div className='text-2xl font-bold'>DinaCatering</div>
            <div className='flex gap-10 items-center justify-center'>
               <ul className='flex gap-6 font-medium'>
                  <li>About us</li>
                  <li>Layanan</li>
                  <li>Testimoni</li>
               </ul>
               <button className='flex items-center gap-2 rounded-xl px-4 py-2 bg-white hover:bg-yellow-400 transition-all duration-300 text-black font-bold'>
                  <MessageCircle size={20} /> Hubungi Kami
               </button>
            </div>
         </div>
      </nav>
   );
}
