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
  toggleDrawer: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
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
  species: string;
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

interface DogAndPuppyDogPartsRefs {
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
  containerRef?: RefObject<HTMLDivElement>;
  heartRef?: RefObject<HTMLImageElement>;
  heartRef2?: RefObject<HTMLImageElement>;
  ballRef?: RefObject<HTMLImageElement>;
  yellowNoteRef?: RefObject<HTMLImageElement>;
  blueNoteRef?: RefObject<HTMLImageElement>;
  donyoriRef?: RefObject<HTMLImageElement>;
  donyori2Ref?: RefObject<HTMLImageElement>;
  guruguruRef?: RefObject<HTMLImageElement>;
}

interface DogAndPuppyDogImageRefs {
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

type AnimationState = 'normal' | 'unhappyOrHungry';

interface ActionRefs {
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  yellowNoteRef: RefObject<HTMLImageElement>;
  blueNoteRef: RefObject<HTMLImageElement>;
  ballRef: RefObject<HTMLImageElement>;
}

export interface DogActionAnimationProps extends DogAndPuppyDogImageRefs, ActionRefs {
  isSitting: boolean;
  containerRef: RefObject<HTMLDivElement>;
  directionRef: RefObject<number>;
  setShowVesse: Dispatch<SetStateAction<boolean>>;
  setShowHearts: Dispatch<SetStateAction<boolean>>;
  setIsSitting: Dispatch<SetStateAction<boolean>>;
  setShowNotes: Dispatch<SetStateAction<boolean>>;
  setShowBall: Dispatch<SetStateAction<boolean>>;
  currentAnimation: 'normal' | 'unhappyOrHungry';
  startWalkingAnimation: () => void;
  startUnhappyOrHungryWalkingAnimation: () => void;
}

export interface useDogWalkingAnimationProps extends DogAndPuppyDogImageRefs {
  animate: () => void;
  UnhappyOrHungryWalkinganimate: () => void;
}

export interface UseDogSitAnimationProps extends DogAndPuppyDogImageRefs {
  isSitting: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  directionRef: MutableRefObject<number>;
  setShowVesse: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHearts: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSitting: React.Dispatch<React.SetStateAction<boolean>>;
  currentAnimation: AnimationState;
}

export interface useDogMovementAnimationProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  isSitting: boolean;
  directionRef: MutableRefObject<number>;
  initialSpeed: number;
}

export interface useDogAnimationStateProps extends DogAndPuppyDogImageRefs {
  isSitting: boolean;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
  showVesse: boolean;
  feedButtonClick: () => void;
  strokeButtonClick: () => void;
  showNotes: boolean;
  showBall: boolean;
  playButtonClick: () => void;
  showHearts: boolean;
  heartRef: RefObject<HTMLImageElement>;
  heartRef2: RefObject<HTMLImageElement>;
  petDetails: PetDetails | null,
  setCurrentAnimation: Dispatch<SetStateAction<AnimationState>>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

export interface DogPartsProps {
  refs: DogAndPuppyDogPartsRefs;
  showHearts: boolean;
  showBall: boolean;
  showVesse: boolean;
  showNotes: boolean;
  currentAnimation: AnimationState;
}

export interface usePuppyDogWalkingAnimationProps extends DogAndPuppyDogImageRefs {
  animate: () => void;
}

export interface usePuppyDogSitAnimationProps extends DogAndPuppyDogImageRefs {
  isSitting: boolean;
  containerRef: RefObject<HTMLDivElement | null>
  setIsSitting: React.Dispatch<React.SetStateAction<boolean>>;
  startWalkingAnimation: () => void;
}

export interface usePuppyDogAnimationStateProps {
  containerRef: RefObject<HTMLDivElement>;
  getRandomPosition: () => number;
  startWalkingAnimation: () => void;
  isSitting: boolean;
}

export interface usePuppyDogMovementAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  isSitting: boolean;
  directionRef: MutableRefObject<number>;
  initialSpeed: number
}

export interface PuppyDogPartsProps {
  refs: DogAndPuppyDogPartsRefs;
}

interface CatAndPuppyCatPartsRefs {
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
  heartRef?: RefObject<HTMLImageElement>;
  heartRef2?: RefObject<HTMLImageElement>;
  ballRef?: RefObject<HTMLImageElement>;
  yellowNoteRef?: RefObject<HTMLImageElement>;
  blueNoteRef?: RefObject<HTMLImageElement>;
  donyoriRef?: RefObject<HTMLImageElement>;
  donyori2Ref?: RefObject<HTMLImageElement>;
  guruguruRef?: RefObject<HTMLImageElement>;
}

interface CatAndPuppyCatImageRefs {
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
}

export interface CatActionAnimationProps extends CatAndPuppyCatImageRefs, ActionRefs {
  containerRef: RefObject<HTMLDivElement>;
  setIsSitting: Dispatch<SetStateAction<boolean>>;
  setShowVesse: Dispatch<SetStateAction<boolean>>;
  setShowHearts: Dispatch<SetStateAction<boolean>>;
  setShowNotes: Dispatch<SetStateAction<boolean>>;
  setShowBall: Dispatch<SetStateAction<boolean>>;
  directionRef: RefObject<number>;
  currentAnimation: 'normal' | 'unhappyOrHungry';
  startWalkingAnimation: () => void;
  startUnhappyOrHungryWalkingAnimation: () => void;
}

export interface useCatWalkingAnimationProps extends CatAndPuppyCatImageRefs {
  legAnims: MutableRefObject<gsap.core.Tween[]>;
  beardRightAnim: MutableRefObject<gsap.core.Tween | null>;
  beardLeftAnim: MutableRefObject<gsap.core.Tween | null>;
  headAnim: MutableRefObject<gsap.core.Tween | null>;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
  animate: () => void;
  UnhappyOrHungryWalkingAnimation: () => void;
}

export interface useCatMovementAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  isSitting: boolean;
  directionRef: MutableRefObject<number>;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
  initialSpeed: number
}

export interface useCatAnimationStateProps extends AnimationHandle {
  isSitting: boolean;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
  showVesse: boolean;
  showNotes: boolean;
  showBall: boolean;
  petDetails: PetDetails | null,
  setCurrentAnimation: Dispatch<SetStateAction<AnimationState>>;
  containerRef: RefObject<HTMLDivElement>;
}

export interface useCatHandleContainerClickProps extends CatAndPuppyCatImageRefs {
  isClickable: boolean;
  setIsClickable: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: RefObject<HTMLDivElement>;
  directionRef: MutableRefObject<number>;
  currentAnimation: AnimationState;
  startUnhappyOrHungryWalkingAnimation: () => void;
  startWalkingAnimation: () => void;
}

export interface CatPertProps {
  isSitting: boolean;
  refs: CatAndPuppyCatPartsRefs;
  showHearts: boolean;
  showBall: boolean;
  showVesse: boolean;
  showNotes: boolean;
  currentAnimation: AnimationState;
}

export interface usePuppyCatWalkingAnimationProps extends CatAndPuppyCatImageRefs {
  legAnims: MutableRefObject<gsap.core.Tween[]>;
  beardRightAnim: MutableRefObject<gsap.core.Tween | null>;
  beardLeftAnim: MutableRefObject<gsap.core.Tween | null>;
  headAnim: MutableRefObject<gsap.core.Tween | null>;
  animate: () => void;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
}

export interface usePuppyCatMovementAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  directionRef: MutableRefObject<number>;
  containerAnim: MutableRefObject<gsap.core.Tween | null>;
  initialSpeed: number;
}

export interface usePuppyCatHandleContainerClickProps extends CatAndPuppyCatImageRefs {
  isClickable: boolean;
  setIsClickable: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: RefObject<HTMLDivElement>;
  startWalkingAnimation: () => void;
}

export interface PuppyCatPartsProps {
  refs: CatAndPuppyCatPartsRefs;
}