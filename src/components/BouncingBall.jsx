import React, { useEffect, useRef } from 'react';
import './BouncingBall.css';
import gsap from 'gsap';

const BouncingBall = () => {
  const ballsRef = useRef([]);

  useEffect(() => {
    const ballProperties = [];

    // Initialize ball properties such as position and velocity
    function initializeBalls() {
      ballsRef.current.forEach((ball, index) => {
        const size = 250; // Ball size
        const x = Math.random() * (window.innerWidth - (size));
        const y = Math.random() * (window.innerHeight - (size));
        const vx = (Math.random() - 0.5) * 1; // Random initial velocity on X axis
        const vy = (Math.random() - 0.5) * 1; // Random initial velocity on Y axis

        // Initial ball style setup using GSAP
        gsap.set(ball, { x, y, width: size, height: size });

        ballProperties[index] = { x, y, vx, vy, size };
      });
    }

    // Update the balls' position based on velocity and handle bouncing logic
    function updateBalls() {
      ballsRef.current.forEach((ball, index) => {
        const properties = ballProperties[index];

        // Update position
        properties.x += properties.vx;
        properties.y += properties.vy;

        // Check for wall collisions and reverse velocity when needed (bounce)
        if (properties.x <= 0 || properties.x >= window.innerWidth - properties.size) {
          properties.vx *= -1; // Reverse X velocity
        }
        if (properties.y <= 0 || properties.y >= window.innerHeight - properties.size) {
          properties.vy *= -1; // Reverse Y velocity
        }

        // Apply the updated position using GSAP for smooth animation
        gsap.set(ball, { x: properties.x, y: properties.y });
      });

      requestAnimationFrame(updateBalls); // Continuously update the animation
    }

    // Initialize and start the ball animations
    initializeBalls();
    updateBalls();

    // Cleanup animation frames when the component unmounts
    return () => {
      cancelAnimationFrame(updateBalls);
    };
  }, []);

  return (
    <div className='w-full relative'>
        <div className="absolute top-0 left-0 bottom-0 right-0 h-dvh glass-effect p-5 text-center z-10"></div>
        <div className="bouncing-balls-container">
            <div className="ball-moving ball-1" ref={(el) => ballsRef.current[0] = el}></div>
            <div className="ball-moving ball-2" ref={(el) => ballsRef.current[1] = el}></div>
            <div className="ball-moving ball-3" ref={(el) => ballsRef.current[2] = el}></div>
        </div>
    </div>
  );
};

export default BouncingBall;
