'use client';
import React, { useEffect } from 'react';

// Utils
import imageArray from '@/utils/imageArray';

// Styles
import './style.css';

const index = () => {
  useEffect(() => {
    var tx = 0;
    var ty = 10;
    var radius = 450;
    const autorotate = true;
    const rotatespeed = -60;
    const imgwidth = 200;
    const imgheight = 283;

    setTimeout(init, 100);

    let sx,
      sy,
      nx,
      ny,
      desx = 0,
      desy = 0;
    const odrag = document.getElementById('dragcontainer');
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

    function applyTranform(obj) {
      if (ty > 180) ty = 180;
      if (ty < 0) ty = 0;

      obj.style.transform = `rotateX(${-ty}deg) rotateY(${tx}deg)`;
    }

    function playSpin(yes) {
      const ospin = document.getElementById('spincontainer');
      ospin.style.animationPlayState = yes ? 'running' : 'paused';
    }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;

      sx = e.clientX;
      sy = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        nx = e.clientX;
        ny = e.clientY;
        desx = nx - sx;
        desy = ny - sy;

        tx = tx + desx * 0.1;
        ty = ty + desy * 0.1;

        const odrag = document.getElementById('dragcontainer');
        applyTranform(odrag);

        sx = nx;
        sy = ny;
      };
      document.onpointerup = function (e) {
        const odrag = document.getElementById('dragcontainer');
        odrag.timer = setInterval(function () {
          desx *= 0.95;
          desy *= 0.95;
          tx = tx + desx * 0.1;
          ty = ty + desy * 0.1;

          applyTranform(odrag);
          playSpin(false);

          if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };
      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };
  }, []);
  return (
    <div className='bg-neutral-800 h-[150vh]'>
      <div className='bodyCarousel'>
        <div id='dragcontainer'>
          <div id='spincontainer'>
            {imageArray.map((item, index) => (
              <img id='img' key={index} src={item.imagem} alt='' />
            ))}
            <p id='p'>Vitor Dallanol</p>
          </div>
          <div id='ground'></div>
        </div>
      </div>
    </div>
  );
};

export default index;
