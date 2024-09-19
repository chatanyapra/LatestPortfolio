import React, { useEffect, useRef } from 'react';
import './BouncingBall.css';
import gsap from 'gsap';

const BouncingBall = () => {
  const ballsRef = useRef([]);

  useEffect(() => {
    const ballProperties = [];
    function initializeBalls() {
      ballsRef.current.forEach((ball, index) => {
        const size = 100; // Ball size
        const x = Math.random() * (window.innerWidth - (size));
        const y = Math.random() * (window.innerHeight - (size));
        const vx = (Math.random() - 0.5) * 1; // Random initial velocity on X axis
        const vy = (Math.random() - 0.5) * 1; // Random initial velocity on Y axis
        gsap.set(ball, { x, y, width: size, height: size });

        ballProperties[index] = { x, y, vx, vy, size };
      });
    }
    function updateBalls() {
      ballsRef.current.forEach((ball, index) => {
        const properties = ballProperties[index];
        properties.x += properties.vx;
        properties.y += properties.vy;
        if (properties.x <= 0 || properties.x >= (window.innerWidth - 20 ) - properties.size) {
          properties.vx *= -1; // Reverse X velocity
        }
        if (properties.y <= 0 || properties.y >= (window.innerHeight - 40 ) - properties.size) {
          properties.vy *= -1; // Reverse Y velocity
        }
        gsap.set(ball, { x: properties.x, y: properties.y });
      });

      requestAnimationFrame(updateBalls); // Continuously update the animation
    }
    initializeBalls();
    updateBalls();
    return () => {
      cancelAnimationFrame(updateBalls);
    };
  }, []);

  return (
    <div className='w-full -z-10 max-md:mt-24'>
        <div className="bouncing-balls-container">
            <div className="ball-moving ball-1" ref={(el) => ballsRef.current[0] = el}></div>
            <div className="ball-moving ball-2" ref={(el) => ballsRef.current[1] = el}></div>
            <div className="ball-moving ball-3" ref={(el) => ballsRef.current[2] = el}></div>
            <div className="ball-moving ball-4" ref={(el) => ballsRef.current[3] = el}></div>
            <div className="ball-moving ball-5" ref={(el) => ballsRef.current[4] = el}></div>
        </div>
    </div>
  );
};

export default BouncingBall;
