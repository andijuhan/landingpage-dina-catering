export default function Navbar() {
   return (
      <nav className='bg-stone-950 fixed left-0 top-0 z-50 w-full text-white px-5 md:px-0 py-[20px] shadow-xl'>
         <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <div className='text-lg md:text-2xl font-bold'>DinaCatering</div>
            <div className='flex gap-10 items-center justify-center'>
               <ul className='hidden md:flex gap-6'>
                  <li>About us</li>
                  <li>Layanan</li>
                  <li>Testimoni</li>
               </ul>
               <button className='items-center text-sm rounded-full py-1 px-2 md:px-6 md:py-2 bg-white hover:bg-yellow-400 transition-all duration-300 text-black'>
                  Hubungi Kami
               </button>
            </div>
         </div>
      </nav>
   );
}
