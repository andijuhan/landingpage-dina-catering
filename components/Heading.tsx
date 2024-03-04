'use client';
import { motion } from 'framer-motion';
interface HeadingProps {
   text: string;
}

export default function Heading({ text }: HeadingProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className='mx-auto text-center'
      >
         <h2 className='text-2xl md:text-4xl text-white font-bold my-[60px] md:my-[100px]'>
            {text}
         </h2>
      </motion.div>
   );
}
