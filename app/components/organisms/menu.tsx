"use client";
import React, {useState,useEffect} from 'react';

import { Button, CssBaseline, ThemeProvider, createTheme, Drawer, Box, List, ListItem } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import LogoutButton from '../atoms/LogoutButton';
import PetStatusModal from './petStatusModal';
import { getPetDetails } from '../../api/getPetDetails';
import { petAction } from '../../api/petActions';
import { getPetInfo } from '../../api/getPetInfo';

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

interface AnchorTemporaryDrawerProps {
  onFeed: () => void;
  onStroke: () => void;
  onPlay: () => void;
  setOffspringCount: React.Dispatch<React.SetStateAction<number>>;
  physicalRecoveryIntervalId: number | NodeJS.Timeout | null; 
  statDecreaseIntervalId: number | NodeJS.Timeout | null; 
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

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

export default function AnchorTemporaryDrawer({ petDetails, setPetDetails, onFeed, onStroke, onPlay, setOffspringCount, physicalRecoveryIntervalId, statDecreaseIntervalId }: AnchorTemporaryDrawerProps & { 
  petDetails: PetDetails | null; 
  setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>;
  setOffspringCount: React.Dispatch<React.SetStateAction<number>>; 
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openModal, setOpenModal] = useState(false);
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { petType } = await getPetInfo();
        setPetType(petType as 'dog' | 'cat');
        
        const petDetails = await getPetDetails();
        console.log('Pet details:', petDetails);
        setPetDetails(petDetails);
      } catch (error) {
        console.error('Error fetching pet data:', error);
      }
    }

    fetchData();
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const handleOpenModal = async () => {
      try {
        const data = await getPetDetails();
        console.log('Pet details:', data);
        setPetDetails(data);
        setOpenModal(true);
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    };
  
    const handleCloseModal = () => setOpenModal(false);

    const handleAction = async (action: 'feed' | 'stroke' | 'play') => {
      console.log(`handleAction called with action: ${action}`);

      if (petType && petDetails) {
        try {
          await petAction(petType, petDetails.id, action);

          // アクションが成功した後に最新のペット情報を取得して状態を更新
          const updatedPetInfo = await getPetDetails();
          setPetDetails(updatedPetInfo);  // 親コンポーネントのstateを更新
          setOffspringCount(updatedPetInfo.offspring_count); // 繁殖回数も更新
          if(action === 'feed'){
            onFeed();
          } else if (action === 'play') {
            console.log("Calling onPlay");
            onPlay(); 
          } else if (action === 'stroke') {
            console.log("Calling onStroke")
            onStroke();
          }

        } catch (error) {
          console.error(`Error performing ${action} action:`, error);
          alert(`Failed to perform ${action} action for ${petType}`);
        }
      } else {
        if (!petType) {
          alert('Pet type not determined');
        }
        if (!petDetails) {
          alert('Pet information not available');
        }
      }
    };

    const list = (anchor: Anchor) => (
      <Box
        sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
          display: 'flex',
          flexDirection: anchor === 'top' || anchor === 'bottom' ? 'row' : 'column',
          flexWrap: 'wrap',  // 必要に応じて項目が画面に収まるように折り返し
          backgroundColor: "#FFFBE8"
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: "50px 0", width: '90%', margin:"0 auto" }}>
          {['ご飯', 'なでる', '遊ぶ'].map((text) => (
            <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: 'white', fontSize: "24px", zIndex: 1000  }}
                onClick={() => {
                  if (text === 'ご飯') {
                    handleAction('feed');
                  } else if (text === 'なでる') {
                    handleAction('stroke');
                  } else if (text === '遊ぶ') {
                    handleAction('play');
                  }
                }}
              >
                {text}
              </Button>
            </ListItem>
          ))}
          <Button
            variant="contained"
            color="primary"
            sx={{ color: 'white', fontSize: "24px", zIndex: 1000  }}
            onClick={handleOpenModal}>
              ステータス
          </Button>
          <LogoutButton  
            physicalRecoveryIntervalId={physicalRecoveryIntervalId}
            statDecreaseIntervalId={statDecreaseIntervalId} />
        </List>
      </Box>
    );

  return(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <React.Fragment>
              <Button
                onClick={toggleDrawer("top", true)}
                variant="contained"
                color="secondary"
                sx={{ color: 'white', marginTop:"7vh", fontWeight:"bold", fontSize:"24px", zIndex: 1000  }}>
                  menu
              </Button>
              <Drawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                sx={{ zIndex: 1000 }}
              >
                {list("top")}
              </Drawer>
              <PetStatusModal
                open={openModal}
                onClose={handleCloseModal}
                petDetails={petDetails}
              />
            </React.Fragment>
      </ThemeProvider>
    </CacheProvider>
  )

}
