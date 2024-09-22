import React, { useState, useEffect } from 'react';
import "./BouncingBall.css"

const TypewriterEffect = () => {
  return (
    <div className="text-main-card">
      <div className="loader-text-home">
        <div className="words text-3xl mt-0.5">
          <span className="word text-gradient break-keep"></span>
          <span className="word text-gradient break-keep">Full-Stack Coder</span>
          <span className="word text-gradient break-keep">Problem Solver</span>
          <span className="word text-gradient break-keep">Developer</span>
          <span className="word text-gradient break-keep">Freelancer</span>
        </div>
      </div>
    </div>

  );
};

export default TypewriterEffect;
