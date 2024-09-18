import { RefObject, Dispatch, SetStateAction, MutableRefObject } from 'react';
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
  id?: number;
  name?: string;
  breed?: string;
  level?: number;
  experience?: number;
  physical?: number;
  satiety?: number;
  happiness?: number;
  states: number;
  offspring_count?: number;
}

export interface usePetIntervalsProps {
  petType: string | null, 
  petDetails: PetDetails | null,
  setPetDetails: React.Dispatch<React.SetStateAction<PetDetails | null>>
}

export interface DogActionAnimationProps {
  isSitting: boolean;
  containerRef: RefObject<HTMLDivElement>;
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
  directionRef: RefObject<number>;
  setShowVesse: Dispatch<SetStateAction<boolean>>;
  setShowHearts: Dispatch<SetStateAction<boolean>>;
  setIsSitting: Dispatch<SetStateAction<boolean>>;
  setShowNotes: Dispatch<SetStateAction<boolean>>;
  setShowBall: Dispatch<SetStateAction<boolean>>;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  ballRef: RefObject<HTMLImageElement>;
  currentAnimation: 'normal' | 'unhappyOrHungry';
  startWalkingAnimation: () => void;
  startUnhappyOrHungryWalkingAnimation: () => void;
}

export interface CatActionAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  faceRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  beardRightRef: RefObject<HTMLImageElement>;
  beardLeftRef: RefObject<HTMLImageElement>;
  setIsSitting: Dispatch<SetStateAction<boolean>>;
  setShowVesse: Dispatch<SetStateAction<boolean>>;
  setShowHearts: Dispatch<SetStateAction<boolean>>;
  setShowNotes: Dispatch<SetStateAction<boolean>>;
  setShowBall: Dispatch<SetStateAction<boolean>>;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  directionRef: RefObject<number>;
  currentAnimation: 'normal' | 'unhappyOrHungry';
  startWalkingAnimation: () => void;
  startUnhappyOrHungryWalkingAnimation: () => void;
  ballRef: RefObject<HTMLImageElement>;
}

export interface useDogWalkingAnimationProps {
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
  animate: () => void;
  UnhappyOrHungryWalkinganimate: () => void;
}

export interface useCatWalkingAnimationProps {
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  beardRightRef: RefObject<HTMLImageElement>;
  beardLeftRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  faceRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  legAnims: MutableRefObject<gsap.core.Tween[]>;
  beardRightAnim: MutableRefObject<gsap.core.Tween | null>;
  beardLeftAnim: MutableRefObject<gsap.core.Tween | null>;
  headAnim: MutableRefObject<gsap.core.Tween | null>;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
  animate: () => void;
  UnhappyOrHungryWalkingAnimation: () => void;
}

type AnimationState = 'normal' | 'unhappyOrHungry';

export interface UseSitAnimationProps {
  isSitting: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  legBackLeftRef: MutableRefObject<HTMLImageElement | null>;
  legBackRightRef: MutableRefObject<HTMLImageElement | null>;
  legFrontLeftRef: MutableRefObject<HTMLImageElement | null>;
  legFrontRightRef: MutableRefObject<HTMLImageElement | null>;
  tailRef: MutableRefObject<HTMLImageElement | null>;
  headFaceRef: MutableRefObject<HTMLImageElement | null>;
  headEyeRef: MutableRefObject<HTMLImageElement | null>;
  bodyRef: MutableRefObject<HTMLImageElement | null>;
  earRef: MutableRefObject<HTMLImageElement | null>;
  earRightRef: MutableRefObject<HTMLImageElement | null>;
  jawRef: MutableRefObject<HTMLImageElement | null>;
  directionRef: MutableRefObject<number>;
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHearts: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSitting: React.Dispatch<React.SetStateAction<boolean>>;
  currentAnimation: AnimationState;
}

export interface usePuppyDogWalkingAnimationProps {
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
  animate: () => void;
}

export interface usePuppyDogSitAnimationProps {
  isSitting: boolean;
  containerRef: RefObject<HTMLDivElement | null>
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
  setIsSitting: React.Dispatch<React.SetStateAction<boolean>>;
  startWalkingAnimation: () => void;
}

export interface usePuppyCatWalkingAnimationProps {
  legAnims: MutableRefObject<gsap.core.Tween[]>;
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  beardRightRef: RefObject<HTMLImageElement>;
  beardLeftRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  faceRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  beardRightAnim: MutableRefObject<gsap.core.Tween | null>;
  beardLeftAnim: MutableRefObject<gsap.core.Tween | null>;
  headAnim: MutableRefObject<gsap.core.Tween | null>;
  animate: () => void;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
}

export interface useDogMovementAnimationProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  isSitting: boolean;
  directionRef: MutableRefObject<number>;
  initialSpeed: number;
}

export interface useDogAnimationStateProps {
  isSitting: boolean;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
  showVesse: boolean;
  feedButtonClick: () => void;
  showNotes: boolean;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  showBall: boolean;
  playButtonClick: () => void;
  showHearts: boolean;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  petDetails: PetDetails | null,
  setCurrentAnimation: Dispatch<SetStateAction<AnimationState>>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
}

interface DogRefs {
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  headFaceRef: RefObject<HTMLImageElement>;
  headEyeRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  earRightRef: RefObject<HTMLImageElement>;
  jawRef: RefObject<HTMLImageElement>;
  containerRef: RefObject<HTMLDivElement>;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  ballRef: RefObject<HTMLImageElement>;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  donyoriRef: RefObject<HTMLImageElement>;
  donyori2Ref: RefObject<HTMLImageElement>;
  guruguruRef: RefObject<HTMLImageElement>;
}

export interface DogPartsProps {
  refs: DogRefs;
  showHearts: boolean;
  showBall: boolean;
  showVesse: boolean;
  showNotes: boolean;
  currentAnimation: AnimationState;
}

export interface useCatMovementAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  isSitting: boolean;
  directionRef: MutableRefObject<number>;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
  initialSpeed: number
}

export interface useCatAnimationStateProps {
  isSitting: boolean;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
  showVesse: boolean;
  feedButtonClick: () => void;
  showNotes: boolean;
  strokeButtonClick: () => void;
  showBall: boolean;
  playButtonClick: () => void;
  petDetails: PetDetails | null,
  setCurrentAnimation: Dispatch<SetStateAction<AnimationState>>;
  containerRef: RefObject<HTMLDivElement>;
}

export interface useCatHandleContainerClickProps {
  isClickable: boolean;
  setIsClickable: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: RefObject<HTMLDivElement>;
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  faceRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  beardRightRef: RefObject<HTMLImageElement>;
  beardLeftRef: RefObject<HTMLImageElement>;
  directionRef: MutableRefObject<number>;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
}

interface CatRef {
  legBackLeftRef: RefObject<HTMLImageElement>;
  legBackRightRef: RefObject<HTMLImageElement>;
  legFrontLeftRef: RefObject<HTMLImageElement>;
  legFrontRightRef: RefObject<HTMLImageElement>;
  tailRef: RefObject<HTMLImageElement>;
  faceRef: RefObject<HTMLImageElement>;
  bodyRef: RefObject<HTMLImageElement>;
  earRef: RefObject<HTMLImageElement>;
  beardRightRef: RefObject<HTMLImageElement>;
  beardLeftRef: RefObject<HTMLImageElement>;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  ballRef: RefObject<HTMLImageElement>;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  donyoriRef: RefObject<HTMLImageElement>;
  donyori2Ref: RefObject<HTMLImageElement>;
  guruguruRef: RefObject<HTMLImageElement>;
}

export interface CatPertProps {
  isSitting: boolean;
  refs: CatRef;
  showHearts: boolean;
  showBall: boolean;
  showVesse: boolean;
  showNotes: boolean;
  currentAnimation: AnimationState;
}