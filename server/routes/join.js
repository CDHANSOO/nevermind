const express = require('express');
const router = express.Router();
const dbConnector = require('../config/dbConnector');
const joinService = require('../services/joinService');

// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

router.post('/', async (req, res) => {
  try {
    const result = await joinService.registerUser(req.body);
    if (result.checkPassword === false) {
      res.json({ message: '비밀번호가 일치하지 않습니다' });
    } else if (result.id_duplication) {
      res.json({ message: '이미 존재하는 이메일입니다' });
    } else if (result.registered) {
      res.json({ message: '회원가입 성공' });
    }
  } catch (err) {
    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류');
  }
});

module.exports = router;
