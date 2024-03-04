'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';

export default function AboutUs() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Tentang Kami');
      }
   }, [inView]);

   return (
      <div
         ref={ref}
         id='tentang-kami'
         className='relative flex mx-auto gap-10 items-center justify-between scroll-mt-[250px] md:bg-stone-100'
      >
         <div className='md:w-[50%] flex flex-col items-end md:justify-end'>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.5 }}
               whileInView={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               viewport={{
                  once: true,
               }}
               className='flex flex-col gap-4 px-5 md:py-10 lg:py-0 text-lg md:text-xl tracking-wider text-center md:text-right max-w-[700px] leading-loose text-white md:text-stone-900'
            >
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  quisquam, corrupti tempora sint consectetur accusamus
                  excepturi suscipit amet vitae, illo provident laborum minus
                  cum ducimus illum vero sed accusantium omnis?
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  corrupti architecto praesentium. Neque, nemo error. Laboriosam
                  asperiores reprehenderit a nihil, neque, repellat, rem qui
                  labore ab numquam quasi nam excepturi.
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  corrupti architecto praesentium. Neque, nemo error. Laboriosam
                  asperiores reprehenderit a nihil, neque, repellat, rem qui
                  labore ab numquam quasi nam excepturi.
               </p>
            </motion.div>
         </div>
         <div className='hidden md:block md:w-[50%]'>
            <Image
               src='/images/model2.jpg'
               width={500}
               height={500}
               alt='About Us'
               className='w-full h-[600px] object-cover object-left-bottom'
            />
         </div>
      </div>
   );
}
