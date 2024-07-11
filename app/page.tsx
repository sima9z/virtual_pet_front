"use client";

import React from 'react';
import DogWalkAnimation from './components/DogWalkAnimation';
import DogSitAnimation from './components/DogSitAnimation';
import DogStandAnimation from './components/DogStandAnimation';
// import DogRandomAnimation from './components/dogRandomAnimation';
import DogAnimation from './components/DogAnimation';

export default function Home() {
  return (
    <div>
      <DogAnimation/>
    </div>
  );
}
