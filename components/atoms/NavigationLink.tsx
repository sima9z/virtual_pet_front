"use client";

import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

import { NavigationLinkProps } from '../../types/index';

const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  href, 
  label, 
  alertMessage, 
  componentType = 'link', 
  variant = 'contained', 
  color = 'primary', 
  size = 'medium',
  sx,
  underline = 'hover'
}) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    if (alertMessage) {
      alert(alertMessage);
    } else {
      router.push(href);
    }
  };

  if (componentType === 'button') {
    return (
      <Button variant={variant} color={color} size={size} onClick={handleClick} sx={sx}>
        {label}
      </Button>
    );
  }

  return (
    <Link href="#" color={color}  underline={underline} onClick={handleClick} sx={{ fontFamily: `'Yusei Magic', sans-serif` }}>
      {label}
    </Link>
  );
};

export default NavigationLink;