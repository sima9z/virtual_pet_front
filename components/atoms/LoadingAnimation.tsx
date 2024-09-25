"use client";

import React from 'react';
import { Box } from '@mui/material';

import { LoadingAnimationProps } from '../../types/index'

const LoadingAnimation: React.FC<LoadingAnimationProps> = ( { isLoading }) => {
  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;

  return(
    <>
      {isLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景に透明感を加える
            zIndex: 9999, // 高いz-index
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              zIndex: 10000, // さらに高いz-index
            }}
          >
            <source src={`https://${bucketName}.s3.${region}.amazonaws.com/ロードアニメーション.mp4`} type="video/mp4" />
          </video>
        </Box>
      )}
    </>
  )
}

export default LoadingAnimation;
