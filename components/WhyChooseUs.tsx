import React from 'react';
import WhyChooseUsCard from './WhyChooseUsCard';
import { ScrollText, Wallet, HeartPulse, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
   return (
      <div className='flex items-center justify-center py-[100px] bg-stone-950'>
         <div className='flex items-center justify-center gap-14'>
            <WhyChooseUsCard
               title='Juru Masak Berpengalaman'
               icon={<ShieldCheck size={100} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
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
               icon={<HeartPulse size={100} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
         </div>
      </div>
   );
}
