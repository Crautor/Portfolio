import React from 'react';

// Icons
import { FaHeart } from 'react-icons/fa6';

// Small hearts drifting up behind the photo: [left %, size px, duration s, delay s]
const HEARTS = [
  [8, 14, 11, 0],
  [18, 22, 14, 3],
  [30, 12, 10, 6],
  [44, 18, 13, 1.5],
  [58, 12, 12, 4.5],
  [70, 24, 15, 2],
  [82, 14, 11, 7],
  [92, 18, 13, 5],
];

const LoveScreen = () => {
  return (
    <main className='love relative flex min-h-[100svh] w-full select-none flex-col items-center justify-center overflow-hidden px-4 py-16'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        {HEARTS.map(([left, size, duration, delay]) => (
          <FaHeart
            key={left}
            className='love-heart absolute bottom-[-40px] text-[#f02eaa]'
            style={{
              left: `${left}%`,
              fontSize: size,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      <figure className='love-card relative rotate-[-2deg] rounded-sm bg-[#fdf6f9] p-3 pb-16 shadow-[0_30px_80px_-20px_rgba(240,46,170,0.45)] sm:p-4 sm:pb-20'>
        <img
          className='block w-[min(78vw,22rem)] rounded-[2px] object-cover'
          src='/Image/Love.jpeg'
          alt='Vitor e Luiza'
          draggable='false'
        />
        <figcaption className='absolute inset-x-0 bottom-4 text-center font-display text-3xl font-bold tracking-tight text-[#2a0f1f] sm:bottom-5 sm:text-4xl'>
          Vitor <span className='text-[#f02eaa]'>&amp;</span> Luiza
        </figcaption>
      </figure>

      <p className='mt-14 flex items-center gap-3 font-display text-2xl font-semibold text-[#fde7f3]'>
        <FaHeart aria-hidden='true' className='love-beat text-[#f02eaa]' />
        Te amo
      </p>
    </main>
  );
};

export default LoveScreen;
