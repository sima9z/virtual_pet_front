import gsap from 'gsap';

import { usePuppyCatWalkingAnimationProps } from '../../../../types/index';

export const usePuppyCatWalkingAnimation = ({
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
}: usePuppyCatWalkingAnimationProps ) => {
  const startWalkingAnimation = () => {
    const repeat = -1;
    const yoyo = true;

    legAnims.current = [
      gsap.to(legBackLeftRef.current, {
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0,
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.4,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.8,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.2,
      }),
    ];

    beardRightAnim.current = gsap.to(beardRightRef.current, {
      rotation: 10, // 軽く回転させる
      transformOrigin: 'right', 
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // 動きを滑らかにする
    });

    beardLeftAnim.current = gsap.to(beardLeftRef.current, {
      rotation: -10, // 軽く回転させる
      transformOrigin: 'left', 
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // 動きを滑らかにする
    });

    headAnim.current = gsap.to([faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current], {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    
    // 初回のアニメーションを開始
    animate();
    
    return () => {
      legAnims.current.forEach(anim => anim.kill());
      if (beardRightAnim.current) beardRightAnim.current.kill();
      if (beardLeftAnim.current) beardLeftAnim.current.kill();
      if (headAnim.current) headAnim.current.kill();
      if (containerAnim.current) containerAnim.current.kill();
    };
  };
  return {
    startWalkingAnimation
  }
}
