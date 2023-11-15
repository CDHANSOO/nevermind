const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config()
const app = express()

// process.env => 현재 port 아니면 3000
app.set('port', process.env.PORT || 3000);

// 공통 미들웨어
app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    resave : false,
    saveUninitialized : false ,
    secret : 'process.env.COOKIE_SECRET',
    cookie :{
        httpOnly : true, 
        secure : false,
    },
    name : 'session-cookie'
}))

// 404 처리 미들 웨어 
app.use((req, res, next)=>{
    res.send('404 지롱~!')
    next();
})


// error 미들 웨어 
app.use((err, req, res, next)=>{
    console.log('모든 요청에 다 실행됩니다');
    next();
})


// 라우터들
app.get('/abc', (req, res) => {
    res.send('Hello, Express');

});




app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});

