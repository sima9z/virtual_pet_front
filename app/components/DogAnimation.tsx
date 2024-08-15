import React, { forwardRef,useEffect, useRef, useState, useImperativeHandle } from 'react';
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

import heartImage from '../../public/ハートマーク.png';
import vesselImage from '../../public/容器.png';
import ballImage from '../../public/ボール.png';

interface DogAnimationHandle {
  feedWaterButtonClick: () => void;
  playButtonClick: () => void;
}

const DogAnimation = forwardRef<DogAnimationHandle, { showVesse: boolean; setshowVesse: React.Dispatch<React.SetStateAction<boolean>>; showBall: boolean; setShowBall: React.Dispatch<React.SetStateAction<boolean>>; showHearts:boolean; setShowHearts:React.Dispatch<React.SetStateAction<boolean>> }>(
  ({ showVesse, setshowVesse,showBall, setShowBall, showHearts , setShowHearts}, ref) => {

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

  const heartRef = useRef<HTMLImageElement | null>(null);
  const heartRef2 = useRef<HTMLImageElement | null>(null);
  const ballRef = useRef<HTMLImageElement | null>(null);

  const initialSpeed = 3; // 初期速度を設定
  const directionRef = useRef(1); // 移動方向を保持する

  const [isSitting, setIsSitting] = useState(false);

  useImperativeHandle(ref, () => ({
    playButtonClick,
    feedWaterButtonClick
  }));

  const startWalkingAnimation = () => {
    const repeat = -1;
    const yoyo = true;

    const legAnims = [
      gsap.to(legBackLeftRef.current, {
        rotation: 30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0, //待機時間
      }),
      gsap.to(legBackRightRef.current, {
        rotation: -30,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 0.6,
      }),
      gsap.to(legFrontLeftRef.current, {
        rotation: 20,
        transformOrigin: 'top',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.2,
      }),
      gsap.to(legFrontRightRef.current, {
        rotation: -20,
        transformOrigin: 'right',
        duration: 1.0,
        repeat,
        yoyo,
        ease: 'power1.inOut',
        delay: 1.8,
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

  const animate = () => {
    if (!containerRef.current || isSitting) return;

    const containerWidth = containerRef.current.offsetWidth; //containerRefの幅
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    gsap.killTweensOf(containerRef.current); // 既存のアニメーションを停止

    gsap.to(containerRef.current, {
      x: direction * -(viewportWidth / 2 - containerWidth / 2),
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

  useEffect(() => {
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
        setShowBall(false);
        setshowVesse(false);
        setShowHearts(false);
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
      tl.kill(); //クリーンアップ
    };
  }, [isSitting]);

  const handleClick = () => {
    if (!isSitting) {
      setIsSitting(true);
      gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    }
  };

  const feedWaterButtonClick = () => {
    if (!isSitting) {
    setIsSitting(true);
    setshowVesse(true);
    setShowHearts(true);
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止

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
    }
  };

  const playButtonClick = () => {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current]); // 足のアニメーションも停止

      // 足と体の状態をリセット
    gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current], {
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
        animate(); // 歩行アニメーションを再開
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
    </div>
  );
});

DogAnimation.displayName = 'DogAnimation';

export default DogAnimation;