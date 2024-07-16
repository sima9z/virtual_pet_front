export interface User {
  id: number;
  email: string;
  // 他のユーザーに関連するプロパティをここに追加できます
}

export interface LoginResponse {
  user: User;
}

export interface LogoutResponse {
  message: string;
}

export interface ErrorResponse {
  error?: string;  // errorプロパティを追加
  errors?: string[]; // errorsプロパティも保持
}