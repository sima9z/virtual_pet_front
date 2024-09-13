const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const petAction = async (petType: 'dog' | 'cat',  petId: number, action: 'feed' | 'stroke' | 'play'): Promise<void> => {
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
      // エラーメッセージが含まれている場合、それを表示
      alert(responseData.error); // 例: '疲れているようです。休ませてあげましょう' など
    } else {
      alert(`Error performing ${action} action for ${petType}`);
    }
    return;
  }

  // 成功時のメッセージをアクションに応じて表示
  let successMessage = '';
  if (action === 'feed') {
    successMessage = 'おいしそうにたべています';
  } else if (action === 'stroke') {
    successMessage = 'なでられて嬉しそうです';
  } else if (action === 'play') {
    successMessage = 'ボールで楽しそうに遊んでいます';
  }

  alert(successMessage);

} catch (error) {
  alert('An unexpected error occurred. Please try again.');
  console.error('Error performing action:', error);
}
  
};