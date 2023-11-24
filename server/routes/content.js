const express = require('express');
const router = express.Router();
const { uploadS3 } = require('../services/fileService');
const { afterUploadImage } = require('../controllers/contentController');
require('dotenv').config();

// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

router.post('/upload', uploadS3.single('image'), afterUploadImage);

module.exports = router;
