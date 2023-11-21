const express = require('express');
const multer = require('multer');
const router = express.Router();
const dbConnector = require('../config/dbConnector');
const path = require('path');
const bcrypt = require('bcrypt');
/**
 * 라우트 매개변수
 * :id를 넣으면 req.params.id로 받을 수 있음
 * querystring = req.query
 */

async function login(req, res) {
  let connection;
  try {
    const connection = await dbConnector.dbConnect();
    let { email, password } = req.body;
    // 데이터베이스 작업 수행...
    // 로그인 로직
    // DB에 아이디가 존재하는지 확인
    const result = await connection.execute(`SELECT USER_PW FROM T_USER WHERE USER_ID = :email`, [email]);

    console.log('쿼리 결과:', result.rows[0]);
    console.log(req.body);

    // 회원가입 로직
    if (result.rows.length === 0) {
      console.log('if 문 실행');
      res.json({ login: false, message: '존재하지 않는 아이디입니다.' }); // 사용자가 존재하지 않음
    } else {
      // 사용자가 존재하는 경우 비밀번호 확인
      const hashedPassword = result.rows[0][0];
      console.log(hashedPassword);
      const validPassword = await bcrypt.compare(password, hashedPassword);
      if (validPassword) {
        // 비밀번호 일치
        console.log('로그인 성공');
        res.json({ login: true, message: '로그인에 성공하였습니다' });
      } else {
        // 비밀번호 불일치
        console.log('비밀번호가 일치하지 않습니다.');
        res.json({ login: false, message: '비밀번호가 일치하지 않습니다' });
      }
    }
  } catch (err) {
    // error check
    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류');
  } finally {
    // 작업이 끝난 후 연결을 종료
    if (connection) {
      await connection.close();
      console.log('DB 연결 종료 성공!');
    }
  }
}
// get / 라우터
// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

// post 라우터
router.post('/', async (req, res) => {
  console.log(req.body);
  await login(req, res);
});

module.exports = router;
