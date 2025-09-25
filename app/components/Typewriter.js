"use client";

import React, { useState, useEffect } from 'react';

const words = ["a developer", "a coder", "an engineer", "a problem-solver"];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const nextWordIndex = (wordIndex + 1) % words.length;

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(80); // Faster deleting speed
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(200); // Slower typing speed
      }

      if (!isDeleting && text === currentWord) {
        setSpeed(1000); // Pause at end of typing
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(nextWordIndex);
        setSpeed(500); // Pause before next word
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, wordIndex]);

  return (
    <span className="auto-input relative">
      <span className="font-extrabold text-[var(--foreground)]">{text}</span>
       <span className="inline-block relative w-0.5 h-6 -bottom-1 ml-1 border-r-2 border-[var(--foreground)] animate-blink-caret-custom"></span>
    </span>
  );
}