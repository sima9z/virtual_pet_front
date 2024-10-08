"use client";

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../../components/animations/dog/DogAnimation';
import CatAnimation from '../../components/animations/cat/CatAnimation';
import PuppyDogAnimation from '../../components/animations/puppyDog/PuppyDogAnimation';
import PuppyCatAnimation from '../../components/animations/puppyCat/PuppyCatAnimation';

import BackgroundImage from "../../components/atoms/BackgroundImage"
import Menu from "../../components/organisms/Menu"
import HowToPlayModal from '../../components/organisms/HowToPlayModal'
import { PhysicalStatBar, SatietyStatBar, HappinessStatBar } from '../../components/molecules/StatusBar'

import usePetInfo from '../../hooks/app/main/usePetInfo';
import usePetAnimation from '../../hooks/app/main/usePetAnimation';
import usePetIntervals from '../../hooks/app/main/usePetIntervals';
import { useSessionCheck } from '../../hooks/useSessionCheck';

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';
import { CustomSnackbar } from '../../styles/SnackbarStyles'; 

export default function Main() {
  const [ openHowToPlayModal, setOpenHowToPlayModal ] = useState(false);
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

  const { physicalRecoveryIntervalId, statDecreaseIntervalId } = usePetIntervals({ petType, petDetails, setPetDetails });

  const { fetchWithSessionCheck, open, setOpen } = useSessionCheck();

  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;

  const handleOpenHowToPlayModal = () => setOpenHowToPlayModal(true);
  const handleCloseHowToPlayModal = () => setOpenHowToPlayModal(false);

  return (
    <ThemeWrapper theme={mainTheme}>
      <div className="relative h-[93vh] overflow-hidden">

        <div className="absolute top-0 right-0 m-4">
          <Menu
            onFeed={handleFeedAction}
            onStroke={handleStrokeAction} 
            onPlay={handlePlayAction}
            petDetails={petDetails} 
            setPetDetails={setPetDetails}
            setOffspringCount={setOffspringCount}
            physicalRecoveryIntervalId={physicalRecoveryIntervalId}
            statDecreaseIntervalId={statDecreaseIntervalId}
          >
          </Menu>
        </div>

        <div className="absolute top-[120px] right-0 m-4">
          <Button
            variant="contained"
            color="primary"
            sx={{ color: 'white', fontSize: "24px", zIndex: 1000 }}
            onClick={handleOpenHowToPlayModal}
          >
            遊び方
          </Button>
        </div>

        <HowToPlayModal
          open={openHowToPlayModal}
          onClose={handleCloseHowToPlayModal}
        />
        
        {petDetails && (
          <Box sx={{ position: 'absolute', top: '70px', left: '30px', width: '300px', zIndex:"1000", backgroundColor: '#fff', padding:'20px', borderRadius:"10px" }}>
            {/* 体力、満腹度、幸福度のステータスバー */}
            <PhysicalStatBar label="体力" value={petDetails.physical} max={50} />
            <SatietyStatBar label="満腹度" value={petDetails.satiety} max={100} />
            <HappinessStatBar label="幸福度" value={petDetails.happiness} max={100} />
          </Box>
        )}

        <CustomSnackbar
          open={open}
          onClose={() => setOpen(false)}
          message="セッションが切れました。トップページに移動します。"
          autoHideDuration={10000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />

        {petType === 'dog' && (
          <>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex justify-center items-end">
              {petDetails ? (
                <DogAnimation 
                  showVesse={showVesse} 
                  setShowVesse={setShowVesse} 
                  showNotes={showNotes} 
                  setShowNotes={setShowNotes} 
                  showBall={showBall} 
                  setShowBall={setShowBall} 
                  showHearts={showHearts} 
                  ref={dogActionRef} 
                  setShowHearts={setShowHearts} 
                  petDetails={petDetails|| { 
                    id: 0,
                    name: '',
                    breed: '',
                    level: 0,
                    species:'犬',
                    experience: 0,
                    experience_to_next_level: 0,
                    physical: 0,
                    satiety: 0,
                    happiness: 0,
                    states: 0,
                    offspring_count: 0
                  }} />
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
                  <CatAnimation 
                    showVesse={showVesse} 
                    setShowVesse={setShowVesse} 
                    showNotes={showNotes} 
                    setShowNotes={setShowNotes} 
                    showBall={showBall} 
                    setShowBall={setShowBall} 
                    showHearts={showHearts} 
                    ref={catActionRef} 
                    setShowHearts={setShowHearts} 
                    petDetails={
                      petDetails || { 
                        id: 0,
                        name: '',
                        breed: '',
                        level: 0,
                        species:'猫',
                        experience: 0,
                        experience_to_next_level: 0,
                        physical: 0,
                        satiety: 0,
                        happiness: 0,
                        states: 0,
                        offspring_count: 0
                      }
                    }/>
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

          <BackgroundImage src={`https://${bucketName}.s3.${region}.amazonaws.com/ばーちゃるぺっと背景.jpg`} />
        </div>
      </div>
    </ThemeWrapper>
  );
}