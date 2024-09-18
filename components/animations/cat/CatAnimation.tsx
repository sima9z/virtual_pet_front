import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import legImageBackRight from '../../../public/三毛猫奥後足.png';
import legImageFrontRight from '../../../public/三毛猫奥前足.png';
import legImageFrontLeft from '../../../public/三毛猫手前前足.png';
import legImageBackLeft from '../../../public/三毛猫手間後ろ足.png';
import tailImage from '../../../public/三毛猫尻尾.png';
import faceImage from '../../../public/三毛猫顔.png';
import bodyImage from '../../../public/三毛猫胴体.png';
import earImage from '../../../public/三毛猫耳.png';
import beardImageRight from '../../../public/三毛猫右ひげ.png';
import beardImageLeft from '../../../public/三毛猫左ひげ.png';

import heartImage from '../../../public/ハートマーク.png';
import vesselImage from '../../../public/容器.png';
import ballImage from '../../../public/ボール.png';

import yellowNoteImage from '../../../public/音符（黄色）.png';
import blueNoteImage from '../../../public/音符（青）.png';

import donyoriImage from '../../../public/どんより1.png';
import donyori2Image from '../../../public/どんより2.png';
import guruguruImage from '../../../public/ぐるぐる.png';

import SitCatImage from '../../../public/猫.png';

import { AnimationHandle } from '../../../types/index';

import { useCatWalkingAnimation } from '../../../hooks/components/animations/cat/useCatWalkingAnimation'
import { useCatActionAnimation } from '../../../hooks/components/animations/cat/useCatActionAnimation'

const CatAnimation= forwardRef<AnimationHandle, { 
  showVesse: boolean; 
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>; 
  showNotes: boolean; 
  setShowNotes:React.Dispatch<React.SetStateAction<boolean>>; 
  showBall: boolean; 
  setShowBall: React.Dispatch<React.SetStateAction<boolean>>; 
  showHearts:boolean; 
  setShowHearts:React.Dispatch<React.SetStateAction<boolean>>;
  petDetails: { states: number };
}>(
  ({ showVesse, setShowVesse, showNotes, setShowNotes, showBall, setShowBall, showHearts , setShowHearts, petDetails}, ref) => {

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
  const yellowNoteRef = useRef<HTMLImageElement | null>(null);
  const blueNoteRef = useRef<HTMLImageElement | null>(null);
  const donyoriRef = useRef<HTMLImageElement | null>(null);
  const donyori2Ref = useRef<HTMLImageElement | null>(null);
  const guruguruRef = useRef<HTMLImageElement | null>(null);

  const legAnims = useRef<gsap.core.Tween[]>([]);
  const beardRightAnim = useRef<gsap.core.Tween | null>(null);
  const beardLeftAnim = useRef<gsap.core.Tween | null>(null);
  const headAnim = useRef<gsap.core.Tween | null>(null);
  const containerAnim = useRef<gsap.core.Tween | null>(null);

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理
  const [isSitting, setIsSitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<'normal' | 'unhappyOrHungry'>('normal');

  useImperativeHandle(ref, () => ({
    playButtonClick,
    strokeButtonClick,
    feedButtonClick
  }));

  // ランダムな位置を計算する関数
  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };

  const animate = () => {
    if (!containerRef.current || isSitting) return;
  
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
          gsap.to(containerRef.current, {
            scaleX: directionRef.current,
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
      },
    });
  };

  const UnhappyOrHungryWalkingAnimation = () => {
    if (!containerRef.current || isSitting) return;
  
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current);
  
    containerAnim.current = gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed*5,
      ease: 'linear',
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
          gsap.to(containerRef.current, {
            scaleX: directionRef.current,
            duration: initialSpeed*7, // 反転時のdurationを固定
            onComplete: UnhappyOrHungryWalkingAnimation // 次のアニメーションを呼び出す
          });
      },
    });
  };

  const { startWalkingAnimation, startUnhappyOrHungryWalkingAnimation } = useCatWalkingAnimation({ 
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
  });

  const { feedButtonClick, strokeButtonClick, playButtonClick } = useCatActionAnimation({
    containerRef,
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    faceRef,
    bodyRef, 
    earRef, 
    tailRef, 
    beardRightRef,
    beardLeftRef,
    setIsSitting,
    setShowVesse,
    setShowHearts,
    setShowNotes,
    setShowBall,
    heartRef,
    heartRef2, 
    yellowNoteRef,
    blueNoteRef,
    directionRef,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation,
    ballRef })

  useEffect(() => {
    if (!isSitting) {
      // currentAnimation の状態に応じてアニメーションを開始
      if (currentAnimation === 'unhappyOrHungry') {
        startUnhappyOrHungryWalkingAnimation();
      } else {
        startWalkingAnimation();
      }
    }
  }, [isSitting, currentAnimation]);

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
        // アニメーションの状態に応じて新しいアニメーションを開始
        if (currentAnimation === 'unhappyOrHungry') {
          console.log('unhappyOrHungry state is true');
          startUnhappyOrHungryWalkingAnimation();
        } else {
          console.log('normal state is true');
          startWalkingAnimation();
        }

        setTimeout(() => setIsClickable(true), 2000); // 2秒後に再びクリック可能に
      }
    });
  };

  useEffect(() => {
    if (showVesse) {
      feedButtonClick();
    }
  }, [showVesse]);

  useEffect(() => {
    if (showNotes) {
      strokeButtonClick();  
    }
  }, [showNotes]);

  useEffect(() => {
    if (showBall) {
      playButtonClick();
    }
  }, [showBall]);

  useEffect(() => {
    if (petDetails) {
      const newAnimationState = (petDetails.states & 1 || petDetails.states & 2) ? 'unhappyOrHungry' : 'normal';

      if (currentAnimation !== newAnimationState) {
        setCurrentAnimation(newAnimationState);
        gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止
      }
    }
  }, [petDetails?.states]);

  useEffect(() => {
    if (currentAnimation === 'unhappyOrHungry') {
      // アニメーションを開始
      startUnhappyOrHungryWalkingAnimation();
    } else {
      // 通常のアニメーションを開始
      startWalkingAnimation();
    }
    // コンポーネントがアンマウントされる際にアニメーションを停止
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [currentAnimation]);

  return (
    <div className="cat-container relative w-[450px] h-[350px] mx-auto cursor-pointer z-50" ref={containerRef} onClick={() => handleContainerClick(containerRef)}>
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

      {showNotes && ( 
        <>
          <Image
            ref={yellowNoteRef}
            src={yellowNoteImage}
            alt="yellow-note"
            className="dog-part absolute top-[0px] left-[-30px] w-12"
          />
          <Image
            ref={blueNoteRef}
            src={blueNoteImage}
            alt="blue-note"
            className="dog-part absolute top-[50px] left-[-30px] w-9"
          />
        </>
      )}

      { currentAnimation === 'unhappyOrHungry' && ( 
        <>
          <Image
          ref={donyoriRef}
          src={donyoriImage}
          alt="donyori"
          className="dog-part absolute top-[0px] left-[50px] w-12"
          />
          <Image
          ref={donyori2Ref}
          src={donyori2Image}
          alt="donyori2"
          className="dog-part absolute top-[80px] left-[200px] w-9"
          />
          <Image
          ref={guruguruRef}
          src={guruguruImage}
          alt="guruguru"
          className="dog-part absolute top-[-20px] left-[200px] w-9"
          />
        </>
      )}
    </div>
  );
});

CatAnimation.displayName = 'CatAnimation';

export default CatAnimation;