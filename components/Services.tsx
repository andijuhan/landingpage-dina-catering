'use client';
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useInView } from 'react-intersection-observer';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';

export default function Services() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Layanan');
      }
   }, [inView]);

   return (
      <div
         className='flex items-center justify-center scroll-mt-[250px]'
         id='layanan'
         ref={ref}
      >
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-20'>
            <ServiceCard
               title='Paket Nasi Box'
               image='/images/paket-nasi-box.jpg'
               description='Paket Nasi Box / Nasi Kotak yang exclusif dengan pilihan menu yang lengkap'
               url='https://wa.me/#'
               delay={0.2 * 0}
            />
            <ServiceCard
               title='Paket Prasmanan'
               image='/images/paket-prasmanan.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
               isBestSeller={true}
               delay={0.2 * 1}
            />
            <ServiceCard
               title='Paket Snack Box'
               image='/images/paket-snack-box.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
               delay={0.2 * 2}
            />
            <ServiceCard
               title='Paket Tumpeng'
               image='/images/paket-tumpeng.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
               delay={0.2 * 3}
            />
         </div>
      </div>
   );
}
