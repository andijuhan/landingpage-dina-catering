interface HeadingProps {
   text: string;
}

export default function Heading({ text }: HeadingProps) {
   return (
      <div className='mx-auto text-center'>
         <h2 className='text-5xl text-white font-bold my-[100px]'>{text}</h2>
      </div>
   );
}
