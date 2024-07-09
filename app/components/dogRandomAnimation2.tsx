import React, { useEffect, useState } from 'react';
import DogSitAnimation from './dogSitAnimation';
import DogWalkAnimation from './dogWalkAnimation';
import './dogAnimation.css';

const DogRandomAnimation2 = () => {
  const [animationState, setAnimationState] = useState('sit');

  // 定期的にアニメーションの状態を変更する
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationState(prevState => (prevState === 'sit' ? 'walk' : 'sit'));
    }, 5000); // 5秒ごとにアニメーションを切り替える

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {animationState === 'sit' ? <DogSitAnimation /> : <DogWalkAnimation />}
    </>
  );
};

export default DogRandomAnimation2;