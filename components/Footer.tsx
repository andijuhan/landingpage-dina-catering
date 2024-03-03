import React from 'react';

export default function Footer() {
   return (
      <div className='bg-stone-950'>
         <div className='p-5 mx-auto text-lg text-center'>
            <p className='font-light'>
               &copy;Copyright dinacaterering.id {new Date().getFullYear()}
            </p>
         </div>
      </div>
   );
}
