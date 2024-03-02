import React from 'react';
import WhyChooseUsCard from './WhyChooseUsCard';
import { ScrollText, Wallet, HeartPulse } from 'lucide-react';

export default function WhyChooseUs() {
   return (
      <div className='flex items-center justify-center'>
         <div className='flex items-center justify-center gap-20'>
            <WhyChooseUsCard
               title='Banyak Pilihan Menu'
               icon={<ScrollText size={100} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <WhyChooseUsCard
               title='Harga Bersaing'
               icon={<Wallet size={100} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <WhyChooseUsCard
               title='Sehat & Higienis'
               icon={<ScrollText size={100} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
         </div>
      </div>
   );
}
