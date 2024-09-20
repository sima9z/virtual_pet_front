import { useEffect } from 'react';
import gsap from 'gsap';

import { useDogAnimationStateProps } from '../../../../types/index';

export const useDogAnimationState = ({
  isSitting,
  currentAnimation,
  startUnhappyOrHungryWalkingAnimation,
  startWalkingAnimation,
  showVesse,
  feedButtonClick,
  showNotes,
  showBall,
  playButtonClick,
  strokeButtonClick,
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
} :useDogAnimationStateProps ) => {
  
  useEffect(() => {
    if (showVesse) {
      feedButtonClick();  
    }
  }, [showVesse]);

  const strokeButtonClickWithPromise = () => {
    return new Promise((resolve) => {
      strokeButtonClick();
      gsap.delayedCall(3, resolve); // 3秒後に resolve して完了を通知
    });
  };
  
  useEffect(() => {
    if (showBall) {
      playButtonClick(); 
    }
  }, [showBall]);
  
  useEffect(() => {
    if (showHearts && heartRef.current && heartRef2.current) {
      console.log("heartTl started");
  
      const heartTl = gsap.timeline();
  
      heartTl.to(
        heartRef.current,
        {
          rotation: 30,
          transformOrigin: 'center',
          duration: 1.0,
          ease: 'power1.out',
          repeat: -1,
          yoyo: true,
        }
      );
  
      heartTl.to(
        heartRef2.current,
        {
          rotation: -30,
          transformOrigin: 'center',
          duration: 1.0,
          ease: 'power1.out',
          repeat: -1,
          yoyo: true,
        },
        "<" // 同時に実行する
      );
  
      return () => {
        heartTl.kill(); // クリーンアップ
      };
    }
  }, [showHearts]);

  useEffect(() => {
    if (!isSitting) {
      // currentAnimation の状態に応じてアニメーションを開始
      if (currentAnimation === 'unhappyOrHungry') {
        startUnhappyOrHungryWalkingAnimation();
      } else {
        startWalkingAnimation();
      }
    }
  }, [isSitting]);
  
  useEffect(() => {
    if (petDetails) {
      const newAnimationState = (petDetails.states & 1 || petDetails.states & 2) ? 'unhappyOrHungry' : 'normal';
      if (currentAnimation !== newAnimationState) {
        setCurrentAnimation(newAnimationState);
      }
    }
  }, [petDetails?.states]); // `petDetails.states` の変化のみを監視
  
  useEffect(() => {
    const runAnimation = async () => {
      if (showNotes) {
        await strokeButtonClickWithPromise(); // なでるアニメーションが完了するまで待つ
      }
      
      // 次に currentAnimation に基づいてアニメーションを実行
      gsap.killTweensOf(containerRef.current);
      gsap.killTweensOf([
        legBackLeftRef.current, 
        legBackRightRef.current, 
        legFrontLeftRef.current, 
        legFrontRightRef.current, 
        tailRef.current, 
        headFaceRef.current, 
        headEyeRef.current, 
        bodyRef.current, 
        earRef.current, 
        earRightRef.current, 
        jawRef.current
      ]);
    
      console.log('currentAnimation:', currentAnimation);
    
      // アニメーションの状態に応じて新しいアニメーションを開始
      if (currentAnimation === 'unhappyOrHungry') {
        console.log('unhappyOrHungry state is true');
        startUnhappyOrHungryWalkingAnimation();
      } else {
        console.log('normal state is true');
        startWalkingAnimation();
      }
    };

    runAnimation(); // 非同期処理を実行

  }, [showNotes, currentAnimation]);

}

