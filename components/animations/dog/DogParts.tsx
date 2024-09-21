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
        width={122}
        height={172}
      />
      <Image
        ref={legBackRightRef}
        src={legImageBackRight}
        alt="Back Right Leg"
        className="dog-part absolute top-[220px] left-[220px]"
        width={94}
        height={115}
      />
      <Image
        ref={legFrontLeftRef}
        src={legImageFrontLeft}
        alt="Front Left Leg"
        className="dog-part absolute top-[170px] left-[80px]"
        width={137}
        height={154}
      />
      <Image
        ref={legFrontRightRef}
        src={legImageFrontRight}
        alt="Front Right Leg"
        className="dog-part absolute top-[120px] left-[10px]"
        width={137}
        height={154}
      />
      <Image
        ref={tailRef}
        src={tailImage}
        alt="Tail"
        className="dog-part absolute top-[60px] left-[350px]"
        width={83}
        height={127}
      />
      <Image
        ref={headFaceRef}
        src={headImageFace}
        alt="Face"
        className="dog-part absolute top-[5px] left-[60px]"
        width={167}
        height={123}
      />
      <Image
        ref={headEyeRef}
        src={headImageEye}
        alt="Eye"
        className="dog-part absolute top-[15px] left-[125px]"
        width={45}
        height={42}
      />
      <Image
        ref={bodyRef}
        src={bodyImage}
        alt="Body"
        className="dog-part absolute top-[100px] left-[85px]"
        width={304}
        height={166}
      />
      <Image
        ref={earRef}
        src={earImage}
        alt="Ear"
        className="dog-part absolute top-[20px] left-[180px]"
        width={74}
        height={113}
      />
      <Image
        ref={earRightRef}
        src={earImageRight}
        alt="EarRight"
        className="dog-part absolute top-[-7px] left-[103px]"
        width={68}
        height={32}
      />
      <Image
        ref={jawRef}
        src={jawImage}
        alt="Jaw"
        className="dog-part absolute top-[75px] left-[90px]"
        width={81}
        height={29}
      />

      { showHearts && (
      <>
        <Image
          ref={heartRef}
          src={heartImage}
          alt="heart"
          className="dog-part absolute top-[0px] left-[-30px]"
          width={48}
          height={48}
        />
        <Image
          ref={heartRef2}
          src={heartImage}
          alt="heart"
          className="dog-part absolute top-[50px] left-[-30px]"
          width={36}
          height={36}
        />
      </>
      )}

      { showBall && (
        <Image
          ref={ballRef}
          src={ballImage}
          alt="Ball"
          className="dog-part absolute top-[220px] left-[-150px]"
          width={119}
          height={119}
        />
      )}

      { showVesse && ( 
        <Image
          src={vesselImage}
          alt="heart"
          className="dog-part absolute top-[250px] left-[-120px]"
          width={136}
          height={81}
        />
      )}

      { showNotes && ( 
      <>
        <Image
          ref={yellowNoteRef}
          src={yellowNoteImage}
          alt="yellow-note"
          className="dog-part absolute top-[0px] left-[-30px]"
          width={48}
          height={48}
        />
        <Image
          ref={blueNoteRef}
          src={blueNoteImage}
          alt="blue-note"
          className="dog-part absolute top-[50px] left-[-30px]"
          width={36}
          height={36}
        />
      </>
      )}

      { currentAnimation === 'unhappyOrHungry' && ( 
        <>
          <Image
            ref={donyoriRef}
            src={donyoriImage}
            alt="donyori"
            className="dog-part absolute top-[-20px] left-[0px]"
            width={48}
            height={48}
          />
          <Image
            ref={donyori2Ref}
            src={donyori2Image}
            alt="donyori2"
            className="dog-part absolute top-[80px] left-[250px]"
            width={36}
            height={36}
          />
          <Image
            ref={guruguruRef}
            src={guruguruImage}
            alt="guruguru"
            className="dog-part absolute top-[-20px] left-[270px]"
            width={36}
            height={36}
          />
        </>
      )}
    </>
  )
}

export default DogParts;