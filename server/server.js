const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const joinRouter = require('./routes/join');
const loginRouter = require('./routes/login');
const styleRouter = require('./routes/style');
const tpoRouter = require('./routes/tpo');
const contentsRouter = require('./routes/content');

// 공통 미들웨어

// 동적요청에 대한 응답을 보낼때 etag 를 생성하지 않도록
app.set('etag', false);

// 정적요청에 대한 응답을 보낼때 etag 생성을 하지 않도록
const options = { etag: false };

// process.env => 현재 port 아니면 3000
app.set('port', process.env.PORT || 3000);

// 클라이언트에 온 요청, 응답을 서버에 기록해주는 미들웨어
app.use(morgan('dev')); // 개발시엔 dev, 배포시엔 combined

// 정적인 파일들을 제공하는 라우터 (public)folder에 넣고 정적 파일들을 불러오자! 요청경로 ,실제경로
app.use('/', express.static(path.join(__dirname, 'dist'))); // 끝
//app.use('/', express.static(path.join(__dirname, 'compiledComponent')));

// cors 에러 처리 미들웨어

const whiteList = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000', 'http://127.0.0.1:5000']; // 허용 url 리스트
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false); // CORS 거부
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// 요청에 동봉된 쿠키를 req.cookies 객체로 만들어줌
// 생성 res.cookie(키, 값, 옵션) , 제거 res.clearCookie
app.use(cookieParser(process.env.COOKIE_SECRET));
// json 읽어오기.
app.use(express.json());
// form submit할때 parsing해줌
app.use(express.urlencoded({ extended: true }));
// session 설정

app.use(
  session({
    resave: false, // 세션에 수정사항이 없어도 저장할거야?
    saveUninitialized: false, // 세션에 저장할 내역이 없어도 생성할거야?
    secret: 'process.env.COOKIE_SECRET',
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  }),
);

/** 미들웨어 확장할 때
    app.use('/', (req, res, next) => {
        로그인시에만 정적인 파일 보여주기! 
        if(req.session.id){
            express.static(__dirname , 'public')(req,res,next)
        }
        else{
            next();
        }
    })
 */

// index.js

app.use(
  (req, res, next) => {
    console.log('요청에 실행하고 싶어요');
    next();
  },
  (req, res, next) => {
    try {
      console.log('nevermind');
      next();
    } catch (error) {
      // error 처리 미들웨어로 error 옮겨주기
      next(error);
    }
  },
);

// multer로 받아온 이미지를 업로드할 폴더
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어서 생성합니다');
  fs.mkdirSync('uploads');
}

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

// 미들웨어간 data를 전송하고 싶을 땐 => res.locals.data

// 인덱스 라우터 처리
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/join', joinRouter);
app.use('/login', loginRouter);
app.use('/style', styleRouter);
app.use('/content', contentsRouter);
app.use('/tpo', tpoRouter);

// 404 처리 미들 웨어
app.use((req, res, next) => {
  res.status(404).send('Not Found');
  next();
});

// error 미들 웨어
// 첫 번째 에러 처리 미들웨어에서 바로 처리
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('에러가 발생했다!!!!!');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
