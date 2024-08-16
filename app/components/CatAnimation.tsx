import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
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

import heartImage from '../../public/ハートマーク.png';
import vesselImage from '../../public/容器.png';
import ballImage from '../../public/ボール.png';

import SitCatImage from '../../public/猫.png';

interface CatAnimationHandle {
  feedWaterButtonClick: () => void;
  playButtonClick: () => void;
}

const CatAnimation= forwardRef<CatAnimationHandle, { showVesse: boolean; setshowVesse: React.Dispatch<React.SetStateAction<boolean>>; showBall: boolean; setShowBall: React.Dispatch<React.SetStateAction<boolean>>; showHearts:boolean; setShowHearts:React.Dispatch<React.SetStateAction<boolean>> }>(
  ({ showVesse, setshowVesse,showBall, setShowBall, showHearts , setShowHearts}, ref) => {

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

  const heartRef = useRef<HTMLImageElement | null>(null);
  const heartRef2 = useRef<HTMLImageElement | null>(null);
  const ballRef = useRef<HTMLImageElement | null>(null);

  const legAnims = useRef<gsap.core.Tween[]>([]);
  const beardRightAnim = useRef<gsap.core.Tween | null>(null);
  const beardLeftAnim = useRef<gsap.core.Tween | null>(null);
  const headAnim = useRef<gsap.core.Tween | null>(null);
  const containerAnim = useRef<gsap.core.Tween | null>(null);

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理
  const [isSitting, setIsSitting] = useState(false);

  useImperativeHandle(ref, () => ({
    playButtonClick,
    feedWaterButtonClick
  }));

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
    if (!containerRef.current || isSitting) return;
  
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    gsap.killTweensOf(containerRef.current);
  
    containerAnim.current = gsap.to(containerRef.current, {
      x: direction * -(viewportWidth / 2 - containerWidth / 2),
      duration: initialSpeed,
      ease: 'linear',
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
          gsap.to(containerRef.current, {
            scaleX: directionRef.current,
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
      },
    });
  };

  useEffect(() => {
    if (!isSitting) {
      // isSittingがfalseになり、画像が切り替わった後にstartWalkingAnimationを呼び出す
      startWalkingAnimation();
    }
  }, [isSitting]);

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
        // 元のアニメーションを再開
        startWalkingAnimation();

        setTimeout(() => setIsClickable(true), 2000); // 2秒後に再びクリック可能に
      }
    });
  };

  const feedWaterButtonClick = () => {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current]);
  
    setIsSitting(true);
    setshowVesse(true);
    setShowHearts(true);
    
    if (heartRef.current && heartRef2.current) {
      const heartTl = gsap.timeline();

      heartTl.to(
        heartRef.current,
        {
          rotation: 30,
          transformOrigin: 'center',
          duration: 1.0,
          ease: 'power1.out',
          repeat: -1,
          yoyo: true,
        }
      );
    
      heartTl.to(
        heartRef2.current,
        {
          rotation: -30,
          transformOrigin: 'center',
          duration: 1.0,
          ease: 'power1.out',
          repeat: -1,
          yoyo: true,
        },
        "<" // 同時に実行する
      );

      // 3秒後に状態をリセットし、アニメーションを再開
      gsap.delayedCall(3, () => {
        heartTl.kill();
        setshowVesse(false);
        setShowHearts(false);
        setIsSitting(false); // isSitting を false に設定して立ち上がる
      }
    )}
  };

  const playButtonClick = () => {
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

    console.log("Setting showBall and showHearts to true");
    setShowBall(true);
    setShowHearts(true);

    const heartTl = gsap.timeline();

    heartTl.to(
      heartRef.current,
      {
        rotation: 30,
        transformOrigin: 'center',
        duration: 1.0,
        ease: 'power1.out',
        repeat: -1,
        yoyo: true,
      }
    );
  
    heartTl.to(
      heartRef2.current,
      {
        rotation: -30,
        transformOrigin: 'center',
        duration: 1.0,
        ease: 'power1.out',
        repeat: -1,
        yoyo: true,
      },
      "<" // 同時に実行する
    );

    const jumpTl = gsap.timeline();

    jumpTl.to(containerRef.current, {
      y: -50,  // ジャンプの高さ
      duration: 0.5,
      ease: "power1.out"
    },
    );
    jumpTl.to(containerRef.current, {
        y: 0,  // 元の位置に戻る
        duration: 0.5,
        ease: "power1.in"
      },
    );
    jumpTl.to(containerRef.current, {
      y: -50,  // ジャンプの高さ
      duration: 0.5,
      ease: "power1.out"
    },
    );
    jumpTl.to(containerRef.current, {
        y: 0,  // 元の位置に戻る
        duration: 0.5,
        ease: "power1.in"
      },
    );
  
    const ballTl = gsap.timeline({
      onComplete: () => {
        heartTl.kill(); // ハートのアニメーションを停止
        setShowBall(false); // ボールの表示をリセット
        setShowHearts(false); // ハートの表示をリセット
  
        startWalkingAnimation(); // 歩行アニメーションを再開
      },
    });

    ballTl.to(
      ballRef.current,
      {
        duration: 0.5,
        x: 100, // x軸方向の移動
        ease: "power1.inOut", // 加速と減速の設定
        y: -70, // y軸方向に跳ねる
        rotation: 360, // ボールが回転する
      }
    );
  
    ballTl.to(
      ballRef.current,
      {
        duration: 0.5,
        x: 200, // さらにx軸方向に移動
        ease: "power1.inOut", // 跳ねるように
        y: 0, // y軸方向に元の位置に戻る
        rotation: 720, // さらに回転
      }
    );
  
    ballTl.to(
      ballRef.current,
      {
        duration: 0.6,
        x: 250, // x軸方向の移動
        ease: "power1.inOut", // 加速と減速の設定
        y: -40, // y軸方向に跳ねる
        rotation: 1080, // ボールが回転する
      }
    );
  
    ballTl.to(
      ballRef.current,
      {
        duration: 0.6,
        x: 300, // さらにx軸方向に移動
        ease: "power1.inOut", // 跳ねるように
        y: 0, // y軸方向に元の位置に戻る
        rotation: 1440, // さらに回転
      }
    );
  };

  useEffect(() => {
    if (showVesse) {
      feedWaterButtonClick();
    }
  }, [showVesse]);

  useEffect(() => {
    if (showBall) {
      playButtonClick();
    }
  }, [showBall]);

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto cursor-pointer" ref={containerRef} onClick={() => handleContainerClick(containerRef)}>
      {!isSitting && (
        <>
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
      </>
    )}

      {isSitting && (
        <Image
          src={SitCatImage}
          alt="SitCat"
          className="cat-part absolute top-[30px] left-[120px] z-0"
        />
      )}

      {showHearts && (
        <>
          <Image
            ref={heartRef}
            src={heartImage}
            alt="heart"
            className="cat-part absolute top-[20px] left-[70px] w-12"
          />
          <Image
            ref={heartRef2}
            src={heartImage}
            alt="heart"
            className="cat-part absolute top-[50px] left-[40px] w-9"
          />
        </>
      )}

      {showBall && (
        <Image
          ref={ballRef}
          src={ballImage}
          alt="Ball"
          className="cat-part absolute top-[220px] left-[-150px]"
        />
      )}

      {showVesse && ( 
        <Image
        src={vesselImage}
        alt="heart"
        className="cat-part absolute top-[250px] left-[-50px]"
        />
      )}
    </div>
  );
});

CatAnimation.displayName = 'CatAnimation';

export default CatAnimation;