import gsap from 'gsap';

import { usePuppyCatMovementAnimationProps } from '../../../../types/index'

export const usePuppyCatMovementAnimation = ({
  containerRef,
  directionRef,
  containerAnim,
  initialSpeed
}: usePuppyCatMovementAnimationProps ) => {
   // ランダムな位置を計算する関数
   const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    return Math.random() * -(viewportWidth - viewportWidth / 2);
  };
 
  const animate = () => {
    if (!containerRef.current) return;
  
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
        const currentScale = parseFloat(gsap.getProperty(containerRef.current, "scaleX").toString()); // 現在のスケールを数値に変換
          gsap.to(containerRef.current, {
            scaleX: directionRef.current * Math.abs(currentScale), // 現在のスケールに方向を掛けて反転
            duration: 0.5, // 反転時のdurationを固定
            onComplete: animate // 次のアニメーションを呼び出す
          });
      },
    });
  };

  return { animate }
}