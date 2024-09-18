import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';

import { AnimationHandle } from '../../../types/index';

import { useDogMovementAnimation } from '../../../hooks/components/animations/dog/useDogMovementAnimation'
import { useDogWalkingAnimation } from '../../../hooks/components/animations/dog/useDogWalkingAnimation'
import { useDogSitAnimation } from '../../../hooks/components/animations/dog/useDogSitAnimation'
import { useDogActionAnimation } from '../../../hooks/components/animations/dog/useDogActionAnimation'

import DogParts from './DogParts';

import { useDogRefs } from '../../../hooks/components/animations/dog/useDogRefs';
import { useDogAnimationState } from '../../../hooks/components/animations/dog/useDogAnimationState';

import { PetDetails } from '../../../types/index';

const DogAnimation = forwardRef<AnimationHandle, { 
  showVesse: boolean; 
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>; 
  showNotes: boolean; 
  setShowNotes:React.Dispatch<React.SetStateAction<boolean>>; 
  showBall: boolean; 
  setShowBall: React.Dispatch<React.SetStateAction<boolean>>; 
  showHearts:boolean; 
  setShowHearts:React.Dispatch<React.SetStateAction<boolean>> 
  petDetails: PetDetails;
}>(
  ({ showVesse, setShowVesse, showNotes, setShowNotes, showBall, setShowBall, showHearts , setShowHearts, petDetails}, ref) => {
    const {
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
      containerRef,
      heartRef,
      heartRef2,
      ballRef,
      yellowNoteRef,
      blueNoteRef,
      donyoriRef,
      donyori2Ref,
      guruguruRef,
    } = useDogRefs();

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isSitting, setIsSitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<'normal' | 'unhappyOrHungry'>('normal');

  useImperativeHandle(ref, () => ({
    playButtonClick,
    strokeButtonClick,
    feedButtonClick
  }));

  const { animate, UnhappyOrHungryWalkinganimate } = useDogMovementAnimation({
    containerRef,
    isSitting,
    directionRef,
    initialSpeed
  });

  const { startWalkingAnimation, startUnhappyOrHungryWalkingAnimation } = useDogWalkingAnimation ({
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
    animate,
    UnhappyOrHungryWalkinganimate
  });

  useDogSitAnimation({  
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
    directionRef,
    setShowVesse,
    setShowHearts,
    setShowNotes,
    setIsSitting,
    currentAnimation
  });

  const { feedButtonClick, strokeButtonClick, playButtonClick } = useDogActionAnimation ({  
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
    directionRef,
    setShowVesse,
    setShowHearts,
    setIsSitting,
    setShowNotes,
    setShowBall,
    heartRef,
    heartRef2,
    yellowNoteRef,
    blueNoteRef,
    ballRef,
    currentAnimation,
    startWalkingAnimation,
    startUnhappyOrHungryWalkingAnimation});

  useDogAnimationState({isSitting,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation,
    showVesse,
    feedButtonClick,
    showNotes,
    yellowNoteRef,
    blueNoteRef,
    showBall,
    playButtonClick,
    showHearts,
    heartRef,
    heartRef2,
    petDetails,
    setCurrentAnimation,
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
    jawRef
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
    jawRef,
    containerRef,
    heartRef,
    heartRef2,
    ballRef,
    yellowNoteRef,
    blueNoteRef,
    donyoriRef,
    donyori2Ref,
    guruguruRef,
 };

  const handleClick = () => {
    if (!isSitting) {
      setIsSitting(true);
    }
  };

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto cursor-pointer z-50" ref={containerRef} onClick={handleClick}>
      <DogParts 
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

DogAnimation.displayName = 'DogAnimation';

export default DogAnimation;