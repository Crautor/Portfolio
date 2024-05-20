import React from 'react';

// Components
import ExperienceCard from '@/components/experiencesCard';

// Utils
import { experiencesArray } from '@/utils/experiencesArray';

const experiences = () => {
  return (
    <div className='flex flex-col h-auto pb-10 w-full'>
      <div className='flex  justify-center items-center p-5 w-full gap-5'>
        <h1 className='text-neutral-800 font-black xxs:text-3xl md:text-7xl'>
          Experiences<span className='text-emerald-400'>.</span>
        </h1>
        <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>
      </div>

      <div className='flex flex-col gap-5 p-2 items-center justify-center '>
        {experiencesArray.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              job={item.job}
              company={item.company}
              startAt={item.startAt}
              endAt={item.endAt}
              description={item.description}
              current={item.current}
            />
          );
        })}
      </div>
    </div>
  );
};

export default experiences;
