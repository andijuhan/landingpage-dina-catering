import Image from 'next/image';

interface MenuCardProps {
   title: string;
   imgUrl: string;
}

export default function MenuCard({ title, imgUrl }: MenuCardProps) {
   return (
      <div className='flex flex-col items-center justify-start gap-4'>
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
      </div>
   );
}
