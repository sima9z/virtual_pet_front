import React, { useEffect, useState } from 'react';
import DogSitAnimation from './DogSitAnimation';
import DogWalkAnimation from './DogWalkAnimation';
import './dogAnimation.css';

const DogAnimation = () => {
  const [animationState, setAnimationState] = useState('walk');

  const handleReachPosition = () => {
    setAnimationState('sit');
  };

  const handleSitComplete = () => {
    setAnimationState('walk');
  };

  return (
    <>
      {animationState === 'sit' ? (
        <DogSitAnimation onComplete={handleSitComplete} />
      ) : (
        <DogWalkAnimation onReachPosition={handleReachPosition} />
      )}
    </>
  );
};

export default DogAnimation;