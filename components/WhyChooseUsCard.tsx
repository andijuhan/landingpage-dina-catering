import React from 'react';

interface WhyChooseUsCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
}

export default function WhyChooseUsCard({
   icon,
   title,
   description,
}: WhyChooseUsCardProps) {
   return (
      <div className='flex flex-col gap-5 items-center justify-center text-stone-100 text-center max-w-sm'>
         {icon}
         <h3 className='text-2xl font-bold'>{title}</h3>
         <p className='text-lg max-w-xs'>{description}</p>
      </div>
   );
}
