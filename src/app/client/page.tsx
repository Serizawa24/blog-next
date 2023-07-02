"use client"

import React, { useState } from 'react';

type MyComponentProps = {};

export default function Client(){
  const [isVisible, setIsVisible] = useState(false);
  const [isPending, startTransition] = useState(false);

  const handleClick = () => {
    startTransition(true);
    setIsVisible(!isVisible);
    setTimeout(() => {
      startTransition(false);
    }, 1000); // Simulating a delay before completing the transition
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className={isVisible ? 'visible' : 'hidden'}>
          Content to transition
        </div>
      )}
    </div>
  )
};

