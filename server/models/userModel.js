const dbConnector = require('../config/dbConnector');

// email(id)가 있는지 확인하는 함수
async function findUserByEmail(email) {
  const connection = await dbConnector.dbConnect();
  try {
    const result = await connection.execute('SELECT * FROM T_USER WHERE USER_ID = :email', [email]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

// 회원가입 함수
async function createUser(userData) {
  const { email, hashedPassword, name, nick, gender, birth } = userData;
  const connection = await dbConnector.dbConnect();
  try {
    await connection.execute(
      `INSERT INTO T_USER (USER_ID, USER_PW, USER_SALT, USER_NAME, USER_NICK, USER_GENDER, USER_BIRTH, USER_JOINDATE)
       VALUES (:email, :hashedPassword, :hashedPassword, :name, :nick, :gender, TO_DATE(:birth, 'YYYY-MM-DD'), SYSDATE)`,
      [email, hashedPassword, hashedPassword, name, nick, gender, birth],
      { autoCommit: true },
    );
  } finally {
    await connection.close();
  }
}

// 패스워드 해시 체크 함수를 위해 패스워드를 불러오는 함수
async function getUserPasswordByEmail(email) {
  const connection = await dbConnector.dbConnect();
  try {
    const result = await connection.execute('SELECT USER_PW FROM T_USER WHERE USER_ID = :email', [email]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

module.exports = { findUserByEmail, createUser, getUserPasswordByEmail };
