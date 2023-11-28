const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const path = require('path');
require('dotenv').config();

// s3 설정
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
  region: 'ap-northeast-2',
});

// 이미지를 로컬에 업로드하는 미들웨어
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 이미지를 AWS S3에 업로드하는 함수
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'nevermind',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, `original/${Date.now()}_${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = {
  upload,
  uploadS3,
};
