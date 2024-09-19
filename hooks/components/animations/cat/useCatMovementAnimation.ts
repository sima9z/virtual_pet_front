import gsap from 'gsap';

import { useCatMovementAnimationProps } from '../../../../types/index';

export const useCatMovementAnimation = ({
  containerRef,
  isSitting,
  directionRef,
  containerAnim,
  initialSpeed,
}: useCatMovementAnimationProps ) => {
  // ランダムな位置を計算する関数
  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };

  const animate = () => {
    if (!containerRef.current || isSitting) return;

    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current);

    containerAnim.current = gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed,
      ease: 'linear',
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
          gsap.to(containerRef.current, {
            scaleX: directionRef.current,
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
      },
    });
  };

  const UnhappyOrHungryWalkingAnimation = () => {
    if (!containerRef.current || isSitting) return;

    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;
    const direction = directionRef.current;

    const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得

    gsap.killTweensOf(containerRef.current);

    containerAnim.current = gsap.to(containerRef.current, {
      x: direction * randomStartPosition, // ランダムな初期位置から開始
      duration: initialSpeed*5,
      ease: 'linear',
      onComplete: () => {
        directionRef.current *= -1; // 方向を反転
          gsap.to(containerRef.current, {
            scaleX: directionRef.current,
            duration: initialSpeed*7, // 反転時のdurationを固定
            onComplete: UnhappyOrHungryWalkingAnimation // 次のアニメーションを呼び出す
          });
      },
    });
  };

  return {
    animate,
    UnhappyOrHungryWalkingAnimation
  }
}