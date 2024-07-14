"use client";

import React from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import BackgroundImage from "../components/atoms/BackgroundImage"

export default function Main() {
  return (
    <div className="flex justify-center items-end h-[93vh]">
      <DogAnimation/>
      <BackgroundImage src='/ばーちゃるぺっと背景.jpg' /> 
    </div>
  );
}