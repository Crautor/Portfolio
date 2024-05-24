import React from 'react';

// Components
import ProjectCards from '@/components/projectCards';

// Utils
import { projectsArray } from '@/utils/projectsArray';
const projects = () => {
  return (
    <div className='flex flex-col pb-10 h-auto w-full'>
      <div className='flex  justify-center items-center p-5 w-full gap-5'>
        <h1 className='text-neutral-800 font-black xxs:text-3xl md:text-7xl'>
          Projects<span className='text-emerald-400'>.</span>
        </h1>
        <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>
      </div>

      <div className='flex flex-wrap overflow-auto w-full gap-5 md:p-20 xxs:p-5 items-center justify-center '>
        {projectsArray.map((item, index) => {
          return (
            <ProjectCards
              key={index}
              image={item.image}
              title={item.title}
              technologies={item.technologies}
              description={item.description}
              link={item.link}
              where={item.where}
            />
          );
        })}
      </div>
    </div>
  );
};

export default projects;
