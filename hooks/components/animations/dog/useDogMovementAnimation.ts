import gsap from 'gsap';

import { useDogMovementAnimationProps } from '../../../../types/index'

export const useDogMovementAnimation = ({
  containerRef,
  isSitting,
  directionRef,
  initialSpeed
}: useDogMovementAnimationProps ) => {
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

  return {
    animate,
    UnhappyOrHungryWalkinganimate
  }
};
 