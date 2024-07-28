import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import legImageBackRight from '../../public/三毛猫奥後足.png';
import legImageFrontRight from '../../public/三毛猫奥前足.png';
import legImageFrontLeft from '../../public/三毛猫手前前足.png';
import legImageBackLeft from '../../public/三毛猫手間後ろ足.png';
import tailImage from '../../public/三毛猫尻尾.png';
import faceImage from '../../public/三毛猫顔.png';
import bodyImage from '../../public/三毛猫胴体.png';
import earImage from '../../public/三毛猫耳.png';
import beardImageRight from '../../public/三毛猫右ひげ.png';
import beardImageLeft from '../../public/三毛猫左ひげ.png';

const CatWalkAnimation: React.FC = () => {
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

  useEffect(() => {
    const repeat = -1;
    const yoyo = true;

    const legAnims = [
      gsap.to(legBackLeftRef.current, {
        rotation: 25,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0,
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -25,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.4,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 25,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.8,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -25,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.2,
      }),
    ];

    const beardRightAnim = gsap.to(beardRightRef.current, {
      rotation: 10, // 軽く回転させる
      transformOrigin: 'right', 
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // 動きを滑らかにする
    });

    const beardLeftAnim = gsap.to(beardLeftRef.current, {
      rotation: -10, // 軽く回転させる
      transformOrigin: 'left', 
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // 動きを滑らかにする
    });

    const headAnim = gsap.to([faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current], {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });

    const animate = () => {
      if (!containerRef.current) return;
    
      const containerWidth = containerRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;
      const direction = directionRef.current;
    
      gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止
    
      gsap.to(containerRef.current, {
        x: direction * -(viewportWidth / 2 - containerWidth / 2),
        duration: initialSpeed,
        ease: 'linear',
        onComplete: () => {
          directionRef.current *= -1; // 方向を反転
          requestAnimationFrame(() => {
            gsap.to(containerRef.current, {
              scaleX: directionRef.current,
              duration: 0.5, // 反転時のdurationを固定
              onComplete: animate // 次のアニメーションを呼び出す
            });
          });
        },
      });
    };
    
    // 初回のアニメーションを開始
    animate();
    
    return () => {
      legAnims.forEach(anim => anim.kill());
      beardRightAnim.kill();
      beardLeftAnim.kill();
      headAnim.kill();
    };
    }, []);

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto" ref={containerRef}>
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
        className="cat-part absolute top-[180px] left-[140px] z-0"
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
};

export default CatWalkAnimation;