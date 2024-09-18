import { useRef } from 'react';

export const usePuppyDogRefs = {
  legBackLeftRef: useRef<HTMLImageElement | null>(null),
  legBackRightRef : useRef<HTMLImageElement | null>(null),
  legFrontLeftRef : useRef<HTMLImageElement | null>(null),
  legFrontRightRef : useRef<HTMLImageElement | null>(null),
  tailRef : useRef<HTMLImageElement | null>(null),
  headFaceRef : useRef<HTMLImageElement | null>(null),
  headEyeRef : useRef<HTMLImageElement | null>(null),
  bodyRef : useRef<HTMLImageElement | null>(null),
  earRef : useRef<HTMLImageElement | null>(null),
  earRightRef : useRef<HTMLImageElement | null>(null),
  jawRef : useRef<HTMLImageElement | null>(null),
  containerRef : useRef<HTMLDivElement | null>(null)
}