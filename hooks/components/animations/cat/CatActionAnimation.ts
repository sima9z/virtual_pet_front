import gsap from 'gsap';
import { CatActionAnimationProps } from '../../../../types/index';

export const CatActionAnimation = ({
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
}: CatActionAnimationProps ) => {
  
  const feedButtonClick = () => {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current]);

    setIsSitting(true);
    setShowVesse(true);
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
        setShowVesse(false);
        setShowHearts(false);
        setIsSitting(false); // isSitting を false に設定して立ち上がる
      }
    )}
  };

  const strokeButtonClick = () => {
    gsap.killTweensOf(containerRef.current); // 移動アニメーションを停止
    gsap.killTweensOf([legBackLeftRef.current, legBackRightRef.current, legFrontLeftRef.current, legFrontRightRef.current, faceRef.current, bodyRef.current, earRef.current, tailRef.current, beardRightRef.current,beardLeftRef.current]);

    setIsSitting(true);
    setShowNotes(true);
    
    const noteTl = gsap.timeline();

    noteTl.to(
      yellowNoteRef.current,
      {
        rotation: 30,
        transformOrigin: 'center',
        duration: 1.0,
        ease: 'power1.out',
        repeat: -1,
        yoyo: true,
      }
    );

    noteTl.to(
      blueNoteRef.current,
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
        noteTl.kill();
        setShowNotes(false);
        setIsSitting(false); // isSitting を false に設定して立ち上がる
      }
    )
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

        // アニメーションの状態に応じて新しいアニメーションを開始
        if (currentAnimation === 'unhappyOrHungry') {
          console.log('unhappyOrHungry state is true');
          startUnhappyOrHungryWalkingAnimation();
        } else {
          console.log('normal state is true');
          startWalkingAnimation();
        }
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
