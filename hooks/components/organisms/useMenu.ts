import React, { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';

import { getPetDetails } from '../../../features/api/getPetDetails';
import { petAction } from '../../../features/api/petActions';
import { getPetInfo } from '../../../features/api/getPetInfo';

import { Anchor, useMenuProps } from '../../../types/index'

export const useMenu = ({ petDetails, setPetDetails, setOffspringCount, onFeed, onPlay, onStroke }:useMenuProps ) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const [openModal, setOpenModal] = useState(false);
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbarの状態
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbarのメッセージ
  
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
        const result = await petAction(petType, petDetails.id, action);
  
        setSnackbarMessage(result.message);
        setSnackbarOpen(true);
  
        if (!result.success) {
          return;
        }
  
        const updatedPetInfo = await getPetDetails();
        setPetDetails(updatedPetInfo);
        setOffspringCount(updatedPetInfo.offspring_count);
  
        if (action === 'feed') {
          onFeed();
        } else if (action === 'play') {
          onPlay(); 
        } else if (action === 'stroke') {
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

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
  return{
    state,
    openModal,
    snackbarOpen,
    snackbarMessage,
    handleCloseSnackbar, 
    toggleDrawer,
    handleOpenModal,
    handleCloseModal,
    handleAction
  }
}