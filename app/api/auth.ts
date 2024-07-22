import { User, LoginResponse, LogoutResponse, ErrorResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getCsrfToken = async (): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/csrf_token`, {
    credentials: 'include',
  });

  const data = await response.json();
  console.log('CSRF Token:', data.csrfToken);
  localStorage.setItem('csrfToken', data.csrfToken);
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    if (!localStorage.getItem('csrfToken')) {
      await getCsrfToken();
    }
    const csrfToken = localStorage.getItem('csrfToken');
    console.log('CSRF Token from Local Storage:', csrfToken);
    
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    const responseText = await response.text();
    console.log('Response Text:', responseText);

    if (!response.ok) {
      console.error('Error Status:', response.status);
      throw new Error(responseText || 'Failed to login');
    }

    const data: LoginResponse = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Failed to parse JSON response');
  }
};

export const logout = async (): Promise<LogoutResponse> => {
  try {
    const csrfToken = localStorage.getItem('csrfToken');
    console.log('CSRF Token from Local Storage:', csrfToken);

    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      credentials: 'include',
    });

    const responseText = await response.text();
    console.log('Response Text:', responseText);

    if (!response.ok) {
      throw new Error(responseText || 'Failed to logout');
    }

    const data: LogoutResponse = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw new Error('Failed to parse JSON response');
  }
};

export const signup = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<User> => {
  try {
    const csrfToken = localStorage.getItem('csrfToken');
    console.log('CSRF Token from Local Storage:', csrfToken);

    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({ user: { name, email, password, password_confirmation: passwordConfirmation } }),
      credentials: 'include',
    });

    const responseText = await response.text();
    console.log('Response Text:', responseText);

    if (!response.ok) {
      throw new Error(responseText || 'Failed to sign up');
    }

    const data: User = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw new Error('Failed to parse JSON response');
  }
};