import React, { useEffect, useRef, useState } from 'react';
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

const DogAnimation: React.FC = () => {
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

  const [isSitting, setIsSitting] = useState(false);

  const animate = () => {
    if (!containerRef.current || isSitting) return;

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

  useEffect(() => {
    const startWalkingAnimation = () => {
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

      // 初回のアニメーションを開始
      animate();

      return () => {
        legAnims.forEach(anim => anim.kill());
        tailAnim.kill();
        headAnim.kill();
      };
    };

    if (!isSitting) {
      const stopWalkingAnimation = startWalkingAnimation();
      return stopWalkingAnimation;
    }
  }, [isSitting]);

  useEffect(() => {
    if (!isSitting) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsSitting(false);
        animate(); // 立ち上がった後に移動アニメーションを再開
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
      tl.kill();
    };
  }, [isSitting]);

  const handleClick = () => {
    setIsSitting(true);
    gsap.killTweensOf(containerRef.current); // お座り中に移動アニメーションを停止
  };

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={handleClick}>
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

export default DogAnimation;