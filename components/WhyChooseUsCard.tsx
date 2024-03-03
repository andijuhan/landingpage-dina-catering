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
      <div className='flex flex-col px-5 md:px-0 gap-5 items-center justify-center text-stone-100 text-center max-w-sm'>
         {icon}
         <h3 className='text-2xl font-medium'>{title}</h3>
         <p className='text-lg max-w-xs'>{description}</p>
      </div>
   );
}
