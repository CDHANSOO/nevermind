const express = require('express');
const multer = require('multer');
const router = express.Router();

/**
 * 라우트 매개변수
 * :id를 넣으면 req.params.id로 받을 수 있음
 * querystring = req.query
 */

// 이미지 업로드를 가능하게 해주는 미들웨어
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// get / 라우터
// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!
router.get('/', (req, res) => {
    // 개인의 저장공간
    req.session.id = 'hello';
    res.json({ hello: 'Hansu' });
});

// 이미지 업로드 미들웨어
// upload.single (1개), upload.array(하나의 form에 여러개 파일), upload.fields(업로드하는 곳이 여러개)
// upload.none(이미지는 없지만 enctype이 multipart/form-data일 때)
router.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, './multipart.html'));
});
router.post('/upload', upload.fields([{ name: 'image1' }, { name: 'image2' }]), (req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
});

router.get('/abc', (req, res) => {
    res.send('Hello, Express');

    // res.writeHead(200 , {}) 응답하고 writeHead 해도 오류!!!
});

router.get('/', (req, res) => {
    res.json({ hello: 'Hansu' });
    // res.json은 return이 아니다 => 아래 콘솔도 실행됨!!
    console.log('hello hansu');
});

module.exports = router;
