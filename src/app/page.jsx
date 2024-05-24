import React from 'react';

// Components
import InitialScreen from '@/components/InitialScreen';
// import LanguageCarousel from '@/components/languageCarousel';
import AboutMe from '@/components/aboutMe';
import Experiences from '@/components/experiences';
import Footer from '@/components/footer';
import Projects from '@/components/projects';

const Home = () => {
  return (
    <div className='h-auto w-full '>
      <InitialScreen />
     <!-- <LanguageCarousel />  -->
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
