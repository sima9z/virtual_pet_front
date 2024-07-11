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
import './dogAnimation.css';

interface DogSitAnimationProps {
  onComplete: () => void;
}

const DogSitAnimation: React.FC<DogSitAnimationProps> = ({ onComplete }) => {
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
    const tl = gsap.timeline({ onComplete });

    // 座るアニメーション
    tl.to(headFaceRef.current, {
      y: -40,
      rotation: -20,
      transformOrigin: "bottom",
      duration: 1.0,
    });
    tl.to([earRef.current, earRightRef.current, jawRef.current], {
      x: -27,
      y: -38,
      rotation: -3,
      transformOrigin: "top",
      duration: 1.0,
    }, "<");
    tl.to(headEyeRef.current, {
      x: -25,
      y: -30,
      rotation: -15,
      transformOrigin: "bottom",
      duration: 1.0,
    }, "<");
    tl.to(tailRef.current, {
      y: 50,
      x: -30,
      rotation: 10,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");
    tl.to(legBackLeftRef.current, {
      y: 60,
      x: -30,
      rotation: 70,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");
    tl.to(legBackRightRef.current, {
      x: -80,
      y: -10,
      rotation: 30,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");
    tl.to(legFrontLeftRef.current, {
      x: -100,
      y: -10,
      rotation: -40,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");
    tl.to(legFrontRightRef.current, {
      y: 10,
      x: -53,
      rotation: -40,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");
    tl.to(bodyRef.current, {
      rotation: 30,
      transformOrigin: "top",
      duration: 1.0,
      ease: "power3.out",
    }, "<");

    // 逆再生で立ち上がるアニメーション
    tl.to(bodyRef.current, {
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    });
    tl.to(legFrontRightRef.current, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    }, "<");
    tl.to(legFrontLeftRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    }, "<");
    tl.to(legBackRightRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    }, "<");
    tl.to(legBackLeftRef.current, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    }, "<");
    tl.to(tailRef.current, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.in",
    }, "<");
    tl.to(headEyeRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "bottom",
      duration: 3.1,
    }, "<");
    tl.to([earRef.current, earRightRef.current, jawRef.current], {
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "top",
      duration: 3.1,
    }, "<");
    tl.to(headFaceRef.current, {
      y: 0,
      rotation: 0,
      transformOrigin: "bottom",
      duration: 3.1,
    }, "<");

    return () => {
      tl.kill();
    };

  }, [onComplete]);

  return (
    <div className="dog-container" ref={containerRef}>
      <Image ref={legBackLeftRef} src={legImageBackLeft} alt="Back Left Leg" className="dog-part back-left-leg" />
      <Image ref={legBackRightRef} src={legImageBackRight} alt="Back Right Leg" className="dog-part back-right-leg" />
      <Image ref={legFrontLeftRef} src={legImageFrontLeft} alt="Front Left Leg" className="dog-part front-left-leg" />
      <Image ref={legFrontRightRef} src={legImageFrontRight} alt="Front Right Leg" className="dog-part front-right-leg" />
      <Image ref={tailRef} src={tailImage} alt="Tail" className="dog-part tail" />
      <Image ref={headFaceRef} src={headImageFace} alt="Face" className="dog-part head-face" />
      <Image ref={headEyeRef} src={headImageEye} alt="Eye" className="dog-part head-eye" />
      <Image ref={bodyRef} src={bodyImage} alt="Body" className="dog-part body" />
      <Image ref={earRef} src={earImage} alt="Ear" className="dog-part ear" />
      <Image ref={earRightRef} src={earImageRight} alt="EarRight" className="dog-part ear-right" />
      <Image ref={jawRef} src={jawImage} alt="jaw" className="dog-part jaw" />
    </div>
  );
};

export default DogSitAnimation;