import { getPetDetails } from './getPetDetails';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface PetDetails {
  id: number;
  name: string;
  breed: string;
  level: number;
  experience: number;
  physical: number;
  satiety: number;
  happiness: number;
  states: number;
  offspring_count: number;
}

export const petStatDecrease = async (setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>): Promise<void> => {
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

    // 最新のペット情報を取得して状態を更新
    const updatedPetDetails = await getPetDetails();
    setPetDetails(updatedPetDetails);
  } catch (error) {
    console.error('Error decreasing pet stats:', error);
  }
};
