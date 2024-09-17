import { ButtonProps, LinkProps } from '@mui/material';

export interface User {
  id: number;
  email: string;
}

export interface LoginResponse {
  user: User;
}

export interface LogoutResponse {
  message: string;
}

export interface ErrorResponse {
  error?: string;
  errors?: string[];
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
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  sx?: ButtonProps['sx']; 
  underline?: LinkProps['underline'];
}

export interface LogoutButtonProps extends PetIntervals {}

export interface AnimationHandle {
  playButtonClick: () => void; //何も返さない→実行するだけで結果を期待しない
  strokeButtonClick: () => void;
  feedButtonClick: () => void;
}

interface PetActionHandlers {
  onFeed: () => void;
  onStroke: () => void;
  onPlay: () => void;
}

interface PetIntervals {
  physicalRecoveryIntervalId: number | NodeJS.Timeout | null;
  statDecreaseIntervalId: number | NodeJS.Timeout | null;
}

export interface ActionListProps extends PetIntervals {
  anchor: Anchor;
  onAction: (action: 'feed' | 'stroke' | 'play') => void;
  handleOpenModal: () => void;
}

interface PetStateHandlers {
  petDetails: PetDetails | null; 
  setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>;
  setOffspringCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface useMenuProps extends PetActionHandlers, PetStateHandlers {}

export interface MenuProps extends PetActionHandlers, PetIntervals, PetStateHandlers {}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface PetStatusModalProps {
  open: boolean;
  onClose: () => void;
  petDetails: PetDetails | null;
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

export interface usePetIntervalsProps {
  petType: string | null, 
  petDetails: PetDetails | null,
  setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>
}
