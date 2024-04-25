import React from 'react';

// Components
import InitialScreen from '@/components/InitialScreen';
import LanguageCarousel from '@/components/languageCarousel';

const Home = () => {
  return (
    <div className='h-screen w-full bg-neutral-200'>
      <InitialScreen />
      <LanguageCarousel />
    </div>
  );
};

export default Home;
