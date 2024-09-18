import React, { forwardRef,useEffect, useRef, useState, useImperativeHandle } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import { AnimationHandle } from '../../types/index';

import { useDogWalkingAnimation } from '../../hooks/components/animations/dog/useDogWalkingAnimation'
import { useDogSitAnimation } from '../../hooks/components/animations/dog/useDogSitAnimation'
import { useDogActionAnimation } from '../../hooks/components/animations/dog/useDogActionAnimation'

import { dogImageAssets } from '../../hooks/components/animations/dog/dogImageAssets';
import { useDogRefs } from '../../hooks/components/animations/dog/useDogRefs';

const DogAnimation = forwardRef<AnimationHandle, { 
  showVesse: boolean; 
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>; 
  showNotes: boolean; 
  setShowNotes:React.Dispatch<React.SetStateAction<boolean>>; 
  showBall: boolean; 
  setShowBall: React.Dispatch<React.SetStateAction<boolean>>; 
  showHearts:boolean; 
  setShowHearts:React.Dispatch<React.SetStateAction<boolean>> 
  petDetails: { states: number };
}>(
  ({ showVesse, setShowVesse, showNotes, setShowNotes, showBall, setShowBall, showHearts , setShowHearts, petDetails}, ref) => {
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
      jawImage,
      heartImage,
      vesselImage,
      ballImage,
      yellowNoteImage,
      blueNoteImage,
      donyoriImage,
      donyori2Image,
      guruguruImage,
    } = dogImageAssets;

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
      containerRef,
      heartRef,
      heartRef2,
      ballRef,
      yellowNoteRef,
      blueNoteRef,
      donyoriRef,
      donyori2Ref,
      guruguruRef,
    } = useDogRefs();

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

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

    const containerWidth = containerRef.current.offsetWidth; //containerRefの幅
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止

    gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed,
      ease: 'linear', //等速
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
        requestAnimationFrame(() => { //パフォーマンス
          gsap.to(containerRef.current, {
            scaleX: directionRef.current, // 反転
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
        });
      },
    });
  };

  const UnhappyOrHungryWalkinganimate = () => {
    if (!containerRef.current || isSitting) return;

    const containerWidth = containerRef.current.offsetWidth; //containerRefの幅
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止

    gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed * 5, // 速度を遅くするためにdurationを増やす
      ease: 'linear', //等速
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
        requestAnimationFrame(() => { //パフォーマンス
          gsap.to(containerRef.current, {
            scaleX: directionRef.current, // 反転
            duration: initialSpeed * 7,
            onComplete:  UnhappyOrHungryWalkinganimate // 次のアニメーションを呼び出す
          });
        });
      },
    });
  };

  const { startWalkingAnimation, startUnhappyOrHungryWalkingAnimation} = useDogWalkingAnimation ({
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
    animate,
    UnhappyOrHungryWalkinganimate
  });

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

  useDogSitAnimation({  
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
    directionRef,
    setShowVesse,
    setShowHearts,
    setShowNotes,
    setIsSitting,
    currentAnimation
  });

  const { feedButtonClick, strokeButtonClick, playButtonClick } = useDogActionAnimation ({  
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
    directionRef,
    setShowVesse,
    setShowHearts,
    setIsSitting,
    setShowNotes,
    setShowBall,
    heartRef,
    heartRef2,
    yellowNoteRef,
    blueNoteRef,
    ballRef,
    currentAnimation,
    startWalkingAnimation,
    startUnhappyOrHungryWalkingAnimation});

  const handleClick = () => {
    if (!isSitting) {
      setIsSitting(true);
    }
  };

  useEffect(() => {
    if (showVesse) {
      feedButtonClick();  
    }
  }, [showVesse]);

  useEffect(() => {
    if (showNotes && yellowNoteRef.current && blueNoteRef.current) {
      console.log("noteTl started");
  
      const noteTl = gsap.timeline();
  
      // 音符のアニメーション
      noteTl.to(yellowNoteRef.current, {
        rotation: 30,
        transformOrigin: "center",
        duration: 1.0,
        ease: "power1.out",
        repeat: -1,
        yoyo: true,
      });
  
      noteTl.to(
        blueNoteRef.current,
        {
          rotation: -30,
          transformOrigin: "center",
          duration: 1.0,
          ease: "power1.out",
          repeat: -1,
          yoyo: true,
        },
        "<" // 同時に実行
      );
  
      return () => {
        noteTl.kill(); // クリーンアップ
      };
    }
  }, [showNotes]);

  useEffect(() => {
    if (showBall) {
      playButtonClick(); 
    }
  }, [showBall]);

  useEffect(() => {
    if (showHearts && heartRef.current && heartRef2.current) {
      console.log("heartTl started");
  
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
  
      return () => {
        heartTl.kill(); // クリーンアップ
      };
    }
  }, [showHearts]);

  useEffect(() => {
    console.log("petDetails:", petDetails);
    console.log("petDetails.states:", petDetails.states);

    if (petDetails) {
      const newAnimationState = (petDetails.states & 1 || petDetails.states & 2) ? 'unhappyOrHungry' : 'normal';
      if (currentAnimation !== newAnimationState) {
        setCurrentAnimation(newAnimationState);
      }
    }
  }, [petDetails?.states]); // `petDetails.states` の変化のみを監視

  useEffect(() => {
    // 現在のアニメーションを停止
    gsap.killTweensOf(containerRef.current);
    gsap.killTweensOf([
      legBackLeftRef.current, 
      legBackRightRef.current, 
      legFrontLeftRef.current, 
      legFrontRightRef.current, 
      tailRef.current, 
      headFaceRef.current, 
      headEyeRef.current, 
      bodyRef.current, 
      earRef.current, 
      earRightRef.current, 
      jawRef.current
    ]);

    console.log('currentAnimation:', currentAnimation);
  
    // アニメーションの状態に応じて新しいアニメーションを開始
    if (currentAnimation === 'unhappyOrHungry') {
      console.log('unhappyOrHungry state is true');
      startUnhappyOrHungryWalkingAnimation();
    } else {
      console.log('normal state is true');
      startWalkingAnimation();
    }
  
    // クリーンアップ
    return () => {
      gsap.killTweensOf(containerRef.current);
    };
  }, [currentAnimation]);

  return (
    <div className="dog-container relative w-[450px] h-[350px] mx-auto cursor-pointer z-50" ref={containerRef} onClick={handleClick}>
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
      {showHearts && (
        <>
          <Image
            ref={heartRef}
            src={heartImage}
            alt="heart"
            className="dog-part absolute top-[0px] left-[-30px] w-12"
          />
          <Image
            ref={heartRef2}
            src={heartImage}
            alt="heart"
            className="dog-part absolute top-[50px] left-[-30px] w-9"
          />
        </>
      )}

      {showBall && (
        <Image
          ref={ballRef}
          src={ballImage}
          alt="Ball"
          className="dog-part absolute top-[220px] left-[-150px]"
        />
      )}

      {showVesse && ( 
        <Image
        src={vesselImage}
        alt="heart"
        className="dog-part absolute top-[250px] left-[-120px]"
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
          className="dog-part absolute top-[-20px] left-[0px] w-12"
          />
          <Image
          ref={donyori2Ref}
          src={donyori2Image}
          alt="donyori2"
          className="dog-part absolute top-[80px] left-[250px] w-9"
          />
          <Image
          ref={guruguruRef}
          src={guruguruImage}
          alt="guruguru"
          className="dog-part absolute top-[-20px] left-[270px] w-9"
          />
        </>
      )}
    </div>
  );
});

DogAnimation.displayName = 'DogAnimation';

export default DogAnimation;