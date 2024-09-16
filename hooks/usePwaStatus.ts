import { useState, useEffect } from 'react';

const usePwaStatus = () => {
  const [isPwa, setIsPwa] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isStandaloneApple = ('standalone' in window.navigator) && (window.navigator.standalone);
      setIsPwa(isStandalone || Boolean(isStandaloneApple));
    }
  }, []);

  return isPwa;
};

export default usePwaStatus;