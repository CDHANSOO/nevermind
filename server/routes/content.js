const express = require('express');
const multer = require('multer');
const router = express.Router();
const dbConnector = require('../config/dbConnector');
const path = require('path');
const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
require('dotenv').config();
/**
 * 라우트 매개변수
 * :id를 넣으면 req.params.id로 받을 수 있음
 * querystring = req.query
 */

//이미지 업로드를 가능하게 해주는 미들웨어
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

// AWS S3 세팅
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
  region: 'ap-northeast-2',
});

// S3에 이미지 업로드를 가능하게 해주는 미들웨어
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'nevermind',
    key(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, `original/${Date.now()}_${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

async function main() {
  try {
    const connection = await dbConnector.dbConnect();

    // 여기서 데이터베이스 작업 수행
    // 간단한 SELECT 쿼리 실행
    const result = await connection.execute('SELECT * FROM T_CLOTHE');

    // 쿼리 결과 출력
    console.log('쿼리 결과:', result.rows[0]);

    // 작업이 끝난 후 연결을 종료
    await connection.close();
    console.log('DB 연결 종료 성공!');
  } catch (err) {
    console.error('오류 발생:', err.message);
  }
}

// upload한 이미지의 정보를 프론트로 다시 보내주는 함수
const afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `img${req.file.filename}` });
};

// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

// 이미지 업로드 미들웨어
// upload.single (1개), upload.array(하나의 form에 여러개 파일), upload.fields(업로드하는 곳이 여러개)
// upload.none(이미지는 없지만 enctype이 multipart/form-data일 때)

// router.post('/', upload.fields([{ name: 'image1' }, { name: 'image2' }]), (req, res) => {
//   console.log(req.files, req.body);
//   res.send(alert('사진을 올리는데 성공하셨습니다!'));
// });

router.post('/', uploadS3.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('파일이 업로드되지 않았습니다.');
  }

  // 파일이 S3에 업로드되었으므로 URL이나 다른 정보를 돌려보낼 수 있습니다
  res.json({ message: '파일이 성공적으로 업로드되었습니다.', url: req.file.location });
  console.log('S3 upload 성공');
});

module.exports = router;
