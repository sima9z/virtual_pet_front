"use client";

import React, { useEffect, useState } from 'react';
import NotPwaHeader from './organisms/notPwaHeader';

const ClientSideComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPwa, setIsPwa] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isStandaloneApple = ('standalone' in window.navigator) && (window.navigator.standalone);
      setIsPwa(isStandalone || Boolean(isStandaloneApple));
    }
  }, []);

  return (
    <>
      {!isPwa && <NotPwaHeader />}
      {children}
    </>
  );
};

export default ClientSideComponent;