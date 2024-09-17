import gsap from 'gsap';
import { DogActionAnimationProps } from '../../../../types/index';

export const useDogActionAnimation = ({    
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
  startUnhappyOrHungryWalkingAnimation 
} : DogActionAnimationProps ) => {
    
  const feedButtonClick = () => {
    if (!isSitting) {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current]);

    // 足と体の状態をリセット
    gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current], {
      rotation: 0,
      x: 0,
      y: 0,
    });
    gsap.set(containerRef.current, {
      scaleX: directionRef.current ?? 1, // 現在の移動方向に合わせたスケールに設定
    });
    
    setShowVesse(true);
    setShowHearts(true);
    setIsSitting(true);
      
    console.log("heartTl started")

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

  const strokeButtonClick = () => {
    if (!isSitting) {
      gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
      gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current]);

      // 足と体の状態をリセット
      gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current], {
        rotation: 0,
        x: 0,
        y: 0,
      });
      gsap.set(containerRef.current, {
        scaleX: directionRef.current ?? 1, // 現在の移動方向に合わせたスケールに設定
      });

      // リセットはせずに音符のアニメーションを開始
      setShowNotes(true); // 音符を表示

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

      // 3秒後に音符を消して歩行アニメーションを再開
      gsap.delayedCall(3, () => {
        setShowNotes(false); // 音符を非表示
        if (currentAnimation === 'unhappyOrHungry') {
          startUnhappyOrHungryWalkingAnimation();
        } else {
          startWalkingAnimation();
        } // 歩行アニメーションを再開
      });
    }
  };

  const playButtonClick = () => {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current]); // 足のアニメーションも停止

      // 足と体の状態をリセット
    gsap.set([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, tailRef.current,headFaceRef.current, headEyeRef.current, bodyRef.current, earRef.current, earRightRef.current, jawRef.current], {
      rotation: 0,
      x: 0,
      y: 0,
    });
    gsap.set(containerRef.current, {
      scaleX: directionRef.current ?? 1, // 現在の移動方向に合わせたスケールに設定
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
        if (currentAnimation === 'unhappyOrHungry') {
          startUnhappyOrHungryWalkingAnimation();
        } else {
          startWalkingAnimation();
        }; // 歩行アニメーションを再開
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

  return {
    feedButtonClick,
    strokeButtonClick,
    playButtonClick
  }
}