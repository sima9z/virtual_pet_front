import { createRoot } from 'react-dom/client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
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

const DogStandAnimation = ({ }) => {
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

  useEffect(() => {

    gsap.to(headFaceRef.current, {
      y: 0, 
      duration: 1.0, // 移動にかかる時間
      rotation: 0,
      transformOrigin: "bottom",
    });
    gsap.to([earRef.current, earRightRef.current,jawRef.current,], {
      x: 0, 
      y: 0, 
      rotation: 0,
      transformOrigin: "center",
      duration: 1.0, // 移動にかかる時間
    });
    gsap.to(headEyeRef.current, {
      x: 0, 
      y: 0, 
      rotation: 0,
      transformOrigin: "center",
      duration: 1.0, // 移動にかかる時間
    });
    gsap.to(tailRef.current, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });
    gsap.to(legBackLeftRef.current, {
      y: 0,
      x:0,
      rotation: 0, 
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });
    gsap.to(legBackRightRef.current, {
      x:0,
      y:0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });
    gsap.to(legFrontLeftRef.current, {
      x:0,
      y: 0,
      rotation: 0, 
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });
    gsap.to(legFrontRightRef.current, {
      y: 0,
      x:0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });
    gsap.to(bodyRef.current, {
      rotation: 0,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out"
    });

    gsap.to(tailRef.current, { rotation: 5, transformOrigin: "bottom", duration: 0.5, repeat: -1, yoyo: true });
    gsap.to(headFaceRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(headEyeRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(bodyRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(earRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(earRightRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(jawRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });

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

export default DogStandAnimation;