const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getPetDetails = async (): Promise<{
  id: number,
  name: string;
  breed: string;
  age: number;
  is_adult: boolean;
  level: number;
  experience: number;
  states: number
}> => {
  const response = await fetch(`${API_BASE_URL}/pet_details`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Error fetching pet details');
  }

  const data = await response.json();
  console.log('getPetDetails response:', data); // ログ出力
  return data;
};