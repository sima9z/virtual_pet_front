import React from 'react';
import Image from 'next/image';

import { BackgroundImageProps } from '../../types/index'

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Image
        src={src}
        alt="background"
        layout="fill" // 画像をコンテナ全体に広げる
        objectFit="cover" // 画像をコンテナ全体に収める
        priority={true} // ページの初回読み込み時に優先して読み込む
        quality={100} // 画像の品質を指定（オプション）
      />
    </div>
  );
};

export default React.memo(BackgroundImage);