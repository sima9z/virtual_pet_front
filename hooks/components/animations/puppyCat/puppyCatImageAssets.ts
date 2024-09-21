const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
const region = process.env.NEXT_PUBLIC_AWS_REGION;

const legImageBackRight = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫奥後足.png`;
const legImageFrontRight = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫奥前足.png`;
const legImageFrontLeft = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫手前前足.png`;
const legImageBackLeft = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫手間後ろ足.png`;
const tailImage = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫尻尾.png`;
const faceImage = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫顔.png`;
const bodyImage = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫胴体.png`;
const earImage = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫耳.png`;
const beardImageRight = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫右ひげ.png`;
const beardImageLeft = `https://${bucketName}.s3.${region}.amazonaws.com/三毛猫/三毛猫左ひげ.png`;

export const puppyCatImageAssets = {
  legImageBackRight,
  legImageFrontRight,
  legImageFrontLeft,
  legImageBackLeft,
  tailImage,
  faceImage,
  bodyImage,
  earImage,
  beardImageRight,
  beardImageLeft
}