import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

import { catImageAssets } from '../../../hooks/components/animations/cat/catImageAssets'
import { useCatRefs } from '../../../hooks/components/animations/cat/useCatRefs'

import { AnimationHandle } from '../../../types/index';

import { useCatMovementAnimation } from '../../../hooks/components/animations/cat/useCatMovementAnimation'
import { useCatWalkingAnimation } from '../../../hooks/components/animations/cat/useCatWalkingAnimation'
import { useCatActionAnimation } from '../../../hooks/components/animations/cat/useCatActionAnimation'
import { useCatAnimationState } from '../../../hooks/components/animations/cat/useCatAnimationState';

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
  ({ showVesse, setShowVesse, showNotes, setShowNotes, showBall, setShowBall, showHearts , setShowHearts, petDetails}, ref ) => {
  
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
      beardImageLeft,
      heartImage,
      vesselImage,
      ballImage,
      yellowNoteImage,
      blueNoteImage,
      donyoriImage,
      donyori2Image,
      guruguruImage,
      SitCatImage 
    } = catImageAssets;

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
      heartRef,
      heartRef2,
      ballRef,
      yellowNoteRef,
      blueNoteRef,
      donyoriRef,
      donyori2Ref,
      guruguruRef,
      legAnims,
      beardRightAnim,
      beardLeftAnim,
      headAnim,
      containerAnim
    } = useCatRefs();

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isClickable, setIsClickable] = useState(true); // クリック可能状態を管理
  const [isSitting, setIsSitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<'normal' | 'unhappyOrHungry'>('normal');

  useImperativeHandle(ref, () => ({
    playButtonClick,
    strokeButtonClick,
    feedButtonClick
  }));

  const { animate, UnhappyOrHungryWalkingAnimation } = useCatMovementAnimation ({  
    containerRef,
    isSitting,
    directionRef,
    containerAnim,
    initialSpeed
  });

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
    ballRef
  })

  useCatAnimationState({
    isSitting,
    currentAnimation,
    startUnhappyOrHungryWalkingAnimation,
    startWalkingAnimation,
    showVesse,
    feedButtonClick,
    showNotes,
    strokeButtonClick,
    showBall,
    playButtonClick,
    petDetails,
    setCurrentAnimation,
    containerRef
  });

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