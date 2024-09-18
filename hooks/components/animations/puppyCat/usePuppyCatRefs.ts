import { useRef } from 'react';
import gsap from 'gsap';

export const usePuppyCatRefs = {
   legBackLeftRef : useRef<HTMLImageElement | null>(null),
   legBackRightRef : useRef<HTMLImageElement | null>(null),
   legFrontLeftRef : useRef<HTMLImageElement | null>(null),
   legFrontRightRef : useRef<HTMLImageElement | null>(null),
   tailRef : useRef<HTMLImageElement | null>(null),
   faceRef : useRef<HTMLImageElement | null>(null),
   bodyRef : useRef<HTMLImageElement | null>(null),
   earRef : useRef<HTMLImageElement | null>(null),
   beardRightRef : useRef<HTMLImageElement | null>(null),
   beardLeftRef : useRef<HTMLImageElement | null>(null),
   containerRef : useRef<HTMLDivElement | null>(null),
   legAnims : useRef<gsap.core.Tween[]>([]),
   beardRightAnim : useRef<gsap.core.Tween | null>(null),
   beardLeftAnim : useRef<gsap.core.Tween | null>(null),
   headAnim : useRef<gsap.core.Tween | null>(null),
   containerAnim : useRef<gsap.core.Tween | null>(null),
}