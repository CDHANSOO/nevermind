const express = require('express');
const router = express.Router();
const dbConnector = require('../config/dbConnector');

// Get/ user 라우터
// /user

router.get('/', (req, res) => {
    res.send('Hello , User');
});


module.exports = router;
