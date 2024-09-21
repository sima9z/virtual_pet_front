const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
const region = process.env.NEXT_PUBLIC_AWS_REGION;

const legImageBackRight = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス奥後ろ足.png`;
const legImageFrontRight = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス奥前足2.png`;
const legImageFrontLeft = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス前足.png`;
const legImageBackLeft = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス後ろ足.png`;
const tailImage = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス尻尾.png`;
const headImageFace = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス顔.png`;
const headImageEye = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス目.png`;
const bodyImage = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス胴体.png`;
const earImage = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス耳.png`;
const earImageRight = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス奥耳.png`;
const jawImage = `https://${bucketName}.s3.${region}.amazonaws.com/ダックス/ダックス顎.png`;

const heartImage = `https://${bucketName}.s3.${region}.amazonaws.com/ハートマーク.png`;
const vesselImage = `https://${bucketName}.s3.${region}.amazonaws.com/容器.png`;
const ballImage = `https://${bucketName}.s3.${region}.amazonaws.com/ボール.png`;

const yellowNoteImage = `https://${bucketName}.s3.${region}.amazonaws.com/音符（黄色）.png`;
const blueNoteImage = `https://${bucketName}.s3.${region}.amazonaws.com/音符（青）.png`;

const donyoriImage = `https://${bucketName}.s3.${region}.amazonaws.com/どんより1.png`;
const donyori2Image = `https://${bucketName}.s3.${region}.amazonaws.com/どんより2.png`;
const guruguruImage = `https://${bucketName}.s3.${region}.amazonaws.com/ぐるぐる.png`;

export const dogImageAssets = {
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
};