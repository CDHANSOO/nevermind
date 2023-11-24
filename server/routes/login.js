const express = require('express');
const router = express.Router();
const loginService = require('../services/loginService');

// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

// post 라우터
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.loginUser(email, password);
    res.json(result);
  } catch (err) {
    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류');
  }
});

module.exports = router;
