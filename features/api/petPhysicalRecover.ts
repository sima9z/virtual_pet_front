import { getPetDetails } from './getPetDetails';
import { PetDetails } from '../../types/index';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petPhysicalRecover = async (setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pet_physical_recover`, {
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
      throw new Error('Failed to recover pet physical');
    }

    // 最新のペット情報を取得して状態を更新
    const updatedPetDetails = await getPetDetails();
    setPetDetails(updatedPetDetails);
    console.log('Pet physical recovered successfully');
  } catch (error) {
    console.error('Error recovering pet physical:', error);
  }
};