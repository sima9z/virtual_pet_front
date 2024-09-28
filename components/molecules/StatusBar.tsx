import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

// 物理ステータスバー
export const PhysicalStatBar = ({ label, value, max }: { label: string; value: number; max: number }) => (
  <Box sx={{ marginBottom: '10px' }}>
    <Typography variant="h6" align="center">{`${label}: ${value} / ${max}`}</Typography>
    <LinearProgress
      variant="determinate"
      value={(value / max) * 100}
      sx={{
        height: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
        '& .MuiLinearProgress-bar': {
          backgroundColor: value > 10 ? '#76c7c0' : '#e57373', // 値が少ないときは赤色に変更
        },
      }}
    />
  </Box>
);

// 満腹度ステータスバー
export const SatietyStatBar = ({ label, value, max }: { label: string; value: number; max: number }) => (
  <Box sx={{ marginBottom: '10px' }}>
    <Typography variant="h6" align="center">{`${label}: ${value} / ${max}`}</Typography>
    <LinearProgress
      variant="determinate"
      value={(value / max) * 100}
      sx={{
        height: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
        '& .MuiLinearProgress-bar': {
          backgroundColor: value > 10 ? '#FAEAB1' : '#e57373', // 値が少ないときは赤色に変更
        },
      }}
    />
  </Box>
);

// 幸福度ステータスバー
export const HappinessStatBar = ({ label, value, max }: { label: string; value: number; max: number }) => (
  <Box sx={{ marginBottom: '10px' }}>
    <Typography variant="h6" align="center">{`${label}: ${value} / ${max}`}</Typography>
    <LinearProgress
      variant="determinate"
      value={(value / max) * 100}
      sx={{
        height: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
        '& .MuiLinearProgress-bar': {
          backgroundColor: value > 10 ? '#E8AFAF' : '#e57373', // 値が少ないときは赤色に変更
        },
      }}
    />
  </Box>
);

// 各ステータスバーを返すStatusBarコンポーネント
const StatusBar = () => {
  return { PhysicalStatBar, SatietyStatBar, HappinessStatBar };
};

export default StatusBar;