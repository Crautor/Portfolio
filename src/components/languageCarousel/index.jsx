'use client';
import React, { useEffect } from 'react';

// Utils
import imageArray from '@/utils/imageArray';

// Styles
import './style.css';

const languageCarousel = () => {
  useEffect(() => {
    var tx = 0;
    var ty = 10;
    var radius = 450;
    const autorotate = true;
    const rotatespeed = -60;
    const imgwidth = 200;
    const imgheight = 283;

    setTimeout(init, 100);
    const ospin = document.getElementById('spincontainer');
    const aimg = Array.from(ospin.querySelectorAll('#img'));

    ospin.style.width = `${imgwidth}px`;
    ospin.style.height = `${imgheight}px`;

    const ground = document.getElementById('ground');
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;
    function init(delayTime) {
      for (let i = 0; i < aimg.length; i++) {
        aimg[i].style.transform = `rotateY(${
          i * (360 / aimg.length)
        }deg) translateZ(${radius}px)`;
        aimg[i].style.transition = 'transform 1s';
        aimg[i].style.transitionDelay =
          delayTime || (aimg.length - i) / 4 + 's';
      }
    }

    if (autorotate) {
      const animationname = rotatespeed > 0 ? 'spin' : 'spinreverse';
      ospin.style.animation = `${animationname} ${Math.abs(
        rotatespeed
      )}s infinite linear`;
    }

  }, []);
  return (
    <div className='h-[150vh] lg:block xxs:hidden '>
      <div className='bodyCarousel '>
        <div id='dragcontainer'>
          <div id='spincontainer'>
            {imageArray.map((item, index) => (
              <img draggable={false} id='img' key={index} src={item.imagem} alt='' />
            ))}
            <p id='p'>Vitor Dallanol</p>
          </div>
          <div id='ground'></div>
        </div>
      </div>
    </div>
  );
};

export default languageCarousel;
