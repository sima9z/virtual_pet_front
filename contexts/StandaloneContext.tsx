import React, { createContext, useContext, useState, useEffect } from 'react';

const StandaloneContext = createContext(false);

export const StandaloneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const checkIsPWA = () => {
      return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    };

    setIsStandalone(checkIsPWA());

    const handler = () => setIsStandalone(checkIsPWA());

    window.addEventListener('resize', handler);
    window.addEventListener('orientationchange', handler);

    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('orientationchange', handler);
    };
  }, []);

  return (
    <StandaloneContext.Provider value={isStandalone}>
      {children}
    </StandaloneContext.Provider>
  );
};

export const useStandalone = () => useContext(StandaloneContext);