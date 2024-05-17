import React from 'react';

const languageAbout = ({ Array }) => {
  return Array.map((item) => (
    <div className='flex h-10 hover:bg-neutral-900 grow text-white hover:text-emerald-400 basis-32 w-36  bg-neutral-800 p-2 justify-center items-center rounded'>
      <h2 className=' text-center font-bold '>
        {item}
      </h2>
    </div>
  ));
};

export default languageAbout;
