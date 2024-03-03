import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
   return (
      <div className='relative flex mx-auto gap-10 items-center justify-between md:bg-white'>
         <div className='md:w-[50%] flex flex-col items-end md:justify-end'>
            <div className='flex flex-col gap-4 px-5 text-lg md:text-xl tracking-wider text-center md:text-right max-w-[700px] leading-loose md:bg-white text-white md:text-stone-900'>
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
            </div>
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
