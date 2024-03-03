'use client';
import { testimonial } from '@/lib/data';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

export default function Testimonial() {
   return (
      <div className='flex items-center justify-center mx-auto px-5 md:px-0 max-w-7xl'>
         <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            navigation
            autoplay
            pagination={{ clickable: true }}
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
            }}
            className=''
         >
            {testimonial.map((item, index) => (
               <SwiperSlide className='px-4 md:px-0' key={index}>
                  <Image
                     src={item.imgUrl}
                     alt='testimoni'
                     width={300}
                     height={600}
                     className='shadow-xl rounded-lg'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
