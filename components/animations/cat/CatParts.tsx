"use client"

import React from 'react';
import Image from 'next/image';

import { catImageAssets } from '../../../hooks/components/animations/cat/catImageAssets'

import { CatPertProps } from '../../../types/index';

const CatParts = ({
  isSitting,
  refs,
  showHearts,
  showBall,
  showVesse,
  showNotes,
  currentAnimation
}: CatPertProps ) => {
  const {  
    legImageBackRight,
    legImageFrontRight,
    legImageFrontLeft,
    legImageBackLeft,
    tailImage,
    faceImage,
    bodyImage,
    earImage,
    beardImageRight,
    beardImageLeft,
    heartImage,
    vesselImage,
    ballImage,
    yellowNoteImage,
    blueNoteImage,
    donyoriImage,
    donyori2Image,
    guruguruImage,
    SitCatImage 
  } = catImageAssets;

  const {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    faceRef,
    bodyRef,
    earRef,
    beardRightRef,
    beardLeftRef,
    heartRef,
    heartRef2,
    ballRef,
    yellowNoteRef,
    blueNoteRef,
    donyoriRef,
    donyori2Ref,
    guruguruRef,
  } = refs;

  return (
    <>
      {!isSitting && (
        <>
          <Image
            ref={legBackLeftRef}
            src={legImageBackLeft}
            alt="Back Left Leg"
            className="cat-part absolute top-[135px] left-[250px] z-10"
          />
          <Image
            ref={legBackRightRef}
            src={legImageBackRight}
            alt="Back Right Leg"
            className="cat-part absolute top-[190px] left-[220px] z-0"
          />
          <Image
            ref={legFrontLeftRef}
            src={legImageFrontLeft}
            alt="Front Left Leg"
            className="cat-part absolute top-[160px] left-[80px] z-10"
          />
          <Image
            ref={legFrontRightRef}
            src={legImageFrontRight}
            alt="Front Right Leg"
            className="cat-part absolute top-[180px] left-[130px] z-0"
          />
          <Image
            ref={tailRef}
            src={tailImage}
            alt="Tail"
            className="cat-part absolute top-[20px] left-[310px]"
          />
          <Image
            ref={faceRef}
            src={faceImage}
            alt="Face"
            className="cat-part absolute top-[60px] left-[85px] z-10"
          />
          <Image
            ref={bodyRef}
            src={bodyImage}
            alt="Body"
            className="cat-part absolute top-[100px] left-[85px] z-0"
          />
          <Image
            ref={earRef}
            src={earImage}
            alt="Ear"
            className="cat-part absolute top-[40px] left-[93px]"
          />
          <Image
            ref={beardRightRef}
            src={beardImageRight}
            alt="beard right"
            className="cat-part absolute top-[100px] left-[60px] z-20"
          />
          <Image
            ref={beardLeftRef}
            src={beardImageLeft}
            alt="beard left"
            className="cat-part absolute top-[105px] left-[165px] z-20"
          />
        </>
      )}
  
      { isSitting && (
        <Image
          src={SitCatImage}
          alt="SitCat"
          className="cat-part absolute top-[30px] left-[120px] z-0"
        />
      )}
  
      { showHearts && (
        <>
          <Image
            ref={heartRef}
            src={heartImage}
            alt="heart"
            className="cat-part absolute top-[20px] left-[70px] w-12"
          />
          <Image
            ref={heartRef2}
            src={heartImage}
            alt="heart"
            className="cat-part absolute top-[50px] left-[40px] w-9"
          />
        </>
      )}
  
      { showBall && (
        <Image
          ref={ballRef}
          src={ballImage}
          alt="Ball"
          className="cat-part absolute top-[220px] left-[-150px]"
        />
      )}
  
      { showVesse && ( 
        <Image
          src={vesselImage}
          alt="heart"
          className="cat-part absolute top-[250px] left-[-50px]"
        />
      )}
  
      { showNotes && ( 
        <>
          <Image
            ref={yellowNoteRef}
            src={yellowNoteImage}
            alt="yellow-note"
            className="dog-part absolute top-[0px] left-[-30px] w-12"
          />
          <Image
            ref={blueNoteRef}
            src={blueNoteImage}
            alt="blue-note"
            className="dog-part absolute top-[50px] left-[-30px] w-9"
          />
        </>
      )}
  
      { currentAnimation === 'unhappyOrHungry' && ( 
        <>
          <Image
            ref={donyoriRef}
            src={donyoriImage}
            alt="donyori"
            className="dog-part absolute top-[0px] left-[50px] w-12"
          />
          <Image
            ref={donyori2Ref}
            src={donyori2Image}
            alt="donyori2"
            className="dog-part absolute top-[80px] left-[200px] w-9"
          />
          <Image
            ref={guruguruRef}
            src={guruguruImage}
            alt="guruguru"
            className="dog-part absolute top-[-20px] left-[200px] w-9"
          />
        </>
      )}
    </>
  )
}

export default CatParts;