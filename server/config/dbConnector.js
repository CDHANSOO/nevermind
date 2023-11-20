// dbConnector.js

const oracledb = require('oracledb');
const dbConfig = require('./oracle'); // 실제 db 연결 설정 파일

oracledb.autoCommit = true;

const init = () => {
  oracledb.initOracleClient({ libDir: `C:\\oracle\\instantclient_21_12` });
};
async function dbConnect() {
  init();
  try {
    const connection = await oracledb.getConnection({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
      externalAuth: false,
    });
    console.log('DB 연동 성공!');
    return connection;
  } catch (err) {
    console.error('DB 연동 실패:', err.message);
    throw err; // 오류를 상위 호출자에게 전파
  }
}

module.exports = { dbConnect };
