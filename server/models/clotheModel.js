const dbConnector = require('../config/dbConnector');

// 검색으로 style 찾는 코드 {작성자 : '이한수'}
async function getStylesBySearch(search) {
  const connection = await dbConnector.dbConnect();
  try {
    const query = 'SELECT STYLE_IDS, STYLE_URL FROM T_STYLE WHERE STYLE_CMT LIKE :search OR STYLE_TAG LIKE :search';
    const result = await connection.execute(query, { search: '%' + search + '%' }, [search, search]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

async function getStylesById(id) {
  const connection = await dbConnector.dbConnect();
  try {
    const query = 'SELECT STYLE_IDS, STYLE_URL FROM T_STYLE WHERE STYLE_ID = :id';
    const result = await connection.execute(query, { id: id }, [id]);
    console.log('getStylesById 결과:', result.rows);
    return result.rows;
  } catch (error) {
    console.error('id 스타일로 찾는 거 ', error.message);
  } finally {
    await connection.close();
  }
}

async function getClotheById(item) {
  const connection = await dbConnector.dbConnect();
  try {
    const query = 'SELECT * FROM T_CLOTHE WHERE CLOTHE_ID = :item';
    const result = await connection.execute(query, [item]);
    return result.rows;
  } finally {
    await connection.close();
  }
}

module.exports = { getStylesBySearch, getClotheById, getStylesById };
