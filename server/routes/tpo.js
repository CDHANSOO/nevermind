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

async function tpo() {
  try {
    const connection = await dbConnector.dbConnect();
    let { tpo, message } = req.body;
    // 여기서 데이터베이스 작업 수행

    // 유저가 보낸 자연어(message)를 우선 필터링해오는 기능
    const result = await connection.execute('SELECT STYLE_IDS FROM T_STYLE WHERE STYLE_CMT LIKE %:message% or STYLE_TAG LIKE %:message%', [message, message]);

    // 쿼리 결과 출력
    console.log('쿼리 결과:', result.rows[0]);

    let selectedStyle = result.rows[0][0];
    console.log(selectedStyle);

    let ids = selectedStyle.split(',');
    console.log(ids);
    selectedItem = [];
    ids.map(item => {
      let clotheResult = connection.execute(`SELECT * FROM T_CLOTHE WHERE CLOTHE_ID = :item`, [item]);
      selectedItem.push(clotheResult.rows[0]);
    });
    res.json({ clotheInfo: selectedItem });
    // 작업이 끝난 후 연결을 종료
    await connection.close();
    console.log('DB 연결 종료 성공!');
  } catch (err) {
    console.error('오류 발생:', err.message);
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
