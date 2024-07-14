import React from 'react';

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[93vh] z-[-1]">
      <img src={src} alt="background" className="w-full h-full object-cover" />
    </div>
  );
};

export default React.memo(BackgroundImage);