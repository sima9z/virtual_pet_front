import { useEffect } from 'react';
import gsap from 'gsap';

import { useCatAnimationStateProps } from '../../../../types/index'

export const useCatAnimationState = ({
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
}: useCatAnimationStateProps) => {
  useEffect(() => {
    if (!isSitting) {
      // currentAnimation の状態に応じてアニメーションを開始
      if (currentAnimation === 'unhappyOrHungry') {
        startUnhappyOrHungryWalkingAnimation();
      } else {
        startWalkingAnimation();
      }
    }
  }, [isSitting, currentAnimation]);

  useEffect(() => {
    if (showVesse) {
      feedButtonClick();
    }
  }, [showVesse]);

  useEffect(() => {
    if (showNotes) {
      strokeButtonClick();  
    }
  }, [showNotes]);

  useEffect(() => {
    if (showBall) {
      playButtonClick();
    }
  }, [showBall]);

  useEffect(() => {
    if (petDetails) {
      const newAnimationState = (petDetails.states & 1 || petDetails.states & 2) ? 'unhappyOrHungry' : 'normal';

      if (currentAnimation !== newAnimationState) {
        setCurrentAnimation(newAnimationState);
        gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止
      }
    }
  }, [petDetails?.states]);

  useEffect(() => {
    if (currentAnimation === 'unhappyOrHungry') {
      // アニメーションを開始
      startUnhappyOrHungryWalkingAnimation();
    } else {
      // 通常のアニメーションを開始
      startWalkingAnimation();
    }
    // コンポーネントがアンマウントされる際にアニメーションを停止
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [currentAnimation]);
};
