"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import NavigationLink from '../atoms/NavigationLink'

import { subTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

const Footer = () => {
  return (
    <ThemeWrapper theme={subTheme}>
      <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0, height: '7vh' }}>
        <Toolbar>
          <Box width="100%" display="flex" justifyContent="space-between" sx={{ height: '50%' }}>
            <Typography variant="body1" color="primary">
              © 2024 Shimadu Yu
            </Typography>
            <Box display="flex" justifyContent="space-between" gap="20px">
              <NavigationLink href="/kiyaku" label="利用規約" componentType="link" color="primary" underline="hover" />
              <NavigationLink href="https://kiyac.app/privacypolicy/3QB6GsYYlo7FzDYekrOB" label="プライバシーポリシー" componentType="link" color="primary" underline="hover" />
              <NavigationLink href="https://docs.google.com/forms/d/e/1FAIpQLScbwBebtL1O1Oxz2XG5sX_DVSsyzQL6FDzS0gTk1p0jkSJxig/viewform?usp=sf_link" label="お問い合わせ" componentType="link" color="primary" underline="hover" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeWrapper>
  );
};

export default Footer;