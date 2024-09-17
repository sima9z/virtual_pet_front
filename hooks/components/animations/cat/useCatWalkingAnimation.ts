import gsap from 'gsap';

import { useCatWalkingAnimationProps } from '../../../../types/index'

export const useCatWalkingAnimation = ({
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
}: useCatWalkingAnimationProps ) => {

const startWalkingAnimation = () => {
  const repeat = -1;
  const yoyo = true;

  // すべての参照が存在するかをチェック
  if (
    legBackLeftRef.current && legBackRightRef.current &&
    legFrontLeftRef.current && legFrontRightRef.current &&
    beardRightRef.current && beardLeftRef.current &&
    faceRef.current && bodyRef.current && earRef.current && tailRef.current
  ) {
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

    headAnim.current = gsap.to([faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current, beardLeftRef.current], {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    
    // 初回のアニメーションを開始
    animate();
  }

  return () => {
    legAnims.current.forEach(anim => anim.kill());
    if (beardRightAnim.current) beardRightAnim.current.kill();
    if (beardLeftAnim.current) beardLeftAnim.current.kill();
    if (headAnim.current) headAnim.current.kill();
    if (containerAnim.current) containerAnim.current.kill();
  };
};

const startUnhappyOrHungryWalkingAnimation = () => {
  const repeat = -1;
  const yoyo = true;
  
  // すべての参照が存在するかをチェック
  if (
    legBackLeftRef.current && legBackRightRef.current &&
    legFrontLeftRef.current && legFrontRightRef.current &&
    beardRightRef.current && beardLeftRef.current &&
    faceRef.current && bodyRef.current && earRef.current && tailRef.current
  ) {
    const legAnims = [
      gsap.to(legBackLeftRef.current, {
        rotation: 20, // 通常より小さな角度で動く
        transformOrigin: 'top',
        duration: 5.0, // 通常より遅い
        repeat,
        yoyo,
        ease: 'power1.inOut',
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -20,
        transformOrigin: 'top',
        duration: 5.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.6,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 15,
        transformOrigin: 'top',
        duration: 4.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.2,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -15,
        transformOrigin: 'top',
        duration: 4.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.8,
      }),
    ];

    const beardAnim = [
      gsap.to(beardRightRef.current, {
        rotation: 10, // 軽く回転させる
        transformOrigin: 'right', 
        duration: 5.0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // 動きを滑らかにする
      }),
      gsap.to(beardLeftRef.current, {
        rotation: -10, // 軽く回転させる
        transformOrigin: 'left', 
        duration: 5.0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // 動きを滑らかにする
      })
    ];

    headAnim.current = gsap.to([faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current, beardLeftRef.current], {
      y: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
    });

    UnhappyOrHungryWalkingAnimation();

    return () => {
      legAnims.forEach(anim => anim.kill());
      beardAnim.forEach(anim => anim.kill());
      if (headAnim.current) headAnim.current.kill();
    };
  }
  };
  return {
    startWalkingAnimation,
    startUnhappyOrHungryWalkingAnimation
  }
}
