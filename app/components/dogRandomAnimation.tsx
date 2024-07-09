// import React, { useState, useEffect, ReactElement } from 'react';
// import DogSitAnimation from './dogSitAnimation';
// import DogWalkAnimation from './dogWalkAnimation';

// const DogRandomAnimation = () => {
//   const [animation, setAnimation] = useState<ReactElement | null>(null);
//   const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const animations = [
//       () => <DogSitAnimation position={position} setPosition={setPosition} onAnimationEnd={handleAnimationEnd} />, 
//       () => <DogWalkAnimation position={position} setPosition={setPosition} onAnimationEnd={handleAnimationEnd} />
//     ];
    
//     const intervalId = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * animations.length);
//       setAnimation(animations[randomIndex]());
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [position]);

//   const handleAnimationEnd = () => {
//     setPosition((prevPosition) => prevPosition + 100); // 例えば、100px移動させる
//   };

//   return (
//     <div>
//       {animation}
//     </div>
//   );
// };

// export default DogRandomAnimation;