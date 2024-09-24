import { styled } from '@mui/system';
import { Snackbar } from '@mui/material';

// スナックバー用のカスタムスタイル
export const CustomSnackbar = styled(Snackbar)({
  '& .MuiSnackbarContent-root': {
    backgroundColor: '#E8AFAF', // 背景色をカスタマイズ
    color: '#fff', // テキスト色をカスタマイズ
    fontSize: '24px', // テキストサイズ
    padding: '10px 8px',
    marginTop: '100px',
    borderRadius: '8px', // 角丸
  },
});