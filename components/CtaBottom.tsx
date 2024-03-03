import Image from 'next/image';
import Link from 'next/link';

export default function CtaBottom() {
   return (
      <div className='relative w-full mt-[60px] md:mt-[100px]'>
         <Image
            src='/images/cta1.jpg'
            width={2048}
            height={592}
            alt='CTA'
            className='h-[400px] brightness-50 object-cover object-center'
         />
         <div className='absolute top-0 left-0 w-full h-[400px] z-20 flex items-center justify-center'>
            <div className='max-w-7xl flex flex-col items-center justify-between gap-10 text-center px-7 lg:px-0'>
               <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white md:leading-snug lg:leading-snug drop-shadow-xl'>
                  Buat Acara Anda Lebih Berkesan dengan Menu Khusus dari
                  Catering Kami
               </h2>
               <Link
                  href='https://wa.me/#'
                  target='_blank'
                  className='py-4 px-6 bg-stone-200 hover:bg-slate-50 transition-all duration-300 rounded-full text-stone-900 text-xl md:text-2xl lg:text-3xl font-bold'
               >
                  Pesan Sekarang
               </Link>
            </div>
         </div>
      </div>
   );
}