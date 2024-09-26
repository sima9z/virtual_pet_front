"use client";

import React, { useEffect, useState } from 'react';
import usePwaStatus from '../../hooks/app/usePwaStatus';
import NotPwaHeader from './NotPwaHeader';

const ClientSideComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPwa = usePwaStatus();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // 画面の向きを横向きに固定する処理
    const orientation = screen.orientation as any;
    if (orientation && orientation.lock) {
      orientation.lock('landscape').catch((error: unknown) => {
        console.error('Orientation lock failed: ', error);
      });
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {!isPwa && <NotPwaHeader />}
      {children}
    </>
  );
};

export default ClientSideComponent;