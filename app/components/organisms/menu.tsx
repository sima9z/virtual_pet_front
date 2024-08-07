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

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface PetInfo {
  id: number;
  name: string;
  breed: string;
  age: number;
  is_adult: boolean;
  level: number;
  experience: number;
  physical: number;
  satiety: number;
  happiness: number;
  states: number;
}

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openModal, setOpenModal] = useState(false);
  const [petInfo, setPetInfo] = useState<PetInfo | null>(null);
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { petType } = await getPetInfo();
        setPetType(petType as 'dog' | 'cat');
        
        const petDetails = await getPetDetails();
        console.log('Pet details:', petDetails);
        setPetInfo(petDetails);
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
        setPetInfo(data);
        setOpenModal(true);
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    };
  
    const handleCloseModal = () => setOpenModal(false);

    const handleAction = async (action: 'feed' | 'water' | 'walk') => {
      if (petType && petInfo) {
        try {
          await petAction(petType, petInfo.id, action);
          alert(`${action} action performed successfully for ${petType}`);
        } catch (error) {
          console.error(`Error performing ${action} action:`, error);
          alert(`Failed to perform ${action} action for ${petType}`);
        }
      } else {
        if (!petType) {
          alert('Pet type not determined');
        }
        if (!petInfo) {
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
          {['ご飯', 'お水', '散歩'].map((text) => (
            <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
              <Button
              variant="contained"
              color="secondary"
              sx={{ color: 'white', fontSize: "24px" }}
              onClick={() => handleAction(text === 'ご飯' ? 'feed' : text === 'お水' ? 'water' : 'walk')}
              >
                {text}
              </Button>
            </ListItem>
          ))}
          <Button
          variant="contained"
          color="primary"
          sx={{ color: 'white', fontSize: "24px" }}
          onClick={handleOpenModal}>
            ステータス
          </Button>
          <LogoutButton />
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
              sx={{ color: 'white', marginTop:"7vh", fontWeight:"bold", fontSize:"24px" }}>
                menu
              </Button>
              <Drawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
              >
                {list("top")}
              </Drawer>
              <PetStatusModal
                open={openModal}
                onClose={handleCloseModal}
                petInfo={petInfo}
              />
            </React.Fragment>
      </ThemeProvider>
    </CacheProvider>
  )

}
