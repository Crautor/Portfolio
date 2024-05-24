import React from 'react';

// Icons
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa6';

const projectCards = ({
  image,
  title,
  technologies,
  description,
  link,
  where,
}) => {
  return (
    <div className='flex flex-col xs:w-full sm:w-96 shadow-2xl shadow-black hover:scale-[1.02] duration-500 gap-5 p-2 bg-neutral-800 rounded text-white'>
      <div className=' w-full'>
        <a href={link}>
          <img className='rounded' src={image} alt={title} />
        </a>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center sm:justify-start xxs:justify-between gap-2'>
          <h2 className='text-nowrap font-bold text-2xl'>{title}</h2>
          <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>

          <a href={link}>
            {
              (where == 'GitHub' ? (
                <FaGithub className='text-2xl' />
              ) : (
                (where == 'GitLab' ? <FaGitlab className='text-2xl' /> : null)
              ))
            }
          </a>
        </div>
        <div className='text-emerald-400 font-semibold'>
          {technologies.map((technology, index) => {
            return (
              <span key={index}>
                {technologies.length - 1 !== index
                  ? (technology += ' - ')
                  : (technology += '')}
              </span>
            );
          })}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default projectCards;
