import { useEffect } from 'react';
import gsap from 'gsap';

import { usePuppyDogSitAnimationProps } from '../../../../types/index'

export const usePuppyDogSitAnimation = ({
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
}:usePuppyDogSitAnimationProps) => {
  useEffect(() => {
    if (!isSitting) return;
  
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current]);
  
    // 足と体の状態をリセット
    gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current], {
      rotation: 0,
      x: 0,
      y: 0,
    });
  
    const tl = gsap.timeline({
      onComplete: () => {
        setIsSitting(false);
        startWalkingAnimation(); // 立ち上がった後に移動アニメーションを再開
      }
    });
  
    // 座るアニメーション
    tl.to(headFaceRef.current, {
      y: -40,
      rotation: -20,
      transformOrigin: 'bottom',
      duration: 1.0,
    });
    tl.to(
      [earRef.current, earRightRef.current, jawRef.current],
      {
        x: -27,
        y: -38,
        rotation: -3,
        transformOrigin: 'top',
        duration: 1.0,
      },
      '<'
    );
    tl.to(
      headEyeRef.current,
      {
        x: -25,
        y: -30,
        rotation: -15,
        transformOrigin: 'bottom',
        duration: 1.0,
      },
      '<'
    );
    tl.to(
      tailRef.current,
      {
        y: 50,
        x: -30,
        rotation: 10,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
    tl.to(
      legBackLeftRef.current,
      {
        y: 60,
        x: -30,
        rotation: 70,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
    tl.to(
      legBackRightRef.current,
      {
        x: -80,
        y: -10,
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
    tl.to(
      legFrontLeftRef.current,
      {
        x: -100,
        y: -10,
        rotation: -40,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
    tl.to(
      legFrontRightRef.current,
      {
        y: 10,
        x: -53,
        rotation: -40,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
    tl.to(
      bodyRef.current,
      {
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        ease: 'power3.out',
      },
      '<'
    );
  
    // 逆再生で立ち上がるアニメーション
    tl.to(bodyRef.current, {
      rotation: 0,
      transformOrigin: 'top',
      duration: 1.5,
      ease: 'power3.in',
    });
    tl.to(
      legFrontRightRef.current,
      {
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.in',
      },
      '<'
    );
    tl.to(
      legFrontLeftRef.current,
      {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.in',
      },
      '<'
    );
    tl.to(
      legBackRightRef.current,
      {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.in',
      },
      '<'
    );
    tl.to(
      legBackLeftRef.current,
      {
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.in',
      },
      '<'
    );
    tl.to(
      tailRef.current,
      {
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.in',
      },
      '<'
    );
    tl.to(
      headEyeRef.current,
      {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: 'bottom',
        duration: 3.1,
      },
      '<'
    );
    tl.to(
      [earRef.current, earRightRef.current, jawRef.current],
      {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: 'top',
        duration: 3.1,
      },
      '<'
    );
    tl.to(
      headFaceRef.current,
      {
        y: 0,
        rotation: 0,
        transformOrigin: 'bottom',
        duration: 3.1,
      },
      '<'
    );
  
    return () => {
      tl.kill(); //クリーンアップ
    };
  }, [isSitting]);
}
