const express = require('express');
const router = express.Router();
const clotheService = require('../services/clotheService');

// get / 라우터
// 라우터들
// 주의점 : 한 라우터에 res.send or res.json같은게 2번이상 나와선 안된다. 한번씩만!!!

// post 라우터
router.post('/', async (req, res) => {
  try {
    const { search } = req.body;
    console.log(req.body);
    const result = await clotheService.findStylesAndClothes(search);

    if (result) {
      res.json({ clotheInfo: result.clothes, styleInfo: result.styleUrl });
    } else {
      res.json({ message: '현재 코디의 모든 상품이 품절입니다!' });
    }
  } catch (err) {
    console.error('오류 발생:', err.message);
    res.status(500).send('서버 오류 발생');
  }
});

module.exports = router;
