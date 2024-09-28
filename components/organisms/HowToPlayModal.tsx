import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

import { HowToPlayModalModalProps } from '../../types/index'

const HowToPlayModal: React.FC<HowToPlayModalModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius:'10px' }}>
        <Typography variant="h5" component="h2" sx={{ textAlign:'center', marginBottom:'20px' }}>
          遊び方
        </Typography>
        <Box mt={2}>
          <Typography sx={{ marginBottom:'20px', fontSize:'18px' }}>
            「遊ぶ」でペットの経験値があがります。<br/>
            「遊ぶ」には体力が必要です。体力は時間経過で回復します。<br/>
            また、「遊ぶ」はバッドステータス時には実行できません。<br/>
            <br/>
            満腹度と幸福度は時間経過で減少します。<br/>
            満腹度と幸福度が一定の値を下回った場合、バッドステータスになります。<br/>
            「ご飯」で満腹度が回復し、「なでる」で幸福度が回復します。<br/>
            「ご飯」と「なでる」は連続して実行できません。<br/>
            時間をおいてあげてください。<br/>
            <br/>
            ペットの経験値をあげることでレベルがあがります。<br/>
            レベルが一定値に達するとペットは子供を産みます。<br/>
            <br/>
            バッドステータスになった日は遊ぶコマンドの回数が制限されてしまいます。<br/>
            定期的に様子を見てあげてください。<br/>
            <br/>
            「ステータス」でペットの各種ステータスを確認することができます。<br/>
            「カスタマイズ」でペットの名前を変更することができます。<br/>
            （ペットのタイプの変更は近日実装予定です。）
          </Typography>
        </Box>
        <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2, display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          閉じる
        </Button>
      </Box>
    </Modal>
  );
}

export default HowToPlayModal;