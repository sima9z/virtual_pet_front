import { useRef, useState } from 'react';
import { AnimationHandle } from '../types';

const usePetAnimation = () => {
  const [showBall, setShowBall] = useState(false);
  const [showVesse, setShowVesse] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const dogActionRef = useRef<AnimationHandle>(null);
  const catActionRef = useRef<AnimationHandle>(null);

  const handleFeedAction = () => {
    if (dogActionRef.current) dogActionRef.current.feedButtonClick();
    if (catActionRef.current) catActionRef.current.feedButtonClick();
  };

  const handleStrokeAction = () => {
    if (dogActionRef.current) dogActionRef.current.strokeButtonClick();
    if (catActionRef.current) catActionRef.current.strokeButtonClick();
  };

  const handlePlayAction = () => {
    if (dogActionRef.current) dogActionRef.current.playButtonClick();
    if (catActionRef.current) catActionRef.current.playButtonClick();
  };

  return {
    showBall,
    setShowBall,
    showVesse,
    setShowVesse,
    showHearts,
    setShowHearts,
    showNotes,
    setShowNotes,
    dogActionRef,
    catActionRef,
    handleFeedAction,
    handleStrokeAction,
    handlePlayAction,
  };
};

export default usePetAnimation;