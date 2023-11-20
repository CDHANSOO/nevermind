const express = require('express');
const multer = require('multer');
const router = express.Router();
const dbConnector = require('../config/dbConnector');
const path = require('path');
/**
 * 라우트 매개변수
 * :id를 넣으면 req.params.id로 받을 수 있음
 * querystring = req.query
 */

async function login(req, res) {
  try {
    const connection = await dbConnector.dbConnect();
    let { email, password } = req.body;
    // 데이터베이스 작업 수행...
    // 로그인 로직
    // DB에 아이디가 존재하는지 확인
    const result = await connection.execute(`SELECT * FROM T_USER WHERE USER_ID = :email and USER_PW = :password`, [email, password]);

    console.log('쿼리 결과:', result.rows[0]);
    console.log(req.body);

    // 회원가입 로직
    if (result.rows.length === 0) {
      console.log('if 문 실행');
      res.json({ login: false });
    } else {
      // 로그인 성공
      console.log('로그인 성공');
      res.json({ login: true });
    }
  } catch (err) {
    // 작업이 끝난 후 연결을 종료

    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류');
  } finally {
    await connection.close();
    console.log('DB 연결 종료 성공!');
  }
}
// get / 라우터
// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

router.get('/', (req, res) => {
  res.json({ hello: 'Hansu' });
  // res.json은 return이 아니다 => 아래 콘솔도 실행됨!!
  console.log('hello hansu');
});

module.exports = router;
