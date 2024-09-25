import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

import { PetStatusModalProps } from '../../types/index'

const PetStatusModal: React.FC<PetStatusModalProps> = ({ open, onClose, petDetails }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius:'10px' }}>
        <Typography variant="h5" component="h2" sx={{ textAlign:'center', marginBottom:'20px' }}>
          ペットのステータス
        </Typography>
        {petDetails && (
          <Box mt={2}>
            <Typography variant="h6">名前 : {petDetails.name}</Typography>
            <Typography variant="h6">種類 : {petDetails.breed}</Typography>
            <Typography variant="h6">レベル : {petDetails.level}</Typography>
            <Typography variant="h6">経験値 : {petDetails.experience}</Typography>
            <Typography variant="h6">体力 : {petDetails.physical}</Typography>
            <Typography variant="h6">満腹度 : {petDetails.satiety}</Typography>
            <Typography variant="h6">幸福度 : {petDetails.happiness}</Typography>
            <Typography variant="h6">
              ステータス : 
              {petDetails.states === 0 && " 元気"}
              {petDetails.states === 1 && " 空腹"}
              {petDetails.states === 2 && " 不機嫌"}
              {petDetails.states === 3 && " 空腹・不機嫌"}
            </Typography>
            <Typography variant="h6" sx={{marginBottom:'20px'}}>子供の数 : {petDetails.offspring_count}</Typography>
          </Box>
        )}
        <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2, display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          閉じる
        </Button>
      </Box>
    </Modal>
  );
}

export default PetStatusModal;