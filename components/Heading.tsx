interface HeadingProps {
   text: string;
}

export default function Heading({ text }: HeadingProps) {
   return (
      <div className='mx-auto text-center'>
         <h2 className='text-2xl md:text-4xl text-white font-bold my-[60px] md:my-[100px]'>
            {text}
         </h2>
      </div>
   );
}
