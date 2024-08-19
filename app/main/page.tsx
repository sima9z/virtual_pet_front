"use client";

import React, {useState,useEffect,useRef} from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import CatAnimation from '../components/CatAnimation';

import {getPetInfo} from '../api/getPetInfo'

import BackgroundImage from "../components/atoms/BackgroundImage"
import AnchorTemporaryDrawer from "../components/organisms/menu"

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import PuppyDogAnimation from '../components/PuppyDogAnimation';
import PuppyCatAnimation from '../components/PuppyCatAnimation';

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

interface CatAnimationHandle {
  playButtonClick: () => void; //何も返さない→実行するだけで結果を期待しない
  feedWaterButtonClick: () => void;
}

export default function Main() {
  const [petType, setPetType] = useState<string | null>(null);
  const [offspringCount, setOffspringCount] = useState<number>(0); // 繁殖回数のステート

  const [showBall, setShowBall] = useState(false);
  const [showVesse, setshowVesse] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const dogActionRef = useRef<DogAnimationHandle>(null); //値が変更されてもコンポーネントが再レンダリングされない
  const catActionRef = useRef<CatAnimationHandle>(null); 

  useEffect(() => {
    async function fetchPetInfo() {
      try {
        const petInfo = await getPetInfo();
        console.log('Pet type:', petInfo.petType); 
        setPetType(petInfo.petType);
        setOffspringCount(petInfo.offspringCount); // 繁殖回数をセット
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    }

    fetchPetInfo();
  }, []);

  useEffect(() => {
    if (dogActionRef.current || catActionRef.current) { 
      if (dogActionRef.current) {
        console.log("DogActionAnimation is mounted and ref is set", dogActionRef.current);
      }
      if (catActionRef.current) {
        console.log("CatActionAnimation is mounted and ref is set", catActionRef.current);
      }
    } else {
      console.log("ActionAnimation ref is still null");
    }
  }, [dogActionRef.current, catActionRef.current]);
  
  const handleFeedWaterAction = () => {
    console.log("handleFeedWaterAction called");
    if (dogActionRef.current) {
      console.log("Triggering feedWaterButtonClick for Dog");
      dogActionRef.current.feedWaterButtonClick();
    }
    if (catActionRef.current) {
      console.log("Triggering feedWaterButtonClick for Cat");
      catActionRef.current.feedWaterButtonClick();
    }
  };
  
  const handlePlayAction = () => {
    console.log("handlePlayAction called");
    if (dogActionRef.current) {
      console.log("DogActionRef is set, triggering playButtonClick");
      dogActionRef.current.playButtonClick();
    }
    if (catActionRef.current) {
      console.log("CatActionRef is set, triggering playButtonClick");
      catActionRef.current.playButtonClick();
    }
  };

  useEffect(() => {
    console.log("showVesse changed:", showVesse);
    if (showVesse) {
      console.log("Calling feedWaterButtonClick");
      if (dogActionRef.current) dogActionRef.current.feedWaterButtonClick();
      if (catActionRef.current) catActionRef.current.feedWaterButtonClick();
    }
  }, [showVesse]);

  useEffect(() => {
    console.log("showBall changed:", showBall);
    if (showBall) {
      console.log("Calling playButtonClick");
      if (dogActionRef.current) dogActionRef.current.playButtonClick();
      if (catActionRef.current) catActionRef.current.playButtonClick();
    }
  }, [showBall]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative h-[93vh] overflow-hidden">
          <div className="absolute top-0 right-0 m-4">
            <AnchorTemporaryDrawer onFeed={handleFeedWaterAction} onPlay={handlePlayAction}></AnchorTemporaryDrawer>
          </div>
          {petType === 'dog' && (
            <>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex justify-center items-end">
                  <DogAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={dogActionRef} setShowHearts={setShowHearts} />
                </div>
                {Array.from({ length: offspringCount }).map((_, index) => (
                  <div key={index} className="absolute inset-0 flex justify-center items-end">
                    <PuppyDogAnimation />
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex justify-center items-end h-full w-full">
            {petType === 'cat' && (
              <>
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex justify-center items-end">
                  <CatAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={catActionRef} setShowHearts={setShowHearts} />
                  </div>
                  {Array.from({ length: offspringCount }).map((_, index) => (
                    <div key={index} className="absolute inset-0 flex justify-center items-end">
                      <PuppyCatAnimation key={index} />
                    </div>
                  ))}
                </div>
              </>
            )}
            {petType === 'none' && <p>No pet found</p>}
            <BackgroundImage src='/ばーちゃるぺっと背景.jpg' />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}