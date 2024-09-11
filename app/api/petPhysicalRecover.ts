const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petPhysicalRecover = async (): Promise<void> => {
  const recoveryInterval = 60000; // 1分

  setInterval(() => {
    fetch(`${API_BASE_URL}/pet_physical_recover`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute('content') || '',
      },
      credentials: 'include', // セッションを送信するため
    });
  }, recoveryInterval);
};
