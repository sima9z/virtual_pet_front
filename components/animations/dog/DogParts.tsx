"use client"

import React from 'react';
import Image from 'next/image';

import { dogImageAssets } from '../../../hooks/components/animations/dog/dogImageAssets';

import { DogPartsProps } from '../../../types/index';

const DogParts = ({
  refs,
  showHearts,
  showBall,
  showVesse,
  showNotes,
  currentAnimation
}: DogPartsProps ) => {
  const {
    legBackLeftRef,
    legBackRightRef,
    legFrontLeftRef,
    legFrontRightRef,
    tailRef,
    headFaceRef,
    headEyeRef,
    bodyRef,
    earRef,
    earRightRef,
    jawRef,
    heartRef,
    heartRef2,
    ballRef,
    yellowNoteRef,
    blueNoteRef,
    donyoriRef,
    donyori2Ref,
    guruguruRef,
  } = refs;

  const {
    legImageBackRight,
    legImageFrontRight,
    legImageFrontLeft,
    legImageBackLeft,
    tailImage,
    headImageFace,
    headImageEye,
    bodyImage,
    earImage,
    earImageRight,
    jawImage,
    heartImage,
    vesselImage,
    ballImage,
    yellowNoteImage,
    blueNoteImage,
    donyoriImage,
    donyori2Image,
    guruguruImage,
  } = dogImageAssets;
  
  return (
    <>
      <Image
        ref={legBackLeftRef}
        src={legImageBackLeft}
        alt="Back Left Leg"
        className="dog-part absolute top-[170px] left-[300px]"
      />
      <Image
        ref={legBackRightRef}
        src={legImageBackRight}
        alt="Back Right Leg"
        className="dog-part absolute top-[220px] left-[220px]"
      />
      <Image
        ref={legFrontLeftRef}
        src={legImageFrontLeft}
        alt="Front Left Leg"
        className="dog-part absolute top-[170px] left-[80px]"
      />
      <Image
        ref={legFrontRightRef}
        src={legImageFrontRight}
        alt="Front Right Leg"
        className="dog-part absolute top-[120px] left-[10px]"
      />
      <Image
        ref={tailRef}
        src={tailImage}
        alt="Tail"
        className="dog-part absolute top-[60px] left-[350px]"
      />
      <Image
        ref={headFaceRef}
        src={headImageFace}
        alt="Face"
        className="dog-part absolute top-[5px] left-[60px]"
      />
      <Image
        ref={headEyeRef}
        src={headImageEye}
        alt="Eye"
        className="dog-part absolute top-[15px] left-[125px]"
      />
      <Image
        ref={bodyRef}
        src={bodyImage}
        alt="Body"
        className="dog-part absolute top-[100px] left-[85px]"
      />
      <Image
        ref={earRef}
        src={earImage}
        alt="Ear"
        className="dog-part absolute top-[20px] left-[180px]"
      />
      <Image
        ref={earRightRef}
        src={earImageRight}
        alt="EarRight"
        className="dog-part absolute top-[-7px] left-[103px]"
      />
      <Image
        ref={jawRef}
        src={jawImage}
        alt="Jaw"
        className="dog-part absolute top-[75px] left-[90px]"
      />

      { showHearts && (
      <>
        <Image
          ref={heartRef}
          src={heartImage}
          alt="heart"
          className="dog-part absolute top-[0px] left-[-30px] w-12"
        />
        <Image
          ref={heartRef2}
          src={heartImage}
          alt="heart"
          className="dog-part absolute top-[50px] left-[-30px] w-9"
        />
      </>
      )}

      { showBall && (
      <Image
        ref={ballRef}
        src={ballImage}
        alt="Ball"
        className="dog-part absolute top-[220px] left-[-150px]"
      />
      )}

      { showVesse && ( 
      <Image
        src={vesselImage}
        alt="heart"
        className="dog-part absolute top-[250px] left-[-120px]"
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
            className="dog-part absolute top-[-20px] left-[0px] w-12"
          />
          <Image
            ref={donyori2Ref}
            src={donyori2Image}
            alt="donyori2"
            className="dog-part absolute top-[80px] left-[250px] w-9"
          />
          <Image
            ref={guruguruRef}
            src={guruguruImage}
            alt="guruguru"
            className="dog-part absolute top-[-20px] left-[270px] w-9"
          />
        </>
      )}
    </>
  )
}

export default DogParts;