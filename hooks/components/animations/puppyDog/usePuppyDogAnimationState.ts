import { useEffect } from 'react';
import gsap from 'gsap';

import { usePuppyDogAnimationStateProps } from '../../../../types/index';

export const usePuppyDogAnimationState = ({
  containerRef,
  getRandomPosition,
  startWalkingAnimation,
  isSitting,
}: usePuppyDogAnimationStateProps ) => {
  useEffect(() => {
    if (containerRef.current) {
      const randomStartPosition = getRandomPosition(); // ランダムな初期位置を取得
      gsap.set(containerRef.current, { x: randomStartPosition }); // 初期位置を設定
    }
  
    startWalkingAnimation(); // 歩行アニメーションを開始
  }, []);
  
  useEffect(() => {
    startWalkingAnimation(); // 歩行アニメーションを開始
  }, [isSitting]);
  
}
