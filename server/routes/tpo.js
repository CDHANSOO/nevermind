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

async function tpo(req, res) {
  try {
    const connection = await dbConnector.dbConnect();
    let { search } = req.body;
    // 여기서 데이터베이스 작업 수행

    // 유저가 보낸 자연어(message)를 우선 필터링해오는 기능
    const result = await connection.execute('SELECT STYLE_IDS, STYLE_URL FROM T_STYLE WHERE STYLE_CMT LIKE :search OR STYLE_TAG LIKE :search', { search: '%' + search + '%' }, [search, search]);
    // 쿼리 결과 출력
    console.log('쿼리 결과:', result.rows[0]);

    if (result.rows.length > 0) {
      // 무작위 인덱스 생성
      const randomIndex = parseInt(Math.random() * result.rows.length);
      const selectedRow = result.rows[randomIndex];

      let selectedStyleIds = selectedRow[0]; // 스타일 ID
      let selectedStyleUrl = selectedRow[1]; // 스타일 URL

      console.log('선택된 스타일 ID:', selectedStyleIds);
      console.log('선택된 스타일 URL:', selectedStyleUrl);
      let ids = selectedStyleIds.split(',');
      console.log(ids);
      selectedItem = [];
      // 각 ID에 대해 옷 정보 검색
      for (let item of ids) {
        let clotheResult = await connection.execute('SELECT * FROM T_CLOTHE WHERE CLOTHE_ID = :item', [item]);
        if (clotheResult.rows.length > 0) {
          selectedItem.push(clotheResult.rows[0]);
        } else {
          console.log('ID ' + item + '에 해당하는 옷 정보가 없습니다.');
        }
      }

      res.json({ clotheInfo: selectedItem, styleInfo: selectedStyleUrl });
      console.log('옷 정보들', selectedItem);
    } else {
      console.log('검색 결과가 없습니다.');
    }
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

// post 라우터
router.post('/', async (req, res) => {
  console.log(req.body);
  await tpo(req, res);
});

// router.post('/tpo', (req, res) => {
//   // POST 요청 처리 로직
//   res.json({ message: 'POST 요청 처리' });
// });

module.exports = router;
