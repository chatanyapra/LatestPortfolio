import React, { useState, useEffect } from 'react';
import "./BouncingBall.css"

const TypewriterEffect = ({ words, typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 1500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      if (!isDeleting && charIndex < words[wordIndex].length) {
        // Typing characters
        const timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
  
        return () => clearTimeout(timeout);
      } else if (isDeleting && charIndex > 0) {
        // Deleting characters
        const timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
  
        return () => clearTimeout(timeout);
      } else if (!isDeleting && charIndex === words[wordIndex].length) {
        // Word is fully typed, start deleting after delay
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
  
        return () => clearTimeout(timeout);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to the next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // Loop back to the first word
      }
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);
  
    return (
      <h1>
        {displayedText}
        <span className="cursor text-gradient">|</span>
      </h1>
    );
  };

export default TypewriterEffect;
