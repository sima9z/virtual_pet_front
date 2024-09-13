const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petStatDecrease = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pet_stat_decrease`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute('content') || '',
      },
      credentials: 'include', // セッションを送信するため
    });

    if (!response.ok) {
      throw new Error('Failed to decrease pet stats');
    }

    console.log('Pet stats decreased successfully');
  } catch (error) {
    console.error('Error decreasing pet stats:', error);
  }
};
