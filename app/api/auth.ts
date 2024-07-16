import { User, LoginResponse, LogoutResponse, ErrorResponse } from './types';

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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to login');
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Failed to parse JSON response');
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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to logout');
    }

    const data: LogoutResponse = await response.json();
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
      credentials: 'include', // クッキーを含むように設定
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to sign up');
    }

    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw new Error('Failed to parse JSON response');
  }
};