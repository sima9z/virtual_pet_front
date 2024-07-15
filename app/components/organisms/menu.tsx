"use client";
import React from 'react';

import { Button, CssBaseline, ThemeProvider, createTheme, Drawer, Box, List, Divider, ListItem } from '@mui/material';
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

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: "50px 0", width: '80%', margin:"0 auto" }}>
          {['ご飯', 'お水', '散歩', 'お風呂', '遊ぶ'].map((text) => (
            <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
              <Button variant="contained" color="secondary" sx={{ color: 'white', fontSize: "24px" }}>
                {text}
              </Button>
            </ListItem>
          ))}
          <Button variant="contained" color="primary" sx={{ color: 'white', fontSize: "24px" }}>
            ステータス
          </Button>
        </List>
      </Box>
    );

  return(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <React.Fragment>
              <Button onClick={toggleDrawer("top", true)} variant="contained" color="secondary" sx={{ color: 'white', marginTop:"7vh", fontWeight:"bold", fontSize:"24px" }}>menu</Button>
              <Drawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
              >
                {list("top")}
              </Drawer>
            </React.Fragment>
      </ThemeProvider>
    </CacheProvider>
  )

}
