'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuCardProps {
   title: string;
   imgUrl: string;
   delay: number;
}

export default function MenuCard({ title, imgUrl, delay }: MenuCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 0.5, delay }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className='flex flex-col items-center justify-start gap-4'
      >
         <div className='w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] overflow-hidden rounded-full'>
            <Image
               src={imgUrl}
               width={200}
               height={200}
               alt={title}
               className='w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-all duration-300 object-cover object-center rounded-full'
            />
         </div>

         <h3 className='font-semibold text-lg text-center'>{title}</h3>
      </motion.div>
   );
}
