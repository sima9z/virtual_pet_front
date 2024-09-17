"use client";
import React from 'react';
import { Button, Drawer } from '@mui/material';

import PetStatusModal from './petStatusModal';
import { ActionList } from '../molecules/ActionList';

import { MenuProps, PetDetails } from '../../types/index'

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

import { useMenu } from '../../hooks/components/organisms/useMenu'

export default function Menu({ 
  petDetails, 
  setPetDetails, 
  onFeed, 
  onStroke, 
  onPlay, 
  setOffspringCount, 
  physicalRecoveryIntervalId, 
  statDecreaseIntervalId
} : MenuProps) {

  const {
    state,
    openModal,
    toggleDrawer,
    handleOpenModal,
    handleCloseModal,
    handleAction
  } = useMenu({petDetails, setPetDetails, setOffspringCount, onFeed, onPlay, onStroke }) ;

  return (
    <ThemeWrapper theme={mainTheme}>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("top", true)}
          variant="contained"
          color="secondary"
          sx={{ color: 'white', marginTop:"7vh", fontWeight:"bold", fontSize:"24px", zIndex: 1000 }}>
          menu
        </Button>
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{ zIndex: 1000 }}
        >
          <ActionList 
            anchor="top"
            onAction={handleAction}
            handleOpenModal={handleOpenModal}
            physicalRecoveryIntervalId={physicalRecoveryIntervalId}
            statDecreaseIntervalId={statDecreaseIntervalId}
          />
        </Drawer>
        <PetStatusModal
          open={openModal}
          onClose={handleCloseModal}
          petDetails={petDetails}
        />
      </React.Fragment>
    </ThemeWrapper>
  )
}