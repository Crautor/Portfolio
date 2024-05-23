import React from 'react';

// Icons
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const footer = () => {
  return (
    <div className='h-auto w-full bg-neutral-800 flex md:flex-row xxs:flex-col md:justify-between items-start p-5  xxs:gap-10 '>
      <div className='flex items-center md:w-1/3 xxs:w-full pt-5 justify-center flex-col gap-2'>
        <img
          src='/Image/Vitor.jpeg'
          alt=''
          className='w-24 rounded-full border-emerald-400 border-2'
        />
        <span className='text-white font-black lg:text-4xl xxs:text-xl'>
          Vitor Dallanol<span className='text-emerald-400'>.</span>
        </span>
      </div>

      <div className='flex flex-col md:w-1/3 xxs:w-full h-full xxs:gap-5 md:gap-16 items-center justify-center'>
        <div className='flex items-center justify-center h-1/3'>
          <span className='text-white font-black lg:text-4xl xxs:text-xl xxs:text-center md:text-start'>
            Social Midia<span className='text-emerald-400'>.</span>
          </span>
        </div>
        <div className='flex gap-5 justify-center items-center h-2/3 '>
          <a
            href='https://www.linkedin.com/in/vitorhugodallanol/'
            className='text-white hover:text-emerald-400 hover:scale-105 duration-500'
          >
            <FaLinkedin className='text-4xl' />
          </a>
          <a
            href='https://github.com/crautor'
            className='text-white hover:text-emerald-400 hover:scale-105 duration-500'
          >
            <FaGithub className='text-4xl' />
          </a>
          <a
            href='https://www.https://www.instagram.com/crautor/'
            className='text-white hover:text-emerald-400 hover:scale-105 duration-500'
          >
            <BsInstagram className='text-4xl' />
          </a>
        </div>
      </div>

      <div className='md:w-1/3 xxs:w-full flex flex-col justify-center items-center gap-5 '>
        <div className='flex items-center justify-center'>
          <span className='text-white font-black lg:text-4xl xxs:text-xl xxs:text-center md:text-start'>
            Contact Me<span className='text-emerald-400'>.</span>
          </span>
        </div>
        <div className='flex flex-col gap-5 '>
          <div className='flex flex-col'>
            <div className='flex items-center w-full gap-3 text-white'>
              <span className='text-white'>
                <MdEmail className='text-2xl' />
              </span>
              <span className='font-bold text-white'>Email:</span>
            </div>
            <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
              <span className='text-white md:text-base xxs:text-sm '>
                vitor.dallanol@gmail.com
              </span>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex items-center gap-3 text-white'>
              <FaPhoneAlt className='text-2xl' />
              <span className='font-bold'>Telefone:</span>
            </div>
            <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
              <span className='text-white md:text-base xxs:text-sm '>
                +55 (45) 99856-3387
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
