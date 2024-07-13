"use client";

import React, { useEffect, useState } from 'react';
import usePwaStatus from './hooks/usePwaStatus';
import NotPwaHeader from './organisms/notPwaHeader';

const ClientSideComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPwa = usePwaStatus();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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