"use client";

import React, { useEffect, useState } from 'react';
import usePwaStatus from '../../hooks/app/usePwaStatus';
import NotPwaHeader from './NotPwaHeader';

import { useRouter } from 'next/router';
import { analytics } from '../../lib/firebaseConfig'; 
import { logEvent } from "firebase/analytics";

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

    // ページビューのログを記録する関数
    const logPageView = (url: string) => {
      if (analytics) {
        logEvent(analytics, 'page_view', { page_path: url });
      }
    };

    // 初回ロード時のページビューを記録
    if (isClient && typeof window !== 'undefined') {
      logPageView(window.location.pathname);
    }

    // ページ遷移時のイベントリスナーを設定
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        logPageView(window.location.pathname);
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    // クリーンアップ: イベントリスナーの解除
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isClient]);

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