"use client"

import React, {useState,useRef} from 'react';
import { Button, CssBaseline, ThemeProvider, createTheme, Drawer, Box, List, ListItem } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import TestUserIdFetch from '../api/TestUserIdFetch';

import CatWalkAnimation from '../components/CatWalkAnimation';
import DogAnimation from '../components/DogAnimation';

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

interface DogActionAnimationHandle {
  playButtonClick: () => void;
  feedWaterButtonClick: () => void;
}

const TestPage = () => {
  const [showBall, setShowBall] = useState(false);
  const [showVesse, setshowVesse] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const dogActionRef = useRef<DogActionAnimationHandle>(null);

  const handleFeedWaterAction = () => {
    setShowHearts(true);
    if (dogActionRef.current) {
      dogActionRef.current.feedWaterButtonClick();
    }
  };

  const handlePlayButtonClick = () => {
    setShowBall(true);
    setShowHearts(true);
    if (dogActionRef.current) {
      dogActionRef.current.playButtonClick();
    }
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Test User ID Fetch</h1>
        <TestUserIdFetch />
        <Button              
        variant="contained"
        color="secondary"
        sx={{ color: 'white', fontSize: "24px" }}
        onClick={handlePlayButtonClick}>遊ぶ</Button>
        <DogAnimation showVesse={showVesse} setshowVesse={setshowVesse} showBall={showBall} setShowBall={setShowBall} showHearts={showHearts} ref={dogActionRef} setShowHearts={setShowHearts} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default TestPage;