import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { puppyCatImageAssets } from '../../../hooks/components/animations/puppyCat/puppyCatImageAssets';
import { usePuppyCatRefs } from '../../../hooks/components/animations/puppyCat/usePuppyCatRefs';

import { usePuppyCatMovementAnimation } from '../../../hooks/components/animations/puppyCat/usePuppyCatMovementAnimation';
import { usePuppyCatWalkingAnimation } from '../../../hooks/components/animations/puppyCat/usePuppyCatWalkingAnimation'
import { usePuppyCatHandleContainerClick } from '../../../hooks/components/animations/puppyCat/usePuppyCatHandleContainerClick'

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

  const { animate } = usePuppyCatMovementAnimation({  
    containerRef,
    directionRef,
    containerAnim,
    initialSpeed
  });

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

  const { handleContainerClick } = usePuppyCatHandleContainerClick({
    isClickable,
    setIsClickable,
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
    startWalkingAnimation
  });

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