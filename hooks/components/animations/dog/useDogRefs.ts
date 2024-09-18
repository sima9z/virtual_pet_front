import { useRef } from 'react';

export const useDogRefs = () => {
  return {
    legBackLeftRef: useRef<HTMLImageElement | null>(null),
    legBackRightRef: useRef<HTMLImageElement | null>(null),
    legFrontLeftRef: useRef<HTMLImageElement | null>(null),
    legFrontRightRef: useRef<HTMLImageElement | null>(null),
    tailRef: useRef<HTMLImageElement | null>(null),
    headFaceRef: useRef<HTMLImageElement | null>(null),
    headEyeRef: useRef<HTMLImageElement | null>(null),
    bodyRef: useRef<HTMLImageElement | null>(null),
    earRef: useRef<HTMLImageElement | null>(null),
    earRightRef: useRef<HTMLImageElement | null>(null),
    jawRef: useRef<HTMLImageElement | null>(null),
    containerRef: useRef<HTMLDivElement | null>(null),
    heartRef: useRef<HTMLImageElement | null>(null),
    heartRef2: useRef<HTMLImageElement | null>(null),
    ballRef: useRef<HTMLImageElement | null>(null),
    yellowNoteRef: useRef<HTMLImageElement | null>(null),
    blueNoteRef: useRef<HTMLImageElement | null>(null),
    donyoriRef: useRef<HTMLImageElement | null>(null),
    donyori2Ref: useRef<HTMLImageElement | null>(null),
    guruguruRef: useRef<HTMLImageElement | null>(null),
  };
};