import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
   title: string;
   image: string;
   description: string;
   url: string;
}

export default function ServiceCard({
   title,
   image,
   description,
   url,
}: ServiceCardProps) {
   return (
      <div className='bg-white text-stone-950 group shadow-lg hover:bg-stone-800 hover:text-white p-10 flex flex-col items-center justify-center gap-10 rounded-lg ring-2 ring-stone-400 max-w-xs text-center transition-all duration-300'>
         <h3 className='text-2xl font-bold'>{title}</h3>
         <div className='w-[250px] h-[250px] overflow-hidden rounded-full'>
            <Image
               src={image}
               width={400}
               height={400}
               alt={title}
               className='w-[250px] h-[250px] object-cover object-center shadow-lg group-hover:scale-110 transition-all duration-300'
            />
         </div>

         <p className='drop-shadow-lg text-lg'>{description}</p>
         <Link
            href={url}
            target='_blank'
            className='flex gap-2 border-2 border-yellow-500 font-bold items-center justify-center py-2 px-4 bg-yellow-400 text-black rounded-full'
         >
            <ShoppingCart size={20} /> Pesan
         </Link>
      </div>
   );
}
