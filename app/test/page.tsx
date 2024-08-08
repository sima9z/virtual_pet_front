"use client"

import React from 'react';
import TestUserIdFetch from '../api/TestUserIdFetch';

import CatWalkAnimation from '../components/CatWalkAnimation';
import DogAnimation from '../components/DogAnimation';

const TestPage = () => {
  return (
    <div>
      <h1>Test User ID Fetch</h1>
      <TestUserIdFetch />
      <DogAnimation></DogAnimation>
    </div>
  );
};

export default TestPage;