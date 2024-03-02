import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
   return (
      <div className='flex mx-auto gap-10 items-center justify-between'>
         <div className='w-[50%] flex flex-col items-end justify-end'>
            <div className='flex flex-col gap-4 text-xl text-right max-w-sm'>
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
         <div className='w-[50%]'>
            <Image
               src='/images/model1.jpg'
               width={500}
               height={500}
               alt='About Us'
               className='w-[400] h-[600px] object-cover object-top'
            />
         </div>
      </div>
   );
}
