import gsap from 'gsap';

import { useCatHandleContainerClickProps } from '../../../../types/index'

export const useCatHandleContainerClick = ({
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
}: useCatHandleContainerClickProps ) => {
  const handleContainerClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (!isClickable) return; // クリック不可状態なら何もしない
  
    setIsClickable(false); // クリック不可に設定
  
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current]);
  
    gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current], {
      rotation: 0,
      x: 0,
      y: 0,
    });
    gsap.set(containerRef.current, {
      scaleX: directionRef.current, // 現在の移動方向に合わせたスケールに設定
    });
  
    gsap.to(ref.current, {
      keyframes: [
        { y: -200, rotation: "+=180", duration: 0.3, ease: 'power1.inOut' },
        { y: 0, rotation: "+=180", duration: 0.3, ease: 'power1.inOut' }
      ],
      transformOrigin: 'center',
      onComplete: () => {
        // アニメーションの状態に応じて新しいアニメーションを開始
        if (currentAnimation === 'unhappyOrHungry') {
          console.log('unhappyOrHungry state is true');
          startUnhappyOrHungryWalkingAnimation();
        } else {
          console.log('normal state is true');
          startWalkingAnimation();
        }
  
        setTimeout(() => setIsClickable(true), 2000); // 2秒後に再びクリック可能に
      }
    });
  };

  return {
    handleContainerClick
  }
}