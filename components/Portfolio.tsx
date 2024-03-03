'use client';
import { portfolio } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
   return (
      <div className='flex items-center justify-center mx-auto px-5 lg:px-0 max-w-7xl'>
         <Swiper
            modules={[Navigation, Autoplay, A11y]}
            navigation
            autoplay
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
            }}
            className=''
         >
            {portfolio.map((item, index) => (
               <SwiperSlide
                  className='px-4 md:px-7 lg:px-0 w-[300px]'
                  key={index}
               >
                  <PortfolioCard title={item.title} imgUrl={item.imgUrl} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
