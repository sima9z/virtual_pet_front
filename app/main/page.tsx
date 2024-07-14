"use client";

import React from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import BackgroundImage from "../components/atoms/BackgroundImage"

export default function Main() {
  return (
    <div className="parent-container">
      <DogAnimation/>
      <BackgroundImage src='/ばーちゃるぺっと背景.jpg' /> 
    </div>
  );
}