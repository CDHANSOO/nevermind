const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

async function registerUser(reqBody) {
  let { email, password, name, nick, birth, gender, passwordCheck } = reqBody;

  // 비밀번호 체크
  if (password !== passwordCheck) {
    return { checkPassword: false };
  }

  // DB에 아이디가 이미 존재하는지 확인
  const existingUser = await userModel.findUserByEmail(email);
  if (existingUser.length > 0) {
    return { id_duplication: true };
  } else {
    // 비밀번호 해시 생성
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 회원가입 데이터베이스 로직
    await userModel.createUser({
      email,
      hashedPassword,
      name,
      nick,
      gender,
      birth,
    });

    return { registered: true };
  }
}

module.exports = { registerUser };
