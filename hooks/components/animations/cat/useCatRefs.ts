import { useRef } from 'react';
import gsap from 'gsap';

export const useCatRefs = () => {
  return {
    legBackLeftRef: useRef<HTMLImageElement | null>(null),
    legBackRightRef: useRef<HTMLImageElement | null>(null),
    legFrontLeftRef : useRef<HTMLImageElement | null>(null),
    legFrontRightRef : useRef<HTMLImageElement | null>(null),
    tailRef : useRef<HTMLImageElement | null>(null),
    faceRef : useRef<HTMLImageElement | null>(null),
    bodyRef : useRef<HTMLImageElement | null>(null),
    earRef : useRef<HTMLImageElement | null>(null),
    beardRightRef : useRef<HTMLImageElement | null>(null),
    beardLeftRef : useRef<HTMLImageElement | null>(null),
    containerRef : useRef<HTMLDivElement | null>(null),
    heartRef : useRef<HTMLImageElement | null>(null),
    heartRef2 : useRef<HTMLImageElement | null>(null),
    ballRef : useRef<HTMLImageElement | null>(null),
    yellowNoteRef : useRef<HTMLImageElement | null>(null),
    blueNoteRef : useRef<HTMLImageElement | null>(null),
    donyoriRef : useRef<HTMLImageElement | null>(null),
    donyori2Ref : useRef<HTMLImageElement | null>(null),
    guruguruRef : useRef<HTMLImageElement | null>(null),
    legAnims : useRef<gsap.core.Tween[]>([]),
    beardRightAnim : useRef<gsap.core.Tween | null>(null),
    beardLeftAnim : useRef<gsap.core.Tween | null>(null),
    headAnim : useRef<gsap.core.Tween | null>(null),
    containerAnim : useRef<gsap.core.Tween | null>(null),
  }
}
