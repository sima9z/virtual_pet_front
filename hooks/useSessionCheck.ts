import { useState } from 'react';

export const useSessionCheck = () => {
  const [open, setOpen] = useState(false);

  const fetchWithSessionCheck = async (url: string, options: RequestInit = {}): Promise<Response> => {
    try {
      const response = await fetch(url, {
        ...options,
        credentials: 'include', // 必ずセッションを含む
      });

      if (response.status === 401) {
        setOpen(true);  

        setTimeout(() => {
          window.location.href = '/';
        }, 10000);
      }

      return response;
    } catch (error) {
      console.error('Error in fetchWithSessionCheck:', error);
      setOpen(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 10000);
      throw error;
    }
  };

  return { fetchWithSessionCheck, open, setOpen };
};