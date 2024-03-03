import Image from 'next/image';
import React from 'react';

export default function Hero() {
   return (
      <div className='relative w-full h-[400px] md:h-[600px] overflow-hidden mt-[60px] md:mt-[70px]'>
         <div className='absolute top-0 right-0 z-20 bg-gradient-to-b from-stone-950 w-full h-[100px] md:h-[300px]' />
         <Image
            src='/images/prasmanan.jpg'
            width={800}
            height={400}
            alt='hero.'
            className='w-full h-[400px] md:h-[600px] object-cover object-center brightness-50'
         />
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-5xl px-4 text-white z-40'>
            <h2 className='text-4xl md:text-6xl font-bold text-center capitalize drop-shadow-xl md:leading-snug'>
               Tingkatkan momen istimewa Anda dengan{' '}
               <span className='bg-yellow-400 shadow-lg p-1 text-black'>
                  hidangan lezat
               </span>{' '}
               dari catering kami
            </h2>
            {/* <p className='text-xl text-center mt-5 leading-relaxed'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
               tenetur repellat facere obcaecati quos accusantium corrupti animi
               aperiam, corporis harum ut doloribus, quae ullam. Eaque beatae ad
               ipsam ea dolorum.
            </p> */}
         </div>
      </div>
   );
}
