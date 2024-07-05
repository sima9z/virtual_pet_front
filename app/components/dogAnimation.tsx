"use client";

import ReactDOM from 'react-dom';

import React, { useEffect, useRef,MutableRefObject } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import legImageBackRight from '../../public/ダックス奥後ろ足.png';
import legImageFrontRight from '../../public/ダックス奥前足.png';
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

const DogAnimation = () => {
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
  const containerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const repeat = -1;
    const yoyo = true;

    gsap.to(legBackLeftRef.current, {
      rotation: 20, 
      transformOrigin: "top", 
      duration: 1.0,
      repeat, 
      yoyo,
      ease: "power1.inOut",
      delay: 0
      });
    gsap.to(legBackRightRef.current, { 
      rotation: -20, 
      transformOrigin: "top", 
      duration: 1.0,
      repeat, 
      yoyo,
      ease: "power2.inOut",
      delay: 0.4
    });
    gsap.to(legFrontLeftRef.current, { 
      rotation: 20, 
      transformOrigin: "top", 
      duration: 1.0,
      repeat, 
      yoyo,
      ease: "power3.inOut",
      delay: 0.8
    });
    gsap.to(legFrontRightRef.current, { 
      rotation: -20, 
      transformOrigin: "right", 
      duration: 1.0,
      repeat, 
      yoyo,
      ease: "power4.inOut",
      delay: 1.2
    });

    if (containerRef.current) {
      let direction = 1; // 初期の移動方向
    
      const animate = () => {
        gsap.to(containerRef.current, {
          x: direction * -500,
          duration: 3,
          ease: "linear",
          onComplete: () => {
            // 移動完了後に方向とスケールを反転
            direction *= -1;
            gsap.to(containerRef.current, {
              scaleX: direction,
              duration: 3,
              onComplete: animate // 反転後に再度アニメーションを開始
            });
          }
        });
      };
    
      // 初回のアニメーションを開始
      animate();
    }

    gsap.to(tailRef.current, { rotation: 5, transformOrigin: "bottom", duration: 0.5, repeat: -1, yoyo: true });
    gsap.to(headFaceRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(headEyeRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(bodyRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(earRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(earRightRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
    gsap.to(jawRef.current, { y: 5, duration: 1, repeat: -1, yoyo: true });
  }, []);

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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<DogAnimation />, document.getElementById('walk'));
});

export default DogAnimation;