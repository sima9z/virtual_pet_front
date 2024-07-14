import React, { useState } from 'react';
import DogSitAnimation from './DogSitAnimation';
import DogWalkAnimation from './DogWalkAnimation';
import './dogAnimation.css';

const DogAnimation = () => {
  const [animationState, setAnimationState] = useState('sit');

  const handleSitComplete = () => {
    setAnimationState('walk');
  };

  return (
    <div>
      {animationState === 'sit' ? (
        <DogSitAnimation onComplete={handleSitComplete} />
      ) : (
        <DogWalkAnimation />
      )}
    </div>
  );
};

export default DogAnimation;