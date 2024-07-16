import { User, LoginResponse, LogoutResponse, ErrorResponse } from './types';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include', // クッキーを含むように設定
  });

  const data: LoginResponse | ErrorResponse = await response.json();
  if (!response.ok) {
    const errorResponse = data as ErrorResponse;
    throw new Error(errorResponse.errors?.join(', ') || errorResponse.error || 'Failed to login');
  }

  return data as LoginResponse;
};

export const logout = async (): Promise<LogoutResponse> => {
  const response = await fetch('http://localhost:3000/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // クッキーを含むように設定
  });

  const data: LogoutResponse | ErrorResponse = await response.json();
  if (!response.ok) {
    const errorResponse = data as ErrorResponse;
    throw new Error(errorResponse.errors?.join(', ') || errorResponse.error || 'Failed to logout');
  }

  return data as LogoutResponse;
};

export const signup = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<User> => {
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: { name, email, password, password_confirmation: passwordConfirmation } }),
    credentials: 'include', // クッキーを含むように設定
  });

  const data: User | ErrorResponse = await response.json();
  if (!response.ok) {
    const errorResponse = data as ErrorResponse;
    throw new Error(errorResponse.errors?.join(', ') || errorResponse.error || 'Failed to sign up');
  }

  return data as User;
};