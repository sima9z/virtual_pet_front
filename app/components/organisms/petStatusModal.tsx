
import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

interface PetStatusModalProps {
  open: boolean;
  onClose: () => void;
  petInfo: {
    name:String;
    breed: String;
    age:number;
    is_adult:boolean;
    level: number;
    experience: number;
    physical: number;
    satiety: number;
    happiness: number;
    states:number;
  } | null;
}

const PetStatusModal: React.FC<PetStatusModalProps> = ({ open, onClose, petInfo }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2">
          ペットのステータス
        </Typography>
        {petInfo && (
          <Box mt={2}>
            <Typography>名前: {petInfo.name}</Typography>
            <Typography>種類: {petInfo.breed}</Typography>
            <Typography>年齢: {petInfo.age}</Typography>
            <Typography>大人: {petInfo.is_adult ? 'Yes' : 'No'}</Typography>
            <Typography>レベル: {petInfo.level}</Typography>
            <Typography>経験値: {petInfo.experience}</Typography>
            <Typography>体力: {petInfo.physical}</Typography>
            <Typography>満腹度: {petInfo.satiety}</Typography>
            <Typography>幸福度: {petInfo.happiness}</Typography>
            <Typography>ステータス: {petInfo.states}</Typography>
          </Box>
        )}
        <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          閉じる
        </Button>
      </Box>
    </Modal>
  );
}

export default PetStatusModal;