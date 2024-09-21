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

export const puppyDogImageAssets = {
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
  jawImage
}