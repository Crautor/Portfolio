import React from 'react';




// Components
import actualAge from '@/utils/actualAge';


const index = () => {
  return (
    <div className='w-full h-screen md:p-0 xxs:p-2 bg-neutral-800 flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
          <h1 className='text-white font-black w-full xxs:text-xl md:text-7xl'>
            Hey, I'm Vitor<span className='text-emerald-400'>.</span>
          </h1>
          <h2 className='text-white font-light xxs:text-xl md:text-5xl w-full'>
            I'm a{' '}
            <span className='text-emerald-400 font-black w-full'>
              Full Stack Developer
            </span>
          </h2>
        </div>
        <div className='flex md:w-96 xxs:w-full '>
          <h3 className='text-white xxs:text-sm md:text-base'>
            i'm <span className='text-emerald-400 font-bold'>{actualAge()}</span>{' '}
            years old, and i'm from{' '}
            <span className='text-emerald-400 font-bold'>Toledo, PR, Brazil</span>{' '}
            currently studying{' '}
            <span className='text-emerald-400 font-bold'>
              Systems Analysis and Development
            </span>{' '}
            at <span className='text-emerald-400 font-bold'>Biopark</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default index;
