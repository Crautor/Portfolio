import React from 'react';

// Components
import InitialScreen from '@/components/InitialScreen';
import LanguageCarousel from '@/components/languageCarousel';
import AboutMe from '@/components/aboutMe';

const Home = () => {
  return (
    <div className='h-screen w-full bg-neutral-200'>
      <InitialScreen />
      <LanguageCarousel />
      <AboutMe />
    </div>
  );
};

export default Home;
