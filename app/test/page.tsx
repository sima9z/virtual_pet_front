"use client"

import React from 'react';
import TestUserIdFetch from '../api/TestUserIdFetch';

import CatWalkAnimation from '../components/CatWalkAnimation';

const TestPage = () => {
  return (
    <div>
      <h1>Test User ID Fetch</h1>
      <TestUserIdFetch />
      <CatWalkAnimation></CatWalkAnimation>
    </div>
  );
};

export default TestPage;