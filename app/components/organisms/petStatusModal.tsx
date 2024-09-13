
import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

interface PetStatusModalProps {
  open: boolean;
  onClose: () => void;
  petDetails: {
    name:String;
    breed: String;
    level: number;
    experience: number;
    physical: number;
    satiety: number;
    happiness: number;
    states:number;
    offspring_count: number;
  } | null;
}

const PetStatusModal: React.FC<PetStatusModalProps> = ({ open, onClose, petDetails }) => {
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
        {petDetails && (
          <Box mt={2}>
            <Typography>名前: {petDetails.name}</Typography>
            <Typography>種類: {petDetails.breed}</Typography>
            <Typography>レベル: {petDetails.level}</Typography>
            <Typography>経験値: {petDetails.experience}</Typography>
            <Typography>体力: {petDetails.physical}</Typography>
            <Typography>満腹度: {petDetails.satiety}</Typography>
            <Typography>幸福度: {petDetails.happiness}</Typography>
            <Typography>
              ステータス: 
              {petDetails.states === 0 && "元気"}
              {(petDetails.states & 1) !== 0 && "空腹"}
              {(petDetails.states & 2) !== 0 && "不機嫌"}
            </Typography>
            <Typography>子供の数: {petDetails.offspring_count}</Typography>
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