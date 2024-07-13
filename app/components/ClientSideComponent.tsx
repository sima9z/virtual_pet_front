"use client";

import React from 'react';
import usePwaStatus from './hooks/usePwaStatus';
import NotPwaHeader from './organisms/notPwaHeader';

const ClientSideComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPwa = usePwaStatus();

  return (
    <>
      {!isPwa && <NotPwaHeader />}
      {children}
    </>
  );
};

export default ClientSideComponent;