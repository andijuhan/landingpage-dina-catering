'use client';
import { testimonial } from '@/lib/data';
import Image from 'next/image';

export default function Testimonial() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <div className='flex items-center justify-center'>
         <div className='flex items-center justify-center gap-5 flex-wrap px-20'>
            {testimonial.map((item, index) => (
               <div key={index}>
                  <Image
                     src={item.imgUrl}
                     alt='testimoni'
                     width={300}
                     height={600}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
