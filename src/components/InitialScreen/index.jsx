import React from 'react';




// Components
import actualAge from '@/utils/actualAge';


const index = () => {
  return (
    <div className='w-full h-screen bg-neutral-800 flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
          <h1 className='text-white font-black text-7xl'>
            Hey, I'm Vitor<span className='text-emerald-400'>.</span>
          </h1>
          <h2 className='text-white font-light text-5xl'>
            I'm a{' '}
            <span className='text-emerald-400 font-black'>
              Full Stack Developer
            </span>
          </h2>
        </div>
        <div className='flex w-96 '>
          <h3 className='text-white'>
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
