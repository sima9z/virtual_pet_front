import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import legImageBackRight from '../public/三毛猫奥後足.png';
import legImageFrontRight from '../public/三毛猫奥前足.png';
import legImageFrontLeft from '../public/三毛猫手前前足.png';
import legImageBackLeft from '../public/三毛猫手間後ろ足.png';
import tailImage from '../public/三毛猫尻尾.png';
import faceImage from '../public/三毛猫顔.png';
import bodyImage from '../public/三毛猫胴体.png';
import earImage from '../public/三毛猫耳.png';
import beardImageRight from '../public/三毛猫右ひげ.png';
import beardImageLeft from '../public/三毛猫左ひげ.png';

const PuppyCatAnimation= ()=>{
  const legBackLeftRef = useRef<HTMLImageElement | null>(null);
  const legBackRightRef = useRef<HTMLImageElement | null>(null);
  const legFrontLeftRef = useRef<HTMLImageElement | null>(null);
  const legFrontRightRef = useRef<HTMLImageElement | null>(null);
  const tailRef = useRef<HTMLImageElement | null>(null);
  const faceRef = useRef<HTMLImageElement | null>(null);
  const bodyRef = useRef<HTMLImageElement | null>(null);
  const earRef = useRef<HTMLImageElement | null>(null);
  const beardRightRef = useRef<HTMLImageElement | null>(null);
  const beardLeftRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const legAnims = useRef<gsap.core.Tween[]>([]);
  const beardRightAnim = useRef<gsap.core.Tween | null>(null);
  const beardLeftAnim = useRef<gsap.core.Tween | null>(null);
  const headAnim = useRef<gsap.core.Tween | null>(null);
  const containerAnim = useRef<gsap.core.Tween | null>(null);

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理

  // ランダムな位置を計算する関数
  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };

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