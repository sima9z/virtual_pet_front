"use client";

import React, {useState,useEffect,useRef} from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import CatWalkAnimation from '../components/CatWalkAnimation';

import {getPetInfo} from '../api/getPetInfo'

import BackgroundImage from "../components/atoms/BackgroundImage"
import AnchorTemporaryDrawer from "../components/organisms/menu"

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

const theme = createTheme({
  palette: {
    primary: {
      main: '#E8AFAF',
    },
    secondary: {
      main: '#f8bbd0',
    },
  },
});

interface DogAnimationHandle {
  playButtonClick: () => void; //何も返さない→実行するだけで結果を期待しない
  feedWaterButtonClick: () => void;
}

export default function Main() {
  const [petType, setPetType] = useState<string | null>(null);

  const [showBall, setShowBall] = useState(false);
  const [showVesse, setshowVesse] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const dogActionRef = useRef<DogAnimationHandle>(null); //値が変更されてもコンポーネントが再レンダリングされない

  useEffect(() => {
    async function fetchPetInfo() {
      try {
        const petInfo = await getPetInfo();
        console.log('Pet type:', petInfo.petType); 
        setPetType(petInfo.petType);
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    }

    fetchPetInfo();
  }, []);

  useEffect(() => {
    if (dogActionRef.current) { //保持している値にアクセス
      console.log("DogActionAnimation is mounted and ref is set", dogActionRef.current);
    } else {
      console.log("DogActionAnimation ref is still null");
    }
  }, [dogActionRef.current]);

  const handleFeedWaterAction = () => {
    if (dogActionRef.current) {
      dogActionRef.current.feedWaterButtonClick();
    }
  };

  const handlePlayAction = () => {
    console.log("handlePlayAction called");
    if (dogActionRef.current) {
      console.log("dogActionRef is set, triggering playButtonClick");
      dogActionRef.current.playButtonClick();
    } else {
      console.log("dogActionRef is null");
    }
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative h-[93vh] overflow-hidden">
          <div className="absolute top-0 right-0 m-4">
            <AnchorTemporaryDrawer onFeed={handleFeedWaterAction} onPlay={handlePlayAction}></AnchorTemporaryDrawer>
          </div>
          <div className="flex justify-center items-end h-full">
            {petType === 'dog' && <DogAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={dogActionRef} setShowHearts={setShowHearts}  />}
            {petType === 'cat' && <CatWalkAnimation />}
            {petType === 'none' && <p>No pet found</p>}
            <BackgroundImage src='/ばーちゃるぺっと背景.jpg' />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}