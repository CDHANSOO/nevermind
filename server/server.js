const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer')
const fs = require('fs')


dotenv.config()
const app = express()

// process.env => 현재 port 아니면 3000
app.set('port', process.env.PORT || 3000);

// 공통 미들웨어

// 클라이언트에 온 요청, 응답을 서버에 기록해주는 미들웨어
app.use(morgan('dev')) // 개발시엔 dev, 배포시엔 combined

// 정적인 파일들을 제공하는 라우터 (public)folder에 넣고 정적 파일들을 불러오자! 요청경로 ,실제경로
app.use('/', express.static(path.join(__dirname, 'public'))) // 끝

// 요청에 동봉된 쿠키를 req.cookies 객체로 만들어줌 
// 생성 res.cookie(키, 값, 옵션) , 제거 res.clearCookie
app.use(cookieParser('process.env.COOKIE_SECRET'))
// json 읽어오기.
app.use(express.json())
// form submit할때 parsing해줌 
app.use(express.urlencoded({extended : true}))
// session 설정
app.use(session({
    resave : false, // 세션에 수정사항이 없어도 저장할거야?
    saveUninitialized : false , // 세션에 저장할 내역이 없어도 생성할거야?
    secret : 'process.env.COOKIE_SECRET',
    cookie :{
        httpOnly : true, 
        secure : false,
    },
    name : 'session-cookie'
}))

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


app.use((req, res, next)=>{
    console.log('요청에 실행하고 싶어요');
    next();
}, (req, res, next)=>{
    try{
        
        console.log('nevermind');
        next()
    } catch(error){
        // error 처리 미들웨어로 error 옮겨주기
        next(error);
    }
})

// multer로 받아온 이미지를 업로드할 폴더 
try{
    fs.readdirSync('uploads');
} catch(error){
    console.error('uploads 폴더가 없어서 생성합니다')
    fs.mkdirSync('uploads')
}

// 이미지 업로드를 가능하게 해주는 툴
const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/')
        } , 
        filename(req, file, done){
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext)
        },
    }),
    limits : {fileSize : 5 * 1024 * 1024}
})

// 미들웨어간 data를 전송하고 싶을 땐 => res.locals.data

// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!
app.get('/', (req, res) => {

    // 개인의 저장공간
    req.session.id = 'hello'
    res.json({ hello : 'Hansu'});
 
});

// 이미지 업로드 미들웨어
// upload.single (1개), upload.array(하나의 form에 여러개 파일), upload.fields(업로드하는 곳이 여러개)
// upload.none(이미지는 없지만 enctype이 multipart/form-data일 때)
app.get('/upload', (req,res)=>{
    res.sendFile(path.join(__dirname, './multipart.html'))
})
app.post('/upload', upload.fields([{name : 'image1'}, {name : 'image2'}]), (req, res)=>{
    console.log(req.files , req.body);
    res.send('ok')
})

app.get('/abc', (req, res) => {
    res.send('Hello, Express');

    // res.writeHead(200 , {}) 응답하고 writeHead 해도 오류!!!

});

app.get('/', (req, res) => {

    res.json({ hello : 'Hansu'});
    // res.json은 return이 아니다 => 아래 콘솔도 실행됨!!
    console.log('hello hansu');
});





// 404 처리 미들 웨어 
app.use((req, res, next)=>{
    res.send('404 지롱~!')
    next();
})


// error 미들 웨어 
app.use((err, req, res, next)=>{
    console.error(err);
    res.send('error가 발생했다!!!!!')
})




app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});

