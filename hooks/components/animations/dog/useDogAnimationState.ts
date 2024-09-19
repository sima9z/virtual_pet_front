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
} :useDogAnimationStateProps ) => {
  
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
    if (showNotes && yellowNoteRef.current && blueNoteRef.current) {
      console.log("noteTl started");
  
      const noteTl = gsap.timeline();
  
      // 音符のアニメーション
      noteTl.to(yellowNoteRef.current, {
        rotation: 30,
        transformOrigin: "center",
        duration: 1.0,
        ease: "power1.out",
        repeat: -1,
        yoyo: true,
      });
  
      noteTl.to(
        blueNoteRef.current,
        {
          rotation: -30,
          transformOrigin: "center",
          duration: 1.0,
          ease: "power1.out",
          repeat: -1,
          yoyo: true,
        },
        "<" // 同時に実行
      );
  
      return () => {
        noteTl.kill(); // クリーンアップ
      };
    }
  }, [showNotes]);
  
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
    if (petDetails) {
      const newAnimationState = (petDetails.states & 1 || petDetails.states & 2) ? 'unhappyOrHungry' : 'normal';
      if (currentAnimation !== newAnimationState) {
        setCurrentAnimation(newAnimationState);
      }
    }
  }, [petDetails?.states]); // `petDetails.states` の変化のみを監視
  
  useEffect(() => {
    // 現在のアニメーションを停止
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
  
    // クリーンアップ
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [currentAnimation]);
}
