'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
   return (
      <div className='relative w-full h-[400px] md:h-[600px] overflow-hidden mt-[60px] md:mt-[70px]'>
         <div className='absolute top-0 right-0 z-20 bg-gradient-to-b from-stone-950 w-full h-[100px] md:h-[300px]' />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <Image
               src='/images/prasmanan.jpg'
               width={800}
               height={400}
               alt='hero.'
               className='w-full h-[400px] md:h-[600px] object-cover object-center brightness-50'
            />
         </motion.div>
         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-5xl px-4 text-white z-40'>
            <motion.h2
               initial={{ opacity: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className='text-4xl md:text-6xl font-bold text-center capitalize drop-shadow-xl md:leading-snug'
            >
               Tingkatkan momen istimewa Anda dengan{' '}
               <span className='bg-yellow-400 shadow-lg p-1 text-black'>
                  hidangan lezat
               </span>{' '}
               dari catering kami
            </motion.h2>
         </div>
      </div>
   );
}
