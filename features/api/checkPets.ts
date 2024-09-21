const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const checkPets = async (): Promise<{ pets_exist: boolean, dog_id: number, cat_id: number }> => {
  const response = await fetch(`${API_BASE_URL}/check_pets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',  
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Error fetching pets status');
  }

  const data = await response.json();
  console.log('checkPets response:', data);
  return data;
};