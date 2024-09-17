import React from 'react';
import { Button } from '@mui/material';

import { LogoutButtonProps } from '../../types/index'

import { logoutButtonTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

import useLogoutButton from '../../hooks/components/atoms/useLogoutButton'

const LogoutButton = ({ physicalRecoveryIntervalId, statDecreaseIntervalId } : LogoutButtonProps ) => {
  const { handleLogout, error } = useLogoutButton({ physicalRecoveryIntervalId, statDecreaseIntervalId });

  return (  
    <ThemeWrapper theme={logoutButtonTheme}>
      <Button onClick={handleLogout} variant="contained" color="primary" sx={{ color: 'white', fontSize: "24px" }}>
        ログアウト
      </Button>
      {error && <p>{error}</p>}
    </ThemeWrapper>
  )
};

export default LogoutButton;