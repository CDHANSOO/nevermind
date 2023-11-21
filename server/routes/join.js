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

// 회원가입 함수
async function join(req, res) {
  try {
    const connection = await dbConnector.dbConnect();
    let { email, password, name, nick, birth, gender, passwordCheck } = req.body;
    // 비밀번호 체크
    if (password !== passwordCheck) {
      console.log('비밀번호가 일치하지 않습니다');
      res.json({ checkPassword: false });
      return;
    }
    // 데이터베이스 작업 수행...
    // 회원가입 로직...
    // DB에 아이디가 이미 존재하는지 확인
    const result = await connection.execute(`SELECT * FROM T_USER WHERE USER_ID = :email`, [email]);

    console.log('쿼리 결과:', result.rows[0]);
    console.log(req.body);

    // 회원가입 로직
    if (result.rows.length > 0) {
      console.log('if 문 실행');
      res.json({ id_duplication: true });
    } else {
      console.log('else문 실행');
      // 비밀번호 해시 생성
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // 회원가입 로직 (바인드 변수 사용)
      await connection.execute(
        `INSERT INTO T_USER (
            USER_ID, USER_PW, USER_SALT, USER_NAME, USER_NICK, USER_GENDER, USER_BIRTH, USER_JOINDATE
           ) VALUES (
            :email, :hashedPassword, :hashedPassword, :name, :nick, :gender, TO_DATE(:birth, 'YYYY-MM-DD'),  SYSDATE
           ) 
           `,
        [email, hashedPassword, hashedPassword, name, nick, gender, birth],
        { autoCommit: true },
      );
      console.log('회원가입 성공');
      res.json({ registered: true }); // 회원가입 성공!
    }

    // 작업이 끝난 후 연결을 종료
    await connection.close();
    console.log('DB 연결 종료 성공!');
  } catch (err) {
    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류');
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

router.post('/', async (req, res) => {
  console.log(req.body);
  await join(req, res);
});

module.exports = router;
