"use client";

import React from 'react';

// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../../components/animations/DogAnimation';
import CatAnimation from '../../components/animations/CatAnimation';
import PuppyDogAnimation from '../../components/animations/PuppyDogAnimation';
import PuppyCatAnimation from '../../components/animations/PuppyCatAnimation';

import BackgroundImage from "../../components/atoms/BackgroundImage"
import AnchorTemporaryDrawer from "../../components/organisms/menu"

import usePetInfo from '../../hooks/usePetInfo';
import usePetAnimation from '../../hooks/usePetAnimation';
import usePetIntervals from '../../hooks/usePetIntervals';

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

export default function Main() {
  const { petType, petDetails, setPetDetails, offspringCount, setOffspringCount } = usePetInfo();
  const {
    showBall,
    setShowBall,
    showVesse,
    setShowVesse,
    showHearts,
    setShowHearts,
    showNotes,
    setShowNotes,
    dogActionRef,
    catActionRef,
    handleFeedAction,
    handleStrokeAction,
    handlePlayAction,
  } = usePetAnimation();

  const { physicalRecoveryIntervalId, statDecreaseIntervalId } = usePetIntervals(petType, petDetails, setPetDetails);

  return (
    <ThemeWrapper theme={mainTheme}>
      <div className="relative h-[93vh] overflow-hidden">
        <div className="absolute top-0 right-0 m-4">
          <AnchorTemporaryDrawer 
            onFeed={handleFeedAction}
            onStroke={handleStrokeAction} 
            onPlay={handlePlayAction}
            petDetails={petDetails} 
            setPetDetails={setPetDetails}
            setOffspringCount={setOffspringCount}
            physicalRecoveryIntervalId={physicalRecoveryIntervalId}
            statDecreaseIntervalId={statDecreaseIntervalId}
          >
          </AnchorTemporaryDrawer>
        </div>
        {petType === 'dog' && (
          <>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex justify-center items-end">
              {petDetails ? (
                <DogAnimation showVesse={showVesse} setShowVesse={setShowVesse} showNotes={showNotes} setShowNotes={setShowNotes} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={dogActionRef} setShowHearts={setShowHearts} petDetails={petDetails || { states: 0 }} />
              ) : (
                <div>Loading...</div> // データがロードされるまで表示される
              )}
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
                  <CatAnimation showVesse={showVesse} setShowVesse={setShowVesse} showNotes={showNotes} setShowNotes={setShowNotes} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={catActionRef} setShowHearts={setShowHearts} petDetails={petDetails || { states: 0 }}/>
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
    </ThemeWrapper>
  );
}