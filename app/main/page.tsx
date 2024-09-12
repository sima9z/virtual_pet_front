"use client";

import React, {useState,useEffect,useRef} from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import CatAnimation from '../components/CatAnimation';

import {getPetInfo} from '../api/getPetInfo'
import {petPhysicalRecover} from '../api/petPhysicalRecover'

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
  strokeButtonClick: () => void;
  feedButtonClick: () => void;
}

interface CatAnimationHandle {
  playButtonClick: () => void; //何も返さない→実行するだけで結果を期待しない
  strokeButtonClick: () => void;
  feedButtonClick: () => void;
}

interface PetDetails {
  id: number;
  name: string;
  breed: string;
  level: number;
  experience: number;
  physical: number;
  satiety: number;
  happiness: number;
  states: number;
  offspring_count: number;
}

export default function Main() {
  const [petType, setPetType] = useState<string | null>(null);
  const [petDetails, setPetDetails] = useState<PetDetails | null>(null);
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
        setPetDetails(petDetails);
        setOffspringCount(petInfo.offspringCount); // 繁殖回数をセット
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    }

    fetchPetInfo();
  }, []);

  // 新しいオフスプリングが追加されたら再レンダリングをトリガー
  useEffect(() => {
    // オフスプリング数の変更を監視してコンポーネントを再レンダリング
    console.log(`offspringCount changed: ${offspringCount}`);
  }, [offspringCount]);

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
  
  const handleFeedAction = () => {
    console.log("handleFeedAction called");
    if (dogActionRef.current) {
      console.log("Triggering feedButtonClick for Dog");
      dogActionRef.current.feedButtonClick();
    }
    if (catActionRef.current) {
      console.log("Triggering feedButtonClick for Cat");
      catActionRef.current.feedButtonClick();
    }
  };

  const handleStrokeAction = () => {
    console.log("handleStrokeAction called");
    if (dogActionRef.current) {
      console.log("Triggering StrokeButtonClick for Dog");
      dogActionRef.current.strokeButtonClick();
    }
    if (catActionRef.current) {
      console.log("Triggering StrokeButtonClick for Cat");
      catActionRef.current.strokeButtonClick();
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
      console.log("Calling feedButtonClick");
      if (dogActionRef.current) dogActionRef.current.feedButtonClick();
      if (catActionRef.current) catActionRef.current.feedButtonClick();
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

  useEffect(() => {
    if (petType && petDetails) { // ログイン後にリクエストを送信
      const intervalId = setInterval(() => {
        petPhysicalRecover();
      }, 60000);
  
      return () => clearInterval(intervalId); // クリーンアップ
    }
  }, [petType, petDetails]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative h-[93vh] overflow-hidden">
          <div className="absolute top-0 right-0 m-4">
            <AnchorTemporaryDrawer 
            onFeed={handleFeedAction}
            onStroke={handleStrokeAction} 
            onPlay={handlePlayAction}
            petDetails={petDetails} 
            setPetDetails={setPetDetails}
            setOffspringCount={setOffspringCount}
            >
            </AnchorTemporaryDrawer>
          </div>
          {petType === 'dog' && (
            <>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex justify-center items-end">
                  <DogAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={dogActionRef} setShowHearts={setShowHearts} />
                </div>
                {Array.from({ length: offspringCount }).map((_, index) => (
                  <div key={index} className="absolute inset-0 flex justify-center items-end" style={{ bottom: 'calc(0vh - 80px)' }}>
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
                  <div className="absolute inset-0 flex justify-center items-end" style={{ bottom: 'calc(0vh - 40px)' }}>
                    <CatAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={catActionRef} setShowHearts={setShowHearts} />
                  </div>
                  {Array.from({ length: offspringCount }).map((_, index) => (
                    <div key={index} className="absolute inset-0 flex justify-center items-end" style={{ bottom: 'calc(0vh - 80px)' }}>
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