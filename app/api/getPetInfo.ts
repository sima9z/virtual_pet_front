const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getPetInfo = async (): Promise<{ petType: string }> => {
  const response = await fetch(`${API_BASE_URL}/pet_info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Error fetching pet information');
  }

  const data = await response.json();
  console.log('getPetInfo response:', data);
  return data;
};