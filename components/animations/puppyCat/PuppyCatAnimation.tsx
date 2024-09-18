"use client"

import React, { useEffect, useRef, useState } from 'react';

import PuppyCatParts from './PuppyCatParts';

import { usePuppyCatRefs } from '../../../hooks/components/animations/puppyCat/usePuppyCatRefs';

import { usePuppyCatMovementAnimation } from '../../../hooks/components/animations/puppyCat/usePuppyCatMovementAnimation';
import { usePuppyCatWalkingAnimation } from '../../../hooks/components/animations/puppyCat/usePuppyCatWalkingAnimation'
import { usePuppyCatHandleContainerClick } from '../../../hooks/components/animations/puppyCat/usePuppyCatHandleContainerClick'

const PuppyCatAnimation= () => {

  const {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    faceRef,
    bodyRef,
    earRef,
    beardRightRef,
    beardLeftRef,
    containerRef,
    legAnims,
    beardRightAnim,
    beardLeftAnim,
    headAnim,
    containerAnim,
  } = usePuppyCatRefs;

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理

  const { animate } = usePuppyCatMovementAnimation({  
    containerRef,
    directionRef,
    containerAnim,
    initialSpeed
  });

  const { startWalkingAnimation } = usePuppyCatWalkingAnimation({
    legAnims,
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    beardRightAnim,
    beardRightRef,
    beardLeftAnim,
    beardLeftRef,
    headAnim,
    faceRef, 
    bodyRef, 
    earRef, 
    tailRef, 
    animate,
    containerAnim
  });

  const refs = {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    faceRef,
    bodyRef,
    earRef,
    beardRightRef,
    beardLeftRef,
    containerRef,
    legAnims,
    beardRightAnim,
    beardLeftAnim,
    headAnim,
    containerAnim
  };

  useEffect(() => {
    startWalkingAnimation();
  }, []);

  const { handleContainerClick } = usePuppyCatHandleContainerClick({
    isClickable,
    setIsClickable,
    containerRef,
    legBackLeftRef, 
    legBackRightRef, 
    legFrontLeftRef, 
    legFrontRightRef, 
    faceRef, 
    bodyRef, 
    earRef, 
    tailRef, 
    beardRightRef,
    beardLeftRef,
    startWalkingAnimation
  });

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={() => handleContainerClick(containerRef)} style={{ transform: 'scale(0.5)' }}>
      <PuppyCatParts refs={refs} />
    </div>
  );
}

PuppyCatAnimation.displayName = 'PuppyCatAnimation';

export default PuppyCatAnimation;