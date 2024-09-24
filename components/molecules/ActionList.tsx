import React from 'react';
import { Button, Box, List, ListItem } from '@mui/material';

import LogoutButton from '../atoms/LogoutButton';

import { ActionListProps } from '../../types/index';

export const ActionList: React.FC<ActionListProps> = ({ 
  anchor, 
  onAction, 
  handleOpenModal, 
  physicalRecoveryIntervalId, 
  statDecreaseIntervalId,
  toggleDrawer
}) => {
  return (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        display: 'flex',
        flexDirection: anchor === 'top' || anchor === 'bottom' ? 'row' : 'column',
        flexWrap: 'wrap',
        backgroundColor: "#FFFBE8"
      }}
      role="presentation"
    >
      <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: "50px 0", width: '90%', margin:"0 auto" }}>
        {['ご飯', 'なでる', '遊ぶ'].map((text) => (
          <ListItem key={text} disablePadding sx={{ width: 'auto' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ color: 'white', fontSize: "24px", zIndex: 1000 }}
              onClick={(e) => {
                if (text === 'ご飯') {
                  onAction('feed');
                } else if (text === 'なでる') {
                  onAction('stroke');
                } else if (text === '遊ぶ') {
                  onAction('play');
                }
                toggleDrawer('top', false)(e); // アクション後にメニューを閉じる
              }}
            >
              {text}
            </Button>
          </ListItem>
        ))}
        <Button
          variant="contained"
          color="primary"
          sx={{ color: 'white', fontSize: "24px", zIndex: 1000 }}
          onClick={handleOpenModal}
        >
          ステータス
        </Button>
        <Button
          href="/customize" 
          variant="contained"
          color="primary" 
          sx={{ color: 'white', fontSize: "24px", zIndex: 1000 }} 
         >
          カスタマイズ
         </Button>
        <LogoutButton  
          physicalRecoveryIntervalId={physicalRecoveryIntervalId}
          statDecreaseIntervalId={statDecreaseIntervalId} 
        />
      </List>
    </Box>
  );
};

export default ActionList;