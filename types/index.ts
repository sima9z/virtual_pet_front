import { ButtonProps, LinkProps } from '@mui/material';

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

export interface BackgroundImageProps {
  src: string;
}

export interface NavigationLinkProps {
  href: string;
  label: string;
  alertMessage?: string;
  componentType?: 'link' | 'button';
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'; // 'default'は削除
  size?: 'small' | 'medium' | 'large';
  sx?: ButtonProps['sx']; 
  underline?: LinkProps['underline'];
}

export interface LogoutButtonProps {
  physicalRecoveryIntervalId: number | NodeJS.Timeout | null; 
  statDecreaseIntervalId: number | NodeJS.Timeout | null; 
}

export interface AnimationHandle {
  playButtonClick: () => void; //何も返さない→実行するだけで結果を期待しない
  strokeButtonClick: () => void;
  feedButtonClick: () => void;
}

export interface ActionListProps {
  anchor: Anchor;
  onAction: (action: 'feed' | 'stroke' | 'play') => void;
  handleOpenModal: () => void;
  physicalRecoveryIntervalId: number | NodeJS.Timeout | null;
  statDecreaseIntervalId: number | NodeJS.Timeout | null;
}

export interface useMenuProps {
  petDetails: PetDetails | null; 
  setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>;
  setOffspringCount: React.Dispatch<React.SetStateAction<number>>; 
  onFeed: () => void;
  onStroke: () => void;
  onPlay: () => void;
}

export interface AnchorTemporaryDrawerProps {
  onFeed: () => void;
  onStroke: () => void;
  onPlay: () => void;
  setOffspringCount: React.Dispatch<React.SetStateAction<number>>;
  physicalRecoveryIntervalId: number | NodeJS.Timeout | null; 
  statDecreaseIntervalId: number | NodeJS.Timeout | null; 
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface PetStatusModalProps {
  open: boolean;
  onClose: () => void;
  petDetails: {
    name:String;
    breed: String;
    level: number;
    experience: number;
    physical: number;
    satiety: number;
    happiness: number;
    states:number;
    offspring_count: number;
  } | null;
}

export interface PetDetails {
  id: number;
  name: string;
  breed: string;
  level: number;
  experience: number;
  physical: number;
  satiety: number;
  happiness: number;
  states: number;
  offspring_count: number;
}
