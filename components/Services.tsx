import React from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
   return (
      <div className='flex items-center justify-center'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20'>
            <ServiceCard
               title='Paket Nasi Box'
               image='/images/paket-nasi-box.jpg'
               description='Paket Nasi Box / Nasi Kotak yang exclusif dengan pilihan menu yang lengkap'
               url='https://wa.me/#'
            />
            <ServiceCard
               title='Paket Prasmanan'
               image='/images/paket-prasmanan.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
               isBestSeller={true}
            />
            <ServiceCard
               title='Paket Snack'
               image='/images/paket-snack-box.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
            />
            <ServiceCard
               title='Paket Tumpeng'
               image='/images/paket-tumpeng.jpg'
               description='Paket Prasmanan untuk acara Kantor, Seminar, Workshop, Syukuran, dll'
               url='https://wa.me/#'
            />
         </div>
      </div>
   );
}
