const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petAction = async (petType: 'dog' | 'cat',  petId: number, action: 'feed' | 'water' | 'play'): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/${petType}s/${petId}/${action}`, { // 'dogs' or 'cats'
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`Error performing ${action} action for ${petType}`);
  }
};