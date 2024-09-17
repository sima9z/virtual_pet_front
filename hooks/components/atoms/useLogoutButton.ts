import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { logout } from '../../../features/api/auth';

import { LogoutButtonProps } from '../../../types/index'

const useLogoutButton = ({ physicalRecoveryIntervalId, statDecreaseIntervalId }:LogoutButtonProps) => {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // インターバルをクリアする
      if (physicalRecoveryIntervalId) {
        clearInterval(physicalRecoveryIntervalId);
      }
      if (statDecreaseIntervalId) {
        clearInterval(statDecreaseIntervalId);
      }

      await logout();
      console.log('Logged out');
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  }

  return {
    error,
    handleLogout
  }
};

export default useLogoutButton;