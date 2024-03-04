'use client';
import { ShoppingCart, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
   title: string;
   image: string;
   description: string;
   url: string;
   isBestSeller?: boolean;
   delay: number;
}

export default function ServiceCard({
   title,
   image,
   description,
   url,
   isBestSeller,
   delay,
}: ServiceCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 0.5, delay }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className='relative bg-gray-50 rounded-xl hover:bg-white text-stone-950 group hover:shadow-lg p-7 md:p-10 flex flex-col items-center justify-center gap-5 ring-4 ring-stone-400 max-w-xs text-center transition-all duration-300'
      >
         {isBestSeller && (
            <div className='absolute flex items-center justify-center gap-2 -top-5 -right-3 lg:-right-5 z-20 bg-green-600 rounded-xl px-3 py-2 text-white font-medium'>
               <p>Best Seller</p>
               <ThumbsUp size={20} className='mb-2' />
            </div>
         )}
         <h3 className='text-2xl font-medium'>{title}</h3>
         <div className='w-[250px] h-[250px] overflow-hidden rounded-full'>
            <Image
               src={image}
               width={400}
               height={400}
               alt={title}
               className='w-[250px] h-[250px] object-cover object-center shadow-lg group-hover:scale-110 transition-all duration-300'
            />
         </div>

         <p className='drop-shadow-lg text-lg opacity-80 group-hover:opacity-100 transition-all duration-300'>
            {description}
         </p>
         <Link
            href={url}
            target='_blank'
            className='flex gap-2 border-2 group-hover:scale-105 transition-all duration-300 border-yellow-500 items-center justify-center py-2 px-10 bg-yellow-400 text-black rounded-full'
         >
            <ShoppingCart size={20} /> Order
         </Link>
      </motion.div>
   );
}
