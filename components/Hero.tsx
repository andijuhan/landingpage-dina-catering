import Image from 'next/image';
import React from 'react';

export default function Hero() {
   return (
      <div className='relative w-full h-[600px] overflow-hidden mt-[80px]'>
         <div className='absolute top-0 right-0 z-20 bg-gradient-to-b from-stone-950 w-full h-[200px]' />
         <Image
            src='/images/prasmanan.jpg'
            width={800}
            height={400}
            alt='hero.'
            className='w-full object-cover object-center brightness-50'
         />
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-5xl text-white'>
            <h2 className='text-6xl font-bold text-center capitalize drop-shadow-xl leading-tight'>
               Tingkatkan momen istimewa Anda dengan{' '}
               <span className='bg-yellow-500 shadow-lg p-1 text-black'>
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
