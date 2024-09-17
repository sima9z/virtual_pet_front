import gsap from 'gsap';

import { usePuppyDogWalkingAnimationProps } from '../../../../types/index'

export const usePuppyDogWalkingAnimation = ({
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
}: usePuppyDogWalkingAnimationProps ) => {  
  const startWalkingAnimation = () => {
    const repeat = -1;
    const yoyo = true;

    const legAnims = [
      gsap.to(legBackLeftRef.current, {
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0, //待機時間
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.6,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 20,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.2,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -20,
        transformOrigin: 'right',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.8,
      }),
    ];

    const tailAnim = gsap.to(tailRef.current, {
      rotation: 5,
      transformOrigin: 'bottom',
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });

    const headAnim = gsap.to([headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current], {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });

    // 初回のアニメーションを開始
    animate();

    return () => {
      legAnims.forEach(anim => anim.kill());
      tailAnim.kill();
      headAnim.kill();
    };
  };

  return {
    startWalkingAnimation
  }
}
