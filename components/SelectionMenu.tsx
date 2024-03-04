'use client';
import { selectionMenu } from '@/lib/data';
import { Tab } from '@headlessui/react';
import MenuCard from './MenuCard';
import { motion } from 'framer-motion';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}

export default function SelectionMenu() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Pilihan Menu');
      }
   }, [inView]);

   return (
      <motion.div
         ref={ref}
         id='pilihan-menu'
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         viewport={{
            once: true,
         }}
         className='flex flex-col items-center justify-center scroll-mt-[250px]'
      >
         <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-stone-700 p-1'>
               {Object.keys(selectionMenu).map((item, index) => (
                  <Tab
                     key={index}
                     className={({ selected }) =>
                        classNames(
                           'w-[150px] lg:w-[200px] rounded-lg py-4 text-lg font-medium leading-5',
                           'ring-stone-500 ring-offset-2 ring-offset-stone-300 focus:outline-none focus:ring-2',
                           selected
                              ? 'bg-stone-100 text-stone-900 shadow'
                              : 'text-stone-100 hover:bg-white/[0.12] hover:text-white'
                        )
                     }
                  >
                     {item}
                  </Tab>
               ))}
            </Tab.List>
            <Tab.Panels className='mt-2 min-w-5xl text-stone-900 px-4 lg:px-0'>
               {Object.values(selectionMenu).map((items: any[], index) => (
                  <Tab.Panel
                     key={index}
                     className={classNames(
                        'bg-stone-100 rounded-xl px-5 py-7',
                        'ring-stone-100 ring-offset-2 ring-offset-stone-400 focus:outline-none ring-2'
                     )}
                  >
                     <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
                        {items.map((menu: any, index) => (
                           <MenuCard
                              key={index}
                              title={menu.title}
                              imgUrl={menu.imgUrl}
                              delay={0.2 * index}
                           />
                        ))}
                     </div>
                  </Tab.Panel>
               ))}
            </Tab.Panels>
         </Tab.Group>
      </motion.div>
   );
}
