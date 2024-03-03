import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
   return (
      <div className='relative flex mx-auto gap-20 items-center justify-between md:bg-white'>
         <div className='hidden md:block absolute bg-stone-950 rounded-full blur-3xl top-0 left-0 w-[400px] h-[400px] -z-10' />
         <div className='hidden md:block absolute bg-stone-700 rounded-full blur-3xl top-0 right-0 w-[600px] h-[400px] -z-10' />
         <div className='md:w-[50%] flex flex-col items-end md:justify-end'>
            <div className='flex flex-col gap-4 px-5 text-lg md:text-xl text-center md:text-right max-w-[700px] leading-loose md:bg-white text-white md:text-stone-900 md:p-10'>
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
            </div>
         </div>
         <div className='hidden md:block md:w-[50%]'>
            <Image
               src='/images/model1.jpg'
               width={500}
               height={500}
               alt='About Us'
               className='w-full h-[500px] object-cover object-bottom'
            />
         </div>
      </div>
   );
}
