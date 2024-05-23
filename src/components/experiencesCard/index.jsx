import React from 'react';

// Utils
import spentTime from '@/utils/spentTime';

const experiencesCard = ({ job, company, startAt, endAt, description, current }) => {
  return (
    <div className='flex flex-col shadow-2xl p-5 hover:bg-white/80 hover:scale-105 duration-500 rounded-'>
      <p className='text-xl font-bold'>{job}</p>
      <p>{company}</p>
      <p className='text-gray-500 text-xs'>
        {startAt} - {current ? 'Present' : endAt} · {spentTime(startAt, endAt, current)} 
      </p>
      <ul>
        {description.map((item, index) => (
          <div key={index} className='flex justify-start items-center gap-2 w-full h-auto '>
            {/* dot */}
            <span className='bg-emerald-400 w-2 h-2 rounded-full flex'></span>
            <li className='w-11/12 h-auto '>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default experiencesCard;
