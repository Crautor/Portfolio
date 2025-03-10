import React from 'react';

// Icons
import { CiHeart } from 'react-icons/ci';
// Components

const LoveScreen = () => {
  return (
    <div className='select-none w-full h-screen md:p-0 xxs:p-2 bg-neutral-800 flex flex-col items-center justify-center'>
      <p className='text-white text-xl font-bold'>Vitor e Luiza</p>
      <img
        className='w-96 rounded shadow-[rgba(240,_46,_170,_0.4)_-5px_5px,_rgba(240,_46,_170,_0.3)_-10px_10px,_rgba(240,_46,_170,_0.2)_-15px_15px,_rgba(240,_46,_170,_0.1)_-20px_20px,_rgba(240,_46,_170,_0.05)_-25px_25px]'
        src='/Image/Love.jpeg'
        alt=''
        draggable='false'
      />
      <div className='animate-bounce flex justify-center flex-col items-center text-white text-xl absolute bottom-10'>
        <CiHeart  />
        <p>Te amo</p>
      </div>
    </div>
  );
};

export default LoveScreen;
