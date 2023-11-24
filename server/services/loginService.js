const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

// 로그인 함수
async function loginUser(email, password) {
  const userRows = await userModel.getUserPasswordByEmail(email);
  if (userRows.length === 0) {
    return { login: false, message: '존재하지 않는 아이디입니다.' };
  } else {
    const hashedPassword = userRows[0][0];
    const validPassword = await bcrypt.compare(password, hashedPassword);
    if (validPassword) {
      return { login: true, message: '로그인에 성공하였습니다' };
    } else {
      return { login: false, message: '비밀번호가 일치하지 않습니다' };
    }
  }
}

module.exports = { loginUser };
