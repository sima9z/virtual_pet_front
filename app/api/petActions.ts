const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petAction = async (petType: 'dog' | 'cat',  petId: number, action: 'feed' | 'stroke' | 'play'): Promise<{ success: boolean, message: string }> => {
  try {
  const response = await fetch(`${API_BASE_URL}/${petType}s/${petId}/${action}`, { // 'dogs' or 'cats'
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
  });

  const responseData = await response.json();

  if (!response.ok) {
    if (responseData.error) {
      // エラーメッセージが含まれている場合、それを返す
      return { success: false, message: responseData.error };
    } else {
      return { success: false, message: `Error performing ${action} action for ${petType}` };
    }
  }

  // 成功時のメッセージをアクションに応じて設定
  let successMessage = '';
  if (action === 'feed') {
    successMessage = 'おいしそうにたべています';
  } else if (action === 'stroke') {
    successMessage = 'なでられて嬉しそうです';
  } else if (action === 'play') {
    successMessage = 'ボールで楽しそうに遊んでいます';
  }

  return { success: true, message: successMessage };

} catch (error) {
  console.error('Error performing action:', error);
  return { success: false, message: 'An unexpected error occurred. Please try again.' };
}
};