import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import { puppyCatImageAssets } from '../../../hooks/components/animations/puppyCat/puppyCatImageAssets';
import { usePuppyCatRefs } from '../../../hooks/components/animations/puppyCat/usePuppyCatRefs';

import { usePuppyCatWalkingAnimation } from '../../../hooks/components/animations/puppyCat/usePuppyCatWalkingAnimation'

const PuppyCatAnimation= () => {
  const {  
    legImageBackRight,
    legImageFrontRight,
    legImageFrontLeft,
    legImageBackLeft,
    tailImage,
    faceImage,
    bodyImage,
    earImage,
    beardImageRight,
    beardImageLeft } = puppyCatImageAssets;

  const {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    faceRef,
    bodyRef,
    earRef,
    beardRightRef,
    beardLeftRef,
    containerRef,
    legAnims,
    beardRightAnim,
    beardLeftAnim,
    headAnim,
    containerAnim,
  } = usePuppyCatRefs;

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理

  // ランダムな位置を計算する関数
  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };
 
  const animate = () => {
    if (!containerRef.current) return;
  
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current);
  
    containerAnim.current = gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed,
      ease: 'linear',
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
        const currentScale = parseFloat(gsap.getProperty(containerRef.current, "scaleX").toString()); // 現在のスケールを数値に変換
          gsap.to(containerRef.current, {
            scaleX: directionRef.current * Math.abs(currentScale), // 現在のスケールに方向を掛けて反転
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
      },
    });
  };

  const { startWalkingAnimation } = usePuppyCatWalkingAnimation({
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
  });

  useEffect(() => {
    startWalkingAnimation();
  }, []);

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
    
    gsap.to(ref.current, {
      keyframes: [
        { y: -200, rotation: "+=180", duration: 0.3, ease: 'power1.inOut' },
        { y: 0, rotation: "+=180", duration: 0.3, ease: 'power1.inOut' }
      ],
      transformOrigin: 'center',
      onComplete: () => {
        // 元のアニメーションを再開
        startWalkingAnimation();

        setTimeout(() => setIsClickable(true), 2000); // 2秒後に再びクリック可能に
      }
    });
  };

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={() => handleContainerClick(containerRef)} style={{ transform: 'scale(0.5)' }}>
      <Image
        ref={legBackLeftRef}
        src={legImageBackLeft}
        alt="Back Left Leg"
        className="cat-part absolute top-[135px] left-[250px] z-10"
      />
      <Image
        ref={legBackRightRef}
        src={legImageBackRight}
        alt="Back Right Leg"
        className="cat-part absolute top-[190px] left-[220px] z-0"
      />
      <Image
        ref={legFrontLeftRef}
        src={legImageFrontLeft}
        alt="Front Left Leg"
        className="cat-part absolute top-[160px] left-[80px] z-10"
      />
      <Image
        ref={legFrontRightRef}
        src={legImageFrontRight}
        alt="Front Right Leg"
        className="cat-part absolute top-[180px] left-[130px] z-0"
      />
      <Image
        ref={tailRef}
        src={tailImage}
        alt="Tail"
        className="cat-part absolute top-[20px] left-[310px]"
      />
      <Image
        ref={faceRef}
        src={faceImage}
        alt="Face"
        className="cat-part absolute top-[60px] left-[85px] z-10"
      />
      <Image
        ref={bodyRef}
        src={bodyImage}
        alt="Body"
        className="cat-part absolute top-[100px] left-[85px] z-0"
      />
      <Image
        ref={earRef}
        src={earImage}
        alt="Ear"
        className="cat-part absolute top-[40px] left-[93px]"
      />
      <Image
        ref={beardRightRef}
        src={beardImageRight}
        alt="beard right"
        className="cat-part absolute top-[100px] left-[60px] z-20"
      />
      <Image
        ref={beardLeftRef}
        src={beardImageLeft}
        alt="beard left"
        className="cat-part absolute top-[105px] left-[165px] z-20"
      />
    </div>
  );
}


PuppyCatAnimation.displayName = 'PuppyCatAnimation';

export default PuppyCatAnimation;