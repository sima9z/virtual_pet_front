"use client"

import React, { useRef, useState } from 'react';

import PuppyDogParts from './PuppyDogParts';

import { usePuppyDogMovementAnimation } from '../../../hooks/components/animations/puppyDog/usePuppyDogMovementAnimation'
import { usePuppyDogWalkingAnimation } from '../../../hooks/components/animations/puppyDog/usePuppyDogWalkingAnimation'
import { usePuppyDogSitAnimation } from '../../../hooks/components/animations/puppyDog/usePuppyDogSitAnimation'
import { usePuppyDogAnimationState } from '../../../hooks/components/animations/puppyDog/usePuppyDogAnimationState'

const PuppyDogAnimation = () => {
  const legBackLeftRef = useRef<HTMLImageElement | null>(null);
  const legBackRightRef = useRef<HTMLImageElement | null>(null);
  const legFrontLeftRef = useRef<HTMLImageElement | null>(null);
  const legFrontRightRef = useRef<HTMLImageElement | null>(null);
  const tailRef = useRef<HTMLImageElement | null>(null);
  const headFaceRef = useRef<HTMLImageElement | null>(null);
  const headEyeRef = useRef<HTMLImageElement | null>(null);
  const bodyRef = useRef<HTMLImageElement | null>(null);
  const earRef = useRef<HTMLImageElement | null>(null);
  const earRightRef = useRef<HTMLImageElement | null>(null);
  const jawRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isSitting, setIsSitting] = useState(false);

  const { animate, getRandomPosition } = usePuppyDogMovementAnimation({
    containerRef,
    isSitting,
    directionRef,
    initialSpeed
  });

  const { startWalkingAnimation } = usePuppyDogWalkingAnimation({
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    headFaceRef, 
    headEyeRef, 
    bodyRef, 
    earRef, 
    earRightRef, 
    jawRef,
    animate
  });

  usePuppyDogSitAnimation({
    isSitting,
    containerRef,
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    headFaceRef, 
    headEyeRef, 
    bodyRef, 
    earRef, 
    earRightRef, 
    jawRef,
    setIsSitting,
    startWalkingAnimation
  });

  usePuppyDogAnimationState({  
    containerRef,
    getRandomPosition,
    startWalkingAnimation,
    isSitting
  });

  const refs = {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    headFaceRef,
    headEyeRef,
    bodyRef,
    earRef,
    earRightRef,
    jawRef }

  const handleClick = () => {
    if (!isSitting) {
      setIsSitting(true);
    }
  };

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={handleClick} style={{ transform: 'scale(0.5)' }}>
      <PuppyDogParts refs={refs} />
    </div>
  );
}

PuppyDogAnimation.displayName = 'PuppyDogAnimation';

export default PuppyDogAnimation;