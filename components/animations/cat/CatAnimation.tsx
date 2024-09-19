"use client"

import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

import { AnimationHandle } from '../../../types/index';

import { useCatMovementAnimation } from '../../../hooks/components/animations/cat/useCatMovementAnimation'
import { useCatWalkingAnimation } from '../../../hooks/components/animations/cat/useCatWalkingAnimation'
import { useCatActionAnimation } from '../../../hooks/components/animations/cat/useCatActionAnimation'
import { useCatAnimationState } from '../../../hooks/components/animations/cat/useCatAnimationState';
import { useCatHandleContainerClick } from '../../../hooks/components/animations/cat/useCatHandleContainerClick'

import { PetDetails } from '../../../types/index'

import CatParts from './CatParts';

const CatAnimation= forwardRef<AnimationHandle, { 
  showVesse: boolean; 
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>; 
  showNotes: boolean; 
  setShowNotes:React.Dispatch<React.SetStateAction<boolean>>; 
  showBall: boolean; 
  setShowBall: React.Dispatch<React.SetStateAction<boolean>>; 
  showHearts:boolean; 
  setShowHearts:React.Dispatch<React.SetStateAction<boolean>>;
  petDetails: PetDetails;
}>(
  ({ showVesse, setShowVesse, showNotes, setShowNotes, showBall, setShowBall, showHearts , setShowHearts, petDetails}, ref ) => {

    const legBackLeftRef = useRef<HTMLImageElement | null>(null);
    const legBackRightRef = useRef<HTMLImageElement | null>(null);
    const legFrontLeftRef = useRef<HTMLImageElement | null>(null);
    const legFrontRightRef = useRef<HTMLImageElement | null>(null);
    const tailRef = useRef<HTMLImageElement | null>(null);
    const faceRef = useRef<HTMLImageElement | null>(null);
    const bodyRef = useRef<HTMLImageElement | null>(null);
    const earRef = useRef<HTMLImageElement | null>(null);
    const beardRightRef = useRef<HTMLImageElement | null>(null);
    const beardLeftRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const initialSpeed = 3; // 初期速度を設定
    const directionRef = useRef(1); // 移動方向を保持する
  
    const heartRef = useRef<HTMLImageElement | null>(null);
    const heartRef2 = useRef<HTMLImageElement | null>(null);
    const ballRef = useRef<HTMLImageElement | null>(null);
    const yellowNoteRef = useRef<HTMLImageElement | null>(null);
    const blueNoteRef = useRef<HTMLImageElement | null>(null);
    const donyoriRef = useRef<HTMLImageElement | null>(null);
    const donyori2Ref = useRef<HTMLImageElement | null>(null);
    const guruguruRef = useRef<HTMLImageElement | null>(null);
  
    const legAnims = useRef<gsap.core.Tween[]>([]);
    const beardRightAnim = useRef<gsap.core.Tween | null>(null);
    const beardLeftAnim = useRef<gsap.core.Tween | null>(null);
    const headAnim = useRef<gsap.core.Tween | null>(null);
    const containerAnim = useRef<gsap.core.Tween | null>(null);

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理
  const [isSitting, setIsSitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<'normal' | 'unhappyOrHungry'>('normal');

  useImperativeHandle(ref, () => ({
    playButtonClick,
    strokeButtonClick,
    feedButtonClick
  }));

  const { animate, UnhappyOrHungryWalkingAnimation } = useCatMovementAnimation ({  
    containerRef,
    isSitting,
    directionRef,
    containerAnim,
    initialSpeed
  });

  const { startWalkingAnimation, startUnhappyOrHungryWalkingAnimation } = useCatWalkingAnimation({ 
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    beardRightRef,
    beardLeftRef,
    faceRef,
    bodyRef,
    earRef,
    tailRef,
    legAnims,
    beardRightAnim,
    beardLeftAnim,
    headAnim,
    containerAnim,
    animate,
    UnhappyOrHungryWalkingAnimation
  });

  const { feedButtonClick, strokeButtonClick, playButtonClick } = useCatActionAnimation({
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
    setIsSitting,
    setShowVesse,
    setShowHearts,
    setShowNotes,
    setShowBall,
    heartRef,
    heartRef2, 
    yellowNoteRef,
    blueNoteRef,
    directionRef,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation,
    ballRef
  })

  useCatAnimationState({
    isSitting,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation,
    showVesse,
    feedButtonClick,
    showNotes,
    strokeButtonClick,
    showBall,
    playButtonClick,
    petDetails,
    setCurrentAnimation,
    containerRef
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
    heartRef,
    heartRef2,
    ballRef,
    yellowNoteRef,
    blueNoteRef,
    donyoriRef,
    donyori2Ref,
    guruguruRef,
 };

  const { handleContainerClick } = useCatHandleContainerClick ({
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
    directionRef,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation
  });

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto cursor-pointer z-50" ref={containerRef} onClick={() => handleContainerClick(containerRef)}>
      <CatParts
        isSitting={isSitting}
        refs={refs}
        showHearts={showHearts}
        showBall={showBall}
        showVesse={showVesse}
        showNotes={showNotes}
        currentAnimation={currentAnimation}
      />
    </div>
  );
});

CatAnimation.displayName = 'CatAnimation';

export default CatAnimation;