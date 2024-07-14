import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import legImageBackRight from '../../public/ダックス奥後ろ足.png';
import legImageFrontRight from '../../public/ダックス奥前足2.png';
import legImageFrontLeft from '../../public/ダックス前足.png';
import legImageBackLeft from '../../public/ダックス後ろ足.png';
import tailImage from '../../public/ダックス尻尾.png';
import headImageFace from '../../public/ダックス顔.png';
import headImageEye from '../../public/ダックス目.png';
import bodyImage from '../../public/ダックス胴体.png';
import earImage from '../../public/ダックス耳.png';
import earImageRight from '../../public/ダックス奥耳.png';
import jawImage from '../../public/ダックス顎.png';

const DogWalkAnimation: React.FC = () => {
  const legBackLeftRef = useRef<HTMLImageElement | null>(null);
  const legBackRightRef = useRef<HTMLImageElement | null>(null);
  const legFrontLeftRef = useRef<HTMLImageElement | null>(null);
  const legFrontRightRef = useRef<HTMLImageElement | null>(null);
  const tailRef = useRef<HTMLImageElement | null>(null);
  const headFaceRef = useRef<HTMLImageElement | null>(null);
  const headEyeRef = useRef<HTMLImageElement | null>(null);
  const bodyRef = useRef<HTMLImageElement | null>(null);
  const earRef = useRef<HTMLImageElement | null>(null);
  const earRightRef = useRef<HTMLImageElement | null>(null);
  const jawRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  useEffect(() => {
    const repeat = -1;
    const yoyo = true;

    const legAnims = [
      gsap.to(legBackLeftRef.current, {
        rotation: 20,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0,
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -20,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power2.inOut',
        delay: 0.4,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 20,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power3.inOut',
        delay: 0.8,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -20,
        transformOrigin: 'right',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power4.inOut',
        delay: 1.2,
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
      tailAnim.kill();
      headAnim.kill();
    };
    }, []);

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto" ref={containerRef}>
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
        className="dog-part absolute top-[130px] left-[0px]"
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
};

export default DogWalkAnimation;