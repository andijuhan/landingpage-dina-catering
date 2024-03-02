import image from 'next/image';

interface TestimonialCardProps {
   client: string;
   image: string;
}

export default function TestimonialCard({
   client,
   image,
}: TestimonialCardProps) {
   return (
      <div className='bg-stone-900 text-white group hover:bg-stone-800 px-5 py-10 flex flex-col items-center justify-center gap-4 rounded-2xl border max-w-xs text-center transition-all duration-300'>
         <h3 className='text-xl font-bold'>{client}</h3>
         <div className='overflow-hidden rounded-xl'></div>
      </div>
   );
}
