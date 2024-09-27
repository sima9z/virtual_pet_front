import { User, LoginResponse, LogoutResponse, ErrorResponse } from '../../types/index';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // クッキーを含むように設定
    });

    const responseText = await response.text(); // レスポンスをテキスト形式で取得
    console.log('Response Text:', responseText);

    if (!response.ok) {
      console.error('Error Status:', response.status);
      throw new Error(responseText || 'Failed to login');
    }

    const data: LoginResponse = JSON.parse(responseText); // テキストをJSONとして解析
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    if (error instanceof Error) {
      throw new Error(`ログインエラー: ${error.message}`);
    } else {
      throw new Error('メールアドレスかパスワードが間違っています');
    }
  }
};

export const logout = async (): Promise<LogoutResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // クッキーを含むように設定
    });

    const responseText = await response.text(); // レスポンスをテキスト形式で取得
    console.log('Response Text:', responseText);

    if (!response.ok) {
      throw new Error(responseText || 'Failed to logout');
    }

    const data: LogoutResponse = JSON.parse(responseText); // テキストをJSONとして解析
    return data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw new Error('Failed to parse JSON response');
  }
};

export const signup = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<User> => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { name, email, password, password_confirmation: passwordConfirmation } }),
      credentials: 'include',
    });

    const responseText = await response.text();
    console.log('Response Text:', responseText);

    if (!response.ok) {
      const errorData = JSON.parse(responseText);
      
      if (errorData.errors && errorData.errors.includes("メールアドレス は既に存在します")) {
        throw new Error("このメールアドレスは既に使用されています");
      } else if (errorData.errors && errorData.errors.includes("パスワード確認")) {
        throw new Error("パスワードが一致しません");
      } else {
        throw new Error(errorData.errors.join(', ') || 'サインアップに失敗しました');
      }
    }

    const data: User = JSON.parse(responseText);
    
    // サインアップ成功後に自動でログインする
    await login(email, password);

    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw new Error(error instanceof Error ? error.message : 'サインアップに失敗しました');
  }
};