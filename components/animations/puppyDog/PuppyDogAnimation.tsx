import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import { puppyDogImageAssets } from '../../../hooks/components/animations/puppyDog/puppyDogImageAssets';
import { usePuppyDogRefs } from '../../../hooks/components/animations/puppyDog/usePuppyDogRefs';

import { usePuppyDogWalkingAnimation } from '../../../hooks/components/animations/puppyDog/usePuppyDogWalkingAnimation'
import { usePuppyDogSitAnimation } from '../../../hooks/components/animations/puppyDog/usePuppyDogSitAnimation'
import { usePuppyDogAnimationState } from '../../../hooks/components/animations/puppyDog/usePuppyDogAnimationState'

const PuppyDogAnimation = () => {
  const {  
    legImageBackRight,
    legImageFrontRight,
    legImageFrontLeft,
    legImageBackLeft,
    tailImage,
    headImageFace,
    headImageEye,
    bodyImage,
    earImage,
    earImageRight,
    jawImage } = puppyDogImageAssets;

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
      containerRef } = usePuppyDogRefs;

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isSitting, setIsSitting] = useState(false);

  // ランダムな位置を計算する関数
  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };

  const animate = () => {
    if (!containerRef.current || isSitting) return;

    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止

    gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed,
      ease: 'linear', //等速
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
        const currentScale = parseFloat(gsap.getProperty(containerRef.current, "scaleX").toString()); // 現在のスケールを数値に変換
        requestAnimationFrame(() => { //パフォーマンス
          gsap.to(containerRef.current, {
            scaleX: directionRef.current * Math.abs(currentScale), // 現在のスケールに方向を掛けて反転
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
        });
      },
    });
  };

  const { startWalkingAnimation } = usePuppyDogWalkingAnimation({
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
  });

  usePuppyDogSitAnimation({
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
  });

  usePuppyDogAnimationState({  
    containerRef,
    getRandomPosition,
    startWalkingAnimation,
    isSitting
  });

  const handleClick = () => {
    if (!isSitting) {
      setIsSitting(true);
    }
  };

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={handleClick} style={{ transform: 'scale(0.5)' }}>
      <Image
        ref={legBackLeftRef}
        src={legImageBackLeft}
        alt="Back Left Leg"
        className="dog-part absolute top-[170px] left-[300px]"
      />
      <Image
        ref={legBackRightRef}
        src={legImageBackRight}
        alt="Back Right Leg"
        className="dog-part absolute top-[220px] left-[220px]"
      />
      <Image
        ref={legFrontLeftRef}
        src={legImageFrontLeft}
        alt="Front Left Leg"
        className="dog-part absolute top-[170px] left-[80px]"
      />
      <Image
        ref={legFrontRightRef}
        src={legImageFrontRight}
        alt="Front Right Leg"
        className="dog-part absolute top-[120px] left-[10px]"
      />
      <Image
        ref={tailRef}
        src={tailImage}
        alt="Tail"
        className="dog-part absolute top-[60px] left-[350px]"
      />
      <Image
        ref={headFaceRef}
        src={headImageFace}
        alt="Face"
        className="dog-part absolute top-[5px] left-[60px]"
      />
      <Image
        ref={headEyeRef}
        src={headImageEye}
        alt="Eye"
        className="dog-part absolute top-[15px] left-[125px]"
      />
      <Image
        ref={bodyRef}
        src={bodyImage}
        alt="Body"
        className="dog-part absolute top-[100px] left-[85px]"
      />
      <Image
        ref={earRef}
        src={earImage}
        alt="Ear"
        className="dog-part absolute top-[20px] left-[180px]"
      />
      <Image
        ref={earRightRef}
        src={earImageRight}
        alt="EarRight"
        className="dog-part absolute top-[-7px] left-[103px]"
      />
      <Image
        ref={jawRef}
        src={jawImage}
        alt="Jaw"
        className="dog-part absolute top-[75px] left-[90px]"
      />
    </div>
  );
}

PuppyDogAnimation.displayName = 'PuppyDogAnimation';

export default PuppyDogAnimation;